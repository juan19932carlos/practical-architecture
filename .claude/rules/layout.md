# Layout

- `apps/*`: deployable apps, any language. `packages/*`: shared code, any language.
- A folder name ends with its language: `-py` for Python, `-ts` for TypeScript (for example `apps/allocation-py`). `pnpm-workspace.yaml` picks `*-ts` folders and `[tool.uv.workspace]` in the root `pyproject.toml` picks `*-py` folders. A folder without the suffix is in neither workspace.
- The Python and TypeScript APIs implement the same service. They share no code.

## Inside an app

- `domain/` holds the domain model: entities, value objects and domain services. It is pure. It imports only the language's standard library, never a framework, a database library, or any other folder of the app.
- `entrypoints/` holds the web API. Other layers, such as `service_layer/` and `adapters/`, get their own folder when the book reaches them.
- Dependencies point inward: an outer folder may import `domain/`. `domain/` never imports an outer folder.
- Tests mirror the source folders.
