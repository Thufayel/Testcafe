import {Selector} from "testcafe";

const dName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    //Wair till the element gets visible
    const developernameElement = await dName.with({visibilityCheck:true})();
    await t
        .expect(developernameElement.value).eql("","The field is empty")
        .typeText(dName,"Test")
        .expect(dName.value).eql("Testing","Test is present in the field")
        .click(osName)
        .click(submitButton);
});