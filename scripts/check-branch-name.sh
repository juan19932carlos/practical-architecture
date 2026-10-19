#!/bin/sh
# Allow `main` and `type/slug` where type is a Conventional Commits type.
branch=$(git symbolic-ref --short -q HEAD) || exit 0
pattern='^(main|(feat|fix|docs|refactor|test|chore|build|ci)/[a-z0-9]+(-[a-z0-9]+)*)$'
if ! echo "$branch" | grep -Eq "$pattern"; then
  echo "Branch name '$branch' is not allowed." >&2
  echo "Use type/slug, for example feat/batch-allocation." >&2
  echo "Types: feat, fix, docs, refactor, test, chore, build, ci." >&2
  exit 1
fi
