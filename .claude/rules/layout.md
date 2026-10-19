# Layout

- `apps/*`: deployable apps, any language. `packages/*`: shared code, any language.
- A folder name ends with its language: `-py` for Python, `-ts` for TypeScript (for example `apps/allocation-py`). `pnpm-workspace.yaml` picks `*-ts` folders and `[tool.uv.workspace]` in the root `pyproject.toml` picks `*-py` folders. A folder without the suffix is in neither workspace.
- The Python and TypeScript APIs implement the same service. They share no code.
