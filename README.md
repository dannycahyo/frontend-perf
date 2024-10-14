# Frontend Performance Techniques

This project contains examples of various frontend performance optimization techniques. Each technique is demonstrated in its own directory with a simple implementation.

## Directories and Techniques

### 1. Bundling, Compiling, Minifying, Tree-Shaking with Vite

**Directory:** `bundling-vite`

- Demonstrates how to use Vite for bundling, compiling, minifying, and tree-shaking to reduce file sizes and improve load times.

### 2. Dynamic Import with React Lazy

**Directory:** `dynamic-import`

- Shows how to use React's `lazy` and `Suspense` to dynamically import components, loading them only when necessary.

### 3. Import on Visibility & Lazy Loading with react-loadable-visibility

**Directory:** `lazy-loading`

- Demonstrates lazy loading of components using `react-loadable-visibility`, which loads components only when they are visible in the viewport.
- Demonstrates the lazy loading of images by setting the `loading` attribute to `lazy` in the img html tags.

### 4. List Virtualization with react-virtualized

**Directory:** `list-virtualization`

- Uses `react-virtualized` to efficiently render large lists by only rendering visible items, improving performance.

### 5. Prefetching with Next.js

**Directory:** `prefetching-nextjs`

- Shows how to use Next.js's `Link` component with prefetching to load resources before they are needed, improving navigation speed.

### 6. Cache-Control & CDN with Next.js

**Directory:** `cache-control-nextjs`

- Demonstrates setting HTTP caching headers in a Next.js application to optimize content delivery using Cache-Control headers.
