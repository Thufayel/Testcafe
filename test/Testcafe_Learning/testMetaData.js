import {Selector} from "testcafe";

const dName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture.meta('Version','1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test.meta('env','production')
("First Test", async t =>{
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
test.meta('env','production')
("Third Test", async t =>{
    await t
        .typeText(dName,"Test")
        .click(osName)
        .click(submitButton);
});

//We are using metadeta which takes key value pair and we can filter our test through it.
//On the above code snippet we can only execute First and Third tests by specifying env=production
//Command :npx testcafe chrome Tests/testMetaData.js --test-meta env=production
