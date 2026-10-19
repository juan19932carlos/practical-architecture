# Release strategy

Each step of the book ends with a tag and a GitHub release. This page says what a tag means and what a release must say.

## What a tag means

- A tag marks one finished step: the code, the tests, the ADRs and the C4 model all agree.
- Both APIs (`apps/allocation-py` and `apps/allocation-js`) pass their tests at the tag.
- A tag never moves. Fixes go to `main` and appear in the next tag.

## Tag names

- One chapter: `chNN-slug`, for example `ch01-domain-model`.
- Several small chapters in one step: `chNN-MM-slug`, for example `ch04-05-service-layer`.
- The number is the chapter's number in the book. The slug is short and uses kebab-case.

## Release notes template

Copy this into each GitHub release.

```markdown
## What this tag is

One or two sentences: the book chapter(s) and the idea they teach.

## What was done

- Python: what was added.
- JavaScript: what was added.

## What changed since the previous tag

- Files, modules or behaviors that moved, were renamed or were removed.
- Link: compare view from the previous tag to this one.

## What differs from the book

- Each place where the code does something other than the book shows, and why.

## Decisions

- ADRs added or changed in this step, as links.

## How to run

- Python: the commands to run its tests.
- JavaScript: the commands to run its tests.
```

## Checklist before a tag

1. Tests pass in both apps.
2. The ADRs for this step exist.
3. `architecture/workspace.dsl` matches the code.
4. The release notes follow the template.
