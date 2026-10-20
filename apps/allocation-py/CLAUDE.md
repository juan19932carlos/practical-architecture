# allocation-py

The Python API. Rules for this app on top of the root `CLAUDE.md`.

## Commands

- Tests: the `test:py` task. `pyproject.toml` sets `pythonpath = ["."]` and `testpaths = ["tests"]`.

## Layout

- Code lives in `allocation/`. Tests live in `tests/`.
- The FastAPI app is `allocation/entrypoints/fastapi_app.py`. Test it in-process with `fastapi.testclient.TestClient`. Never start the server in a test or a session.
- The app has no build system, so it is not an installable package. Tests import it through `pythonpath`.

## Rules

- `OrderLine` is a frozen `@dataclass`, a value object: equal when its fields are equal.
- Assert booleans with `is True` or `is False` when the book does. A bare `assert x` also accepts `0` and `[]`.
- Juan knows Python but not its libraries. When you use a Python construct or a library for the first time, explain it in a few lines.
