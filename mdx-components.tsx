import type { MDXComponents } from 'mdx/types'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (p) => <h2 className="mt-10 text-2xl font-semibold" {...p} />,
    p: (p) => <p className="mt-4 leading-7 text-muted-foreground" {...p} />,
    ...components,
  }
}
