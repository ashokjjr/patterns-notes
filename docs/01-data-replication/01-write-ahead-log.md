# Write-Ahead Log

> Persist the intent to change state before mutating the actual storage structure.

## Problem

A server can fail after accepting a write but before all in-memory or on-disk structures are updated. Recovery needs a durable ordered record of what happened.

## Solution

Append every state-changing command to a durable log first. After the log append is persisted, apply the change to the state. On restart, replay the log from the last checkpoint.

## Diagram

```mermaid
flowchart LR
    C[Client write] --> L[Append command to WAL]
    L --> D[Durable log entry]
    D --> A[Apply to state]
    A --> R[Reply success]
    L --> S[Recovery can rebuild state]
```

## Examples

- Database redo logs and commit logs.
- Cassandra commit log before memtable update.
- Kafka-style append-only history.
- Raft or Paxos logs use this as the replication unit.

## Watch outs

- fsync policy controls durability versus latency.
- Logs need checkpoints, compaction, snapshots, or low-water marks.
- Replay must be deterministic.

## Related patterns

- Segmented Log
- Low-Water Mark
- Replicated Log
