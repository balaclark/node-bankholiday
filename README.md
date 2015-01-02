# Soap [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]
> A NodeJS library to get bank holidays.

This module lets you list all bank holidays, for a particular year and a particular country.

## Features:

* Very simple API
* Support the following countries: FR [TBC]

## Install

Install with [npm](http://github.com/isaacs/npm):

```
  npm install bankholiday
```
## How to use (example with FR Country)
```
  var bankholidayFR = require('bankholiday').FR;
  var bankHolidays = bankHolidayFR.findAll(2014);
  console.log(bankHolidays.length, bankHolidays); 

  11 [ '2014-01-01',
  '2014-04-21',
  '2014-05-29',
  '2014-06-09',
  '2014-05-01',
  '2014-05-08',
  '2014-07-14',
  '2014-08-15',
  '2014-11-01',
  '2014-11-11',
  '2014-12-25' ]
```

## Contributors

 * Author: [Julien Baillagou](https://github.com/julb)

[downloads-image]: http://img.shields.io/npm/dm/bankholiday.svg
[npm-url]: https://npmjs.org/package/bankholiday
[npm-image]: http://img.shields.io/npm/v/bankholiday.svg

[travis-url]: https://travis-ci.org/julb/node-bankholiday
[travis-image]: http://img.shields.io/travis/julb/node-bankholiday.svg
