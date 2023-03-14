gdjs.ChooseCode = {};
gdjs.ChooseCode.GDsmalltenfrObjects1= [];
gdjs.ChooseCode.GDsmalltenfrObjects2= [];
gdjs.ChooseCode.GDNewSpriteObjects1= [];
gdjs.ChooseCode.GDNewSpriteObjects2= [];
gdjs.ChooseCode.GDNewSprite2Objects1= [];
gdjs.ChooseCode.GDNewSprite2Objects2= [];
gdjs.ChooseCode.GDoneObjects1= [];
gdjs.ChooseCode.GDoneObjects2= [];
gdjs.ChooseCode.GDNewTextObjects1= [];
gdjs.ChooseCode.GDNewTextObjects2= [];

gdjs.ChooseCode.conditionTrue_0 = {val:false};
gdjs.ChooseCode.condition0IsTrue_0 = {val:false};
gdjs.ChooseCode.condition1IsTrue_0 = {val:false};
gdjs.ChooseCode.condition2IsTrue_0 = {val:false};


gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.ChooseCode.GDNewSpriteObjects1});
gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.ChooseCode.GDNewSprite2Objects1});
gdjs.ChooseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ChooseCode.GDNewSpriteObjects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
gdjs.ChooseCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ChooseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1 frame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ChooseCode.GDNewSprite2Objects1);

gdjs.ChooseCode.condition0IsTrue_0.val = false;
gdjs.ChooseCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCode.mapOfGDgdjs_46ChooseCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ChooseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2 frames", false);
}}

}


};

gdjs.ChooseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChooseCode.GDsmalltenfrObjects1.length = 0;
gdjs.ChooseCode.GDsmalltenfrObjects2.length = 0;
gdjs.ChooseCode.GDNewSpriteObjects1.length = 0;
gdjs.ChooseCode.GDNewSpriteObjects2.length = 0;
gdjs.ChooseCode.GDNewSprite2Objects1.length = 0;
gdjs.ChooseCode.GDNewSprite2Objects2.length = 0;
gdjs.ChooseCode.GDoneObjects1.length = 0;
gdjs.ChooseCode.GDoneObjects2.length = 0;
gdjs.ChooseCode.GDNewTextObjects1.length = 0;
gdjs.ChooseCode.GDNewTextObjects2.length = 0;

gdjs.ChooseCode.eventsList0(runtimeScene);

return;

}

gdjs['ChooseCode'] = gdjs.ChooseCode;
