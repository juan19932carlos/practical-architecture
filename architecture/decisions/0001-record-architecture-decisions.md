# 1. Record architecture decisions

Date: 2026-10-19

## Status

Accepted

## Context

Design choices are easy to forget. A reader who only sees the code cannot tell why it looks the way it does.

## Decision

Record architecture decisions as ADRs in `architecture/decisions/`, in the adr-tools format. `!adrs decisions` in `architecture/workspace.dsl` imports them into the architecture site. Write an ADR only for a decision that shapes the architecture.

A decision is architectural when all of these are true:

- It is hard to reverse. Undoing it touches many parts of the code.
- It is the result of a real trade-off. Another option was a fair choice.
- It is not given by the book. The repo follows "Architecture Patterns with Python", so the book's own choices (for example its patterns, its libraries and its code layout) are implementation, not decisions.

A choice that fails any test belongs in the docs or in the code, not in an ADR. A place where this repo departs from the book is a decision. Explain it in an ADR.

## Consequences

- Each ADR is a numbered file (`NNNN-kebab-title.md`) with a `# N. Title` heading, a `Date:` line, and `Status`, `Context`, `Decision` and `Consequences` sections.
- A superseded ADR stays in place, with its status pointing at the ADR that replaces it.

## Reference links

- [adr-tools](https://github.com/npryce/adr-tools)
- [Structurizr DSL `!adrs`](https://docs.structurizr.com/dsl/adrs)
