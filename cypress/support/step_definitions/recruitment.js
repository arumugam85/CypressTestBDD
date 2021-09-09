import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"
import RecruitmentPage from '../../integration/pages/RecruitmentPage'
const recruit =new RecruitmentPage()


   When('Add candidate {string}, {string}, {string}, {string}, {string}, {string},{string}, {string} details for the job posting',(firstname,lastname,email,phonono,jobvacancy,keywords,comments,applydate)=>{

        recruit.fillApplicantDetails(firstname,lastname,email,phonono,jobvacancy,keywords,comments,applydate);

});

And('Click Recruitment Module Link',() =>{

    recruit.clickRecruitmentModuleLink()
})


And('Upload Resume for the job posting',() =>{

    recruit.uploadResumeFile()
    cy.log('file uploaded')
})

When ('Verify status {string} after apply for a job',(status)=>{

    recruit.verifyApplicationStatus(status);
})


When ('Search candidate {string} from the table',(candidate)=>{

    recruit.searchCandidate(candidate);
})

When ('Download File for the job posting',()=>{

    recruit.clickDownloadLink();
})



