// Prepare folder structure
const fs = require('fs-extra');
const dir = './cucumber_report/html';

if (fs.existsSync(dir)){
fs.removeSync(dir);
}
fs.mkdirSync(dir);

// Report configuration
const reporter = require('cucumber-html-reporter');
const options = {
theme: 'bootstrap',
jsonDir: 'cucumber_report',
output: 'cucumber_report/html/cucumber_report.html',
reportSuiteAsScenarios: true,
scenarioTimestamp: true,
launchReport: true,

metadata: {
"App Version": "1.0.0",
"Environment": "STAGING",
"Browser": "Chrome Browser 87.0.4280.88",
"Platform": "Windows 10",
"Parallel": "Remote",
"Executed": "Local"
},
customData: {
  title: 'Run info',
  data: [
    { label: 'Project', value: 'Custom project' },
    { label: 'Release', value: '1.2.3' },
    { label: 'Cycle', value: 'B11221.34321' },
    { label: 'Execution Start Time', value: 'Jan 06th 2021, 04:31 PM EST' },
    { label: 'Execution End Time', value: 'Jan 06th 2021, 04:32 PM EST' },
  ],
},
};


reporter.generate(options);