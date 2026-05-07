# CI/CD Pipeline Diagram

```mermaid
graph LR
    A[Push to main] --> B(GitHub Actions)
    B --> C{Run Tests}
    C -->|Fail| D[Notify Developer]
    C -->|Pass| E[Production Build]
    E --> F[Deploy to Vercel]
    F --> G[Run Smoke Tests]
    G --> H[Deployment Complete]