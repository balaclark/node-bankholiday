'use strict';

var util = require('util'),
    _ = require('underscore.string');

module.exports = {
	/**
	 * New year day.
	 * @param  {int} year the year in YYYY format.
	 * @return {String}      the date in YYYY-MM-DD format.
	 */
	newYear: function(year) {
		return util.format('%s-01-01', year);
	},

	/**
	 * Christmas day.
	 * @param  {int} year the year in YYYY format.
	 * @return {String}      the date in YYYY-MM-DD format.
	 */
	christmas: function(year) {
		return util.format('%s-12-25', year);
	},

    /**
     * Easter Sunday.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    easterSunday: function(year) {
        var a = year % 19;
        var b = Math.floor(year / 100);
        var c = year % 100;
        var d = Math.floor(b / 4);
        var e = b % 4;
        var f = Math.floor((b + 8) / 25);
        var g = Math.floor((b - f + 1) / 3);
        var h = (19 * a + b - d - g + 15) % 30;
        var i = Math.floor(c / 4);
        var k = c % 4;
        var l = (32 + 2 * e + 2 * i - h - k) % 7;
        var m = Math.floor((a + 11 * h + 22 * l) / 451);
        var n = Math.floor((h + l - 7 * m + 114) / 31);
        var p = (h + l - 7 * m + 114) % 31;
        return util.format('%s-%s-%s', year, _.pad(n, 2, '0'), _.pad(p + 1, 2, '0'));
    }
};