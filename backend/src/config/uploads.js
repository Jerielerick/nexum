const fs = require('fs')
const path = require('path')

const uploadDir = path.resolve(__dirname, '..', '..', 'uploads')
const uploadPublicPath = '/uploads'

const ensureUploadDir = () => {
  fs.mkdirSync(uploadDir, { recursive: true })
}

module.exports = {
  uploadDir,
  uploadPublicPath,
  ensureUploadDir
}
