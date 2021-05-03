import {Selector} from 'testcafe';

const checkBox = Selector('#tried-test-cafe');
const slider = Selector('#slider');

fixture ("dragTest Fixture")
.page("https://devexpress.github.io/testcafe/example/")

test("Drag Test",async t=>{
    await t
    .setTestSpeed(0.01)
    .click(checkBox)
    .drag(slider,180,0,{offsetX:0, offsetY:0});
});