# Key-Range Partitions

> Partition sorted keys into contiguous ranges.

## Problem

Hash partitioning spreads load but destroys ordering. Range queries, prefix scans, and ordered iteration become expensive across many partitions.

## Solution

Assign contiguous key ranges to partitions. Route each request by comparing the key with range boundaries. Split or merge ranges as data and load change.

## Diagram

```mermaid
flowchart LR
    P1[Range 000 to 099] --> P2[Range 100 to 199]
    P2 --> P3[Range 200 to 299]
    P3 --> P4[Range 300 to 399]
    Q[Range query 100 to 299] --> P2
    Q --> P3
```

## Examples

- Bigtable-style tablets.
- LSM-tree systems partitioning by sorted key ranges.
- Time-series data partitioned by time range.

## Watch outs

- Sequential inserts can create hot ranges.
- Range boundaries need split and merge management.
- Uneven key distribution causes skew.

## Related patterns

- Fixed Partitions
- Segmented Log
- Singular Update Queue
