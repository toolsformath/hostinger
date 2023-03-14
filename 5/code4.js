gdjs.scene1Code = {};
gdjs.scene1Code.GDNewTextObjects1= [];
gdjs.scene1Code.GDNewTextObjects2= [];
gdjs.scene1Code.GDNewText2Objects1= [];
gdjs.scene1Code.GDNewText2Objects2= [];
gdjs.scene1Code.GDNewText22Objects1= [];
gdjs.scene1Code.GDNewText22Objects2= [];
gdjs.scene1Code.GDNewSpriteObjects1= [];
gdjs.scene1Code.GDNewSpriteObjects2= [];
gdjs.scene1Code.GDNewSprite2Objects1= [];
gdjs.scene1Code.GDNewSprite2Objects2= [];
gdjs.scene1Code.GDNewText3Objects1= [];
gdjs.scene1Code.GDNewText3Objects2= [];
gdjs.scene1Code.GDNewText32Objects1= [];
gdjs.scene1Code.GDNewText32Objects2= [];
gdjs.scene1Code.GDFlatObjects1= [];
gdjs.scene1Code.GDFlatObjects2= [];
gdjs.scene1Code.GDCubeObjects1= [];
gdjs.scene1Code.GDCubeObjects2= [];

gdjs.scene1Code.conditionTrue_0 = {val:false};
gdjs.scene1Code.condition0IsTrue_0 = {val:false};
gdjs.scene1Code.condition1IsTrue_0 = {val:false};
gdjs.scene1Code.condition2IsTrue_0 = {val:false};


gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDFlatObjects1Objects = Hashtable.newFrom({"Flat": gdjs.scene1Code.GDFlatObjects1});
gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDCubeObjects1Objects = Hashtable.newFrom({"Cube": gdjs.scene1Code.GDCubeObjects1});
gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDFlatObjects1Objects = Hashtable.newFrom({"Flat": gdjs.scene1Code.GDFlatObjects1});
gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDCubeObjects1Objects = Hashtable.newFrom({"Cube": gdjs.scene1Code.GDCubeObjects1});
gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDFlatObjects1Objects = Hashtable.newFrom({"Flat": gdjs.scene1Code.GDFlatObjects1});
gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDCubeObjects1Objects = Hashtable.newFrom({"Cube": gdjs.scene1Code.GDCubeObjects1});
gdjs.scene1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Flat"), gdjs.scene1Code.GDFlatObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
gdjs.scene1Code.condition1IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDFlatObjects1Objects, runtimeScene, true, false);
}if ( gdjs.scene1Code.condition0IsTrue_0.val ) {
{
gdjs.scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "flatisone", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Click_03.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.scene1Code.GDCubeObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
gdjs.scene1Code.condition1IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDCubeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.scene1Code.condition0IsTrue_0.val ) {
{
gdjs.scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cubeisone", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Click_03.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flat"), gdjs.scene1Code.GDFlatObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDFlatObjects1Objects, runtimeScene, true, false);
}if (gdjs.scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.scene1Code.GDFlatObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDFlatObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDFlatObjects1[i].setColor("236;24;24");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.scene1Code.GDCubeObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDCubeObjects1Objects, runtimeScene, true, false);
}if (gdjs.scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.scene1Code.GDCubeObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDCubeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDCubeObjects1[i].setColor("236;24;24");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flat"), gdjs.scene1Code.GDFlatObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDFlatObjects1Objects, runtimeScene, true, true);
}if (gdjs.scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.scene1Code.GDFlatObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDFlatObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDFlatObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.scene1Code.GDCubeObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDCubeObjects1Objects, runtimeScene, true, true);
}if (gdjs.scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.scene1Code.GDCubeObjects1 */
{for(var i = 0, len = gdjs.scene1Code.GDCubeObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDCubeObjects1[i].setColor("255;255;255");
}
}}

}


};

gdjs.scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene1Code.GDNewTextObjects1.length = 0;
gdjs.scene1Code.GDNewTextObjects2.length = 0;
gdjs.scene1Code.GDNewText2Objects1.length = 0;
gdjs.scene1Code.GDNewText2Objects2.length = 0;
gdjs.scene1Code.GDNewText22Objects1.length = 0;
gdjs.scene1Code.GDNewText22Objects2.length = 0;
gdjs.scene1Code.GDNewSpriteObjects1.length = 0;
gdjs.scene1Code.GDNewSpriteObjects2.length = 0;
gdjs.scene1Code.GDNewSprite2Objects1.length = 0;
gdjs.scene1Code.GDNewSprite2Objects2.length = 0;
gdjs.scene1Code.GDNewText3Objects1.length = 0;
gdjs.scene1Code.GDNewText3Objects2.length = 0;
gdjs.scene1Code.GDNewText32Objects1.length = 0;
gdjs.scene1Code.GDNewText32Objects2.length = 0;
gdjs.scene1Code.GDFlatObjects1.length = 0;
gdjs.scene1Code.GDFlatObjects2.length = 0;
gdjs.scene1Code.GDCubeObjects1.length = 0;
gdjs.scene1Code.GDCubeObjects2.length = 0;

gdjs.scene1Code.eventsList0(runtimeScene);

return;

}

gdjs['scene1Code'] = gdjs.scene1Code;
