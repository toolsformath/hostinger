gdjs.GOCode = {};
gdjs.GOCode.GDtenframeObjects1= [];
gdjs.GOCode.GDtenframeObjects2= [];
gdjs.GOCode.GDcounterObjects1= [];
gdjs.GOCode.GDcounterObjects2= [];
gdjs.GOCode.GDjarObjects1= [];
gdjs.GOCode.GDjarObjects2= [];
gdjs.GOCode.GDTTSObjects1= [];
gdjs.GOCode.GDTTSObjects2= [];
gdjs.GOCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.GOCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.GOCode.GDfireflyObjects1= [];
gdjs.GOCode.GDfireflyObjects2= [];
gdjs.GOCode.GDGObuttonObjects1= [];
gdjs.GOCode.GDGObuttonObjects2= [];
gdjs.GOCode.GDGOTEXTObjects1= [];
gdjs.GOCode.GDGOTEXTObjects2= [];
gdjs.GOCode.GDGreenArrowObjects1= [];
gdjs.GOCode.GDGreenArrowObjects2= [];

gdjs.GOCode.conditionTrue_0 = {val:false};
gdjs.GOCode.condition0IsTrue_0 = {val:false};
gdjs.GOCode.condition1IsTrue_0 = {val:false};
gdjs.GOCode.condition2IsTrue_0 = {val:false};


gdjs.GOCode.mapOfGDgdjs_46GOCode_46GDGObuttonObjects1Objects = Hashtable.newFrom({"GObutton": gdjs.GOCode.GDGObuttonObjects1});
gdjs.GOCode.mapOfGDgdjs_46GOCode_46GDGObuttonObjects1Objects = Hashtable.newFrom({"GObutton": gdjs.GOCode.GDGObuttonObjects1});
gdjs.GOCode.mapOfGDgdjs_46GOCode_46GDGObuttonObjects1Objects = Hashtable.newFrom({"GObutton": gdjs.GOCode.GDGObuttonObjects1});
gdjs.GOCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GObutton"), gdjs.GOCode.GDGObuttonObjects1);

gdjs.GOCode.condition0IsTrue_0.val = false;
{
gdjs.GOCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GOCode.mapOfGDgdjs_46GOCode_46GDGObuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GOCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GOCode.GDGObuttonObjects1 */
{for(var i = 0, len = gdjs.GOCode.GDGObuttonObjects1.length ;i < len;++i) {
    gdjs.GOCode.GDGObuttonObjects1[i].setColor("245;166;35");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GObutton"), gdjs.GOCode.GDGObuttonObjects1);

gdjs.GOCode.condition0IsTrue_0.val = false;
{
gdjs.GOCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GOCode.mapOfGDgdjs_46GOCode_46GDGObuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.GOCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GOCode.GDGObuttonObjects1 */
{for(var i = 0, len = gdjs.GOCode.GDGObuttonObjects1.length ;i < len;++i) {
    gdjs.GOCode.GDGObuttonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GObutton"), gdjs.GOCode.GDGObuttonObjects1);

gdjs.GOCode.condition0IsTrue_0.val = false;
gdjs.GOCode.condition1IsTrue_0.val = false;
{
gdjs.GOCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GOCode.mapOfGDgdjs_46GOCode_46GDGObuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GOCode.condition0IsTrue_0.val ) {
{
gdjs.GOCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GOCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "f5d3ffae911b06f5a36cc912f77f25acdd0a6e0e2fad464b2a524ec3064881f2_Click_03.aac", false, 100, 1);
}}

}


{


{
}

}


};

gdjs.GOCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GOCode.GDtenframeObjects1.length = 0;
gdjs.GOCode.GDtenframeObjects2.length = 0;
gdjs.GOCode.GDcounterObjects1.length = 0;
gdjs.GOCode.GDcounterObjects2.length = 0;
gdjs.GOCode.GDjarObjects1.length = 0;
gdjs.GOCode.GDjarObjects2.length = 0;
gdjs.GOCode.GDTTSObjects1.length = 0;
gdjs.GOCode.GDTTSObjects2.length = 0;
gdjs.GOCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.GOCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.GOCode.GDfireflyObjects1.length = 0;
gdjs.GOCode.GDfireflyObjects2.length = 0;
gdjs.GOCode.GDGObuttonObjects1.length = 0;
gdjs.GOCode.GDGObuttonObjects2.length = 0;
gdjs.GOCode.GDGOTEXTObjects1.length = 0;
gdjs.GOCode.GDGOTEXTObjects2.length = 0;
gdjs.GOCode.GDGreenArrowObjects1.length = 0;
gdjs.GOCode.GDGreenArrowObjects2.length = 0;

gdjs.GOCode.eventsList0(runtimeScene);

return;

}

gdjs['GOCode'] = gdjs.GOCode;
