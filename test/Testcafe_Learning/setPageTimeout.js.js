fixture("et Page Timeout Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Set Page Timeout Test", async t =>{
    await t
        .setPageLoadTimeout(0)
        .navigateTo("www.google.com");

});