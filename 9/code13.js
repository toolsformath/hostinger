gdjs._493Code = {};
gdjs._493Code.GDtenframeObjects1= [];
gdjs._493Code.GDtenframeObjects2= [];
gdjs._493Code.GDcounterredObjects1= [];
gdjs._493Code.GDcounterredObjects2= [];
gdjs._493Code.GDcounteryellowObjects1= [];
gdjs._493Code.GDcounteryellowObjects2= [];
gdjs._493Code.GDRedButtonObjects1= [];
gdjs._493Code.GDRedButtonObjects2= [];
gdjs._493Code.GDBlueButtonObjects1= [];
gdjs._493Code.GDBlueButtonObjects2= [];
gdjs._493Code.GDGreenButtonObjects1= [];
gdjs._493Code.GDGreenButtonObjects2= [];

gdjs._493Code.conditionTrue_0 = {val:false};
gdjs._493Code.condition0IsTrue_0 = {val:false};
gdjs._493Code.condition1IsTrue_0 = {val:false};
gdjs._493Code.condition2IsTrue_0 = {val:false};
gdjs._493Code.conditionTrue_1 = {val:false};
gdjs._493Code.condition0IsTrue_1 = {val:false};
gdjs._493Code.condition1IsTrue_1 = {val:false};
gdjs._493Code.condition2IsTrue_1 = {val:false};


gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDRedButtonObjects1Objects = Hashtable.newFrom({"RedButton": gdjs._493Code.GDRedButtonObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDBlueButtonObjects1Objects = Hashtable.newFrom({"BlueButton": gdjs._493Code.GDBlueButtonObjects1});
gdjs._493Code.eventsList0 = function(runtimeScene) {

{


gdjs._493Code.condition0IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._493Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._493Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._493Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._493Code.GDtenframeObjects1);
{for(var i = 0, len = gdjs._493Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounterredObjects1[i].hide();
}
for(var i = 0, len = gdjs._493Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounteryellowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._493Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._493Code.GDtenframeObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._493Code.GDGreenButtonObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDGreenButtonObjects1[k] = gdjs._493Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDGreenButtonObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11892756);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
/* Reuse gdjs._493Code.GDGreenButtonObjects1 */
{for(var i = 0, len = gdjs._493Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDGreenButtonObjects1[i].SetLabelText("READY", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._493Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDGreenButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 1;
}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10022436);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._493Code.GDGreenButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{for(var i = 0, len = gdjs._493Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDGreenButtonObjects1[i].SetLabelText("SET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._493Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDGreenButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 2;
}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10024556);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._493Code.GDGreenButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{for(var i = 0, len = gdjs._493Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDGreenButtonObjects1[i].SetLabelText("GO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 3;
}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10026124);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._493Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._493Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._493Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._493Code.GDtenframeObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}{for(var i = 0, len = gdjs._493Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDGreenButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._493Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounterredObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._493Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounteryellowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._493Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._493Code.GDtenframeObjects1[i].hide(false);
}
}}

}


{


gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10027620);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._493Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._493Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._493Code.GDtenframeObjects1);
gdjs._493Code.GDRedButtonObjects1.length = 0;

{for(var i = 0, len = gdjs._493Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounterredObjects1[i].hide();
}
for(var i = 0, len = gdjs._493Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounteryellowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._493Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._493Code.GDtenframeObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDRedButtonObjects1Objects, 510, 300, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs._493Code.GDBlueButtonObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDBlueButtonObjects1[k] = gdjs._493Code.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDBlueButtonObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10030868);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac2", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(14, 15)), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs._493Code.GDRedButtonObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDRedButtonObjects1[k] = gdjs._493Code.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDRedButtonObjects1.length = k;}if (gdjs._493Code.condition0IsTrue_0.val) {
/* Reuse gdjs._493Code.GDRedButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._493Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._493Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._493Code.GDtenframeObjects1);
gdjs._493Code.GDBlueButtonObjects1.length = 0;

{for(var i = 0, len = gdjs._493Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounterredObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._493Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcounteryellowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._493Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._493Code.GDtenframeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._493Code.GDRedButtonObjects1.length ;i < len;++i) {
    gdjs._493Code.GDRedButtonObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDBlueButtonObjects1Objects, 1024, 608, "");
}}

}


{


{
}

}


};

gdjs._493Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._493Code.GDtenframeObjects1.length = 0;
gdjs._493Code.GDtenframeObjects2.length = 0;
gdjs._493Code.GDcounterredObjects1.length = 0;
gdjs._493Code.GDcounterredObjects2.length = 0;
gdjs._493Code.GDcounteryellowObjects1.length = 0;
gdjs._493Code.GDcounteryellowObjects2.length = 0;
gdjs._493Code.GDRedButtonObjects1.length = 0;
gdjs._493Code.GDRedButtonObjects2.length = 0;
gdjs._493Code.GDBlueButtonObjects1.length = 0;
gdjs._493Code.GDBlueButtonObjects2.length = 0;
gdjs._493Code.GDGreenButtonObjects1.length = 0;
gdjs._493Code.GDGreenButtonObjects2.length = 0;

gdjs._493Code.eventsList0(runtimeScene);

return;

}

gdjs['_493Code'] = gdjs._493Code;
