/* eslint-disable no-await-in-loop */
const fs = require('fs')

const { minify } = require('html-minifier')

function writeFile() {
  const headBuffer = fs.readFileSync('./src/head.html')
  const partytowBuffer = fs.readFileSync('./public/~partytown/partytown.js')

  fs.writeFileSync(
    './pixel/head.html',
    `${headBuffer.toString()}<script>${partytowBuffer.toString()}</script>`
  )
}

function minifyFile() {
  const headBuffer = fs.readFileSync('./pixel/head.html')

  fs.writeFileSync(
    './pixel/head.html',
    minify(headBuffer.toString(), { minifyJS: true, collapseWhitespace: true })
  )
}

async function build() {
  writeFile()
  minifyFile()
}

build()
