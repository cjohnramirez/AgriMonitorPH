# DevOps Practices & Automation

1. **Automation:** Fully automated CI/CD pipeline ensures code is tested and deployed on every push to `main`.
2. **Collaboration:** Used a GitFlow-inspired branching strategy (`feature/*` → `dev` → `main`) with peer-review ready PR templates.
3. **Monitoring:** Integrated Vercel Analytics and custom `logger.ts` to track FCP and user events.
4. **Cloud Improvement:** **Pipeline Optimization.** Implemented `pnpm` caching and "Source Upload" deployment to reduce build time from 2 mins to < 45 seconds.