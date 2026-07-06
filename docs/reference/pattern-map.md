# Pattern Map

## End-to-end map

```mermaid
flowchart TD
    Client[Client Request] --> Idem[Idempotent Receiver]
    Idem --> Queue[Singular Update Queue]
    Queue --> WAL[Write-Ahead Log]
    WAL --> Seg[Segmented Log]
    WAL --> Leader[Leader and Followers]
    Leader --> RLog[Replicated Log]
    RLog --> Quorum[Majority Quorum]
    Quorum --> HWM[High-Water Mark]
    HWM --> Apply[Apply to State Machine]
    Apply --> FRead[Follower Reads]

    Leader --> HB[Heartbeat]
    HB --> Lease[Lease]
    Lease --> Core[Consistent Core]
    Core --> Watch[State Watch]

    WAL --> LWM[Low-Water Mark]
    LWM --> Cleanup[Log cleanup or snapshot]

    Apply --> Versioned[Versioned Value]
    Versioned --> VV[Version Vector]

    Partition[Fixed or Key-Range Partitions] --> Leader
    Time[Lamport or Hybrid Clocks] --> Versioned
    Network[Single Socket, Batch, Pipeline] --> RLog
```

## Index

| Section | Patterns |
|---|---|
| Data Replication | Write-Ahead Log, Segmented Log, Low-Water Mark, Singular Update Queue, Request Waiting List, Idempotent Receiver, Versioned Value, Version Vector |
| Leaders and Followers | Leader and Followers, Heartbeat, Follower Reads |
| Consensus and Commit | Majority Quorum, Generation Clock, High-Water Mark, Paxos, Replicated Log, Two-Phase Commit |
| Data Partitioning | Fixed Partitions, Key-Range Partitions |
| Distributed Time | Lamport Clock, Hybrid Clock, Clock-Bound Wait |
| Cluster Management | Consistent Core, Lease, State Watch, Gossip Dissemination, Emergent Leader |
| Communication Between Nodes | Single-Socket Channel, Request Batch, Request Pipeline |
