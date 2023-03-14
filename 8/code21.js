gdjs._4901Code = {};
gdjs._4901Code.GDtenframeObjects1= [];
gdjs._4901Code.GDtenframeObjects2= [];
gdjs._4901Code.GDtenframeObjects3= [];
gdjs._4901Code.GDcounterObjects1= [];
gdjs._4901Code.GDcounterObjects2= [];
gdjs._4901Code.GDcounterObjects3= [];
gdjs._4901Code.GDjarObjects1= [];
gdjs._4901Code.GDjarObjects2= [];
gdjs._4901Code.GDjarObjects3= [];
gdjs._4901Code.GDTTSObjects1= [];
gdjs._4901Code.GDTTSObjects2= [];
gdjs._4901Code.GDTTSObjects3= [];
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs._4901Code.GDfireflyObjects1= [];
gdjs._4901Code.GDfireflyObjects2= [];
gdjs._4901Code.GDfireflyObjects3= [];
gdjs._4901Code.GDNewTiledSpriteObjects1= [];
gdjs._4901Code.GDNewTiledSpriteObjects2= [];
gdjs._4901Code.GDNewTiledSpriteObjects3= [];
gdjs._4901Code.GDffObjects1= [];
gdjs._4901Code.GDffObjects2= [];
gdjs._4901Code.GDffObjects3= [];
gdjs._4901Code.GDdirectionsObjects1= [];
gdjs._4901Code.GDdirectionsObjects2= [];
gdjs._4901Code.GDdirectionsObjects3= [];
gdjs._4901Code.GDcountObjects1= [];
gdjs._4901Code.GDcountObjects2= [];
gdjs._4901Code.GDcountObjects3= [];
gdjs._4901Code.GDcountinjarObjects1= [];
gdjs._4901Code.GDcountinjarObjects2= [];
gdjs._4901Code.GDcountinjarObjects3= [];
gdjs._4901Code.GDNewTiledSprite2Objects1= [];
gdjs._4901Code.GDNewTiledSprite2Objects2= [];
gdjs._4901Code.GDNewTiledSprite2Objects3= [];
gdjs._4901Code.GDbge1Objects1= [];
gdjs._4901Code.GDbge1Objects2= [];
gdjs._4901Code.GDbge1Objects3= [];
gdjs._4901Code.GDGOObjects1= [];
gdjs._4901Code.GDGOObjects2= [];
gdjs._4901Code.GDGOObjects3= [];
gdjs._4901Code.GDGOTEXTObjects1= [];
gdjs._4901Code.GDGOTEXTObjects2= [];
gdjs._4901Code.GDGOTEXTObjects3= [];

gdjs._4901Code.conditionTrue_0 = {val:false};
gdjs._4901Code.condition0IsTrue_0 = {val:false};
gdjs._4901Code.condition1IsTrue_0 = {val:false};
gdjs._4901Code.condition2IsTrue_0 = {val:false};
gdjs._4901Code.condition3IsTrue_0 = {val:false};
gdjs._4901Code.conditionTrue_1 = {val:false};
gdjs._4901Code.condition0IsTrue_1 = {val:false};
gdjs._4901Code.condition1IsTrue_1 = {val:false};
gdjs._4901Code.condition2IsTrue_1 = {val:false};
gdjs._4901Code.condition3IsTrue_1 = {val:false};


gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs._4901Code.GDNewTiledSpriteObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs._4901Code.GDNewTiledSprite2Objects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._4901Code.GDdirectionsObjects1});
gdjs._4901Code.asyncCallback16630876 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._4901Code.GDdirectionsObjects2);
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._4901Code.GDdirectionsObjects2.length === 0 ) ? "" :gdjs._4901Code.GDdirectionsObjects2[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs._4901Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._4901Code.asyncCallback16630876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._4901Code.asyncCallback9052188 = function (runtimeScene, asyncObjectsList) {
}
gdjs._4901Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._4901Code.asyncCallback9052188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDjarObjects1Objects = Hashtable.newFrom({"jar": gdjs._4901Code.GDjarObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects = Hashtable.newFrom({"ff": gdjs._4901Code.GDffObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects = Hashtable.newFrom({"ff": gdjs._4901Code.GDffObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDjarObjects1Objects = Hashtable.newFrom({"jar": gdjs._4901Code.GDjarObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects = Hashtable.newFrom({"ff": gdjs._4901Code.GDffObjects1});
gdjs._4901Code.asyncCallback17727284 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs._4901Code.GDNewTiledSpriteObjects3);
{for(var i = 0, len = gdjs._4901Code.GDNewTiledSpriteObjects3.length ;i < len;++i) {
    gdjs._4901Code.GDNewTiledSpriteObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "625392__drotzruhn__female-saying-yey-and-wohoo.wav", false, 10, 3);
}}
gdjs._4901Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._4901Code.asyncCallback17727284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._4901Code.asyncCallback10786948 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs._4901Code.GDNewTiledSprite2Objects2);
{for(var i = 0, len = gdjs._4901Code.GDNewTiledSprite2Objects2.length ;i < len;++i) {
    gdjs._4901Code.GDNewTiledSprite2Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs._4901Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs._4901Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._4901Code.asyncCallback10786948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOObjects2Objects = Hashtable.newFrom({"GO": gdjs._4901Code.GDGOObjects2});
gdjs._4901Code.asyncCallback16595892 = function (runtimeScene, asyncObjectsList) {
gdjs._4901Code.GDGOObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOObjects2Objects, 1018, 344, "");
}{for(var i = 0, len = gdjs._4901Code.GDGOObjects2.length ;i < len;++i) {
    gdjs._4901Code.GDGOObjects2[i].setSize(250, 250);
}
}}
gdjs._4901Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._4901Code.asyncCallback16595892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOTEXTObjects2Objects = Hashtable.newFrom({"GOTEXT": gdjs._4901Code.GDGOTEXTObjects2});
gdjs._4901Code.asyncCallback12048868 = function (runtimeScene, asyncObjectsList) {
gdjs._4901Code.GDGOTEXTObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOTEXTObjects2Objects, 1080, 425, "");
}}
gdjs._4901Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._4901Code.asyncCallback12048868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOObjects1Objects = Hashtable.newFrom({"GO": gdjs._4901Code.GDGOObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOObjects1Objects = Hashtable.newFrom({"GO": gdjs._4901Code.GDGOObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDjarObjects1Objects = Hashtable.newFrom({"jar": gdjs._4901Code.GDjarObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects = Hashtable.newFrom({"ff": gdjs._4901Code.GDffObjects1});
gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects = Hashtable.newFrom({"ff": gdjs._4901Code.GDffObjects1});
gdjs._4901Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._4901Code.GDjarObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDjarObjects1Objects, gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects, false, runtimeScene, false);
}if (gdjs._4901Code.condition0IsTrue_0.val) {
/* Reuse gdjs._4901Code.GDjarObjects1 */
{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].enableEffect("Glow", true);
}
}{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].enableEffect("Bloom", true);
}
}{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].setEffectDoubleParameter("Bloom", "brightness", 0.5 + (gdjs.evtTools.object.getPickedInstancesCount(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects) / 10));
}
}{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].setOpacity(100);
}
}}

}


};gdjs._4901Code.eventsList7 = function(runtimeScene) {

{


gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs._4901Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs._4901Code.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs._4901Code.GDNewTiledSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].getBehavior("Bounce").BounceOff(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDNewTiledSpriteObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].getBehavior("Bounce").BounceOff(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDNewTiledSprite2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 0.5, 0.5, 0.5, 0.5, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._4901Code.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDNewTiledSpriteObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._4901Code.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs._4901Code.GDNewTiledSprite2Objects1[i].setOpacity(0);
}
}}

}


{


gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition1IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16283556);
}
}}
if (gdjs._4901Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._4901Code.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._4901Code.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._4901Code.GDjarObjects1);
{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].addPolarForce(gdjs.randomInRange(-(360), 360), gdjs.random(50), 1);
}
}{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 11, 5, 5, 20, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._4901Code.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._4901Code.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].enableEffect("Bloom", false);
}
}{for(var i = 0, len = gdjs._4901Code.GDjarObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDjarObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs._4901Code.GDcounterObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDcounterObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].setAnimationName("flashing");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._4901Code.GDdirectionsObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
gdjs._4901Code.condition2IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
gdjs._4901Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._4901Code.condition1IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition2IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7568756);
}
}}
}
if (gdjs._4901Code.condition2IsTrue_0.val) {
/* Reuse gdjs._4901Code.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._4901Code.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._4901Code.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition1IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11343196);
}
}}
if (gdjs._4901Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._4901Code.GDTTSObjects1);
{for(var i = 0, len = gdjs._4901Code.GDTTSObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition1IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9028980);
}
}}
if (gdjs._4901Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._4901Code.GDTTSObjects1);
{for(var i = 0, len = gdjs._4901Code.GDTTSObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._4901Code.GDcountinjarObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
gdjs._4901Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDcountObjects1[i].getString() == (( gdjs._4901Code.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._4901Code.GDcountinjarObjects1[0].getString()) ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDcountObjects1[k] = gdjs._4901Code.GDcountObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDcountObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
gdjs._4901Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs._4901Code.condition1IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition2IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8227140);
}
}}
}
if (gdjs._4901Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._4901Code.GDdirectionsObjects1);
{for(var i = 0, len = gdjs._4901Code.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDdirectionsObjects1[i].setString("Perfect, the ten frame shows the number of fireflies in the jar!");
}
}{for(var i = 0, len = gdjs._4901Code.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDdirectionsObjects1[i].setColor("184;233;134");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("finished"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1);
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._4901Code.GDcountinjarObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
gdjs._4901Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDcountObjects1[i].getString() == (( gdjs._4901Code.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._4901Code.GDcountinjarObjects1[0].getString()) ) {
        gdjs._4901Code.condition1IsTrue_0.val = true;
        gdjs._4901Code.GDcountObjects1[k] = gdjs._4901Code.GDcountObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDcountObjects1.length = k;}if ( gdjs._4901Code.condition1IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition2IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16686372);
}
}}
}
if (gdjs._4901Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs._4901Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDcountObjects1[i].getString() == "14" ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDcountObjects1[k] = gdjs._4901Code.GDcountObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDcountObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition1IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8227564);
}
}}
if (gdjs._4901Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._4901Code.GDdirectionsObjects1);
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._4901Code.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDdirectionsObjects1[i].setString("That is too many fireflies.");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._4901Code.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._4901Code.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._4901Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._4901Code.GDjarObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDjarObjects1Objects, gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects, false, runtimeScene, false);
}if (gdjs._4901Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);
{for(var i = 0, len = gdjs._4901Code.GDcountObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDffObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDffObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDffObjects1[k] = gdjs._4901Code.GDffObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDffObjects1.length = k;}if (gdjs._4901Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 20, 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._4901Code.GDjarObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDjarObjects1Objects, gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDffObjects1Objects, true, runtimeScene, false);
}if (gdjs._4901Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);
{for(var i = 0, len = gdjs._4901Code.GDcountObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDcountObjects1[i].setString("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDcountObjects1[i].getString() == "1" ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDcountObjects1[k] = gdjs._4901Code.GDcountObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDcountObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
gdjs._4901Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("finished"), false);
}}
if (gdjs._4901Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._4901Code.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._4901Code.GDcountinjarObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
gdjs._4901Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._4901Code.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._4901Code.GDcountObjects1[i].getString() == (( gdjs._4901Code.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._4901Code.GDcountinjarObjects1[0].getString()) ) {
        gdjs._4901Code.condition0IsTrue_0.val = true;
        gdjs._4901Code.GDcountObjects1[k] = gdjs._4901Code.GDcountObjects1[i];
        ++k;
    }
}
gdjs._4901Code.GDcountObjects1.length = k;}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
gdjs._4901Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("finished"), true);
}if ( gdjs._4901Code.condition1IsTrue_0.val ) {
{
{gdjs._4901Code.conditionTrue_1 = gdjs._4901Code.condition2IsTrue_0;
gdjs._4901Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10786172);
}
}}
}
if (gdjs._4901Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ff"), gdjs._4901Code.GDffObjects1);
{for(var i = 0, len = gdjs._4901Code.GDffObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDffObjects1[i].addForceTowardPosition(gdjs.randomInRange(700, 800), gdjs.random(-(10)), 40, 1);
}
}
{ //Subevents
gdjs._4901Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("finished"), true);
}if (gdjs._4901Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._4901Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("finished"), true);
}if (gdjs._4901Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._4901Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GO"), gdjs._4901Code.GDGOObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOObjects1Objects, runtimeScene, true, false);
}if (gdjs._4901Code.condition0IsTrue_0.val) {
/* Reuse gdjs._4901Code.GDGOObjects1 */
{for(var i = 0, len = gdjs._4901Code.GDGOObjects1.length ;i < len;++i) {
    gdjs._4901Code.GDGOObjects1[i].setColor("74;144;226");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GO"), gdjs._4901Code.GDGOObjects1);

gdjs._4901Code.condition0IsTrue_0.val = false;
gdjs._4901Code.condition1IsTrue_0.val = false;
{
gdjs._4901Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._4901Code.mapOfGDgdjs_46_954901Code_46GDGOObjects1Objects, runtimeScene, true, false);
}if ( gdjs._4901Code.condition0IsTrue_0.val ) {
{
gdjs._4901Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._4901Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click_042.aac", false, 50, 1);
}}

}


{


gdjs._4901Code.eventsList6(runtimeScene);
}


{


{
}

}


};

gdjs._4901Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._4901Code.GDtenframeObjects1.length = 0;
gdjs._4901Code.GDtenframeObjects2.length = 0;
gdjs._4901Code.GDtenframeObjects3.length = 0;
gdjs._4901Code.GDcounterObjects1.length = 0;
gdjs._4901Code.GDcounterObjects2.length = 0;
gdjs._4901Code.GDcounterObjects3.length = 0;
gdjs._4901Code.GDjarObjects1.length = 0;
gdjs._4901Code.GDjarObjects2.length = 0;
gdjs._4901Code.GDjarObjects3.length = 0;
gdjs._4901Code.GDTTSObjects1.length = 0;
gdjs._4901Code.GDTTSObjects2.length = 0;
gdjs._4901Code.GDTTSObjects3.length = 0;
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._4901Code.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs._4901Code.GDfireflyObjects1.length = 0;
gdjs._4901Code.GDfireflyObjects2.length = 0;
gdjs._4901Code.GDfireflyObjects3.length = 0;
gdjs._4901Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._4901Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._4901Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._4901Code.GDffObjects1.length = 0;
gdjs._4901Code.GDffObjects2.length = 0;
gdjs._4901Code.GDffObjects3.length = 0;
gdjs._4901Code.GDdirectionsObjects1.length = 0;
gdjs._4901Code.GDdirectionsObjects2.length = 0;
gdjs._4901Code.GDdirectionsObjects3.length = 0;
gdjs._4901Code.GDcountObjects1.length = 0;
gdjs._4901Code.GDcountObjects2.length = 0;
gdjs._4901Code.GDcountObjects3.length = 0;
gdjs._4901Code.GDcountinjarObjects1.length = 0;
gdjs._4901Code.GDcountinjarObjects2.length = 0;
gdjs._4901Code.GDcountinjarObjects3.length = 0;
gdjs._4901Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._4901Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._4901Code.GDNewTiledSprite2Objects3.length = 0;
gdjs._4901Code.GDbge1Objects1.length = 0;
gdjs._4901Code.GDbge1Objects2.length = 0;
gdjs._4901Code.GDbge1Objects3.length = 0;
gdjs._4901Code.GDGOObjects1.length = 0;
gdjs._4901Code.GDGOObjects2.length = 0;
gdjs._4901Code.GDGOObjects3.length = 0;
gdjs._4901Code.GDGOTEXTObjects1.length = 0;
gdjs._4901Code.GDGOTEXTObjects2.length = 0;
gdjs._4901Code.GDGOTEXTObjects3.length = 0;

gdjs._4901Code.eventsList7(runtimeScene);

return;

}

gdjs['_4901Code'] = gdjs._4901Code;
