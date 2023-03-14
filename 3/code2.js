gdjs.ChooseCode = {};
gdjs.ChooseCode.GDCardObjects1= [];
gdjs.ChooseCode.GDCardObjects2= [];
gdjs.ChooseCode.GDCard4Objects1= [];
gdjs.ChooseCode.GDCard4Objects2= [];
gdjs.ChooseCode.GDCard42Objects1= [];
gdjs.ChooseCode.GDCard42Objects2= [];
gdjs.ChooseCode.GDNewBBTextObjects1= [];
gdjs.ChooseCode.GDNewBBTextObjects2= [];
gdjs.ChooseCode.GDNewTextObjects1= [];
gdjs.ChooseCode.GDNewTextObjects2= [];
gdjs.ChooseCode.GDNewText2Objects1= [];
gdjs.ChooseCode.GDNewText2Objects2= [];
gdjs.ChooseCode.GDNewText22Objects1= [];
gdjs.ChooseCode.GDNewText22Objects2= [];
gdjs.ChooseCode.GDNewSpriteObjects1= [];
gdjs.ChooseCode.GDNewSpriteObjects2= [];
gdjs.ChooseCode.GDNewSprite2Objects1= [];
gdjs.ChooseCode.GDNewSprite2Objects2= [];
gdjs.ChooseCode.GDNewSprite3Objects1= [];
gdjs.ChooseCode.GDNewSprite3Objects2= [];

gdjs.ChooseCode.conditionTrue_0 = {val:false};
gdjs.ChooseCode.condition0IsTrue_0 = {val:false};
gdjs.ChooseCode.condition1IsTrue_0 = {val:false};
gdjs.ChooseCode.condition2IsTrue_0 = {val:false};


gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCardObjects1Objects = Hashtable.newFrom({"Card": gdjs.ChooseCode.GDCardObjects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard4Objects1Objects = Hashtable.newFrom({"Card4": gdjs.ChooseCode.GDCard4Objects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard42Objects1Objects = Hashtable.newFrom({"Card42": gdjs.ChooseCode.GDCard42Objects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCardObjects1Objects = Hashtable.newFrom({"Card": gdjs.ChooseCode.GDCardObjects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard4Objects1Objects = Hashtable.newFrom({"Card4": gdjs.ChooseCode.GDCard4Objects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard42Objects1Objects = Hashtable.newFrom({"Card42": gdjs.ChooseCode.GDCard42Objects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCardObjects1Objects = Hashtable.newFrom({"Card": gdjs.ChooseCode.GDCardObjects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard4Objects1Objects = Hashtable.newFrom({"Card4": gdjs.ChooseCode.GDCard4Objects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard42Objects1Objects = Hashtable.newFrom({"Card42": gdjs.ChooseCode.GDCard42Objects1});
gdjs.ChooseCode.eventsList0 = function(runtimeScene) {

{


gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Card"), gdjs.ChooseCode.GDCardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Card4"), gdjs.ChooseCode.GDCard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Card42"), gdjs.ChooseCode.GDCard42Objects1);
{for(var i = 0, len = gdjs.ChooseCode.GDCardObjects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCardObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.ChooseCode.GDCard4Objects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCard4Objects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.ChooseCode.GDCard42Objects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCard42Objects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card"), gdjs.ChooseCode.GDCardObjects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCardObjects1Objects, runtimeScene, true, false);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChooseCode.GDCardObjects1 */
{for(var i = 0, len = gdjs.ChooseCode.GDCardObjects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCardObjects1[i].setAnimationFrame(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card4"), gdjs.ChooseCode.GDCard4Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard4Objects1Objects, runtimeScene, true, false);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChooseCode.GDCard4Objects1 */
{for(var i = 0, len = gdjs.ChooseCode.GDCard4Objects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCard4Objects1[i].setAnimationFrame(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card42"), gdjs.ChooseCode.GDCard42Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard42Objects1Objects, runtimeScene, true, false);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChooseCode.GDCard42Objects1 */
{for(var i = 0, len = gdjs.ChooseCode.GDCard42Objects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCard42Objects1[i].setAnimationFrame(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card"), gdjs.ChooseCode.GDCardObjects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCardObjects1Objects, runtimeScene, true, true);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChooseCode.GDCardObjects1 */
{for(var i = 0, len = gdjs.ChooseCode.GDCardObjects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCardObjects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card4"), gdjs.ChooseCode.GDCard4Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard4Objects1Objects, runtimeScene, true, true);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChooseCode.GDCard4Objects1 */
{for(var i = 0, len = gdjs.ChooseCode.GDCard4Objects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCard4Objects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card42"), gdjs.ChooseCode.GDCard42Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard42Objects1Objects, runtimeScene, true, true);
}if (gdjs.ChooseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChooseCode.GDCard42Objects1 */
{for(var i = 0, len = gdjs.ChooseCode.GDCard42Objects1.length ;i < len;++i) {
    gdjs.ChooseCode.GDCard42Objects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card"), gdjs.ChooseCode.GDCardObjects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
gdjs.ChooseCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ChooseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "222c4c4667ba3a363e40fbabfd8254fb486e4bb4881207587dc0ad7fa1ab5a99_Confirm_07.aac", false, 40, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A BASE SET", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card4"), gdjs.ChooseCode.GDCard4Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
gdjs.ChooseCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ChooseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "222c4c4667ba3a363e40fbabfd8254fb486e4bb4881207587dc0ad7fa1ab5a99_Confirm_07.aac", false, 40, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A FRACTIONS SET", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Card42"), gdjs.ChooseCode.GDCard42Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
gdjs.ChooseCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDCard42Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ChooseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "222c4c4667ba3a363e40fbabfd8254fb486e4bb4881207587dc0ad7fa1ab5a99_Confirm_07.aac", false, 40, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ADVANCED FRACTIONS SET2", false);
}}

}


};

gdjs.ChooseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChooseCode.GDCardObjects1.length = 0;
gdjs.ChooseCode.GDCardObjects2.length = 0;
gdjs.ChooseCode.GDCard4Objects1.length = 0;
gdjs.ChooseCode.GDCard4Objects2.length = 0;
gdjs.ChooseCode.GDCard42Objects1.length = 0;
gdjs.ChooseCode.GDCard42Objects2.length = 0;
gdjs.ChooseCode.GDNewBBTextObjects1.length = 0;
gdjs.ChooseCode.GDNewBBTextObjects2.length = 0;
gdjs.ChooseCode.GDNewTextObjects1.length = 0;
gdjs.ChooseCode.GDNewTextObjects2.length = 0;
gdjs.ChooseCode.GDNewText2Objects1.length = 0;
gdjs.ChooseCode.GDNewText2Objects2.length = 0;
gdjs.ChooseCode.GDNewText22Objects1.length = 0;
gdjs.ChooseCode.GDNewText22Objects2.length = 0;
gdjs.ChooseCode.GDNewSpriteObjects1.length = 0;
gdjs.ChooseCode.GDNewSpriteObjects2.length = 0;
gdjs.ChooseCode.GDNewSprite2Objects1.length = 0;
gdjs.ChooseCode.GDNewSprite2Objects2.length = 0;
gdjs.ChooseCode.GDNewSprite3Objects1.length = 0;
gdjs.ChooseCode.GDNewSprite3Objects2.length = 0;

gdjs.ChooseCode.eventsList0(runtimeScene);

return;

}

gdjs['ChooseCode'] = gdjs.ChooseCode;
