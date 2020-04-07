const octoFinder = require('./octo-finder')
const users = require('./octos')

describe('Exploring the octo world', () => {
  it.only('should return all octos from the WEBF tribe', function () {
    expect(octoFinder.findWebfOctos(users))
      .toEqual(['Pierrette', 'Antoine', 'Léo', 'Brandone'])
  })
  it.only('should return all octos whose best friend is NOT in their own tribe', function () {
    expect(octoFinder.findSocialOctos(users))
      .toEqual(['Arnaud', 'Mila', 'Léo'])
  })
  it.only('should find octos who like java and dont like javascript or node', function () {
    expect(octoFinder.findJavaScriptHaters(users))
      .toEqual(['Nelson', 'Mila'].reverse())
  })
  it('should find all the langages that octos like, without duplications', function () {
    expect(octoFinder.findOctoLangages(users))
      .toEqual(['javascript', 'node', 'java', 'c#', 'php', 'ruby', 'python'])
  })
  it('should find the most appreciated octo', function () {
    expect(octoFinder.findTheMostAppreciatedOcto(users))
      .toEqual({ id: 2, name: 'Pierrette' })
  })
  it('should find the biggest tribe', function (users) {
    expect(octoFinder.findTheBiggestTribe(users))
      .toEqual('WEBF')
  })
  it('should find the number of distinct octos by polygram sorted like expected', function () {
    expect(octoFinder.findAllPolygrams(users)).toEqual([
      'AHU',
      'ARD',
      'BRM',
      'GUE',
      'PBB',
      'MID',
      'NDC',
      'RED',
      'LJA',
      'CHAN',
      'JUXI'
    ])
  })
})
