import {Selector} from 'testcafe'

const selection = Selector('#preferred-interface');
const selectOption = selection.find('option');

fixture ("Dropdown")
.page("https://devexpress.github.io/testcafe/example/");

test("Dropdown Test", async t=> {
    await t
    .click(selection)
    .click(selectOption.withText('Both'));
})