'use strict';

/**
 * Currency Input Plugin
 *
 * A currency input plugin
 */
const validation = require('./lib/validation.js');

/**
 * Currency Input Plugin
 * @module currencyInputPlugin
 */
module.exports = {
  name: 'boolean',
  description: 'A boolean input type',
  validation: {
    currencyValidation: validation,
  },
  inputs: {
    currency: {
      validation: {
        function: 'currencyValidation',
        on: 'blur',
      },
      label: 'Please enter a currency',
      placeholder: '42.42',
      type: 'number',
      settings: {
        min: 0,
        step: '0.01',
        symbol: '$',
      },
    },
  },
  html: '<label for="{{currency.id}}">{{currency.label}}</label>{{currency.symbol}}<input type="{{currency.type}}" id="{{currency.id}}" min="{{currency.min}}" name="{{currency.name}}" step="{{currency.step}}" value="{{currency.value}}" placeholder="{{currency.placeholder}}" />',
};
