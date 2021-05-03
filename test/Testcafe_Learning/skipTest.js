fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

//test.skip will skip the specific test
test.skip("First Test", async t =>{
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