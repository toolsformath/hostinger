gdjs._495Code = {};
gdjs._495Code.GDtenframeObjects1= [];
gdjs._495Code.GDtenframeObjects2= [];
gdjs._495Code.GDcounterredObjects1= [];
gdjs._495Code.GDcounterredObjects2= [];
gdjs._495Code.GDcounteryellowObjects1= [];
gdjs._495Code.GDcounteryellowObjects2= [];
gdjs._495Code.GDRedButtonObjects1= [];
gdjs._495Code.GDRedButtonObjects2= [];
gdjs._495Code.GDBlueButtonObjects1= [];
gdjs._495Code.GDBlueButtonObjects2= [];
gdjs._495Code.GDGreenButtonObjects1= [];
gdjs._495Code.GDGreenButtonObjects2= [];

gdjs._495Code.conditionTrue_0 = {val:false};
gdjs._495Code.condition0IsTrue_0 = {val:false};
gdjs._495Code.condition1IsTrue_0 = {val:false};
gdjs._495Code.condition2IsTrue_0 = {val:false};
gdjs._495Code.conditionTrue_1 = {val:false};
gdjs._495Code.condition0IsTrue_1 = {val:false};
gdjs._495Code.condition1IsTrue_1 = {val:false};
gdjs._495Code.condition2IsTrue_1 = {val:false};


gdjs._495Code.mapOfGDgdjs_46_95495Code_46GDRedButtonObjects1Objects = Hashtable.newFrom({"RedButton": gdjs._495Code.GDRedButtonObjects1});
gdjs._495Code.mapOfGDgdjs_46_95495Code_46GDBlueButtonObjects1Objects = Hashtable.newFrom({"BlueButton": gdjs._495Code.GDBlueButtonObjects1});
gdjs._495Code.eventsList0 = function(runtimeScene) {

{


gdjs._495Code.condition0IsTrue_0.val = false;
{
gdjs._495Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._495Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._495Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._495Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495Code.GDtenframeObjects1);
{for(var i = 0, len = gdjs._495Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounterredObjects1[i].hide();
}
for(var i = 0, len = gdjs._495Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounteryellowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._495Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._495Code.GDtenframeObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._495Code.GDGreenButtonObjects1);

gdjs._495Code.condition0IsTrue_0.val = false;
gdjs._495Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._495Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._495Code.condition0IsTrue_0.val = true;
        gdjs._495Code.GDGreenButtonObjects1[k] = gdjs._495Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._495Code.GDGreenButtonObjects1.length = k;}if ( gdjs._495Code.condition0IsTrue_0.val ) {
{
{gdjs._495Code.conditionTrue_1 = gdjs._495Code.condition1IsTrue_0;
gdjs._495Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11934260);
}
}}
if (gdjs._495Code.condition1IsTrue_0.val) {
/* Reuse gdjs._495Code.GDGreenButtonObjects1 */
{for(var i = 0, len = gdjs._495Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDGreenButtonObjects1[i].SetLabelText("READY", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._495Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDGreenButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


gdjs._495Code.condition0IsTrue_0.val = false;
gdjs._495Code.condition1IsTrue_0.val = false;
{
gdjs._495Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 1;
}if ( gdjs._495Code.condition0IsTrue_0.val ) {
{
{gdjs._495Code.conditionTrue_1 = gdjs._495Code.condition1IsTrue_0;
gdjs._495Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11935780);
}
}}
if (gdjs._495Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._495Code.GDGreenButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{for(var i = 0, len = gdjs._495Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDGreenButtonObjects1[i].SetLabelText("SET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._495Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDGreenButtonObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs._495Code.condition0IsTrue_0.val = false;
gdjs._495Code.condition1IsTrue_0.val = false;
{
gdjs._495Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 2;
}if ( gdjs._495Code.condition0IsTrue_0.val ) {
{
{gdjs._495Code.conditionTrue_1 = gdjs._495Code.condition1IsTrue_0;
gdjs._495Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11937340);
}
}}
if (gdjs._495Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._495Code.GDGreenButtonObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}{for(var i = 0, len = gdjs._495Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDGreenButtonObjects1[i].SetLabelText("GO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs._495Code.condition0IsTrue_0.val = false;
gdjs._495Code.condition1IsTrue_0.val = false;
{
gdjs._495Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 3;
}if ( gdjs._495Code.condition0IsTrue_0.val ) {
{
{gdjs._495Code.conditionTrue_1 = gdjs._495Code.condition1IsTrue_0;
gdjs._495Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11938404);
}
}}
if (gdjs._495Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._495Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._495Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._495Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495Code.GDtenframeObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}{for(var i = 0, len = gdjs._495Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDGreenButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._495Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounterredObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._495Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounteryellowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._495Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._495Code.GDtenframeObjects1[i].hide(false);
}
}}

}


{


gdjs._495Code.condition0IsTrue_0.val = false;
gdjs._495Code.condition1IsTrue_0.val = false;
{
gdjs._495Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._495Code.condition0IsTrue_0.val ) {
{
{gdjs._495Code.conditionTrue_1 = gdjs._495Code.condition1IsTrue_0;
gdjs._495Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11939500);
}
}}
if (gdjs._495Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._495Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._495Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495Code.GDtenframeObjects1);
gdjs._495Code.GDRedButtonObjects1.length = 0;

{for(var i = 0, len = gdjs._495Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounterredObjects1[i].hide();
}
for(var i = 0, len = gdjs._495Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounteryellowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._495Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._495Code.GDtenframeObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._495Code.mapOfGDgdjs_46_95495Code_46GDRedButtonObjects1Objects, 510, 300, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs._495Code.GDBlueButtonObjects1);

gdjs._495Code.condition0IsTrue_0.val = false;
gdjs._495Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495Code.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs._495Code.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._495Code.condition0IsTrue_0.val = true;
        gdjs._495Code.GDBlueButtonObjects1[k] = gdjs._495Code.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs._495Code.GDBlueButtonObjects1.length = k;}if ( gdjs._495Code.condition0IsTrue_0.val ) {
{
{gdjs._495Code.conditionTrue_1 = gdjs._495Code.condition1IsTrue_0;
gdjs._495Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10066420);
}
}}
if (gdjs._495Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac2", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(16, 18)), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs._495Code.GDRedButtonObjects1);

gdjs._495Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495Code.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs._495Code.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._495Code.condition0IsTrue_0.val = true;
        gdjs._495Code.GDRedButtonObjects1[k] = gdjs._495Code.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs._495Code.GDRedButtonObjects1.length = k;}if (gdjs._495Code.condition0IsTrue_0.val) {
/* Reuse gdjs._495Code.GDRedButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._495Code.GDcounterredObjects1);
gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._495Code.GDcounteryellowObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495Code.GDtenframeObjects1);
gdjs._495Code.GDBlueButtonObjects1.length = 0;

{for(var i = 0, len = gdjs._495Code.GDcounterredObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounterredObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._495Code.GDcounteryellowObjects1.length ;i < len;++i) {
    gdjs._495Code.GDcounteryellowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._495Code.GDtenframeObjects1.length ;i < len;++i) {
    gdjs._495Code.GDtenframeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._495Code.GDRedButtonObjects1.length ;i < len;++i) {
    gdjs._495Code.GDRedButtonObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._495Code.mapOfGDgdjs_46_95495Code_46GDBlueButtonObjects1Objects, 1024, 608, "");
}}

}


{


{
}

}


};

gdjs._495Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._495Code.GDtenframeObjects1.length = 0;
gdjs._495Code.GDtenframeObjects2.length = 0;
gdjs._495Code.GDcounterredObjects1.length = 0;
gdjs._495Code.GDcounterredObjects2.length = 0;
gdjs._495Code.GDcounteryellowObjects1.length = 0;
gdjs._495Code.GDcounteryellowObjects2.length = 0;
gdjs._495Code.GDRedButtonObjects1.length = 0;
gdjs._495Code.GDRedButtonObjects2.length = 0;
gdjs._495Code.GDBlueButtonObjects1.length = 0;
gdjs._495Code.GDBlueButtonObjects2.length = 0;
gdjs._495Code.GDGreenButtonObjects1.length = 0;
gdjs._495Code.GDGreenButtonObjects2.length = 0;

gdjs._495Code.eventsList0(runtimeScene);

return;

}

gdjs['_495Code'] = gdjs._495Code;
