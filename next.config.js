require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    const fileName =
      process.env.NODE_ENV === 'development'
        ? '.env.development'
        : '.env.production'

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
