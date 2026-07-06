# Two-Phase Commit

> Coordinate multiple participants so a transaction reaches one outcome everywhere.

## Problem

A transaction updates multiple nodes or resources. If one side commits while another side aborts, the system becomes inconsistent.

## Solution

Use a coordinator. Phase one asks all participants to prepare and promise they can commit. If all vote yes, phase two tells everyone to commit; otherwise it tells everyone to abort.

## Diagram

```mermaid
sequenceDiagram
    participant C as Coordinator
    participant P1 as Participant 1
    participant P2 as Participant 2
    C->>P1: prepare
    C->>P2: prepare
    P1-->>C: yes
    P2-->>C: yes
    C->>P1: commit
    C->>P2: commit
```

## Examples

- Distributed transactions across database shards.
- XA transactions across resources.
- Atomic commit between transactional systems.

## Watch outs

- Two-phase commit is atomic commit, not consensus.
- Prepared participants can block if the coordinator disappears before the final decision.
- Long transactions hold locks and hurt availability.

## Related patterns

- Request Waiting List
- Idempotent Receiver
- Majority Quorum
