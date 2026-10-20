# Testing

- Use TDD in both languages: write a failing test first, make it pass, then refactor. Write no production code without a test that failed first.
- Port each step test for test. The book's Python test is the source. Both apps get the same tests and the same behavior.
- Run test suites in a subagent. Run the new test first and confirm it fails for the right reason.
- Stack: `architecture/decisions/0003-choose-test-and-persistence-stack.md` (tests, persistence), `architecture/decisions/0004-choose-the-web-frameworks.md` (web). ADR 2 and ADR 3 say JavaScript and `apps/allocation-js`: read TypeScript and `apps/allocation-ts`.
