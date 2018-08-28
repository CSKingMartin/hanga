const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')

const config = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: config => {
    config.resolve.extensions.push('.mdx')
    return config
  }
}

module.exports =
  withMDX({ })(
    withCSS(config)
  )
