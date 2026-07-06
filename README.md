# Distributed System Patterns Notes

GitHub Pages-ready quick reference for distributed-system patterns, based on Martin Fowler and Unmesh Joshi's **Catalog of Patterns of Distributed Systems**.

This repo is organized for interview and design-review recall:

1. Data Replication
2. Leaders and Followers
3. Consensus and Commit
4. Data Partitioning
5. Distributed Time
6. Cluster Management
7. Communication Between Nodes

The original catalog/book grouping keeps many consensus-related patterns under Data Replication. This repo intentionally promotes **Leaders and Followers** and **Consensus and Commit** to top-level sections because that is easier to recall during system-design interviews.

## Local preview

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open <http://127.0.0.1:8000>.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and deploys the site from `main`.

After pushing, enable GitHub Pages with source **GitHub Actions** in repository settings if it is not already enabled.

## Source

- https://martinfowler.com/articles/patterns-of-distributed-systems/
