import {Selector} from 'testcafe'

// const iframeName = Selector('iframe#mce_0_ifr');
// const textArea = Selector('body#tinymce.mce-content-body');
const iframeName = Selector('#mce_0_ifr');
const textArea = Selector('.mce-content-body');

fixture('iFrame')
.page("https://the-internet.herokuapp.com/iframe")

test('iFrame Test', async t => {
    await t
    .setTestSpeed(0.01)
    .switchToIframe(iframeName)
    .click(textArea)
    .pressKey("ctrl+a delete")
    .typeText(textArea, 'Hello testers')
    .expect(textArea.innerText).contains('test')
    .switchToMainWindow();

});