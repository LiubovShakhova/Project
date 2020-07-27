'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'element-remove-polyfill';

import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import addMore from './modules/addMore';
import constructor from './modules/constructor';
import calculator from './modules/calculator';

//PopUp on link
togglePopUp();
// Send Forms
sendForm();
// Accordion
accordion();
//Add more cards
addMore();
//Calculator
constructor();
calculator();