fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

//test.only will only execute the test that contains the test.only keyword and will skip the rest of the test.
test.only("First Test", async t =>{
    await t
        .typeText("#developer-name","Test")
        .click("#macos")
        .click("#submit-button");

});

test("Second Test", async t =>{
    await t
        .typeText("#developer-name","Test")
        .click("#macos")
        .click("#submit-button");

});

test("Third Test", async t =>{
    await t
        .typeText("#developer-name","Test")
        .click("#macos")
        .click("#submit-button");

});