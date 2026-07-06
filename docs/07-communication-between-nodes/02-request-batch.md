# Request Batch

> Group multiple requests into one network round trip or disk operation.

## Problem

Sending many tiny requests wastes CPU, network, syscall, and disk overhead. Per-request cost dominates useful work.

## Solution

Accumulate requests for a short time or until a size threshold, then send or process them together. Preserve per-request responses if clients need them.

## Diagram

```mermaid
flowchart TD
    R1[Request 1] --> B[Batch buffer]
    R2[Request 2] --> B
    R3[Request 3] --> B
    B --> N[One network send]
    N --> S[Server processes batch]
```

## Examples

- Kafka producer batching records.
- Database batch inserts.
- Replication sending multiple log entries at once.

## Watch outs

- Batching adds queueing latency.
- Large batches can increase tail latency and retry cost.
- Need partial failure handling.

## Related patterns

- Request Pipeline
- Single-Socket Channel
- Segmented Log
