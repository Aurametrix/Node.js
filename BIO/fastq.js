/*  module.exports = require('./lib/bionode-fastq')  */

/* global describe, it */
'use strict'
require('chai').should()
var fastq = require('../index')

describe('toFastQ', function () {
  this.timeout(4000)
  var output = []

  it('should run without error', function (done) {
    var applyToEach = function (item) {
      output.push(item)
    }
    var onEnd = function (err) {
      if (err) {
        return done(err)
      }
      return done()
    }

    fastq.read('test/data/sample.fq').on('data', applyToEach).on('end', onEnd)
  })

  it('should process 100 objects', function (done) {
    output.length.should.equal(100)
    done()
  })
})
Status API Training Shop Blog About Pricing
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
