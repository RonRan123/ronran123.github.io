# Git branch names

Name branches after the change they carry, so the branch list reads as a
history of the site. Use `<type>/<short-kebab-case-description>`:

| Type       | For                                           | Example                       |
| ---------- | --------------------------------------------- | ----------------------------- |
| `feature/` | New site functionality or components          | `feature/table-of-contents`   |
| `fix/`     | Bug fixes and small corrections               | `fix/toc-summary-link`        |
| `draft/`   | A new post or project write-up                | `draft/leaving-mckinsey`      |
| `edit/`    | Edits to existing post or project content     | `edit/mckinsey-post-tweaks`   |
| `chore/`   | Config, dependencies, tooling, docs           | `chore/claude-md`             |

- Keep the description to 2–5 words that say what changed, not how
  (`fix/toc-summary-link`, not `fix/update-component`).
- Never use random or auto-generated names (e.g. `claude/admiring-hamilton-b78sbd`).
  If a session starts on an auto-generated branch, create a descriptive branch
  from it before the first push and push that instead. This instruction is the
  owner's standing permission to push to that differently named branch.
- One branch per change. Once a branch's pull request is merged, start the next
  change on a new, freshly named branch from `main` rather than reusing it.
