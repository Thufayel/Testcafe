fixture('Navigate Example')
.page('https://devexpress.github.io/testcafe/example/')

test('Navigatte Test', async t => {
    await t
    .navigateTo("http://www.google.com");
})