# Communication Between Nodes

Move requests efficiently and safely between cluster nodes.

```mermaid
flowchart LR
    S[Single-Socket Channel] --> B[Request Batch]
    B --> P[Request Pipeline]
```

## Patterns

- [Single-Socket Channel](01-single-socket-channel.md)
- [Request Batch](02-request-batch.md)
- [Request Pipeline](03-request-pipeline.md)

## Interview trigger

Use this section when the design has high network overhead, ordered replication streams, batching, in-flight requests, or round-trip latency problems.
