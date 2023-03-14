gdjs.GOCode = {};
gdjs.GOCode.GDtweObjects1= [];
gdjs.GOCode.GDtweObjects2= [];
gdjs.GOCode.GDtenObjects1= [];
gdjs.GOCode.GDtenObjects2= [];
gdjs.GOCode.GDninObjects1= [];
gdjs.GOCode.GDninObjects2= [];
gdjs.GOCode.GDsevObjects1= [];
gdjs.GOCode.GDsevObjects2= [];
gdjs.GOCode.GDsixObjects1= [];
gdjs.GOCode.GDsixObjects2= [];
gdjs.GOCode.GDfivObjects1= [];
gdjs.GOCode.GDfivObjects2= [];
gdjs.GOCode.GDfouObjects1= [];
gdjs.GOCode.GDfouObjects2= [];
gdjs.GOCode.GDthrObjects1= [];
gdjs.GOCode.GDthrObjects2= [];
gdjs.GOCode.GDtwoObjects1= [];
gdjs.GOCode.GDtwoObjects2= [];
gdjs.GOCode.GDoneObjects1= [];
gdjs.GOCode.GDoneObjects2= [];
gdjs.GOCode.GDeigObjects1= [];
gdjs.GOCode.GDeigObjects2= [];
gdjs.GOCode.GDGridButtonObjects1= [];
gdjs.GOCode.GDGridButtonObjects2= [];
gdjs.GOCode.GDGridObjects1= [];
gdjs.GOCode.GDGridObjects2= [];
gdjs.GOCode.GDBObjects1= [];
gdjs.GOCode.GDBObjects2= [];
gdjs.GOCode.GDDObjects1= [];
gdjs.GOCode.GDDObjects2= [];
gdjs.GOCode.GDAObjects1= [];
gdjs.GOCode.GDAObjects2= [];
gdjs.GOCode.GDEObjects1= [];
gdjs.GOCode.GDEObjects2= [];
gdjs.GOCode.GDCObjects1= [];
gdjs.GOCode.GDCObjects2= [];
gdjs.GOCode.GDlineObjects1= [];
gdjs.GOCode.GDlineObjects2= [];
gdjs.GOCode.GDPlatform2Objects1= [];
gdjs.GOCode.GDPlatform2Objects2= [];
gdjs.GOCode.GDCornerPlatformObjects1= [];
gdjs.GOCode.GDCornerPlatformObjects2= [];
gdjs.GOCode.GDGuardObjects1= [];
gdjs.GOCode.GDGuardObjects2= [];
gdjs.GOCode.GDTeamScoreObjects1= [];
gdjs.GOCode.GDTeamScoreObjects2= [];
gdjs.GOCode.GDTeamScoreLabelObjects1= [];
gdjs.GOCode.GDTeamScoreLabelObjects2= [];
gdjs.GOCode.GDruleObjects1= [];
gdjs.GOCode.GDruleObjects2= [];
gdjs.GOCode.GDrule2Objects1= [];
gdjs.GOCode.GDrule2Objects2= [];
gdjs.GOCode.GDskipObjects1= [];
gdjs.GOCode.GDskipObjects2= [];
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

gdjs.GOCode.GDtweObjects1.length = 0;
gdjs.GOCode.GDtweObjects2.length = 0;
gdjs.GOCode.GDtenObjects1.length = 0;
gdjs.GOCode.GDtenObjects2.length = 0;
gdjs.GOCode.GDninObjects1.length = 0;
gdjs.GOCode.GDninObjects2.length = 0;
gdjs.GOCode.GDsevObjects1.length = 0;
gdjs.GOCode.GDsevObjects2.length = 0;
gdjs.GOCode.GDsixObjects1.length = 0;
gdjs.GOCode.GDsixObjects2.length = 0;
gdjs.GOCode.GDfivObjects1.length = 0;
gdjs.GOCode.GDfivObjects2.length = 0;
gdjs.GOCode.GDfouObjects1.length = 0;
gdjs.GOCode.GDfouObjects2.length = 0;
gdjs.GOCode.GDthrObjects1.length = 0;
gdjs.GOCode.GDthrObjects2.length = 0;
gdjs.GOCode.GDtwoObjects1.length = 0;
gdjs.GOCode.GDtwoObjects2.length = 0;
gdjs.GOCode.GDoneObjects1.length = 0;
gdjs.GOCode.GDoneObjects2.length = 0;
gdjs.GOCode.GDeigObjects1.length = 0;
gdjs.GOCode.GDeigObjects2.length = 0;
gdjs.GOCode.GDGridButtonObjects1.length = 0;
gdjs.GOCode.GDGridButtonObjects2.length = 0;
gdjs.GOCode.GDGridObjects1.length = 0;
gdjs.GOCode.GDGridObjects2.length = 0;
gdjs.GOCode.GDBObjects1.length = 0;
gdjs.GOCode.GDBObjects2.length = 0;
gdjs.GOCode.GDDObjects1.length = 0;
gdjs.GOCode.GDDObjects2.length = 0;
gdjs.GOCode.GDAObjects1.length = 0;
gdjs.GOCode.GDAObjects2.length = 0;
gdjs.GOCode.GDEObjects1.length = 0;
gdjs.GOCode.GDEObjects2.length = 0;
gdjs.GOCode.GDCObjects1.length = 0;
gdjs.GOCode.GDCObjects2.length = 0;
gdjs.GOCode.GDlineObjects1.length = 0;
gdjs.GOCode.GDlineObjects2.length = 0;
gdjs.GOCode.GDPlatform2Objects1.length = 0;
gdjs.GOCode.GDPlatform2Objects2.length = 0;
gdjs.GOCode.GDCornerPlatformObjects1.length = 0;
gdjs.GOCode.GDCornerPlatformObjects2.length = 0;
gdjs.GOCode.GDGuardObjects1.length = 0;
gdjs.GOCode.GDGuardObjects2.length = 0;
gdjs.GOCode.GDTeamScoreObjects1.length = 0;
gdjs.GOCode.GDTeamScoreObjects2.length = 0;
gdjs.GOCode.GDTeamScoreLabelObjects1.length = 0;
gdjs.GOCode.GDTeamScoreLabelObjects2.length = 0;
gdjs.GOCode.GDruleObjects1.length = 0;
gdjs.GOCode.GDruleObjects2.length = 0;
gdjs.GOCode.GDrule2Objects1.length = 0;
gdjs.GOCode.GDrule2Objects2.length = 0;
gdjs.GOCode.GDskipObjects1.length = 0;
gdjs.GOCode.GDskipObjects2.length = 0;
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
