# domain-driven-desing

Implements the steps of "Architecture Patterns with Python" as an API in both Python and TypeScript. There is no frontend; never add one.

The rules live in `.claude/rules/`, one file per topic. A rule file with a `paths` header loads only when you work on those paths.

- `tooling.md`: pinned tool versions, pnpm, uv, lint.
- `testing.md`: TDD, porting the book's tests, running suites.
- `layout.md`: `apps/*`, `packages/*`, the `-py` and `-ts` suffix.
- `git-and-releases.md`: branches, tags, release notes.
- `diagrams.md`: the Structurizr model, Mermaid views, Renderizr (`architecture/**`).
- `docs-and-adrs.md`: docs pages and ADR rules (`architecture/docs/**`, `architecture/decisions/**`).

A rule file says what to do and what not to do. The reasons and the options stay in the ADRs. The steps stay in the docs. Link to them. Do not copy them.

Each app has its own `CLAUDE.md` with its language rules: `apps/allocation-py/CLAUDE.md` and `apps/allocation-ts/CLAUDE.md`.
