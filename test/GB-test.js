'use strict';

var assert = require('assert');
var bankHolidayGB = require('..').GB;

describe('Great Britain bank holidays - 2014', function() {

    var bankHolidays = [];

    beforeEach(function(done) {
        bankHolidays = bankHolidayGB.findAll(2014);
        done();
    });

    it('total', function(done) {
        assert.ok(bankHolidays.length === 8);
        done();
    });

    it('newYear', function(done) {
        assert.ok(bankHolidays.indexOf('2014-01-01') >= 0);
        done();
    });

    it('santaFriday', function(done) {
        assert.ok(bankHolidays.indexOf('2014-04-18') >= 0);
        done();
    });

    it('easterMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2014-04-21') >= 0);
        done();
    });

    it('mayDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-05-05') >= 0);
        done();
    });

    it('springDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-05-26') >= 0);
        done();
    });

    it('summerDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-08-25') >= 0);
        done();
    });

    it('christmas', function(done) {
        assert.ok(bankHolidays.indexOf('2014-12-25') >= 0);
        done();
    });

    it('boxingDay', function(done) {
        assert.ok(bankHolidays.indexOf('2014-12-26') >= 0);
        done();
    });
});

describe('Great Britain bank holidays - 2015', function() {

    var bankHolidays = [];

    beforeEach(function(done) {
        bankHolidays = bankHolidayGB.findAll(2015);
        done();
    });

    it('total', function(done) {
        assert.ok(bankHolidays.length === 8);
        done();
    });

    it('newYear', function(done) {
        assert.ok(bankHolidays.indexOf('2015-01-01') >= 0);
        done();
    });

    it('santaFriday', function(done) {
        assert.ok(bankHolidays.indexOf('2015-04-03') >= 0);
        done();
    });

    it('easterMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2015-04-06') >= 0);
        done();
    });

    it('mayDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-05-04') >= 0);
        done();
    });

    it('springDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-05-25') >= 0);
        done();
    });

    it('summerDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-08-31') >= 0);
        done();
    });

    it('christmas', function(done) {
        assert.ok(bankHolidays.indexOf('2015-12-25') >= 0);
        done();
    });

    it('boxingDay', function(done) {
        assert.ok(bankHolidays.indexOf('2015-12-28') >= 0);
        done();
    });
});


describe('Great Britain bank holidays - 2016', function() {

    var bankHolidays = [];

    beforeEach(function(done) {
        bankHolidays = bankHolidayGB.findAll(2016);
        done();
    });

    it('total', function(done) {
        assert.ok(bankHolidays.length === 8);
        done();
    });

    it('newYear', function(done) {
        assert.ok(bankHolidays.indexOf('2016-01-01') >= 0);
        done();
    });

    it('santaFriday', function(done) {
        assert.ok(bankHolidays.indexOf('2016-03-25') >= 0);
        done();
    });

    it('easterMonday', function(done) {
        assert.ok(bankHolidays.indexOf('2016-03-28') >= 0);
        done();
    });

    it('mayDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-05-02') >= 0);
        done();
    });

    it('springDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-05-30') >= 0);
        done();
    });

    it('summerDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-08-29') >= 0);
        done();
    });

    it('christmas', function(done) {
        assert.ok(bankHolidays.indexOf('2016-12-27') >= 0);
        done();
    });

    it('boxingDay', function(done) {
        assert.ok(bankHolidays.indexOf('2016-12-26') >= 0);
        done();
    });
});
