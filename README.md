# Plastic Labs Landing

Plastic Labs is a static website built atop the [nextjs framework](https://nextjs.org/) and delivered via [Cloudflare pages](https://pages.cloudflare.com/).

## Organization

Plastic Labs landing site, Honcho landing site and Bloom landing site are all sister sites and share similar root code as it applies to a shared UI and styling, which can be seen in the sites and also via Storybook stories nested adjacent to the component which they represent.

### File Structure

While the codebases each have unique components and palettes dedicated to their unique presentations, they overlap quite a bit and do share code. (This overlap is manual; not managed via any private packaging or modules for instance.) Within each of these sister repos, the following structure is maintained:

- `.storybook` - Storybook configuration files; should be identical save different “brand” names, etc.
- `app` - Nextjs page, layout, providers and SEO/OG files served publicly.
- `components`
  - `composed` - Landing-page-specific composed components, such as partner lists, assembled text blocks, etc.
  - `core` - Nearly identical shared “core” components; the logo/workmark being the only items that vary.
  - `helpers` - Identical Storybook helper components.
  - `illos` - Completely unique illo components dedicated to each landing site.
  - `interactive` - Very similar components such as buttons (identical) but with some additional landing-page-specific interactive components.
  - `layout` - Major segments of the page layout structure; they are identical save the header.
  - `sections` - Page sections built to the exact need of the landing site.
- `contexts` - Theming shared across all sister landing sites.
- `fonts` - Fonts used consistently in all the sister landing sites.
- `hooks` - Any hooks specific to the landing site.
- `public` - The static file root; typically containing only files necessary for the specific landing site.
- `styles` - Theming types and constants which are very consistent across the sisters, save the palette colors and gradients.
- `utils` - Utility methods used in all the sisters landing sites.

When updating code in one of the sister repos, consider duplicating the change in the others should it be shared across.

### Component Structure

The more formal components all share a similar internal structure:

- `component-name`
  - `component-name.constants.ts` - any constants worth drawing out (optional)
  - `component-name.stories.ts` - all the Storybook stories demonstrating this component
  - `component-name.tsx` - the component and its styles
  - `component-name.types.ts` - the component props and any other necessary types
  - `component-name.utils.ts` - any methods worth pulling out (optional)
  - `index.ts` - named exports of anything that can be referenced outside the component

While many of the styles are delivered via CSS variables, all of the theme colors, variants, etc. are typesafe due to the designated types for the component itself.

### Theming

As each sister landing site has both light and dark variations, they all use the same means of flipping the coloration when needed, all served from the global styles via CSS variables. Within the styles folder are the light and dark themes, which explicitly assign the colors to the CSS variables.

Like the components, a number of the CSS variable names are the same across the sisters, but where additional explicit control was needed, some additional colors were assigned and will be referenced from components.

## Development

### Getting Started

After cloning the repo locally, use the following routine to keep your local up-to-date and make changes over time. With every new (terminal) session, be sure to use the correct version of node/npm, to reduce inadvertent issues due to versioning.

```bash
cd into/the/repo/root
nvm use
```

If it’s your first use or the package has changed, be sure to update node_modules:

```bash
npm i
```

To serve the development version of the site at `http://localhost:3000`:

```bash
npm run dev
```

To serve a production version of the site at `http://localhost:3000`:

```bash
npm run build
npm run start
```

### Using Storybook

This repo includes Storybook as a means to test the UI outside of the context of any usage in this landing site, and make sure that any changes do not inadvertently affect other variants and states that might be used.

For instance, it is far faster to test changes to the button styling in Storybook, as the “States” story shows all three variants across the possible states: idle, hover, pressed and disabled. And you can test light/dark theming in Storybook as well as it loads the same global stylesheet as the landing site does.

To begin using Storybook, start it:

```bash
npm run storybook
```

Storybook will then attempt to open your default browser with it’s standard root address `http://localhost:6006`. (You can simply use that address if you’ve disallowed the terminal’s ability to open a browser window.)

You will then be able to trip through the existing stories, find any you’d like to check/test/work against and proceed from there. Storybook stories auto-doc the component props, but many have also been enhanced with controls to supply relevant controls.

For the illos in particular, the Storybook stories typically allow you to play with various settings, most often `duration` so that you can play with the UX of the illustration before putting it out there in dev or prod.

**Note:** If you do make a change that impacts the global stylesheet, adds files to `public`, or other such root changes, expect that you should exit and restart Storybook. It has hot-reloading and tracks changes in any file which was available at the time it launched, but is less good at picking up changes that occur through file additions/removals.
