# Getting started

Domain-driven design (DDD) workspace for TypeScript and Python. This page says how to set up the tools and build these docs.

## Set up the tools

Tool versions are pinned in `mise.toml`. Run this once from the project root:

```
mise install
pnpm install
```

## Build the docs

Structurizr turns the model into JSON. Renderizr turns the JSON into a site in `architecture/site/`.

```
mise run docs:build
```

Run the export again after you change the model, the docs or the decisions. Otherwise the site shows the old content.
