# Consistent Core

> Use a small strongly consistent cluster to coordinate a larger data cluster.

## Problem

Implementing strong consistency across every data node is expensive. But the larger cluster still needs reliable metadata such as membership, leases, leader assignment, and configuration.

## Solution

Run a small coordination core using consensus. Store metadata and decisions there. The larger data plane reads or watches this core instead of implementing quorum logic everywhere.

## Diagram

```mermaid
flowchart TD
    C1[Core node 1] --> C2[Core node 2]
    C2 --> C3[Core node 3]
    D1[Data node 1] --> C1
    D2[Data node 2] --> C2
    D3[Data node 3] --> C3
    D4[Data node 4] --> C1
```

## Examples

- ZooKeeper, etcd, or Consul coordinating larger systems.
- Kubernetes using etcd as metadata store.
- HBase-style systems using a coordination service.

## Watch outs

- The core becomes critical infrastructure.
- Do not put high-volume data-path traffic into the core.
- Core availability depends on quorum.

## Related patterns

- Majority Quorum
- Lease
- State Watch
