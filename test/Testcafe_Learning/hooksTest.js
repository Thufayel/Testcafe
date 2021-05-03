import {Selector} from "testcafe";

const dName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture ("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t=>{
        await t // set the window size to it's max size
            .maximizeWindow()
            .setTestSpeed(0.05)        
    });

test("First Test", async t =>{
    await t
        .typeText(dName,"Test 1")
        .click(osName)
        .click(submitButton);
});
test("Second Test", async t =>{
    await t
        .typeText(dName,"Test 2")
        .click(osName)
        .click(submitButton);
});


