const reporter = require('cucumber-html-reporter');
const addContext = require('cucumber-html-reporter/addContext')

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/cucumber-json',
  output: 'reports/html_simple/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};


Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
      addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
  }
})
reporter.generate(options);