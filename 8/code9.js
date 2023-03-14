gdjs._55BCode = {};
gdjs._55BCode.GDtenframeObjects1= [];
gdjs._55BCode.GDtenframeObjects2= [];
gdjs._55BCode.GDcounterObjects1= [];
gdjs._55BCode.GDcounterObjects2= [];
gdjs._55BCode.GDjarObjects1= [];
gdjs._55BCode.GDjarObjects2= [];
gdjs._55BCode.GDTTSObjects1= [];
gdjs._55BCode.GDTTSObjects2= [];
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._55BCode.GDfireflyObjects1= [];
gdjs._55BCode.GDfireflyObjects2= [];
gdjs._55BCode.GDfireflyObjects1= [];
gdjs._55BCode.GDfireflyObjects2= [];
gdjs._55BCode.GDjarObjects1= [];
gdjs._55BCode.GDjarObjects2= [];
gdjs._55BCode.GDdirectionsObjects1= [];
gdjs._55BCode.GDdirectionsObjects2= [];
gdjs._55BCode.GDcountObjects1= [];
gdjs._55BCode.GDcountObjects2= [];
gdjs._55BCode.GDcountinjarObjects1= [];
gdjs._55BCode.GDcountinjarObjects2= [];
gdjs._55BCode.GDTTSObjects1= [];
gdjs._55BCode.GDTTSObjects2= [];
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._55BCode.GDshelfObjects1= [];
gdjs._55BCode.GDshelfObjects2= [];
gdjs._55BCode.GDBGObjects1= [];
gdjs._55BCode.GDBGObjects2= [];

gdjs._55BCode.conditionTrue_0 = {val:false};
gdjs._55BCode.condition0IsTrue_0 = {val:false};
gdjs._55BCode.condition1IsTrue_0 = {val:false};
gdjs._55BCode.condition2IsTrue_0 = {val:false};
gdjs._55BCode.condition3IsTrue_0 = {val:false};
gdjs._55BCode.conditionTrue_1 = {val:false};
gdjs._55BCode.condition0IsTrue_1 = {val:false};
gdjs._55BCode.condition1IsTrue_1 = {val:false};
gdjs._55BCode.condition2IsTrue_1 = {val:false};
gdjs._55BCode.condition3IsTrue_1 = {val:false};


gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._55BCode.GDdirectionsObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1);
/* Reuse gdjs._55BCode.GDcountObjects1 */
/* Reuse gdjs._55BCode.GDcountinjarObjects1 */

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == (( gdjs._55BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._55BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition2IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17283580);
}
}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._55BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._55BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._55BCode.asyncCallback17285348 = function (runtimeScene, asyncObjectsList) {
}
gdjs._55BCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._55BCode.asyncCallback17285348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._55BCode.GDcounterObjects1});
gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._55BCode.GDtenframeObjects1});
gdjs._55BCode.eventsList2 = function(runtimeScene) {

};gdjs._55BCode.eventsList3 = function(runtimeScene) {

{


gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition1IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17269740);
}
}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._55BCode.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._55BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._55BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._55BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._55BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs._55BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDjarObjects1[i].enableEffect("Effect2", false);
}
}{for(var i = 0, len = gdjs._55BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDjarObjects1[i].enableEffect("Effect", false);
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

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDfireflyObjects1[k] = gdjs._55BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDfireflyObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition1IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17273476);
}
}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].setAnimationName("resting");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 5, 1.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( !(gdjs._55BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged()) ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDfireflyObjects1[k] = gdjs._55BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDfireflyObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( !(gdjs._55BCode.GDcountObjects1[i].getString() == "7") ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDfireflyObjects1[i].getX() < 520 ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDfireflyObjects1[k] = gdjs._55BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDfireflyObjects1.length = k;}if (gdjs._55BCode.condition0IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].setX(550);
}
}{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._55BCode.GDdirectionsObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
gdjs._55BCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition2IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17276428);
}
}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._55BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._55BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition1IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17277684);
}
}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._55BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._55BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition1IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17278460);
}
}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._55BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._55BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, false, runtimeScene, false);
}if (gdjs._55BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._55BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, true, runtimeScene, true);
}if (gdjs._55BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._55BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcountObjects1[i].setString("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "7" ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition1IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17281052);
}
}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._55BCode.GDcountinjarObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == (( gdjs._55BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._55BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
gdjs._55BCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition2IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17282340);
}
}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._55BCode.GDdirectionsObjects1);
{for(var i = 0, len = gdjs._55BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDdirectionsObjects1[i].setString("Nice, the ten frame shows the correct number of fireflies!");
}
}{for(var i = 0, len = gdjs._55BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDdirectionsObjects1[i].setColor("184;233;134");
}
}
{ //Subevents
gdjs._55BCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "8" ) {
        gdjs._55BCode.condition0IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition1IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17284604);
}
}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._55BCode.GDdirectionsObjects1);
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._55BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDdirectionsObjects1[i].setString("That is too many counters.");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._55BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._55BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._55BCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "1" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(121,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "2" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(197,238);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "3" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(279,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "4" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(367,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "5" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(436,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "6" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(118,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "7" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(198,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "8" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(277,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._55BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._55BCode.GDtenframeObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDcounterObjects1Objects, gdjs._55BCode.mapOfGDgdjs_46_9555BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcounterObjects1[k] = gdjs._55BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcounterObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == "9" ) {
        gdjs._55BCode.condition2IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._55BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._55BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDcounterObjects1[i].setCenterPositionInScene(364,312);
}
}}

}


{


gdjs._55BCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._55BCode.GDcountinjarObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 4;
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == (( gdjs._55BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._55BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._55BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._55BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDjarObjects1[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._55BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDjarObjects1[i].enableEffect("Effect2", true);
}
}{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._55BCode.GDcountinjarObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == (( gdjs._55BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._55BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._55BCode.GDcountinjarObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
gdjs._55BCode.condition2IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 6;
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == (( gdjs._55BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._55BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}if ( gdjs._55BCode.condition1IsTrue_0.val ) {
{
{gdjs._55BCode.conditionTrue_1 = gdjs._55BCode.condition2IsTrue_0;
gdjs._55BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17298428);
}
}}
}
if (gdjs._55BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._55BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._55BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._55BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "625392__drotzruhn__female-saying-yey-and-wohoo.wav", false, 25, 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._55BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._55BCode.GDcountinjarObjects1);

gdjs._55BCode.condition0IsTrue_0.val = false;
gdjs._55BCode.condition1IsTrue_0.val = false;
{
gdjs._55BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 15;
}if ( gdjs._55BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._55BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._55BCode.GDcountObjects1[i].getString() == (( gdjs._55BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._55BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._55BCode.condition1IsTrue_0.val = true;
        gdjs._55BCode.GDcountObjects1[k] = gdjs._55BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._55BCode.GDcountObjects1.length = k;}}
if (gdjs._55BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(12, 14)), false);
}}

}


};

gdjs._55BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._55BCode.GDtenframeObjects1.length = 0;
gdjs._55BCode.GDtenframeObjects2.length = 0;
gdjs._55BCode.GDcounterObjects1.length = 0;
gdjs._55BCode.GDcounterObjects2.length = 0;
gdjs._55BCode.GDjarObjects1.length = 0;
gdjs._55BCode.GDjarObjects2.length = 0;
gdjs._55BCode.GDTTSObjects1.length = 0;
gdjs._55BCode.GDTTSObjects2.length = 0;
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._55BCode.GDfireflyObjects1.length = 0;
gdjs._55BCode.GDfireflyObjects2.length = 0;
gdjs._55BCode.GDfireflyObjects1.length = 0;
gdjs._55BCode.GDfireflyObjects2.length = 0;
gdjs._55BCode.GDjarObjects1.length = 0;
gdjs._55BCode.GDjarObjects2.length = 0;
gdjs._55BCode.GDdirectionsObjects1.length = 0;
gdjs._55BCode.GDdirectionsObjects2.length = 0;
gdjs._55BCode.GDcountObjects1.length = 0;
gdjs._55BCode.GDcountObjects2.length = 0;
gdjs._55BCode.GDcountinjarObjects1.length = 0;
gdjs._55BCode.GDcountinjarObjects2.length = 0;
gdjs._55BCode.GDTTSObjects1.length = 0;
gdjs._55BCode.GDTTSObjects2.length = 0;
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._55BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._55BCode.GDshelfObjects1.length = 0;
gdjs._55BCode.GDshelfObjects2.length = 0;
gdjs._55BCode.GDBGObjects1.length = 0;
gdjs._55BCode.GDBGObjects2.length = 0;

gdjs._55BCode.eventsList3(runtimeScene);

return;

}

gdjs['_55BCode'] = gdjs._55BCode;
