// Lodash might come in handy
const _ = require('lodash')

// Functional data-last primitive for more expressiveness
// These might be ugly to look at but can be used extensively elsewhere once defined
const hasFavoriteCoworker = (octo) => Boolean(octo.favoriteCoworker)
const isEqual = (path1, path2) => (obj) => _.eq(_.get(obj, path1), _.get(obj, path2))
const includeLangage = (langage) => (octo) => _.includes(octo.langages, langage)
const includeLangages = (langages) => (octo) => _.some(langages, (l) => includeLangage(l)(octo))

function findWebfOctos (octos) {
  return _(octos)
    .filter({ tribe: 'WEBF' })
    .map('name')
    .value()
}

function findSocialOctos (octos) {
  return _(octos)
    .filter(hasFavoriteCoworker)
    .reject(isEqual('tribe', 'favoriteCoworker.tribe'))
    .map('name')
    .value()
}

function findJavaScriptHaters (octos) {
  return _(octos)
    .filter(includeLangage('java'))
    .reject(includeLangages(['javascript', 'node']))
    .map('name')
    .value()
}

function findOctoLangages (octos) {
  return _(octos)
    .flatMap('langages')
    .uniq()
    .value()
}

function findTheMostAppreciatedOcto (octos) {
  return ''
}

function findTheBiggestTribe (octos) {
  return ''
}

function findAllPolygrams (octos) {
  return ''
}

module.exports = {
  findWebfOctos,
  findSocialOctos,
  findJavaScriptHaters,
  findOctoLangages,
  findTheMostAppreciatedOcto,
  findTheBiggestTribe,
  findAllPolygrams
}
