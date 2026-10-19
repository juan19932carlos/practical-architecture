# Tooling

- Tool versions live in `mise.toml` and are pinned exact (Node, pnpm, Python, uv, Java, Structurizr CLI). Never use `latest`, `lts` or a range there. Run commands through mise (`mise exec -- <cmd>`) or from a shell where mise is active.
- Project commands are mise tasks in `mise.toml`. List them with `mise tasks`. Run one with `mise run <task>`. Add a new command as a task there.
- A task that starts a server (`docs:edit`, `serve:*`) is for the user. Never run it.
- TypeScript: use `pnpm`. Never `npm`, `yarn` or `npx`.
- Lint: Biome for TypeScript, Ruff for Python. `pnpm lint` runs both.
- Python: use `uv` (`uv add`, `uv run`, `uv sync`). Never bare `pip`.
- Python venv is `.venv/`, created by mise. It is git-ignored; do not commit it.
- `allowBuilds` in `pnpm-workspace.yaml` denies the `esbuild` build script on purpose. Do not change it without asking.
