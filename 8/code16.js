gdjs._493Code = {};
gdjs._493Code.GDtenframeObjects1= [];
gdjs._493Code.GDtenframeObjects2= [];
gdjs._493Code.GDtenframeObjects3= [];
gdjs._493Code.GDcounterObjects1= [];
gdjs._493Code.GDcounterObjects2= [];
gdjs._493Code.GDcounterObjects3= [];
gdjs._493Code.GDjarObjects1= [];
gdjs._493Code.GDjarObjects2= [];
gdjs._493Code.GDjarObjects3= [];
gdjs._493Code.GDTTSObjects1= [];
gdjs._493Code.GDTTSObjects2= [];
gdjs._493Code.GDTTSObjects3= [];
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs._493Code.GDfireflyObjects1= [];
gdjs._493Code.GDfireflyObjects2= [];
gdjs._493Code.GDfireflyObjects3= [];
gdjs._493Code.GDfireflyObjects1= [];
gdjs._493Code.GDfireflyObjects2= [];
gdjs._493Code.GDfireflyObjects3= [];
gdjs._493Code.GDjarObjects1= [];
gdjs._493Code.GDjarObjects2= [];
gdjs._493Code.GDjarObjects3= [];
gdjs._493Code.GDdirectionsObjects1= [];
gdjs._493Code.GDdirectionsObjects2= [];
gdjs._493Code.GDdirectionsObjects3= [];
gdjs._493Code.GDcountObjects1= [];
gdjs._493Code.GDcountObjects2= [];
gdjs._493Code.GDcountObjects3= [];
gdjs._493Code.GDcountinjarObjects1= [];
gdjs._493Code.GDcountinjarObjects2= [];
gdjs._493Code.GDcountinjarObjects3= [];
gdjs._493Code.GDTTSObjects1= [];
gdjs._493Code.GDTTSObjects2= [];
gdjs._493Code.GDTTSObjects3= [];
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs._493Code.GDBG12Objects1= [];
gdjs._493Code.GDBG12Objects2= [];
gdjs._493Code.GDBG12Objects3= [];

gdjs._493Code.conditionTrue_0 = {val:false};
gdjs._493Code.condition0IsTrue_0 = {val:false};
gdjs._493Code.condition1IsTrue_0 = {val:false};
gdjs._493Code.condition2IsTrue_0 = {val:false};
gdjs._493Code.condition3IsTrue_0 = {val:false};
gdjs._493Code.conditionTrue_1 = {val:false};
gdjs._493Code.condition0IsTrue_1 = {val:false};
gdjs._493Code.condition1IsTrue_1 = {val:false};
gdjs._493Code.condition2IsTrue_1 = {val:false};
gdjs._493Code.condition3IsTrue_1 = {val:false};


gdjs._493Code.mapOfEmptyGDfireflyObjects = Hashtable.newFrom({"firefly": []});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDjarObjects1Objects = Hashtable.newFrom({"jar": gdjs._493Code.GDjarObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects = Hashtable.newFrom({"firefly": gdjs._493Code.GDfireflyObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects = Hashtable.newFrom({"firefly": gdjs._493Code.GDfireflyObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDjarObjects1Objects = Hashtable.newFrom({"jar": gdjs._493Code.GDjarObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects = Hashtable.newFrom({"firefly": gdjs._493Code.GDfireflyObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects = Hashtable.newFrom({"firefly": gdjs._493Code.GDfireflyObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects = Hashtable.newFrom({"firefly": gdjs._493Code.GDfireflyObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects = Hashtable.newFrom({"firefly": gdjs._493Code.GDfireflyObjects1});
gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDjarObjects1Objects = Hashtable.newFrom({"jar": gdjs._493Code.GDjarObjects1});
gdjs._493Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("count"), gdjs._493Code.GDcountObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects2);


gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2.length;i<l;++i) {
    if ( gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2[k] = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2[i];
        ++k;
    }
}
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._493Code.GDcountinjarObjects2.length;i<l;++i) {
    if ( gdjs._493Code.GDcountinjarObjects2[i].getString() == (( gdjs._493Code.GDcountObjects2.length === 0 ) ? "" :gdjs._493Code.GDcountObjects2[0].getString()) ) {
        gdjs._493Code.condition1IsTrue_0.val = true;
        gdjs._493Code.GDcountinjarObjects2[k] = gdjs._493Code.GDcountinjarObjects2[i];
        ++k;
    }
}
gdjs._493Code.GDcountinjarObjects2.length = k;}}
if (gdjs._493Code.condition1IsTrue_0.val) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "How many fireflies did you catch?", "Zira", 75, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._493Code.asyncCallback17596988 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._493Code.GDdirectionsObjects2);
{for(var i = 0, len = gdjs._493Code.GDdirectionsObjects2.length ;i < len;++i) {
    gdjs._493Code.GDdirectionsObjects2[i].setString("How many fireflies did you catch?");
}
}{for(var i = 0, len = gdjs._493Code.GDdirectionsObjects2.length ;i < len;++i) {
    gdjs._493Code.GDdirectionsObjects2[i].setColor("219;110;241");
}
}
{ //Subevents
gdjs._493Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs._493Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._493Code.GDcountObjects1) asyncObjectsList.addObject("count", obj);
for (const obj of gdjs._493Code.GDcountinjarObjects1) asyncObjectsList.addObject("countinjar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._493Code.asyncCallback17596988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._493Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("count"), gdjs._493Code.GDcountObjects2);

/* Reuse gdjs._493Code.GDcountinjarObjects2 */

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2.length;i<l;++i) {
    if ( gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2[k] = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2[i];
        ++k;
    }
}
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._493Code.GDcountinjarObjects2.length;i<l;++i) {
    if ( gdjs._493Code.GDcountinjarObjects2[i].getString() == (( gdjs._493Code.GDcountObjects2.length === 0 ) ? "" :gdjs._493Code.GDcountObjects2[0].getString()) ) {
        gdjs._493Code.condition1IsTrue_0.val = true;
        gdjs._493Code.GDcountinjarObjects2[k] = gdjs._493Code.GDcountinjarObjects2[i];
        ++k;
    }
}
gdjs._493Code.GDcountinjarObjects2.length = k;}}
if (gdjs._493Code.condition1IsTrue_0.val) {
/* Reuse gdjs._493Code.GDcountinjarObjects2 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Good, that is " + (( gdjs._493Code.GDcountinjarObjects2.length === 0 ) ? "" :gdjs._493Code.GDcountinjarObjects2[0].getString()) + " fireflies", "Zira", 75, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._493Code.asyncCallback17599292 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects2);

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._493Code.GDdirectionsObjects2);
{for(var i = 0, len = gdjs._493Code.GDdirectionsObjects2.length ;i < len;++i) {
    gdjs._493Code.GDdirectionsObjects2[i].setString("Good, that is " + (( gdjs._493Code.GDcountinjarObjects2.length === 0 ) ? "" :gdjs._493Code.GDcountinjarObjects2[0].getString()) + " fireflies!");
}
}{for(var i = 0, len = gdjs._493Code.GDdirectionsObjects2.length ;i < len;++i) {
    gdjs._493Code.GDdirectionsObjects2[i].setColor("184;233;134");
}
}
{ //Subevents
gdjs._493Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs._493Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._493Code.GDcountObjects1) asyncObjectsList.addObject("count", obj);
for (const obj of gdjs._493Code.GDcountinjarObjects1) asyncObjectsList.addObject("countinjar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(15), (runtimeScene) => (gdjs._493Code.asyncCallback17599292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._493Code.asyncCallback17601580 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "15B", false);
}}
gdjs._493Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(18), (runtimeScene) => (gdjs._493Code.asyncCallback17601580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._493Code.GDdirectionsObjects1});
gdjs._493Code.eventsList5 = function(runtimeScene) {

{


gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17587644);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._493Code.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._493Code.GDjarObjects1);
{for(var i = 0, len = gdjs._493Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._493Code.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._493Code.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._493Code.GDfireflyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._493Code.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._493Code.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{



}


{


gdjs._493Code.condition0IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs._493Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._493Code.GDcountObjects1);
{for(var i = 0, len = gdjs._493Code.GDcountObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._493Code.mapOfEmptyGDfireflyObjects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._493Code.GDjarObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDjarObjects1Objects, gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects, false, runtimeScene, true);
}if (gdjs._493Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects1);
{for(var i = 0, len = gdjs._493Code.GDcountinjarObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcountinjarObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._493Code.GDjarObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDjarObjects1Objects, gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects, true, runtimeScene, true);
}if (gdjs._493Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects1);
{for(var i = 0, len = gdjs._493Code.GDcountinjarObjects1.length ;i < len;++i) {
    gdjs._493Code.GDcountinjarObjects1[i].setString("0");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects, runtimeScene, true, false);
}if (gdjs._493Code.condition0IsTrue_0.val) {
/* Reuse gdjs._493Code.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._493Code.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._493Code.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects, runtimeScene, true, true);
}if (gdjs._493Code.condition0IsTrue_0.val) {
/* Reuse gdjs._493Code.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._493Code.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._493Code.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDfireflyObjects1[k] = gdjs._493Code.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDfireflyObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17593412);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
/* Reuse gdjs._493Code.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._493Code.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._493Code.GDfireflyObjects1[i].setAnimationName("resting");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 5, 1.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDfireflyObjects1[k] = gdjs._493Code.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDfireflyObjects1.length = k;}if (gdjs._493Code.condition0IsTrue_0.val) {
/* Reuse gdjs._493Code.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._493Code.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._493Code.GDfireflyObjects1[i].setAnimationName("resting");
}
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._493Code.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._493Code.GDjarObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
gdjs._493Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDfireflyObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDfireflyObjects1[k] = gdjs._493Code.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDfireflyObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
gdjs._493Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDfireflyObjects1Objects, gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDjarObjects1Objects, false, runtimeScene, false);
}if ( gdjs._493Code.condition1IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition2IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17595596);
}
}}
}
if (gdjs._493Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects1);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, gdjs.evtTools.string.subStr((( gdjs._493Code.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._493Code.GDcountinjarObjects1[0].getString()), 0, 100), "Zira", 75, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._493Code.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDcountinjarObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDcountinjarObjects1[i].getString() == (( gdjs._493Code.GDcountObjects1.length === 0 ) ? "" :gdjs._493Code.GDcountObjects1[0].getString()) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDcountinjarObjects1[k] = gdjs._493Code.GDcountinjarObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDcountinjarObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17596692);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs._493Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._493Code.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDcountinjarObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDcountinjarObjects1[i].getString() == (( gdjs._493Code.GDcountObjects1.length === 0 ) ? "" :gdjs._493Code.GDcountObjects1[0].getString()) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDcountinjarObjects1[k] = gdjs._493Code.GDcountinjarObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDcountinjarObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17599220);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs._493Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._493Code.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._493Code.GDcountinjarObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDcountinjarObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDcountinjarObjects1[i].getString() == (( gdjs._493Code.GDcountObjects1.length === 0 ) ? "" :gdjs._493Code.GDcountObjects1[0].getString()) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDcountinjarObjects1[k] = gdjs._493Code.GDcountinjarObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDcountinjarObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17601508);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs._493Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._493Code.GDdirectionsObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
gdjs._493Code.condition2IsTrue_0.val = false;
{
gdjs._493Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._493Code.mapOfGDgdjs_46_95493Code_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
gdjs._493Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._493Code.condition1IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition2IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17602308);
}
}}
}
if (gdjs._493Code.condition2IsTrue_0.val) {
/* Reuse gdjs._493Code.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._493Code.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._493Code.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17603740);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._493Code.GDTTSObjects1);
{for(var i = 0, len = gdjs._493Code.GDTTSObjects1.length ;i < len;++i) {
    gdjs._493Code.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._493Code.condition0IsTrue_0.val = false;
gdjs._493Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._493Code.condition0IsTrue_0.val = true;
        gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._493Code.condition0IsTrue_0.val ) {
{
{gdjs._493Code.conditionTrue_1 = gdjs._493Code.condition1IsTrue_0;
gdjs._493Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17604676);
}
}}
if (gdjs._493Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._493Code.GDTTSObjects1);
{for(var i = 0, len = gdjs._493Code.GDTTSObjects1.length ;i < len;++i) {
    gdjs._493Code.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs._493Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._493Code.GDtenframeObjects1.length = 0;
gdjs._493Code.GDtenframeObjects2.length = 0;
gdjs._493Code.GDtenframeObjects3.length = 0;
gdjs._493Code.GDcounterObjects1.length = 0;
gdjs._493Code.GDcounterObjects2.length = 0;
gdjs._493Code.GDcounterObjects3.length = 0;
gdjs._493Code.GDjarObjects1.length = 0;
gdjs._493Code.GDjarObjects2.length = 0;
gdjs._493Code.GDjarObjects3.length = 0;
gdjs._493Code.GDTTSObjects1.length = 0;
gdjs._493Code.GDTTSObjects2.length = 0;
gdjs._493Code.GDTTSObjects3.length = 0;
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs._493Code.GDfireflyObjects1.length = 0;
gdjs._493Code.GDfireflyObjects2.length = 0;
gdjs._493Code.GDfireflyObjects3.length = 0;
gdjs._493Code.GDfireflyObjects1.length = 0;
gdjs._493Code.GDfireflyObjects2.length = 0;
gdjs._493Code.GDfireflyObjects3.length = 0;
gdjs._493Code.GDjarObjects1.length = 0;
gdjs._493Code.GDjarObjects2.length = 0;
gdjs._493Code.GDjarObjects3.length = 0;
gdjs._493Code.GDdirectionsObjects1.length = 0;
gdjs._493Code.GDdirectionsObjects2.length = 0;
gdjs._493Code.GDdirectionsObjects3.length = 0;
gdjs._493Code.GDcountObjects1.length = 0;
gdjs._493Code.GDcountObjects2.length = 0;
gdjs._493Code.GDcountObjects3.length = 0;
gdjs._493Code.GDcountinjarObjects1.length = 0;
gdjs._493Code.GDcountinjarObjects2.length = 0;
gdjs._493Code.GDcountinjarObjects3.length = 0;
gdjs._493Code.GDTTSObjects1.length = 0;
gdjs._493Code.GDTTSObjects2.length = 0;
gdjs._493Code.GDTTSObjects3.length = 0;
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._493Code.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs._493Code.GDBG12Objects1.length = 0;
gdjs._493Code.GDBG12Objects2.length = 0;
gdjs._493Code.GDBG12Objects3.length = 0;

gdjs._493Code.eventsList5(runtimeScene);

return;

}

gdjs['_493Code'] = gdjs._493Code;
