# allocation-ts

The TypeScript API. Rules for this app on top of the root `CLAUDE.md`.

## Commands

- Tests: the `test:ts` task.
- Types: `pnpm typecheck` in this folder (`tsc`, emits nothing). Vitest does not type-check, so run both. `pnpm lint` at the root runs it too.

## Layout

- Code and tests live together in `src/`, in folders: `domain/`, `entrypoints/`. A test is `<name>.test.ts`, next to the file it tests.
- The web app is built by `buildApp()` in `src/entrypoints/fastify-app.ts`. `main.ts` starts it. Test it in-process with `app.inject()`. Never start the server in a test or a session.
- `moduleResolution` is `Bundler`: import `./model`, with no extension.
- `tsconfig.json` is strict. Do not loosen it.

## Porting the book

How the Python code maps to TypeScript:

- `snake_case` names become `camelCase`: `can_allocate` is `canAllocate`.
- Python keyword arguments become an options object: `qty=20, eta=...` is `{ qty: 20, eta }`.
- `Optional[date]` is `Date | null`.
- Python `is False` is `toBe(false)`.

## Value equality

Python's `@dataclass` gives value equality. A TypeScript class compares by identity. `OrderLine` is frozen but has no `equals`.

- Do not add a library for this (no Immutable.js).
- Write `equals` by hand on the class, when a test needs it.
