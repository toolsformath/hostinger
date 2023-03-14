gdjs.DirectionsTCode = {};
gdjs.DirectionsTCode.GDtweObjects1= [];
gdjs.DirectionsTCode.GDtweObjects2= [];
gdjs.DirectionsTCode.GDtenObjects1= [];
gdjs.DirectionsTCode.GDtenObjects2= [];
gdjs.DirectionsTCode.GDninObjects1= [];
gdjs.DirectionsTCode.GDninObjects2= [];
gdjs.DirectionsTCode.GDsevObjects1= [];
gdjs.DirectionsTCode.GDsevObjects2= [];
gdjs.DirectionsTCode.GDsixObjects1= [];
gdjs.DirectionsTCode.GDsixObjects2= [];
gdjs.DirectionsTCode.GDfivObjects1= [];
gdjs.DirectionsTCode.GDfivObjects2= [];
gdjs.DirectionsTCode.GDfouObjects1= [];
gdjs.DirectionsTCode.GDfouObjects2= [];
gdjs.DirectionsTCode.GDthrObjects1= [];
gdjs.DirectionsTCode.GDthrObjects2= [];
gdjs.DirectionsTCode.GDtwoObjects1= [];
gdjs.DirectionsTCode.GDtwoObjects2= [];
gdjs.DirectionsTCode.GDoneObjects1= [];
gdjs.DirectionsTCode.GDoneObjects2= [];
gdjs.DirectionsTCode.GDeigObjects1= [];
gdjs.DirectionsTCode.GDeigObjects2= [];
gdjs.DirectionsTCode.GDGridButtonObjects1= [];
gdjs.DirectionsTCode.GDGridButtonObjects2= [];
gdjs.DirectionsTCode.GDGridObjects1= [];
gdjs.DirectionsTCode.GDGridObjects2= [];
gdjs.DirectionsTCode.GDBObjects1= [];
gdjs.DirectionsTCode.GDBObjects2= [];
gdjs.DirectionsTCode.GDDObjects1= [];
gdjs.DirectionsTCode.GDDObjects2= [];
gdjs.DirectionsTCode.GDAObjects1= [];
gdjs.DirectionsTCode.GDAObjects2= [];
gdjs.DirectionsTCode.GDEObjects1= [];
gdjs.DirectionsTCode.GDEObjects2= [];
gdjs.DirectionsTCode.GDCObjects1= [];
gdjs.DirectionsTCode.GDCObjects2= [];
gdjs.DirectionsTCode.GDlineObjects1= [];
gdjs.DirectionsTCode.GDlineObjects2= [];
gdjs.DirectionsTCode.GDPlatform2Objects1= [];
gdjs.DirectionsTCode.GDPlatform2Objects2= [];
gdjs.DirectionsTCode.GDCornerPlatformObjects1= [];
gdjs.DirectionsTCode.GDCornerPlatformObjects2= [];
gdjs.DirectionsTCode.GDGuardObjects1= [];
gdjs.DirectionsTCode.GDGuardObjects2= [];
gdjs.DirectionsTCode.GDTeamScoreObjects1= [];
gdjs.DirectionsTCode.GDTeamScoreObjects2= [];
gdjs.DirectionsTCode.GDTeamScoreLabelObjects1= [];
gdjs.DirectionsTCode.GDTeamScoreLabelObjects2= [];
gdjs.DirectionsTCode.GDruleObjects1= [];
gdjs.DirectionsTCode.GDruleObjects2= [];
gdjs.DirectionsTCode.GDrule2Objects1= [];
gdjs.DirectionsTCode.GDrule2Objects2= [];
gdjs.DirectionsTCode.GDskipObjects1= [];
gdjs.DirectionsTCode.GDskipObjects2= [];
gdjs.DirectionsTCode.GDspeechbubObjects1= [];
gdjs.DirectionsTCode.GDspeechbubObjects2= [];
gdjs.DirectionsTCode.GDdirectionsObjects1= [];
gdjs.DirectionsTCode.GDdirectionsObjects2= [];
gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects2= [];

gdjs.DirectionsTCode.conditionTrue_0 = {val:false};
gdjs.DirectionsTCode.condition0IsTrue_0 = {val:false};
gdjs.DirectionsTCode.condition1IsTrue_0 = {val:false};
gdjs.DirectionsTCode.condition2IsTrue_0 = {val:false};


gdjs.DirectionsTCode.mapOfGDgdjs_46DirectionsTCode_46GDspeechbubObjects1Objects = Hashtable.newFrom({"speechbub": gdjs.DirectionsTCode.GDspeechbubObjects1});
gdjs.DirectionsTCode.mapOfGDgdjs_46DirectionsTCode_46GDskipObjects1Objects = Hashtable.newFrom({"skip": gdjs.DirectionsTCode.GDskipObjects1});
gdjs.DirectionsTCode.eventsList0 = function(runtimeScene) {

{


gdjs.DirectionsTCode.condition0IsTrue_0.val = false;
{
gdjs.DirectionsTCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DirectionsTCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("speechbub"), gdjs.DirectionsTCode.GDspeechbubObjects1);

gdjs.DirectionsTCode.condition0IsTrue_0.val = false;
gdjs.DirectionsTCode.condition1IsTrue_0.val = false;
{
gdjs.DirectionsTCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DirectionsTCode.mapOfGDgdjs_46DirectionsTCode_46GDspeechbubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DirectionsTCode.condition0IsTrue_0.val ) {
{
gdjs.DirectionsTCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DirectionsTCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Hi Bridge Builders!\nYou can click on the text to hear it.\nWork with a partner if you can. so you can talk about building the bridges.\n\nYou are going to build bridges by choosing the correct colored rods to connect different things.\nYou will then test your bridge to see if it works and it allows you to cross.\n\nTake turns playing the different levels, but decide together on which rods to use.\nYour teacher may have real rods that you can use to help you decide.\n\nLet's give it a try.", "Zira", 100, 100, 175, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.DirectionsTCode.condition0IsTrue_0.val = false;
{
gdjs.DirectionsTCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 20;
}if (gdjs.DirectionsTCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1);
{for(var i = 0, len = gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1);

gdjs.DirectionsTCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.DirectionsTCode.condition0IsTrue_0.val = true;
        gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1.length = k;}if (gdjs.DirectionsTCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Training", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.DirectionsTCode.GDskipObjects1);

gdjs.DirectionsTCode.condition0IsTrue_0.val = false;
gdjs.DirectionsTCode.condition1IsTrue_0.val = false;
{
gdjs.DirectionsTCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DirectionsTCode.mapOfGDgdjs_46DirectionsTCode_46GDskipObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DirectionsTCode.condition0IsTrue_0.val ) {
{
gdjs.DirectionsTCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DirectionsTCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Directions1", false);
}}

}


};

gdjs.DirectionsTCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DirectionsTCode.GDtweObjects1.length = 0;
gdjs.DirectionsTCode.GDtweObjects2.length = 0;
gdjs.DirectionsTCode.GDtenObjects1.length = 0;
gdjs.DirectionsTCode.GDtenObjects2.length = 0;
gdjs.DirectionsTCode.GDninObjects1.length = 0;
gdjs.DirectionsTCode.GDninObjects2.length = 0;
gdjs.DirectionsTCode.GDsevObjects1.length = 0;
gdjs.DirectionsTCode.GDsevObjects2.length = 0;
gdjs.DirectionsTCode.GDsixObjects1.length = 0;
gdjs.DirectionsTCode.GDsixObjects2.length = 0;
gdjs.DirectionsTCode.GDfivObjects1.length = 0;
gdjs.DirectionsTCode.GDfivObjects2.length = 0;
gdjs.DirectionsTCode.GDfouObjects1.length = 0;
gdjs.DirectionsTCode.GDfouObjects2.length = 0;
gdjs.DirectionsTCode.GDthrObjects1.length = 0;
gdjs.DirectionsTCode.GDthrObjects2.length = 0;
gdjs.DirectionsTCode.GDtwoObjects1.length = 0;
gdjs.DirectionsTCode.GDtwoObjects2.length = 0;
gdjs.DirectionsTCode.GDoneObjects1.length = 0;
gdjs.DirectionsTCode.GDoneObjects2.length = 0;
gdjs.DirectionsTCode.GDeigObjects1.length = 0;
gdjs.DirectionsTCode.GDeigObjects2.length = 0;
gdjs.DirectionsTCode.GDGridButtonObjects1.length = 0;
gdjs.DirectionsTCode.GDGridButtonObjects2.length = 0;
gdjs.DirectionsTCode.GDGridObjects1.length = 0;
gdjs.DirectionsTCode.GDGridObjects2.length = 0;
gdjs.DirectionsTCode.GDBObjects1.length = 0;
gdjs.DirectionsTCode.GDBObjects2.length = 0;
gdjs.DirectionsTCode.GDDObjects1.length = 0;
gdjs.DirectionsTCode.GDDObjects2.length = 0;
gdjs.DirectionsTCode.GDAObjects1.length = 0;
gdjs.DirectionsTCode.GDAObjects2.length = 0;
gdjs.DirectionsTCode.GDEObjects1.length = 0;
gdjs.DirectionsTCode.GDEObjects2.length = 0;
gdjs.DirectionsTCode.GDCObjects1.length = 0;
gdjs.DirectionsTCode.GDCObjects2.length = 0;
gdjs.DirectionsTCode.GDlineObjects1.length = 0;
gdjs.DirectionsTCode.GDlineObjects2.length = 0;
gdjs.DirectionsTCode.GDPlatform2Objects1.length = 0;
gdjs.DirectionsTCode.GDPlatform2Objects2.length = 0;
gdjs.DirectionsTCode.GDCornerPlatformObjects1.length = 0;
gdjs.DirectionsTCode.GDCornerPlatformObjects2.length = 0;
gdjs.DirectionsTCode.GDGuardObjects1.length = 0;
gdjs.DirectionsTCode.GDGuardObjects2.length = 0;
gdjs.DirectionsTCode.GDTeamScoreObjects1.length = 0;
gdjs.DirectionsTCode.GDTeamScoreObjects2.length = 0;
gdjs.DirectionsTCode.GDTeamScoreLabelObjects1.length = 0;
gdjs.DirectionsTCode.GDTeamScoreLabelObjects2.length = 0;
gdjs.DirectionsTCode.GDruleObjects1.length = 0;
gdjs.DirectionsTCode.GDruleObjects2.length = 0;
gdjs.DirectionsTCode.GDrule2Objects1.length = 0;
gdjs.DirectionsTCode.GDrule2Objects2.length = 0;
gdjs.DirectionsTCode.GDskipObjects1.length = 0;
gdjs.DirectionsTCode.GDskipObjects2.length = 0;
gdjs.DirectionsTCode.GDspeechbubObjects1.length = 0;
gdjs.DirectionsTCode.GDspeechbubObjects2.length = 0;
gdjs.DirectionsTCode.GDdirectionsObjects1.length = 0;
gdjs.DirectionsTCode.GDdirectionsObjects2.length = 0;
gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.DirectionsTCode.GDWhiteDecoratedButtonObjects2.length = 0;

gdjs.DirectionsTCode.eventsList0(runtimeScene);

return;

}

gdjs['DirectionsTCode'] = gdjs.DirectionsTCode;
