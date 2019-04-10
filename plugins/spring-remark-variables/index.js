"use strict"
const visit = require(`unist-util-visit`)
const get = require(`lodash.get`)
const set = require(`lodash.set`)
const startsWith = require(`lodash.startswith`)

const processVars = (content, data) => {
  return content.replace(/%(.+)%/g, (match, key) => {
    const value = data[key]
    if (typeof value !== "undefined") {
      return value
    }
    return match
  })
}

module.exports = ({ markdownAST }, options = { variables: null }) => {
  visit(markdownAST, `text`, node => {
    node.value = processVars(node.value, options.variables || {})
  })
  return markdownAST
}
