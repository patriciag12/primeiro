<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use TanStack leaf routes for the three public content pages and share header, footer, and watermark decoration in the root layout; this preserves SSR, navigation, and individual metadata.
- Keep therapist content and contact destinations in a browser-safe content module; there are no accounts, intake forms, or database in this static website.
- Render imported copy as React text, never injected source HTML, and serve optimized supplied media through asset pointers; this avoids untrusted scripts and keeps downloads small.
- Use semantic CSS tokens and self-hosted variable fonts for the source-inspired editorial design; controls use the existing Button component.
- Keep unverified source testimonials explicitly disclosed and their leaf page noindexed until authenticity and consent are confirmed; never add review ratings or endorsement schema for these excerpts.
- Apply response safety headers through a pure helper in the SSR entry, with iframe allowances for Lovable preview and no blanket inline-script ban; hydration must stay functional.
- Preserve pinned TanStack package versions and update vulnerable transitive libraries using compatible overrides; recheck the dependency scan after lockfile changes.
