# Clock-Bound Wait

> Wait through clock uncertainty before showing results that depend on real-time ordering.

## Problem

If node clocks are only approximately synchronized, timestamps from different nodes can overlap. This can make real-time ordering unsafe.

## Solution

Use a known clock uncertainty bound. After assigning a timestamp, wait for that uncertainty window before making the result visible.

## Diagram

```mermaid
flowchart LR
    A[Assign timestamp] --> W[Wait uncertainty window]
    W --> E[Make result visible]
    E --> R[Reads observe safe order]
```

## Examples

- Spanner-style commit wait concept.
- Systems using bounded clock uncertainty.
- Geo-distributed databases with synchronized clocks.

## Watch outs

- Larger uncertainty means higher latency.
- Requires reliable clock sync and monitoring.
- If the bound is wrong, ordering assumptions break.

## Related patterns

- Hybrid Clock
- Lease
- Follower Reads
