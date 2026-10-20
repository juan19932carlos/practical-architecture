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
  availableQuantity: number;

  constructor(
    reference: string,
    sku: string,
    { qty, eta }: { qty: number; eta: Date | null },
  ) {
    this.reference = reference;
    this.sku = sku;
    this.eta = eta;
    this.availableQuantity = qty;
  }

  allocate(line: OrderLine): void {
    this.availableQuantity -= line.qty;
  }

  canAllocate(line: OrderLine): boolean {
    return this.sku === line.sku && this.availableQuantity >= line.qty;
  }
}
