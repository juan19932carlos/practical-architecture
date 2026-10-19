# Git strategy

`main` is the main branch. Every change reaches it through a pull request.

## Rules

- Never commit to `main` directly. Treat it as untouchable.
- Make each change on its own branch, cut from `main`.
- Open a pull request to merge the branch into `main`.
- Tag a finished step on `main`. See the release strategy page for tag names and release notes.
- A tag never moves.

## Branch names

Use `type/slug`. The slug is lowercase kebab-case.

- `feat/batch-allocation`
- `docs/git-strategy`

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`. They are the Conventional Commits types.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`. The scope is optional. Use `py` or `js` as the scope when a change touches one language only.

- `feat(py): add Batch`
- `docs: describe the git strategy`

## Lint and checks

Git hooks run these checks. Husky installs the hooks when you run `pnpm install`.

- `commit-msg`: commitlint checks the message.
- `pre-commit`: `scripts/check-branch-name.sh` checks the branch name. Biome checks staged JavaScript. Ruff checks and format-checks Python.
- Run all linters by hand with `pnpm lint`.
