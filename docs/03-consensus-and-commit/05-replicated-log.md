# Replicated Log

> Replicate an ordered write-ahead log so all replicas apply the same commands in the same order.

## Problem

Replicas need to stay synchronized. Sending final state is expensive and ambiguous; sending unordered operations can cause divergent state.

## Solution

Represent every state change as a log entry. Replicate entries to followers and commit them in order. Each replica applies committed entries to its local state machine.

## Diagram

```mermaid
flowchart LR
    L1[Leader log entry 1] --> L2[Entry 2]
    L2 --> L3[Entry 3]
    L1 --> F11[Follower 1 entry 1]
    L2 --> F12[Follower 1 entry 2]
    L3 --> F13[Follower 1 entry 3]
    L1 --> F21[Follower 2 entry 1]
    L2 --> F22[Follower 2 entry 2]
```

## Examples

- Raft replicated log.
- Multi-Paxos over log slots.
- Kafka partition replication.
- Database WAL streaming.

## Watch outs

- The log is the source of ordering.
- Uncommitted tail entries can be replaced during leader changes.
- Snapshots are needed to avoid replaying from the beginning forever.

## Related patterns

- Write-Ahead Log
- High-Water Mark
- Paxos
