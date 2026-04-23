# SCM & Git Strategy

## Branch Naming Conventions
* **`feature/<name>`**: For new additions (e.g., `feature/export-csv`).
* **`bugfix/<name>`**: For non-critical bug fixes in development (e.g., `bugfix/ui-alignment`).
* **`hotfix/<name>`**: For urgent production fixes (e.g., `hotfix/api-crash`).

## Merge Conflict Resolution Log
* **Date:** *(Put today's date)*
* **Conflict Location:** `README.md`
* **What Happened:** Two separate branches (`feature/readme-update-a` and `hotfix/readme-update-b`) attempted to modify the same line in the README file simultaneously.
* **Resolution:** The conflict was resolved locally by keeping both changes using a combined layout, staging the fix, and completing the merge into the `dev` branch.