# Interview Cheat Sheet

## Pattern triggers

| Interview phrase | Pattern to reach for |
|---|---|
| Node crashes after accepting a write | Write-Ahead Log |
| Need to truncate old logs | Low-Water Mark + Segmented Log |
| Replicas must agree on write order | Leader and Followers + Replicated Log |
| Avoid split-brain | Majority Quorum + Generation Clock |
| Know what is committed | High-Water Mark |
| Avoid duplicate retries | Idempotent Receiver |
| Scale writes by key | Fixed Partitions |
| Support range scans | Key-Range Partitions |
| Order events without trusting clocks | Lamport Clock |
| Use physical time safely | Hybrid Clock / Clock-Bound Wait |
| Notify config changes | State Watch |
| Spread membership state | Gossip Dissemination |
| Reduce network overhead | Request Batch |
| Hide RTT | Request Pipeline |

## Core distinction

```mermaid
flowchart LR
    Replication[Replication] --> Copy[Copy data to nodes]
    Consensus[Consensus] --> Agree[Agree on one safe decision]
    Commit[Atomic Commit] --> Outcome[All commit or all abort]
    Partitioning[Partitioning] --> Split[Split data and load]

    Copy -. may use .-> Agree
    Outcome -. may need .-> Agree
```

## 2PC vs Consensus

```mermaid
flowchart TD
    A[Need atomic outcome across resources] --> B[Two-Phase Commit]
    B --> C[Can block if coordinator fails]

    D[Need one decision despite failures] --> E[Consensus]
    E --> F[Progress with quorum if majority alive]

    B -. not same as .- E
```
