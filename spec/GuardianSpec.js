'use strict'
/* global describe, it */

describe('Guardian', () => {
  describe('#getHeadlines', () => {
    it('gets the headlines', () => {
      let guardian = new Guardian
      let requestMock = { open: () => {}, send: () => {} }

      guardian.getHeadlines(requestMock)
      guardian.headlines.push(mockResponse.response.results)

      expect(guardian.headlines[0].length).toEqual(10)
    })
  })
})