# Getting started

Domain-driven design (DDD) workspace for JavaScript and Python. This page says how to set up the tools and build these docs.

## Set up the tools

Tool versions are pinned in `mise.toml`. Run this once from the project root:

```
mise install
pnpm install
```

## Build the docs

Structurizr turns the model into JSON. Renderizr turns the JSON into a site.

```
structurizr.sh export -workspace architecture/workspace.dsl -format json -output architecture
pnpm exec renderizr architecture/workspace.json --single-file -o architecture/site
```

Run the export again after you change the model, the docs or the decisions. Otherwise the site shows the old content.
