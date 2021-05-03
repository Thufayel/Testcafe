fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
        .typeText("#developer-name","Test")
        .click("#macos")
        .click("#submit-button");

});