---
paths:
  - "architecture/docs/**"
  - "architecture/decisions/**"
---

# Docs and ADRs

- Docs are Markdown named `NN-name.md`; page order follows filename order. Each `##` heading is its own page. Images must be PNG, JPEG, GIF or SVG and referenced by a section.
- ADRs follow the format of `architecture/decisions/0001-record-architecture-decisions.md`. ADRs are immutable: never edit an ADR once it is committed. To change one, write a new ADR that supersedes or amends it.
- An ADR records a choice between options. Its Context lists the options considered and compares their trade-offs. Its Decision says which one won and why. An ADR with no options listed is not finished.
- Never write an ADR for a rename, a wording fix or a swap that is easy to undo. Change the name and fix the docs.
- Do not tie a name or an explanation to a technology, library or tool when the name could outlive it. Say the role ("the web framework"), and name the technology once, in the ADR that chose it. Link to that ADR instead of repeating the name. Commands and config are the exception: they must name the tool.
- What counts as a decision, and so needs an ADR: the same ADR 0001.
