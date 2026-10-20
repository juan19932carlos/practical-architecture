export class OrderLine {
  readonly orderid: string;
  readonly sku: string;
  readonly qty: number;

  constructor(orderid: string, sku: string, qty: number) {
    this.orderid = orderid;
    this.sku = sku;
    this.qty = qty;
    Object.freeze(this);
  }
}

export class Batch {
  readonly reference: string;
  readonly sku: string;
  readonly eta: Date | null;
  private readonly purchasedQuantity: number;
  private readonly allocations = new Set<OrderLine>();

  constructor(
    reference: string,
    sku: string,
    { qty, eta }: { qty: number; eta: Date | null },
  ) {
    this.reference = reference;
    this.sku = sku;
    this.eta = eta;
    this.purchasedQuantity = qty;
  }

  allocate(line: OrderLine): void {
    this.allocations.add(line);
  }

  deallocate(line: OrderLine): void {
    this.allocations.delete(line);
  }

  get allocatedQuantity(): number {
    let total = 0;
    for (const line of this.allocations) {
      total += line.qty;
    }
    return total;
  }

  get availableQuantity(): number {
    return this.purchasedQuantity - this.allocatedQuantity;
  }

  canAllocate(line: OrderLine): boolean {
    return this.sku === line.sku && this.availableQuantity >= line.qty;
  }

  // In-stock batches (no eta) come first, then the earliest eta.
  compareTo(other: Batch): number {
    if (this.eta === null) return other.eta === null ? 0 : -1;
    if (other.eta === null) return 1;
    return this.eta.getTime() - other.eta.getTime();
  }
}

export class OutOfStock extends Error {}

export function allocate(line: OrderLine, batches: Batch[]): string {
  const batch = [...batches]
    .sort((a, b) => a.compareTo(b))
    .find((b) => b.canAllocate(line));
  if (batch === undefined) {
    throw new OutOfStock(`Out of stock for sku ${line.sku}`);
  }
  batch.allocate(line);
  return batch.reference;
}
