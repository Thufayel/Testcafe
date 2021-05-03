import {Selector} from "testcafe";

const dName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
        .typeText(dName,"Test")
        .click(osName)
        .click(submitButton);
});
test("Second Test", async t =>{
    await t
        .typeText(dName,"Test")
        .click(osName)
        .click(submitButton);
});
test("Third Test", async t =>{
    await t
        .typeText(dName,"Test")
        .click(osName)
        .click(submitButton);
});