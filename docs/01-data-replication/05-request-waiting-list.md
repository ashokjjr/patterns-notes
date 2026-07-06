# Request Waiting List

> Remember in-flight client requests until the cluster has enough evidence to answer.

## Problem

A coordinator often cannot respond immediately. It may need quorum acknowledgements, follower replication, disk persistence, or a participant decision.

## Solution

Store each pending request in a waiting list keyed by request ID or log index. Update its state as responses arrive. Complete it only when the response criteria is satisfied.

## Diagram

```mermaid
sequenceDiagram
    participant C as Client
    participant L as Leader
    participant F1 as Follower 1
    participant F2 as Follower 2
    C->>L: write request r42
    L->>L: add r42 to waiting list
    L->>F1: replicate entry
    L->>F2: replicate entry
    F1-->>L: ack
    F2-->>L: ack
    L-->>C: success after quorum
```

## Examples

- Leader waits for follower acknowledgements before commit.
- Coordinator waits for participants during two-phase commit.
- RPC layer tracks correlation IDs until replies return.

## Watch outs

- Waiting lists need timeout and cleanup.
- Coordinator restart needs recovery or client retry.
- Duplicate replies must not complete a request twice.

## Related patterns

- Majority Quorum
- High-Water Mark
- Idempotent Receiver
