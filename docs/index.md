# Distributed System Patterns Notes

Fast-recall notes for distributed system design and architecture reviews.

The notes are based on Martin Fowler and Unmesh Joshi's catalog of distributed system patterns, reorganized into a quick-reference structure.

## Sections

| Section | Purpose | Patterns |
|---|---|---:|
| [System Models](00-system-models/) | Define the assumptions for links, failures, and timing before choosing a protocol. | - |
| [Data Replication](01-data-replication/) | Durability, replay, recovery, versions, and deduplication. | 8 |
| [Leaders and Followers](02-leaders-and-followers/) | Organize replicas when one node coordinates writes. | 3 |
| [Consensus and Commit](03-consensus-and-commit/) | Agree safely on values, leaders, log positions, or atomic outcomes. | 6 |
| [Data Partitioning](04-data-partitioning/) | Split data and load across nodes. | 2 |
| [Distributed Time](05-distributed-time/) | Reason about event order when clocks are imperfect. | 3 |
| [Cluster Management](06-cluster-management/) | Coordinate membership, ownership, liveness, and metadata. | 5 |
| [Communication Between Nodes](07-communication-between-nodes/) | Move requests efficiently between nodes. | 3 |

## Page format

Each pattern page has:

1. Problem
2. Solution
3. Diagram
4. Examples
5. When to use
6. Watch outs
7. Related patterns

For system design discussions, start with [System Models](00-system-models/) before selecting the implementation patterns.

## Source

- https://martinfowler.com/articles/patterns-of-distributed-systems/
