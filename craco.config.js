const fs = require('fs')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

const localKeyPath = './keys/localhost-key.pem'
const localCertPath = './keys/localhost.pem'

const hasLocalKeys = fs.existsSync(localCertPath) && fs.existsSync(localKeyPath)

module.exports = {
  plugins: [{
    plugin: reactHotReloadPlugin
  }],
  devServer: {
    https: hasLocalKeys ? {
      key: fs.readFileSync(localKeyPath),
      cert: fs.readFileSync(localCertPath)
    } : true
  }
}
