gdjs.scene1Code = {};
gdjs.scene1Code.GDtenframeObjects1= [];
gdjs.scene1Code.GDtenframeObjects2= [];
gdjs.scene1Code.GDcounterredObjects1= [];
gdjs.scene1Code.GDcounterredObjects2= [];
gdjs.scene1Code.GDcounteryellowObjects1= [];
gdjs.scene1Code.GDcounteryellowObjects2= [];
gdjs.scene1Code.GDRedButtonObjects1= [];
gdjs.scene1Code.GDRedButtonObjects2= [];
gdjs.scene1Code.GDBlueButtonObjects1= [];
gdjs.scene1Code.GDBlueButtonObjects2= [];
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.scene1Code.GDExtendTIMEObjects1= [];
gdjs.scene1Code.GDExtendTIMEObjects2= [];
gdjs.scene1Code.GDExtendTIME2Objects1= [];
gdjs.scene1Code.GDExtendTIME2Objects2= [];
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1= [];
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects2= [];
gdjs.scene1Code.GDDirectionsObjects1= [];
gdjs.scene1Code.GDDirectionsObjects2= [];
gdjs.scene1Code.GDteacherlabelObjects1= [];
gdjs.scene1Code.GDteacherlabelObjects2= [];
gdjs.scene1Code.GDSTARTObjects1= [];
gdjs.scene1Code.GDSTARTObjects2= [];
gdjs.scene1Code.GDscreenObjects1= [];
gdjs.scene1Code.GDscreenObjects2= [];
gdjs.scene1Code.GDNewTextObjects1= [];
gdjs.scene1Code.GDNewTextObjects2= [];

gdjs.scene1Code.conditionTrue_0 = {val:false};
gdjs.scene1Code.condition0IsTrue_0 = {val:false};
gdjs.scene1Code.condition1IsTrue_0 = {val:false};
gdjs.scene1Code.condition2IsTrue_0 = {val:false};


gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDSTARTObjects1Objects = Hashtable.newFrom({"START": gdjs.scene1Code.GDSTARTObjects1});
gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDteacherlabelObjects1Objects = Hashtable.newFrom({"teacherlabel": gdjs.scene1Code.GDteacherlabelObjects1});
gdjs.scene1Code.eventsList0 = function(runtimeScene) {

{


gdjs.scene1Code.condition0IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch2"), gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1);
{for(var i = 0, len = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.scene1Code.condition0IsTrue_0.val = true;
        gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if (gdjs.scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch2"), gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1);
{runtimeScene.getGame().getVariables().get("add1").setNumber(1);
}{for(var i = 0, len = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch2"), gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1.length;i<l;++i) {
    if ( gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.scene1Code.condition0IsTrue_0.val = true;
        gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1[k] = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1[i];
        ++k;
    }
}
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1.length = k;}if (gdjs.scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1);
{runtimeScene.getGame().getVariables().get("add1").setNumber(2);
}{for(var i = 0, len = gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.scene1Code.GDSTARTObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
gdjs.scene1Code.condition1IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDSTARTObjects1Objects, runtimeScene, true, false);
}if ( gdjs.scene1Code.condition0IsTrue_0.val ) {
{
gdjs.scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(3, 5)), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("teacherlabel"), gdjs.scene1Code.GDteacherlabelObjects1);

gdjs.scene1Code.condition0IsTrue_0.val = false;
gdjs.scene1Code.condition1IsTrue_0.val = false;
{
gdjs.scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.scene1Code.mapOfGDgdjs_46scene1Code_46GDteacherlabelObjects1Objects, runtimeScene, true, false);
}if ( gdjs.scene1Code.condition0IsTrue_0.val ) {
{
gdjs.scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.scene1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("screen"), gdjs.scene1Code.GDscreenObjects1);
{for(var i = 0, len = gdjs.scene1Code.GDscreenObjects1.length ;i < len;++i) {
    gdjs.scene1Code.GDscreenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};

gdjs.scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene1Code.GDtenframeObjects1.length = 0;
gdjs.scene1Code.GDtenframeObjects2.length = 0;
gdjs.scene1Code.GDcounterredObjects1.length = 0;
gdjs.scene1Code.GDcounterredObjects2.length = 0;
gdjs.scene1Code.GDcounteryellowObjects1.length = 0;
gdjs.scene1Code.GDcounteryellowObjects2.length = 0;
gdjs.scene1Code.GDRedButtonObjects1.length = 0;
gdjs.scene1Code.GDRedButtonObjects2.length = 0;
gdjs.scene1Code.GDBlueButtonObjects1.length = 0;
gdjs.scene1Code.GDBlueButtonObjects2.length = 0;
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.scene1Code.GDExtendTIMEObjects1.length = 0;
gdjs.scene1Code.GDExtendTIMEObjects2.length = 0;
gdjs.scene1Code.GDExtendTIME2Objects1.length = 0;
gdjs.scene1Code.GDExtendTIME2Objects2.length = 0;
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects1.length = 0;
gdjs.scene1Code.GDSmallGreenPlasticRoundSwitch2Objects2.length = 0;
gdjs.scene1Code.GDDirectionsObjects1.length = 0;
gdjs.scene1Code.GDDirectionsObjects2.length = 0;
gdjs.scene1Code.GDteacherlabelObjects1.length = 0;
gdjs.scene1Code.GDteacherlabelObjects2.length = 0;
gdjs.scene1Code.GDSTARTObjects1.length = 0;
gdjs.scene1Code.GDSTARTObjects2.length = 0;
gdjs.scene1Code.GDscreenObjects1.length = 0;
gdjs.scene1Code.GDscreenObjects2.length = 0;
gdjs.scene1Code.GDNewTextObjects1.length = 0;
gdjs.scene1Code.GDNewTextObjects2.length = 0;

gdjs.scene1Code.eventsList0(runtimeScene);

return;

}

gdjs['scene1Code'] = gdjs.scene1Code;
