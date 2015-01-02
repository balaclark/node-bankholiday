'use strict';

var assert = require('assert');
var bankHolidayFR = require('..').FR;

describe('France bank holidays - 2014', function() {

    var bankHolidays = [];

    beforeEach(function(done) {
        bankHolidays = bankHolidayFR.findAll(2014);
        done();
    });

    it('total', function(done) {
        assert.ok(bankHolidays.length === 11);
        done();
    });

    it('newYear', function(done) {
        assert.ok(bankHolidays.indexOf('2014-01-01') >= 0);
        done();
    });

    it('easterMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2014-04-21') >= 0);
        done();
    });

    it('ascensionDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-05-29') >= 0);
        done();
    });

    it('pentecoteMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2014-06-09') >= 0);
        done();
    });

    it('workDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-05-01') >= 0);
        done();
    });

    it('ww2End', function(done) {
        assert.ok(bankHolidays.indexOf('2014-05-08') >= 0);
        done();
    });

    it('nationalDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-07-14') >= 0);
        done();
    });

    it('assumptionDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-08-15') >= 0);
        done();
    });

    it('deadDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-11-01') >= 0);
        done();
    });

    it('ww1End', function(done) {
        assert.ok(bankHolidays.indexOf('2014-11-11') >= 0);
        done();
    });

    it('christmas', function(done) {
        assert.ok(bankHolidays.indexOf('2014-12-25') >= 0);
        done();
    });
});

describe('France bank holidays - 2015', function() {

    var bankHolidays = [];

    beforeEach(function(done) {
        bankHolidays = bankHolidayFR.findAll(2015);
        done();
    });

    it('total', function(done) {
        assert.ok(bankHolidays.length === 11);
        done();
    });

    it('newYear', function(done) {
        assert.ok(bankHolidays.indexOf('2015-01-01') >= 0);
        done();
    });

    it('easterMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2015-04-06') >= 0);
        done();
    });

    it('ascensionDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-05-14') >= 0);
        done();
    });

    it('pentecoteMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2015-05-25') >= 0);
        done();
    });

    it('workDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-05-01') >= 0);
        done();
    });

    it('ww2End', function(done) {
        assert.ok(bankHolidays.indexOf('2015-05-08') >= 0);
        done();
    });

    it('nationalDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-07-14') >= 0);
        done();
    });

    it('assumptionDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-08-15') >= 0);
        done();
    });

    it('deadDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-11-01') >= 0);
        done();
    });

    it('ww1End', function(done) {
        assert.ok(bankHolidays.indexOf('2015-11-11') >= 0);
        done();
    });

    it('christmas', function(done) {
        assert.ok(bankHolidays.indexOf('2015-12-25') >= 0);
        done();
    });
});


describe('France bank holidays - 2016', function() {

    var bankHolidays = [];

    beforeEach(function(done) {
        bankHolidays = bankHolidayFR.findAll(2016);
        done();
    });

    it('total', function(done) {
        assert.ok(bankHolidays.length === 11);
        done();
    });

    it('newYear', function(done) {
        assert.ok(bankHolidays.indexOf('2016-01-01') >= 0);
        done();
    });

    it('easterMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2016-03-28') >= 0);
        done();
    });

    it('ascensionDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-05-05') >= 0);
        done();
    });

    it('pentecoteMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2016-05-16') >= 0);
        done();
    });

    it('workDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-05-01') >= 0);
        done();
    });

    it('ww2End', function(done) {
        assert.ok(bankHolidays.indexOf('2016-05-08') >= 0);
        done();
    });

    it('nationalDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-07-14') >= 0);
        done();
    });

    it('assumptionDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-08-15') >= 0);
        done();
    });

    it('deadDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-11-01') >= 0);
        done();
    });

    it('ww1End', function(done) {
        assert.ok(bankHolidays.indexOf('2016-11-11') >= 0);
        done();
    });

    it('christmas', function(done) {
        assert.ok(bankHolidays.indexOf('2016-12-25') >= 0);
        done();
    });
});
