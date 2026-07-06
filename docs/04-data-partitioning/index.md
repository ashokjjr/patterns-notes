# Data Partitioning

Split data across nodes while preserving routing, locality, and scalability.

```mermaid
flowchart LR
    F[Fixed Partitions] --> K[Key-Range Partitions]
```

## Patterns

- [Fixed Partitions](01-fixed-partitions.md)
- [Key-Range Partitions](02-key-range-partitions.md)

## Design trigger

Use this section when the design needs shard routing, rebalancing, range scans, hot-partition handling, or stable ownership of data.
