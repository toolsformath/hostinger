gdjs.IntroCode = {};
gdjs.IntroCode.GDtenframeObjects1= [];
gdjs.IntroCode.GDtenframeObjects2= [];
gdjs.IntroCode.GDcounterredObjects1= [];
gdjs.IntroCode.GDcounterredObjects2= [];
gdjs.IntroCode.GDcounteryellowObjects1= [];
gdjs.IntroCode.GDcounteryellowObjects2= [];
gdjs.IntroCode.GDRedButtonObjects1= [];
gdjs.IntroCode.GDRedButtonObjects2= [];
gdjs.IntroCode.GDBlueButtonObjects1= [];
gdjs.IntroCode.GDBlueButtonObjects2= [];
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene1", false);
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
gdjs.IntroCode.GDcounterredObjects1.length = 0;
gdjs.IntroCode.GDcounterredObjects2.length = 0;
gdjs.IntroCode.GDcounteryellowObjects1.length = 0;
gdjs.IntroCode.GDcounteryellowObjects2.length = 0;
gdjs.IntroCode.GDRedButtonObjects1.length = 0;
gdjs.IntroCode.GDRedButtonObjects2.length = 0;
gdjs.IntroCode.GDBlueButtonObjects1.length = 0;
gdjs.IntroCode.GDBlueButtonObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDOpenLogoObjects1.length = 0;
gdjs.IntroCode.GDOpenLogoObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
