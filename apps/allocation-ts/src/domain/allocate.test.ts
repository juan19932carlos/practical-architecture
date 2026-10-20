import { expect, test } from "vitest";
import { allocate, Batch, OrderLine, OutOfStock } from "./model";

const dayInMs = 24 * 60 * 60 * 1000;
const today = new Date();
const tomorrow = new Date(today.getTime() + dayInMs);
const later = new Date(tomorrow.getTime() + 10 * dayInMs);

test("prefers current stock batches to shipments", () => {
  const inStockBatch = new Batch("in-stock-batch", "RETRO-CLOCK", {
    qty: 100,
    eta: null,
  });
  const shipmentBatch = new Batch("shipment-batch", "RETRO-CLOCK", {
    qty: 100,
    eta: tomorrow,
  });
  const line = new OrderLine("oref", "RETRO-CLOCK", 10);

  allocate(line, [inStockBatch, shipmentBatch]);

  expect(inStockBatch.availableQuantity).toBe(90);
  expect(shipmentBatch.availableQuantity).toBe(100);
});

test("prefers earlier batches", () => {
  const earliest = new Batch("speedy-batch", "MINIMALIST-SPOON", {
    qty: 100,
    eta: today,
  });
  const medium = new Batch("normal-batch", "MINIMALIST-SPOON", {
    qty: 100,
    eta: tomorrow,
  });
  const latest = new Batch("slow-batch", "MINIMALIST-SPOON", {
    qty: 100,
    eta: later,
  });
  const line = new OrderLine("order1", "MINIMALIST-SPOON", 10);

  allocate(line, [medium, earliest, latest]);

  expect(earliest.availableQuantity).toBe(90);
  expect(medium.availableQuantity).toBe(100);
  expect(latest.availableQuantity).toBe(100);
});

test("returns allocated batch ref", () => {
  const inStockBatch = new Batch("in-stock-batch-ref", "HIGHBROW-POSTER", {
    qty: 100,
    eta: null,
  });
  const shipmentBatch = new Batch("shipment-batch-ref", "HIGHBROW-POSTER", {
    qty: 100,
    eta: tomorrow,
  });
  const line = new OrderLine("oref", "HIGHBROW-POSTER", 10);
  const allocation = allocate(line, [inStockBatch, shipmentBatch]);
  expect(allocation).toBe(inStockBatch.reference);
});

test("raises out of stock exception if cannot allocate", () => {
  const batch = new Batch("batch1", "SMALL-FORK", { qty: 10, eta: today });
  allocate(new OrderLine("order1", "SMALL-FORK", 10), [batch]);

  let error: unknown;
  try {
    allocate(new OrderLine("order2", "SMALL-FORK", 1), [batch]);
  } catch (e) {
    error = e;
  }

  expect(error).toBeInstanceOf(OutOfStock);
  expect((error as Error).message).toContain("SMALL-FORK");
});
