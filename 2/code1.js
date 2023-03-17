gdjs.IntroCode = {};
gdjs.IntroCode.GDintroObjects1= [];
gdjs.IntroCode.GDintroObjects2= [];
gdjs.IntroCode.GDdescribeObjects1= [];
gdjs.IntroCode.GDdescribeObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.IntroCode.GDintroObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDintroObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.IntroCode.GDintroObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDintroObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDintroObjects1[i].isEnded() ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDintroObjects1[k] = gdjs.IntroCode.GDintroObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDintroObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Choose", false);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Choose", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDintroObjects1.length = 0;
gdjs.IntroCode.GDintroObjects2.length = 0;
gdjs.IntroCode.GDdescribeObjects1.length = 0;
gdjs.IntroCode.GDdescribeObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
