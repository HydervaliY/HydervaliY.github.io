import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX()
const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  output: 'export',
      basePath: process.env.NODE_ENV === 'production' ? '/HydervaliY.github.io' : '',
      assetPrefix: process.env.NODE_ENV === 'production' ? '/HydervaliY.github.io/' : ''
}
export default withMDX(nextConfig)
