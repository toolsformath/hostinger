gdjs.OpenCode = {};
gdjs.OpenCode.GDNewSpriteObjects1= [];
gdjs.OpenCode.GDNewSpriteObjects2= [];
gdjs.OpenCode.GDgoObjects1= [];
gdjs.OpenCode.GDgoObjects2= [];

gdjs.OpenCode.conditionTrue_0 = {val:false};
gdjs.OpenCode.condition0IsTrue_0 = {val:false};
gdjs.OpenCode.condition1IsTrue_0 = {val:false};
gdjs.OpenCode.condition2IsTrue_0 = {val:false};


gdjs.OpenCode.mapOfGDgdjs_46OpenCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.OpenCode.GDNewSpriteObjects1});
gdjs.OpenCode.mapOfGDgdjs_46OpenCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.OpenCode.GDNewSpriteObjects1});
gdjs.OpenCode.mapOfGDgdjs_46OpenCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.OpenCode.GDNewSpriteObjects1});
gdjs.OpenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.OpenCode.GDNewSpriteObjects1);

gdjs.OpenCode.condition0IsTrue_0.val = false;
gdjs.OpenCode.condition1IsTrue_0.val = false;
{
gdjs.OpenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.OpenCode.condition0IsTrue_0.val ) {
{
gdjs.OpenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpenCode.mapOfGDgdjs_46OpenCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.OpenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Intro");
}{gdjs.evtTools.sound.playSound(runtimeScene, "44ddc3462dc07246225aaf1879f2daed6a983622380026dfe523482ab3710cf0_Gold 4.aac", false, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.OpenCode.GDNewSpriteObjects1);

gdjs.OpenCode.condition0IsTrue_0.val = false;
{
gdjs.OpenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpenCode.mapOfGDgdjs_46OpenCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.OpenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OpenCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.OpenCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.OpenCode.GDNewSpriteObjects1[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.OpenCode.GDNewSpriteObjects1);

gdjs.OpenCode.condition0IsTrue_0.val = false;
{
gdjs.OpenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpenCode.mapOfGDgdjs_46OpenCode_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
}if (gdjs.OpenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OpenCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.OpenCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.OpenCode.GDNewSpriteObjects1[i].setAnimationName("Start");
}
}}

}


};

gdjs.OpenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpenCode.GDNewSpriteObjects1.length = 0;
gdjs.OpenCode.GDNewSpriteObjects2.length = 0;
gdjs.OpenCode.GDgoObjects1.length = 0;
gdjs.OpenCode.GDgoObjects2.length = 0;

gdjs.OpenCode.eventsList0(runtimeScene);

return;

}

gdjs['OpenCode'] = gdjs.OpenCode;
