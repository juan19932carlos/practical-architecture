# domain-driven-desing

Personal workspace that implements the steps of "Architecture Patterns with Python". The book teaches architecture patterns, such as the repository and the service layer. It touches domain-driven design (DDD) only as far as those patterns need it.

The patterns are not tied to Python, so each step is built as an API in two languages: Python and JavaScript. Other languages can follow the same steps. There is no frontend.

Tool versions (Node, pnpm, Python, uv) are pinned in `mise.toml`: run `mise install` once, then use pnpm for JavaScript packages and uv for Python packages.

Documentation and diagrams are rendered with [Renderizr](https://github.com/FormulaMonks/renderizr). The model, docs and decisions live in `architecture/`. See `architecture/docs/01-getting-started.md` for the build commands.
