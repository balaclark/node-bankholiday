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
        all.push(c.newYear(year));
        all.push(this.easterMonday(year));
        all.push(this.ascensionDay(year));
        all.push(this.pentecoteMonday(year));
        all.push(this.workDay(year));
        all.push(this.ww2End(year));
        all.push(this.nationalDay(year));
        all.push(this.assumptionDay(year));
        all.push(this.deadDay(year));
        all.push(this.ww1End(year));
        all.push(c.christmas(year));
        return all;
    },

    /**
     * Easter Monday.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    easterMonday: function(year) {
        var easterSunday = c.easterSunday(year);
        return moment(easterSunday).add(1, 'days').format('YYYY-MM-DD');
    },

    /**
     * Ascension day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    ascensionDay: function(year) {
        var easterSunday = c.easterSunday(year);
        return moment(easterSunday).add(39, 'days').format('YYYY-MM-DD');
    },

    /**
     * Pentecote day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    pentecoteMonday: function(year) {
        var easterSunday = c.easterSunday(year);
        return moment(easterSunday).add(50, 'days').format('YYYY-MM-DD');
    },

    /**
     * Work day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    workDay: function(year) {
        return util.format('%s-05-01', year);
    },

    /**
     * The WW2 End.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    ww2End: function(year) {
        return util.format('%s-05-08', year);
    },

    /**
     * National day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    nationalDay: function(year) {
        return util.format('%s-07-14', year);
    },

    /**
     * Assumption day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    assumptionDay: function(year) {
        return util.format('%s-08-15', year);
    },

    /**
     * The Dead day.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    deadDay: function(year) {
        return util.format('%s-11-01', year);
    },

    /**
     * The WW2 End.
     * @param  {int} year the year in YYYY format.
     * @return {String}      the date in YYYY-MM-DD format.
     */
    ww1End: function(year) {
        return util.format('%s-11-11', year);
    }
};
