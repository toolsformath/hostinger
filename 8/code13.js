gdjs._57BCode = {};
gdjs._57BCode.GDtenframeObjects1= [];
gdjs._57BCode.GDtenframeObjects2= [];
gdjs._57BCode.GDcounterObjects1= [];
gdjs._57BCode.GDcounterObjects2= [];
gdjs._57BCode.GDjarObjects1= [];
gdjs._57BCode.GDjarObjects2= [];
gdjs._57BCode.GDTTSObjects1= [];
gdjs._57BCode.GDTTSObjects2= [];
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._57BCode.GDfireflyObjects1= [];
gdjs._57BCode.GDfireflyObjects2= [];
gdjs._57BCode.GDfireflyObjects1= [];
gdjs._57BCode.GDfireflyObjects2= [];
gdjs._57BCode.GDjarObjects1= [];
gdjs._57BCode.GDjarObjects2= [];
gdjs._57BCode.GDdirectionsObjects1= [];
gdjs._57BCode.GDdirectionsObjects2= [];
gdjs._57BCode.GDcountObjects1= [];
gdjs._57BCode.GDcountObjects2= [];
gdjs._57BCode.GDcountinjarObjects1= [];
gdjs._57BCode.GDcountinjarObjects2= [];
gdjs._57BCode.GDTTSObjects1= [];
gdjs._57BCode.GDTTSObjects2= [];
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._57BCode.GDtenframeObjects1= [];
gdjs._57BCode.GDtenframeObjects2= [];
gdjs._57BCode.GDcounterObjects1= [];
gdjs._57BCode.GDcounterObjects2= [];
gdjs._57BCode.GDshelfObjects1= [];
gdjs._57BCode.GDshelfObjects2= [];
gdjs._57BCode.GDBGObjects1= [];
gdjs._57BCode.GDBGObjects2= [];

gdjs._57BCode.conditionTrue_0 = {val:false};
gdjs._57BCode.condition0IsTrue_0 = {val:false};
gdjs._57BCode.condition1IsTrue_0 = {val:false};
gdjs._57BCode.condition2IsTrue_0 = {val:false};
gdjs._57BCode.condition3IsTrue_0 = {val:false};
gdjs._57BCode.conditionTrue_1 = {val:false};
gdjs._57BCode.condition0IsTrue_1 = {val:false};
gdjs._57BCode.condition1IsTrue_1 = {val:false};
gdjs._57BCode.condition2IsTrue_1 = {val:false};
gdjs._57BCode.condition3IsTrue_1 = {val:false};


gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._57BCode.GDdirectionsObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1);
/* Reuse gdjs._57BCode.GDcountObjects1 */
/* Reuse gdjs._57BCode.GDcountinjarObjects1 */

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == (( gdjs._57BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._57BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition2IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17449660);
}
}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._57BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._57BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._57BCode.asyncCallback17451428 = function (runtimeScene, asyncObjectsList) {
}
gdjs._57BCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._57BCode.asyncCallback17451428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._57BCode.GDcounterObjects1});
gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._57BCode.GDtenframeObjects1});
gdjs._57BCode.eventsList2 = function(runtimeScene) {

};gdjs._57BCode.eventsList3 = function(runtimeScene) {

{


gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition1IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17435820);
}
}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._57BCode.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._57BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._57BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._57BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._57BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs._57BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDjarObjects1[i].enableEffect("Effect2", false);
}
}{for(var i = 0, len = gdjs._57BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDjarObjects1[i].enableEffect("Effect", false);
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

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDfireflyObjects1[k] = gdjs._57BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDfireflyObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition1IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17439556);
}
}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].setAnimationName("resting");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 5, 1.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( !(gdjs._57BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged()) ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDfireflyObjects1[k] = gdjs._57BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDfireflyObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( !(gdjs._57BCode.GDcountObjects1[i].getString() == "9") ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDfireflyObjects1[i].getX() < 520 ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDfireflyObjects1[k] = gdjs._57BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDfireflyObjects1.length = k;}if (gdjs._57BCode.condition0IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].setX(550);
}
}{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._57BCode.GDdirectionsObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
gdjs._57BCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition2IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17442508);
}
}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._57BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._57BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition1IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17443764);
}
}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._57BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._57BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition1IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17444540);
}
}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._57BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._57BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, false, runtimeScene, false);
}if (gdjs._57BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._57BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, true, runtimeScene, true);
}if (gdjs._57BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._57BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcountObjects1[i].setString("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "9" ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition1IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17447132);
}
}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._57BCode.GDcountinjarObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == (( gdjs._57BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._57BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
gdjs._57BCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition2IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17448420);
}
}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._57BCode.GDdirectionsObjects1);
{for(var i = 0, len = gdjs._57BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDdirectionsObjects1[i].setString("Nice, the ten frame shows the correct number of fireflies!");
}
}{for(var i = 0, len = gdjs._57BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDdirectionsObjects1[i].setColor("184;233;134");
}
}
{ //Subevents
gdjs._57BCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "10" ) {
        gdjs._57BCode.condition0IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition1IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17450684);
}
}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._57BCode.GDdirectionsObjects1);
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._57BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDdirectionsObjects1[i].setString("That is too many counters.");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._57BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._57BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._57BCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "1" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(121,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "2" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(197,238);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "3" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(279,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "4" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(367,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "5" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(436,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "6" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(118,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "7" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(198,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "8" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(277,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._57BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._57BCode.GDtenframeObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDcounterObjects1Objects, gdjs._57BCode.mapOfGDgdjs_46_9557BCode_46GDtenframeObjects1Objects, false, runtimeScene, false);
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcounterObjects1[k] = gdjs._57BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcounterObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == "9" ) {
        gdjs._57BCode.condition2IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._57BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._57BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDcounterObjects1[i].setCenterPositionInScene(364,312);
}
}}

}


{


gdjs._57BCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._57BCode.GDcountinjarObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 4;
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == (( gdjs._57BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._57BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._57BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._57BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDjarObjects1[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._57BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDjarObjects1[i].enableEffect("Effect2", true);
}
}{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._57BCode.GDcountinjarObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == (( gdjs._57BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._57BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._57BCode.GDcountinjarObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
gdjs._57BCode.condition2IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 6;
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == (( gdjs._57BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._57BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}if ( gdjs._57BCode.condition1IsTrue_0.val ) {
{
{gdjs._57BCode.conditionTrue_1 = gdjs._57BCode.condition2IsTrue_0;
gdjs._57BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17464508);
}
}}
}
if (gdjs._57BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._57BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._57BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._57BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "625392__drotzruhn__female-saying-yey-and-wohoo.wav", false, 25, 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._57BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._57BCode.GDcountinjarObjects1);

gdjs._57BCode.condition0IsTrue_0.val = false;
gdjs._57BCode.condition1IsTrue_0.val = false;
{
gdjs._57BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 15;
}if ( gdjs._57BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._57BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._57BCode.GDcountObjects1[i].getString() == (( gdjs._57BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._57BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._57BCode.condition1IsTrue_0.val = true;
        gdjs._57BCode.GDcountObjects1[k] = gdjs._57BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._57BCode.GDcountObjects1.length = k;}}
if (gdjs._57BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(12, 14)), false);
}}

}


{


{
}

}


};

gdjs._57BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._57BCode.GDtenframeObjects1.length = 0;
gdjs._57BCode.GDtenframeObjects2.length = 0;
gdjs._57BCode.GDcounterObjects1.length = 0;
gdjs._57BCode.GDcounterObjects2.length = 0;
gdjs._57BCode.GDjarObjects1.length = 0;
gdjs._57BCode.GDjarObjects2.length = 0;
gdjs._57BCode.GDTTSObjects1.length = 0;
gdjs._57BCode.GDTTSObjects2.length = 0;
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._57BCode.GDfireflyObjects1.length = 0;
gdjs._57BCode.GDfireflyObjects2.length = 0;
gdjs._57BCode.GDfireflyObjects1.length = 0;
gdjs._57BCode.GDfireflyObjects2.length = 0;
gdjs._57BCode.GDjarObjects1.length = 0;
gdjs._57BCode.GDjarObjects2.length = 0;
gdjs._57BCode.GDdirectionsObjects1.length = 0;
gdjs._57BCode.GDdirectionsObjects2.length = 0;
gdjs._57BCode.GDcountObjects1.length = 0;
gdjs._57BCode.GDcountObjects2.length = 0;
gdjs._57BCode.GDcountinjarObjects1.length = 0;
gdjs._57BCode.GDcountinjarObjects2.length = 0;
gdjs._57BCode.GDTTSObjects1.length = 0;
gdjs._57BCode.GDTTSObjects2.length = 0;
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._57BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._57BCode.GDtenframeObjects1.length = 0;
gdjs._57BCode.GDtenframeObjects2.length = 0;
gdjs._57BCode.GDcounterObjects1.length = 0;
gdjs._57BCode.GDcounterObjects2.length = 0;
gdjs._57BCode.GDshelfObjects1.length = 0;
gdjs._57BCode.GDshelfObjects2.length = 0;
gdjs._57BCode.GDBGObjects1.length = 0;
gdjs._57BCode.GDBGObjects2.length = 0;

gdjs._57BCode.eventsList3(runtimeScene);

return;

}

gdjs['_57BCode'] = gdjs._57BCode;
