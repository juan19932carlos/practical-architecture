# 3. Choose the test and persistence stack

Date: 2026-10-19

## Status

Accepted

## Context

The repo implements the same service in Python and in JavaScript. The book uses pytest for tests and SQLAlchemy for persistence. Each language needs three roles filled: a test runner, an ORM (object-relational mapper, code that maps objects to database tables) and a database.

## Decision

- Python: pytest for tests, SQLAlchemy for persistence. These are the book's own choices.
- JavaScript: Vitest for tests, Drizzle ORM for persistence. Drizzle is the closest match to SQLAlchemy in the JavaScript world.
- Both languages use SQLite as the database. It needs no server, so tests and local runs need no setup.

## Consequences

- The Python code follows the book with no translation.
- The JavaScript code uses Drizzle's own idioms. Its mapping style differs from SQLAlchemy's classical mapping, so the repository pattern needs care there.
- Both ORMs talk to SQLite, so the two apps stay easy to run and test.
- Both apps keep the same schema (`Data-Model` view in `architecture/workspace.dsl`).

## Reference links

- [pytest](https://docs.pytest.org/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [Vitest](https://vitest.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [SQLite](https://www.sqlite.org/)
