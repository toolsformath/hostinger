gdjs.IntroCode = {};
gdjs.IntroCode.GDtenframeObjects1= [];
gdjs.IntroCode.GDtenframeObjects2= [];
gdjs.IntroCode.GDcounterObjects1= [];
gdjs.IntroCode.GDcounterObjects2= [];
gdjs.IntroCode.GDjarObjects1= [];
gdjs.IntroCode.GDjarObjects2= [];
gdjs.IntroCode.GDTTSObjects1= [];
gdjs.IntroCode.GDTTSObjects2= [];
gdjs.IntroCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.IntroCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.IntroCode.GDfireflyObjects1= [];
gdjs.IntroCode.GDfireflyObjects2= [];
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDNewVideoObjects1= [];
gdjs.IntroCode.GDNewVideoObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.IntroCode.GDNewVideoObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scenetimer");
}{for(var i = 0, len = gdjs.IntroCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewVideoObjects1[i].play();
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scenetimer") >= 7;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(4, 6)), false);
}}

}


{


{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDtenframeObjects1.length = 0;
gdjs.IntroCode.GDtenframeObjects2.length = 0;
gdjs.IntroCode.GDcounterObjects1.length = 0;
gdjs.IntroCode.GDcounterObjects2.length = 0;
gdjs.IntroCode.GDjarObjects1.length = 0;
gdjs.IntroCode.GDjarObjects2.length = 0;
gdjs.IntroCode.GDTTSObjects1.length = 0;
gdjs.IntroCode.GDTTSObjects2.length = 0;
gdjs.IntroCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.IntroCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.IntroCode.GDfireflyObjects1.length = 0;
gdjs.IntroCode.GDfireflyObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewVideoObjects1.length = 0;
gdjs.IntroCode.GDNewVideoObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
