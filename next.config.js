require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.resolve.alias['components'] = path.join(
      __dirname,
      'src',
      'components',
    )
    config.resolve.alias['constants'] = path.join(__dirname, 'src', 'constants')
    config.resolve.alias['pages'] = path.join(__dirname, 'src', 'pages')
    config.resolve.alias['hooks'] = path.join(__dirname, 'src', 'hooks')
    config.resolve.alias['utils'] = path.join(__dirname, 'src', 'utils')
    config.resolve.alias['interfaces'] = path.join(
      __dirname,
      'src',
      'interfaces',
    )

    config.plugins = config.plugins || []

    const fileName = `.env.${process.env.NODE_ENV}`

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, fileName),
        systemvars: true,
      }),
    ]

    return config
  },
}
