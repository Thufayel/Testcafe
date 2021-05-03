import {Selector} from "testcafe";

const dName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
        .expect(dName.value).eql("","The field is empty")
        .typeText(dName,"Test")
        //Failing the test intentionally to test assertion
        .expect(dName.value).eql("Testing","Test is present in the field")
        .click(osName)
        .click(submitButton);
});