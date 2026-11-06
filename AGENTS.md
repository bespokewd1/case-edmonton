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

## Project rules
- Events live in src/data/events.ts as a typed static list (no backend); pages show a "coming soon" state when it's empty.
- Shared page head/SEO comes from pageHead() in src/lib/site.ts so each route sets unique title, description and canonical.
- The homepage uses a responsive grid: introduction/photo/actions in mobile order, with an inline desktop action group; manual photo carousel controls use the shared Button component for accessible interaction.
