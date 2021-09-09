export default class RecruitmentPage {
    linkRecruitment ="a[id=menu_recruitment_viewRecruitmentModule]"
    txtFirstName = "input[id=addCandidate_firstName]" 
    txtLastName = "input[id=addCandidate_lastName]" 
    txtEmail = "input[id=addCandidate_email]" 
    txtContactNo = "input[id=addCandidate_contactNo]" 
    txtKeywords = "input[id=addCandidate_keyWords]" 
    txtComments = "input[id=addCandidate_comment]" 
    txtApplyDate = "input[id=addCandidate_appliedDate]" 
    selectJobVacancy = "select[id=addCandidate_vacancy]" 
    txtSearchCandidate ="input[id=candidateSearch_candidateName]"
    btnSearch          ="input[value=Search]"


    fillApplicantDetails(firstname, lastname, email, phoneno, jobvacancy, keywords,comments, applydate) {
        cy.get(this.txtFirstName).clear()
        cy.get(this.txtFirstName).type(firstname)
        cy.get(this.txtLastName).clear()
        cy.get(this.txtLastName).type(lastname)
        cy.get(this.txtEmail).clear()
        cy.get(this.txtEmail).type(email)
        cy.get(this.txtContactNo).clear()
        cy.get(this.txtContactNo).type(phoneno)
        cy.get(this.selectJobVacancy).eq(0).select(jobvacancy)
        cy.get(this.txtKeywords).clear()
        cy.get(this.txtKeywords).type(keywords)
        // cy.get(this.txtComments).clear()
        // cy.get(this.txtComments).type(comments)
        cy.get(this.txtApplyDate).clear()
        cy.get(this.txtApplyDate).type(applydate)
    }
    clickRecruitmentModuleLink() {
        cy.get(this.linkRecruitment).click({force: true})
    }
    uploadResumeFile() {
        const fileName = 'test.docx';
        cy.get('#addCandidate_resume').attachFile(fileName);
        cy.log('file uploaded successfully')
    }

    verifyApplicationStatus(status){             
        cy.get('span.status').should('have.text',status);
        cy.log('status verified')
    }

    searchCandidate(candidate){
        cy.get(this.txtSearchCandidate).type(candidate)
        cy.get(this.btnSearch).click()
    }

    clickDownloadLink(){
        cy.get('div.box.noHeader:nth-child(2) div.inner table.table.hover tbody:nth-child(2) tr.odd td.left:nth-child(7) > a:nth-child(1)').click()
        //cy.downloadFile('https://opensource-demo.orangehrmlive.com/index.php/recruitment/viewCandidates','mydownloads','resume.docx')
        cy.log('file downloaded successfully')
    }
}
