---
paths:
  - "architecture/**"
---

# Diagrams and the architecture site

- `architecture/workspace.dsl` is the Structurizr model. It imports `architecture/docs/` (`!docs`) and `architecture/decisions/` (`!adrs`).
- Renderizr is a pinned dev dependency (`github:FormulaMonks/renderizr#v2.5.0`, locked in `pnpm-lock.yaml`). Run it with `pnpm exec renderizr`. Under `npx` its edit mode cannot serve its icons.
- Renderizr reads workspace JSON, not `.dsl`. Export first, then render. The commands are in `architecture/docs/01-getting-started.md`, under "Build the docs".
- The binary is `structurizr.sh`, not `structurizr-cli`.
- Re-export after any change to the model, docs, ADRs or `.mmd` files, or the site shows old content.
- `architecture/workspace.json` and `architecture/site/` are generated and git-ignored.
- Edit mode: `STRUCTURIZR_CLI=structurizr.sh pnpm exec renderizr edit architecture/workspace.dsl`. It starts a server on port 7341. Do not start it; ask the user.

## C4 views

- Styles are inline in the `styles` block of `workspace.dsl`. Never use `theme` or `themes` URLs: they download at export time and break offline.
- Edit mode saves dragged C4 layouts into `architecture/workspace.json`.

## Mermaid views (ERDs)

- A Mermaid source is a `.mmd` file in `architecture/mermaid/`, wired in as an `image * "<Key>"` view with `mermaid mermaid/<file>.mmd`, and `"mermaid.url" "https://mermaid.ink"` under `views`.
- Renderizr draws only `flowchart`/`graph`, `erDiagram` and `sequenceDiagram`. Any other type (such as `classDiagram`) is not drawn and stays a picture.
- Edit mode draws Mermaid views read-only. Edit the `.mmd` file; the page redraws on save.
- ERD keys: `PK`, `FK`, `UK`. A collapsed entity shows only `PK` and `FK`.
- `Data-Model` is the book's schema.
