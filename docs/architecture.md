# AgriMonitorPH System Architecture

AgriMonitorPH is a cloud-native static web application designed for high performance and zero-cost scalability.

```mermaid
graph TD
    A[User Browser] -->|HTTPS| B[Vercel Edge Network]
    B --> C[Next.js Static Assets]
    B --> D[Vercel Speed Insights]
    E[GitHub Repository] -->|Push Event| F[GitHub Actions CI]
    F -->|Tests/Build| G[Vercel Deployment]
```

## Components
- **Frontend** Next.js (App Router) for optimized static rendering.
- **Validation** Zod for runtime type safety and input sanitization.
- **Infrastructure** Vercel for global content delivery (Edge).
- **Automation** GitHub Actions for continuous integration.