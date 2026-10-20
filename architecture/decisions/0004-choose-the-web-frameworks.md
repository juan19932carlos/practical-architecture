# 4. Choose the web frameworks

Date: 2026-10-19

## Status

Accepted

## Context

The service is an API, so each app needs a web framework. The book uses Flask for its Python API. The book's patterns do not depend on the framework: the API is a thin layer over the service layer. The book also wires dependencies by hand, in one place at startup. A framework must not take that wiring over.

Options for Python:

- Flask. The book's own choice. It is small and stays out of the way. It has no built-in request validation or typed models.
- FastAPI. Also small. It validates requests and builds API docs from type hints, and its test client calls the app in-process. It departs from the book.

Options for TypeScript:

- NestJS. Full framework with its own modules and dependency injection (DI, passing a class its collaborators) container. It wants to own the wiring, which fights the book's hand-wired dependencies. It needs decorators and a compiler plugin for injection.
- Express. Plain and the most common. Its types and async error handling are older, so it gives no gain over Fastify.
- Fastify. Small and typed. `app.inject()` tests a request in-process, with no server. The closest match to Flask and FastAPI.
- Hono. Tiny and also tests in-process. Less mature than Fastify.

## Decision

- Python: FastAPI, served by Uvicorn. It keeps Flask's small size and adds typed requests. This departs from the book.
- TypeScript: Fastify. It is small, typed, and leaves the wiring to us.

## Consequences

- The Python code does not follow the book's Flask code line by line. We port the book's API tests to FastAPI's `TestClient`.
- We keep wiring dependencies by hand, as the book does.
- Both frameworks keep the API layer thin. The domain model and the service layer know nothing about either framework.

## Reference links

- [Flask](https://flask.palletsprojects.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)
- [NestJS](https://nestjs.com/)
- [Express](https://expressjs.com/)
- [Fastify](https://fastify.dev/)
- [Hono](https://hono.dev/)
