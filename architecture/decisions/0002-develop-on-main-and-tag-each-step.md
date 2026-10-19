# 2. Develop on main and tag each step

Date: 2026-10-19

## Status

Accepted

## Context

The repo implements the steps of "Architecture Patterns with Python" twice, once in Python and once in JavaScript. The book keeps one branch per chapter. Some chapters are small, a fix to an early chapter does not reach later ones, and each branch would carry its own copy of the docs and ADRs. With two languages, the cost doubles.

## Decision

Develop on `main`. When a step is done, tag the commit and publish a GitHub release for that tag.

- A step is one chapter of the book, or a few small chapters grouped together.
- A step lands in both `apps/allocation-py` and `apps/allocation-js`, with its ADRs and the C4 model update in the same step.
- Tags are named `chNN-slug` (for example `ch01-domain-model`). A grouped step uses a range (`ch04-05-service-layer`).
- A tag never moves. A fix to old code goes to `main` and shows up in the next tag.
- Each release carries notes in the shape described in `architecture/docs/02-release-strategy.md`.

## Consequences

- `git checkout <tag>` gives the same snapshot a chapter branch would give.
- One architecture site and one ADR log cover the whole history.
- Each release says what the tag means, what was done, and what differs from the previous tag and from the book.
- Writing release notes is part of every step.

## Reference links

- [Cosmic Python](https://www.cosmicpython.com/)
