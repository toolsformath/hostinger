gdjs.GOCode = {};
gdjs.GOCode.GDtenframeObjects1= [];
gdjs.GOCode.GDtenframeObjects2= [];
gdjs.GOCode.GDcounterredObjects1= [];
gdjs.GOCode.GDcounterredObjects2= [];
gdjs.GOCode.GDcounteryellowObjects1= [];
gdjs.GOCode.GDcounteryellowObjects2= [];
gdjs.GOCode.GDRedButtonObjects1= [];
gdjs.GOCode.GDRedButtonObjects2= [];
gdjs.GOCode.GDBlueButtonObjects1= [];
gdjs.GOCode.GDBlueButtonObjects2= [];
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
    gdjs.GOCode.GDGObuttonObjects1[i].setAnimationName("Hover");
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
    gdjs.GOCode.GDGObuttonObjects1[i].setAnimationName("GO");
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
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Click_03.aac", false, 100, 1);
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
gdjs.GOCode.GDcounterredObjects1.length = 0;
gdjs.GOCode.GDcounterredObjects2.length = 0;
gdjs.GOCode.GDcounteryellowObjects1.length = 0;
gdjs.GOCode.GDcounteryellowObjects2.length = 0;
gdjs.GOCode.GDRedButtonObjects1.length = 0;
gdjs.GOCode.GDRedButtonObjects2.length = 0;
gdjs.GOCode.GDBlueButtonObjects1.length = 0;
gdjs.GOCode.GDBlueButtonObjects2.length = 0;
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
