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

//PopUp on link
togglePopUp();
// Send Forms
sendForm();
// Accordion
accordion();