# Git strategy

`main` is the main branch. A step of the book reaches it through a pull request.

## Rules

- Do each step of the book on its own branch, cut from `main`. Open a pull request to merge it into `main`.
- A small change that is not part of a book step (docs, tooling, a typo) can go straight to `main`.
- Tag a finished step on `main`. See the release strategy page for tag names and release notes.

## Branch names

Use `type/slug`. The slug is lowercase kebab-case.

- `feat/batch-allocation`
- `docs/git-strategy`

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`. They are the Conventional Commits types.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`. The scope is optional. Use `py` or `ts` as the scope when a change touches one language only.

- `feat(py): add Batch`
- `docs: describe the git strategy`

## Lint and checks

Git hooks run these checks. Husky installs the hooks when you run `pnpm install`.

- `commit-msg`: commitlint checks the message.
- `pre-commit`: `scripts/check-branch-name.sh` checks the branch name. Biome checks staged TypeScript. Ruff checks and format-checks Python.
- Run all linters by hand with `pnpm lint`.

## Pull request description

GitHub fills the pull request description from `.github/pull_request_template.md`. Keep its three sections: Summary, Evidence and Merge Danger.

- Summary: one paragraph that says what the PR does and why. No file lists, folder trees or code diffs. No preamble.
- Evidence: show a before and after. Prefer a failing and a passing test run.
- Merge Danger: say if the door is one-way or two-way, and name the blast radius.
