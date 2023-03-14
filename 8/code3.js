gdjs._52BCode = {};
gdjs._52BCode.GDtenframeObjects1= [];
gdjs._52BCode.GDtenframeObjects2= [];
gdjs._52BCode.GDcounterObjects1= [];
gdjs._52BCode.GDcounterObjects2= [];
gdjs._52BCode.GDjarObjects1= [];
gdjs._52BCode.GDjarObjects2= [];
gdjs._52BCode.GDTTSObjects1= [];
gdjs._52BCode.GDTTSObjects2= [];
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._52BCode.GDfireflyObjects1= [];
gdjs._52BCode.GDfireflyObjects2= [];
gdjs._52BCode.GDfireflyObjects1= [];
gdjs._52BCode.GDfireflyObjects2= [];
gdjs._52BCode.GDjarObjects1= [];
gdjs._52BCode.GDjarObjects2= [];
gdjs._52BCode.GDdirectionsObjects1= [];
gdjs._52BCode.GDdirectionsObjects2= [];
gdjs._52BCode.GDcountObjects1= [];
gdjs._52BCode.GDcountObjects2= [];
gdjs._52BCode.GDcountinjarObjects1= [];
gdjs._52BCode.GDcountinjarObjects2= [];
gdjs._52BCode.GDTTSObjects1= [];
gdjs._52BCode.GDTTSObjects2= [];
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._52BCode.GDtenframeObjects1= [];
gdjs._52BCode.GDtenframeObjects2= [];
gdjs._52BCode.GDcounterObjects1= [];
gdjs._52BCode.GDcounterObjects2= [];
gdjs._52BCode.GDshelfObjects1= [];
gdjs._52BCode.GDshelfObjects2= [];

gdjs._52BCode.conditionTrue_0 = {val:false};
gdjs._52BCode.condition0IsTrue_0 = {val:false};
gdjs._52BCode.condition1IsTrue_0 = {val:false};
gdjs._52BCode.condition2IsTrue_0 = {val:false};
gdjs._52BCode.condition3IsTrue_0 = {val:false};
gdjs._52BCode.conditionTrue_1 = {val:false};
gdjs._52BCode.condition0IsTrue_1 = {val:false};
gdjs._52BCode.condition1IsTrue_1 = {val:false};
gdjs._52BCode.condition2IsTrue_1 = {val:false};
gdjs._52BCode.condition3IsTrue_1 = {val:false};


gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._52BCode.GDdirectionsObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1);
/* Reuse gdjs._52BCode.GDcountObjects1 */
/* Reuse gdjs._52BCode.GDcountinjarObjects1 */

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == (( gdjs._52BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._52BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition2IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17066388);
}
}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._52BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._52BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._52BCode.asyncCallback17041540 = function (runtimeScene, asyncObjectsList) {
}
gdjs._52BCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._52BCode.asyncCallback17041540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._52BCode.GDcounterObjects1});
gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._52BCode.GDtenframeObjects1});
gdjs._52BCode.eventsList2 = function(runtimeScene) {

};gdjs._52BCode.eventsList3 = function(runtimeScene) {

{


gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition1IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17044500);
}
}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._52BCode.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._52BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._52BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._52BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._52BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs._52BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDjarObjects1[i].enableEffect("Effect2", false);
}
}{for(var i = 0, len = gdjs._52BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDjarObjects1[i].enableEffect("Effect", false);
}
}}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDfireflyObjects1[k] = gdjs._52BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDfireflyObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition1IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17053132);
}
}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].setAnimationName("resting");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 5, 1.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( !(gdjs._52BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged()) ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDfireflyObjects1[k] = gdjs._52BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDfireflyObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( !(gdjs._52BCode.GDcountObjects1[i].getString() == "4") ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDfireflyObjects1[i].getX() < 520 ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDfireflyObjects1[k] = gdjs._52BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDfireflyObjects1.length = k;}if (gdjs._52BCode.condition0IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].setX(550);
}
}{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._52BCode.GDdirectionsObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
gdjs._52BCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition2IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17056988);
}
}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._52BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._52BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition1IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17058436);
}
}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._52BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._52BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition1IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17059716);
}
}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._52BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._52BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, false, runtimeScene, false);
}if (gdjs._52BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._52BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, true, runtimeScene, true);
}if (gdjs._52BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._52BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcountObjects1[i].setString("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "4" ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition1IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17062932);
}
}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._52BCode.GDcountinjarObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == (( gdjs._52BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._52BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
gdjs._52BCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition2IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17064052);
}
}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._52BCode.GDdirectionsObjects1);
{for(var i = 0, len = gdjs._52BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDdirectionsObjects1[i].setString("Nice, the ten frame shows the correct number of fireflies!");
}
}{for(var i = 0, len = gdjs._52BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDdirectionsObjects1[i].setColor("184;233;134");
}
}
{ //Subevents
gdjs._52BCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "5" ) {
        gdjs._52BCode.condition0IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition1IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17067180);
}
}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._52BCode.GDdirectionsObjects1);
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._52BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDdirectionsObjects1[i].setString("That is too many counters.");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._52BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._52BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._52BCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcounterObjects1[k] = gdjs._52BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcounterObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "1" ) {
        gdjs._52BCode.condition2IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcounterObjects1[i].setCenterPositionInScene(121,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcounterObjects1[k] = gdjs._52BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcounterObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "2" ) {
        gdjs._52BCode.condition2IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcounterObjects1[i].setCenterPositionInScene(197,238);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcounterObjects1[k] = gdjs._52BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcounterObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "3" ) {
        gdjs._52BCode.condition2IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcounterObjects1[i].setCenterPositionInScene(279,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcounterObjects1[k] = gdjs._52BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcounterObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "4" ) {
        gdjs._52BCode.condition2IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcounterObjects1[i].setCenterPositionInScene(367,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcounterObjects1[k] = gdjs._52BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcounterObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "5" ) {
        gdjs._52BCode.condition2IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcounterObjects1[i].setCenterPositionInScene(436,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._52BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._52BCode.GDtenframeObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDcounterObjects1Objects, gdjs._52BCode.mapOfGDgdjs_46_9552BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcounterObjects1[k] = gdjs._52BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcounterObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == "6" ) {
        gdjs._52BCode.condition2IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._52BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._52BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDcounterObjects1[i].setCenterPositionInScene(118,312);
}
}}

}


{


gdjs._52BCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._52BCode.GDcountinjarObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 4;
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == (( gdjs._52BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._52BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._52BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._52BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDjarObjects1[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._52BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDjarObjects1[i].enableEffect("Effect2", true);
}
}{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._52BCode.GDcountinjarObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == (( gdjs._52BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._52BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}}
if (gdjs._52BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._52BCode.GDcountinjarObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 6;
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == (( gdjs._52BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._52BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition2IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17049356);
}
}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._52BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._52BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._52BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "625392__drotzruhn__female-saying-yey-and-wohoo.wav", false, 25, 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._52BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._52BCode.GDcountinjarObjects1);

gdjs._52BCode.condition0IsTrue_0.val = false;
gdjs._52BCode.condition1IsTrue_0.val = false;
gdjs._52BCode.condition2IsTrue_0.val = false;
{
gdjs._52BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 10;
}if ( gdjs._52BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._52BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._52BCode.GDcountObjects1[i].getString() == (( gdjs._52BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._52BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._52BCode.condition1IsTrue_0.val = true;
        gdjs._52BCode.GDcountObjects1[k] = gdjs._52BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._52BCode.GDcountObjects1.length = k;}if ( gdjs._52BCode.condition1IsTrue_0.val ) {
{
{gdjs._52BCode.conditionTrue_1 = gdjs._52BCode.condition2IsTrue_0;
gdjs._52BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17049532);
}
}}
}
if (gdjs._52BCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(7, 9)), false);
}}

}


{


{
}

}


};

gdjs._52BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52BCode.GDtenframeObjects1.length = 0;
gdjs._52BCode.GDtenframeObjects2.length = 0;
gdjs._52BCode.GDcounterObjects1.length = 0;
gdjs._52BCode.GDcounterObjects2.length = 0;
gdjs._52BCode.GDjarObjects1.length = 0;
gdjs._52BCode.GDjarObjects2.length = 0;
gdjs._52BCode.GDTTSObjects1.length = 0;
gdjs._52BCode.GDTTSObjects2.length = 0;
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._52BCode.GDfireflyObjects1.length = 0;
gdjs._52BCode.GDfireflyObjects2.length = 0;
gdjs._52BCode.GDfireflyObjects1.length = 0;
gdjs._52BCode.GDfireflyObjects2.length = 0;
gdjs._52BCode.GDjarObjects1.length = 0;
gdjs._52BCode.GDjarObjects2.length = 0;
gdjs._52BCode.GDdirectionsObjects1.length = 0;
gdjs._52BCode.GDdirectionsObjects2.length = 0;
gdjs._52BCode.GDcountObjects1.length = 0;
gdjs._52BCode.GDcountObjects2.length = 0;
gdjs._52BCode.GDcountinjarObjects1.length = 0;
gdjs._52BCode.GDcountinjarObjects2.length = 0;
gdjs._52BCode.GDTTSObjects1.length = 0;
gdjs._52BCode.GDTTSObjects2.length = 0;
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._52BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._52BCode.GDtenframeObjects1.length = 0;
gdjs._52BCode.GDtenframeObjects2.length = 0;
gdjs._52BCode.GDcounterObjects1.length = 0;
gdjs._52BCode.GDcounterObjects2.length = 0;
gdjs._52BCode.GDshelfObjects1.length = 0;
gdjs._52BCode.GDshelfObjects2.length = 0;

gdjs._52BCode.eventsList3(runtimeScene);

return;

}

gdjs['_52BCode'] = gdjs._52BCode;
