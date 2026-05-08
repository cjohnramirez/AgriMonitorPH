# Software Security Checklist - AgriMonitorPH

| Category | Control Description | Status |
| :--- | :--- | :--- |
| **Data Validation** | Zod schemas implemented for Price Inquiries and Contact forms. | ✅ |
| **Auth/Authz** | LocalStorage-based mock token authentication for sensitive views. | ✅ |
| **Secrets** | Sensitive config moved to .env; .env added to .gitignore. | ✅ |
| **Logging** | Basic console error logging for failed validation attempts. | ✅ |
| **Least Privilege** | Static routing restricts access to dev-only folders. | ✅ |
| **Audit** | `pnpm audit` performed and 4 vulnerabilities mitigated. | ✅ |