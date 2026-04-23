# Git Workflow & Branching Rules

1. **Main Branch Protection:** Direct commits to `main` are strictly prohibited.
2. **Feature Branches:** All work must be done on branches named `feature/issue-number-short-desc` (e.g., `feature/12-markets-layout`).
3. **Pull Requests (PR):** All changes must go through a PR.
4. **Code Review:** PRs require at least 1 approval from a team member before merging.
5. **CI Checks:** Code must pass `pnpm build` and `pnpm lint` before merging.