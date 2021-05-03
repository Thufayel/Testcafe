import {Selector,ClientFunction} from "testcafe";

const dName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

const pageUrl = ClientFunction(()=> window.location.href);

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
        .typeText(dName,"Test")
        .click(osName)
        .click(submitButton)
        .expect(pageUrl()).contains('thank-you');
});