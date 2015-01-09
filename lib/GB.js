'use strict';

var c = require('./common'),
    util = require('util'),
    moment = require('moment');

module.exports = {
    /**
     * Get all bank holidays.
     * @param  {int} year the year in YYYY format.
     * @return {String}      The date in YYYY-MM-DD format.
     */
    findAll: function(year) {
        var all = [];
        all.push(this.newYear(year));
        all.push(this.santaFriday(year));
        all.push(this.easterMonday(year));
        all.push(this.mayDay(year));
        all.push(this.springDay(year));
        all.push(this.summerDay(year));
        all.push(this.christmas(year));
        all.push(this.boxingDay(year));
        return all;
    },

    /**
     * New year.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    newYear: function(year) {
        var newYear = c.newYear(year);
        return this.sub(newYear);
    },

    /**
     * Santa Friday.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    santaFriday: function(year) {
        var easterSunday = c.easterSunday(year);
        return this.sub(moment(easterSunday).subtract(2, 'days').format('YYYY-MM-DD'));
    },

    /**
     * Easter Monday.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    easterMonday: function(year) {
        var easterSunday = c.easterSunday(year);
        return this.sub(moment(easterSunday).add(1, 'days').format('YYYY-MM-DD'));
    },

    /**
     * May day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    mayDay: function(year) {
        var firstMondayOfMay = moment(util.format('%s-05-01', year));
        while (firstMondayOfMay.day() !== 1) {
            firstMondayOfMay.add(1, 'days');
        }
        return this.sub(firstMondayOfMay.format('YYYY-MM-DD'));
    },

    /**
     * Spring day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    springDay: function(year) {
        var lastMondayOfMay = moment(util.format('%s-05-01', year)).endOf('month');
        while (lastMondayOfMay.day() !== 1) {
            lastMondayOfMay.subtract(1, 'days');
        }
        return this.sub(lastMondayOfMay.format('YYYY-MM-DD'));
    },

    /**
     * Summer day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    summerDay: function(year) {
        var lastMondayOfAugust = moment(util.format('%s-08-01', year)).endOf('month');
        while (lastMondayOfAugust.day() !== 1) {
            lastMondayOfAugust.subtract(1, 'days');
        }
        return this.sub(lastMondayOfAugust.format('YYYY-MM-DD'));
    },

    /**
     * Christmas.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    christmas: function(year) {
        var sub = this.sub(c.christmas(year));
        if(sub === this.boxingDay(year)) {
            sub = moment(sub).add(1, 'days').format('YYYY-MM-DD');
        }
        return sub;
    },

    /**
     * Boxing day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    boxingDay: function(year) {
        return this.sub(util.format('%s-12-26', year));
    },

    /**
     * Make it substitude if necessary.
     * @param  {String} date the date in YYYY-MM-DD format.
     * @return {String}      the date in YYYY-MM-DD format substituted if necessary.
     */
    sub: function(date) {
        var m = moment(date);
        while (m.day() === 0 || m.day() === 6) {
            m.add(1, 'days');
        }
        return m.format('YYYY-MM-DD');
    }
};
