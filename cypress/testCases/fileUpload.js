
describe('file uploads',()=>{

it('single file upload',()=>{     
    cy.visit('http://the-internet.herokuapp.com/upload')

    // File Upload and it should be in fixtures folder
    cy.get('#file-upload').attachFile('files/Copy of Model Interface May.xlsm')
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').contains('Copy of Model Interface May.xlsm')    
})

it('File Upload - Rename',()=>{
    cy.visit('http://the-internet.herokuapp.com/upload')

    //rename file while uploading
    cy.get('#file-upload')
    .attachFile({filePath: 'files/Copy of Model Interface May.xlsm', fileName: 'Rename File'})
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').contains('Rename File')
})

it('Drag and drop file upload',()=>{
    cy.visit('http://the-internet.herokuapp.com/upload')

    // Drag and drop file upload
    cy.get('#drag-drop-upload').attachFile('files/Copy of Model Interface May.xlsm', { subjectType: 'drag-n-drop' })  
    
    // Verifing the file name on the drag and drop area
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
    .contains('Copy of Model Interface May.xlsm')

})

it('multiple file upload',()=>{ 
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    
    //test case to upload multiple files
    cy.get('#filesToUpload')
    .attachFile(['files/Copy of Balance with Model May deleted table.xlsx','files/Copy of Model Interface May.xlsm'])
})

})      
