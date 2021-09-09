// 'use strict';
// import{ browser } from 'protractor';
// import { log4js } from '../../../node_modules/log4js';
// import {Status } from '../../../node_modules/cucumber';

// const Before = require('cucumber').Before;
// const After = require('cucumber').After;
// const chalk = require('chalk');

// //const log4js = require("log4js");
// const logger = log4js.getLogger('hooks');
// logger.level = "debug";
// logger.debug("-----In Before-----");

// Before({ 
//     timeout: 300 * 1000,
// },async (scenario) => {
//     logger.info('************************************************************');
//     logger.info('Scenario :', scenario.pickle.name)


// });


// After(async function (scenario) {
//     logger.debug('-----In After-----');
//     try{
//     if(scenario.result.status === Status.FAILED)
//     {
//         browser.params.failCount++;
//         logger.debug('-----Test Scenario Failed-----');
//         const screenshot =await browser.takeScreenshot();
//         this.attach(screenshot,'image/png');
//         logger.debug('Screenshot captured for failed step');


//     }

//     else{
//         logger.debug('-----Test Scenario Passed-----');
//         browser.params.passCount++;
//     }
//     logger.debug('***********************************************')
// }catch(error){
//         logger.debug('Caught error:'+error);
//     }

    
// });
