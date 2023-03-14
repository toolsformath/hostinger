gdjs.IntroCode = {};
gdjs.IntroCode.GDtweObjects1= [];
gdjs.IntroCode.GDtweObjects2= [];
gdjs.IntroCode.GDtenObjects1= [];
gdjs.IntroCode.GDtenObjects2= [];
gdjs.IntroCode.GDninObjects1= [];
gdjs.IntroCode.GDninObjects2= [];
gdjs.IntroCode.GDsevObjects1= [];
gdjs.IntroCode.GDsevObjects2= [];
gdjs.IntroCode.GDsixObjects1= [];
gdjs.IntroCode.GDsixObjects2= [];
gdjs.IntroCode.GDfivObjects1= [];
gdjs.IntroCode.GDfivObjects2= [];
gdjs.IntroCode.GDfouObjects1= [];
gdjs.IntroCode.GDfouObjects2= [];
gdjs.IntroCode.GDthrObjects1= [];
gdjs.IntroCode.GDthrObjects2= [];
gdjs.IntroCode.GDtwoObjects1= [];
gdjs.IntroCode.GDtwoObjects2= [];
gdjs.IntroCode.GDoneObjects1= [];
gdjs.IntroCode.GDoneObjects2= [];
gdjs.IntroCode.GDeigObjects1= [];
gdjs.IntroCode.GDeigObjects2= [];
gdjs.IntroCode.GDGridButtonObjects1= [];
gdjs.IntroCode.GDGridButtonObjects2= [];
gdjs.IntroCode.GDGridObjects1= [];
gdjs.IntroCode.GDGridObjects2= [];
gdjs.IntroCode.GDBObjects1= [];
gdjs.IntroCode.GDBObjects2= [];
gdjs.IntroCode.GDDObjects1= [];
gdjs.IntroCode.GDDObjects2= [];
gdjs.IntroCode.GDAObjects1= [];
gdjs.IntroCode.GDAObjects2= [];
gdjs.IntroCode.GDEObjects1= [];
gdjs.IntroCode.GDEObjects2= [];
gdjs.IntroCode.GDCObjects1= [];
gdjs.IntroCode.GDCObjects2= [];
gdjs.IntroCode.GDlineObjects1= [];
gdjs.IntroCode.GDlineObjects2= [];
gdjs.IntroCode.GDPlatform2Objects1= [];
gdjs.IntroCode.GDPlatform2Objects2= [];
gdjs.IntroCode.GDCornerPlatformObjects1= [];
gdjs.IntroCode.GDCornerPlatformObjects2= [];
gdjs.IntroCode.GDGuardObjects1= [];
gdjs.IntroCode.GDGuardObjects2= [];
gdjs.IntroCode.GDTeamScoreObjects1= [];
gdjs.IntroCode.GDTeamScoreObjects2= [];
gdjs.IntroCode.GDTeamScoreLabelObjects1= [];
gdjs.IntroCode.GDTeamScoreLabelObjects2= [];
gdjs.IntroCode.GDruleObjects1= [];
gdjs.IntroCode.GDruleObjects2= [];
gdjs.IntroCode.GDrule2Objects1= [];
gdjs.IntroCode.GDrule2Objects2= [];
gdjs.IntroCode.GDskipObjects1= [];
gdjs.IntroCode.GDskipObjects2= [];
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDOpenLogoObjects1= [];
gdjs.IntroCode.GDOpenLogoObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OpenLogo"), gdjs.IntroCode.GDOpenLogoObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scenetimer");
}{for(var i = 0, len = gdjs.IntroCode.GDOpenLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDOpenLogoObjects1[i].play();
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scenetimer") >= 7;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Intro", false);
}}

}


{


{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDtweObjects1.length = 0;
gdjs.IntroCode.GDtweObjects2.length = 0;
gdjs.IntroCode.GDtenObjects1.length = 0;
gdjs.IntroCode.GDtenObjects2.length = 0;
gdjs.IntroCode.GDninObjects1.length = 0;
gdjs.IntroCode.GDninObjects2.length = 0;
gdjs.IntroCode.GDsevObjects1.length = 0;
gdjs.IntroCode.GDsevObjects2.length = 0;
gdjs.IntroCode.GDsixObjects1.length = 0;
gdjs.IntroCode.GDsixObjects2.length = 0;
gdjs.IntroCode.GDfivObjects1.length = 0;
gdjs.IntroCode.GDfivObjects2.length = 0;
gdjs.IntroCode.GDfouObjects1.length = 0;
gdjs.IntroCode.GDfouObjects2.length = 0;
gdjs.IntroCode.GDthrObjects1.length = 0;
gdjs.IntroCode.GDthrObjects2.length = 0;
gdjs.IntroCode.GDtwoObjects1.length = 0;
gdjs.IntroCode.GDtwoObjects2.length = 0;
gdjs.IntroCode.GDoneObjects1.length = 0;
gdjs.IntroCode.GDoneObjects2.length = 0;
gdjs.IntroCode.GDeigObjects1.length = 0;
gdjs.IntroCode.GDeigObjects2.length = 0;
gdjs.IntroCode.GDGridButtonObjects1.length = 0;
gdjs.IntroCode.GDGridButtonObjects2.length = 0;
gdjs.IntroCode.GDGridObjects1.length = 0;
gdjs.IntroCode.GDGridObjects2.length = 0;
gdjs.IntroCode.GDBObjects1.length = 0;
gdjs.IntroCode.GDBObjects2.length = 0;
gdjs.IntroCode.GDDObjects1.length = 0;
gdjs.IntroCode.GDDObjects2.length = 0;
gdjs.IntroCode.GDAObjects1.length = 0;
gdjs.IntroCode.GDAObjects2.length = 0;
gdjs.IntroCode.GDEObjects1.length = 0;
gdjs.IntroCode.GDEObjects2.length = 0;
gdjs.IntroCode.GDCObjects1.length = 0;
gdjs.IntroCode.GDCObjects2.length = 0;
gdjs.IntroCode.GDlineObjects1.length = 0;
gdjs.IntroCode.GDlineObjects2.length = 0;
gdjs.IntroCode.GDPlatform2Objects1.length = 0;
gdjs.IntroCode.GDPlatform2Objects2.length = 0;
gdjs.IntroCode.GDCornerPlatformObjects1.length = 0;
gdjs.IntroCode.GDCornerPlatformObjects2.length = 0;
gdjs.IntroCode.GDGuardObjects1.length = 0;
gdjs.IntroCode.GDGuardObjects2.length = 0;
gdjs.IntroCode.GDTeamScoreObjects1.length = 0;
gdjs.IntroCode.GDTeamScoreObjects2.length = 0;
gdjs.IntroCode.GDTeamScoreLabelObjects1.length = 0;
gdjs.IntroCode.GDTeamScoreLabelObjects2.length = 0;
gdjs.IntroCode.GDruleObjects1.length = 0;
gdjs.IntroCode.GDruleObjects2.length = 0;
gdjs.IntroCode.GDrule2Objects1.length = 0;
gdjs.IntroCode.GDrule2Objects2.length = 0;
gdjs.IntroCode.GDskipObjects1.length = 0;
gdjs.IntroCode.GDskipObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDOpenLogoObjects1.length = 0;
gdjs.IntroCode.GDOpenLogoObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
