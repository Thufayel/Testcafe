import {Selector} from 'testcafe'

const choosFile = Selector("#file-upload");
const clickUpload = Selector("#file-submit");

fixture("File Upload")
.page("https://the-internet.herokuapp.com/upload")

test("Fileupload Test", async t=>{
    await t
    .setTestSpeed(0.01)
    .setFilesToUpload(choosFile,'../../upload/Pluralsight_Invoice.pdf')
    .click(clickUpload);

});