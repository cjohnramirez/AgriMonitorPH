# Risk Register

| ID | Risk Description | Likelihood | Impact | Score | Mitigation Strategy | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R01** | **Scope Creep (UI):** Spending too much time polishing shadcn components instead of finishing core layouts. | 4 | 3 | **12** | Strict timeboxing per component. Use default shadcn styles first, polish in Sprint 4. | [QA Lead] |
| **R02** | **Mock Data Mismatch:** Hardcoded data structures don't map well to the UI components. | 3 | 4 | **12** | Define TypeScript interfaces for mock data *before* building the UI components. | [Frontend Lead] |
| **R03** | **Mobile Layout Breakage:** Complex data tables and charts overflow on mobile screens. | 4 | 4 | **16** | Implement "mobile-first" Tailwind classes. Use scrollable container wrappers for tables. | [UI/UX Engineer] |
| **R04** | **Next.js Hydration Errors:** Mismatches between server-rendered HTML and client-side React. | 3 | 4 | **12** | Avoid accessing `window` or `document` before `useEffect`. Test build locally frequently. | [Frontend Lead] |
| **R05** | **Merge Conflicts in Layouts:** Multiple devs editing `layout.tsx` or `page.tsx` simultaneously. | 4 | 3 | **12** | Isolate features into separate `/components` files. Communicate before touching global layouts. | [Scrum Master] |
| **R06** | **Vercel Build Failures:** Production build fails due to ESLint or TypeScript strictness. | 3 | 5 | **15** | Run `pnpm lint` and `pnpm build` locally before opening a Pull Request. | [QA & Deploy Lead] |
| **R07** | **Accessibility (a11y) Ignored:** Dashboard is unusable for screen readers, failing audit. | 2 | 3 | **6** | Use standard shadcn components (which have built-in ARIA). Add `alt` tags to all commodity images. | [UI/UX Engineer] |
| **R08** | **Team Knowledge Gap:** Members are unfamiliar with Tailwind CSS arbitrary values or Next.js routing. | 3 | 3 | **9** | Pair programming sessions on complex components. Share shadcn/Next.js documentation links in chat. | [Scrum Master] |