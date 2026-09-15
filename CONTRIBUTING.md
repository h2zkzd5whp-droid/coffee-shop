# Contributing

## Workflow: GitHub Flow

1. Branch off `main`. Branch names are free-form; no prefix rules.
2. Open a pull request.
3. Squash merge into `main`.

- Keep branches short-lived. Merge within 2 days.
- Never push directly to `main`.
- `main` must always run locally.

## Pull requests

- A pull request is required for every change to `main`.
- Required approvals: 0. Reviews are recommended, not mandatory.
- If nobody reviews within 24 hours, the author merges.
- PR title follows the commit message format below (it becomes the squash commit message).

## Commit messages

Commits inside a branch are squashed on merge, so their messages are free-form.
The rules below apply to the PR title, which becomes the commit message on `main`.

Conventional Commits format:

```
<type>(<scope>): <summary>
```

- `type` is one of: `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `chore`
- `scope` is `frontend` or `backend`. Omit it for root files or changes touching both.
- `summary`: English, imperative verb, lowercase, no trailing period, 50 characters or fewer.
- Body is optional. Use it only to explain why.
- To close an issue, add `Closes #N` to the body.

Examples:

```
feat(frontend): add product list page
fix(backend): return 401 on expired refresh token
docs: add tech stack doc
chore: update prettier config
```

## Notifications

A Discord webhook posts on push, pull request, pull request review, and issues.

## Do not commit

- `db.sqlite3`
- `.env` (commit `.env.example` instead). When you add a new environment variable, add its key to `.env.example` too.
- Word or HWP files. Documentation lives in `docs/` as Markdown only.
