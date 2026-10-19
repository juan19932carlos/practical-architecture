# domain-driven-desing

Implements the steps of "Architecture Patterns with Python" as an API in both Python and JavaScript. There is no frontend; never add one.

## Tooling

- Tool versions live in `mise.toml` and are pinned exact (Node, pnpm, Python, uv, Java, Structurizr CLI). Never use `latest`, `lts` or a range there. Run commands through mise (`mise exec -- <cmd>`) or from a shell where mise is active.
- JavaScript: use `pnpm`. Never `npm`, `yarn` or `npx`.
- Lint: Biome for JavaScript, Ruff for Python. `pnpm lint` runs both.
- Python: use `uv` (`uv add`, `uv run`, `uv sync`). Never bare `pip`.
- Python venv is `.venv/`, created by mise. It is git-ignored; do not commit it.
- `allowBuilds` in `pnpm-workspace.yaml` denies the `esbuild` build script on purpose. Do not change it without asking.

## Testing

- Use TDD in both languages, Python and JavaScript. Write a failing test first, make it pass, then refactor.
- No production code without a test that failed first.

## Layout

- `apps/*`: deployable apps, any language. `packages/*`: shared code, any language.
- A folder name ends with its language: `-py` for Python, `-js` for JavaScript (for example `apps/allocation-py`). `pnpm-workspace.yaml` picks `*-js` folders and `[tool.uv.workspace]` in the root `pyproject.toml` picks `*-py` folders. A folder without the suffix is in neither workspace.
- The Python and JavaScript APIs implement the same service. They share no code.

## Docs and diagrams

- `architecture/workspace.dsl` is the Structurizr model. It imports `architecture/docs/` (`!docs`) and `architecture/decisions/` (`!adrs`).
- Renderizr is a pinned dev dependency (`github:FormulaMonks/renderizr#v2.5.0`, locked in `pnpm-lock.yaml`). Run it with `pnpm exec renderizr`. Under `npx` its edit mode cannot serve its icons.
- Renderizr reads workspace JSON, not `.dsl`. Export first, then render:
  - `structurizr.sh export -workspace architecture/workspace.dsl -format json -output architecture`
  - `pnpm exec renderizr architecture/workspace.json --single-file -o architecture/site`
- The binary is `structurizr.sh`, not `structurizr-cli`.
- Re-export after any change to the model, docs, ADRs or `.mmd` files, or the site shows old content.
- `architecture/workspace.json` and `architecture/site/` are generated and git-ignored.
- Edit mode: `STRUCTURIZR_CLI=structurizr.sh pnpm exec renderizr edit architecture/workspace.dsl`. It starts a server on port 7341. Do not start it; ask the user.

### C4 views

- Styles are inline in the `styles` block of `workspace.dsl`. Never use `theme` or `themes` URLs: they download at export time and break offline.
- Edit mode saves dragged C4 layouts into `architecture/workspace.json`.

### Mermaid views (ERDs)

- A Mermaid source is a `.mmd` file in `architecture/mermaid/`, wired in as an `image * "<Key>"` view with `mermaid mermaid/<file>.mmd`, and `"mermaid.url" "https://mermaid.ink"` under `views`.
- Renderizr draws only `flowchart`/`graph`, `erDiagram` and `sequenceDiagram`. Any other type (such as `classDiagram`) is not drawn and stays a picture.
- Edit mode draws Mermaid views read-only. Edit the `.mmd` file; the page redraws on save.
- ERD keys: `PK`, `FK`, `UK`. A collapsed entity shows only `PK` and `FK`.
- `Data-Model` is the book's schema.

### Docs and ADRs

- Docs are Markdown named `NN-name.md`; page order follows filename order. Each `##` heading is its own page. Images must be PNG, JPEG, GIF or SVG and referenced by a section.
- ADRs are `NNNN-kebab-title.md` in adr-tools format: `# N. Title`, `Date:`, then Status, Context, Decision, Consequences. Do not edit an ADR after it lands; write a new one that supersedes or amends it.
- What counts as a decision, and so needs an ADR: `architecture/decisions/0001-record-architecture-decisions.md`.

## Releases

- Branches, pull requests, branch names, commit messages and the git hooks: `architecture/docs/03-git-strategy.md`. Never commit to `main` directly.
- Tag naming: `architecture/decisions/0002-tag-each-step.md`.
- Release notes and the checklist before a tag: `architecture/docs/02-release-strategy.md`.
- Never move or delete a tag. Fixes go to `main` through a pull request.
