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
  name: 'Currency',
  description: 'A currency input plugin',
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
      },
    },
  },
  html: '<label for="{{currency.id}}">{{currency.label}}</label><input type="{{currency.type}}" id="{{currency.id}}" min="{{currency.min}}" name="{{currency.name}}" step="{{currency.step}}" value="{{currency.value}}" placeholder="{{currency.placeholder}}" />',
};
