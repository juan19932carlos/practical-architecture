import { expect, test } from "vitest";
import { Batch, OrderLine } from "./model";

function makeBatchAndLine(
  sku: string,
  batchQty: number,
  lineQty: number,
): [Batch, OrderLine] {
  return [
    new Batch("batch-001", sku, { qty: batchQty, eta: new Date() }),
    new OrderLine("order-123", sku, lineQty),
  ];
}

test("allocating to a batch reduces the available quantity", () => {
  const batch = new Batch("batch-001", "SMALL-TABLE", {
    qty: 20,
    eta: new Date(),
  });
  const line = new OrderLine("order-ref", "SMALL-TABLE", 2);

  batch.allocate(line);

  expect(batch.availableQuantity).toBe(18);
});

test("can allocate if available greater than required", () => {
  const [largeBatch, smallLine] = makeBatchAndLine("ELEGANT-LAMP", 20, 2);
  expect(largeBatch.canAllocate(smallLine)).toBe(true);
});

test("cannot allocate if available smaller than required", () => {
  const [smallBatch, largeLine] = makeBatchAndLine("ELEGANT-LAMP", 2, 20);
  expect(smallBatch.canAllocate(largeLine)).toBe(false);
});

test("can allocate if available equal to required", () => {
  const [batch, line] = makeBatchAndLine("ELEGANT-LAMP", 2, 2);
  expect(batch.canAllocate(line)).toBe(true);
});

test("cannot allocate if skus do not match", () => {
  const batch = new Batch("batch-001", "UNCOMFORTABLE-CHAIR", {
    qty: 100,
    eta: null,
  });
  const differentSkuLine = new OrderLine("order-123", "EXPENSIVE-TOASTER", 10);
  expect(batch.canAllocate(differentSkuLine)).toBe(false);
});
