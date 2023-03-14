gdjs._495BCode = {};
gdjs._495BCode.GDtenframeObjects1= [];
gdjs._495BCode.GDtenframeObjects2= [];
gdjs._495BCode.GDcounterObjects1= [];
gdjs._495BCode.GDcounterObjects2= [];
gdjs._495BCode.GDjarObjects1= [];
gdjs._495BCode.GDjarObjects2= [];
gdjs._495BCode.GDTTSObjects1= [];
gdjs._495BCode.GDTTSObjects2= [];
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._495BCode.GDfireflyObjects1= [];
gdjs._495BCode.GDfireflyObjects2= [];
gdjs._495BCode.GDfireflyObjects1= [];
gdjs._495BCode.GDfireflyObjects2= [];
gdjs._495BCode.GDjarObjects1= [];
gdjs._495BCode.GDjarObjects2= [];
gdjs._495BCode.GDdirectionsObjects1= [];
gdjs._495BCode.GDdirectionsObjects2= [];
gdjs._495BCode.GDcountObjects1= [];
gdjs._495BCode.GDcountObjects2= [];
gdjs._495BCode.GDcountinjarObjects1= [];
gdjs._495BCode.GDcountinjarObjects2= [];
gdjs._495BCode.GDTTSObjects1= [];
gdjs._495BCode.GDTTSObjects2= [];
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._495BCode.GDtenframeObjects1= [];
gdjs._495BCode.GDtenframeObjects2= [];
gdjs._495BCode.GDcounterObjects1= [];
gdjs._495BCode.GDcounterObjects2= [];
gdjs._495BCode.GDshelfObjects1= [];
gdjs._495BCode.GDshelfObjects2= [];
gdjs._495BCode.GDNewSpriteObjects1= [];
gdjs._495BCode.GDNewSpriteObjects2= [];
gdjs._495BCode.GDtenframexxObjects1= [];
gdjs._495BCode.GDtenframexxObjects2= [];
gdjs._495BCode.GDBG12BObjects1= [];
gdjs._495BCode.GDBG12BObjects2= [];

gdjs._495BCode.conditionTrue_0 = {val:false};
gdjs._495BCode.condition0IsTrue_0 = {val:false};
gdjs._495BCode.condition1IsTrue_0 = {val:false};
gdjs._495BCode.condition2IsTrue_0 = {val:false};
gdjs._495BCode.condition3IsTrue_0 = {val:false};
gdjs._495BCode.conditionTrue_1 = {val:false};
gdjs._495BCode.condition0IsTrue_1 = {val:false};
gdjs._495BCode.condition1IsTrue_1 = {val:false};
gdjs._495BCode.condition2IsTrue_1 = {val:false};
gdjs._495BCode.condition3IsTrue_1 = {val:false};


gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._495BCode.GDdirectionsObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1);
/* Reuse gdjs._495BCode.GDcountObjects1 */
/* Reuse gdjs._495BCode.GDcountinjarObjects1 */

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == (( gdjs._495BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._495BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition2IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17637740);
}
}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._495BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._495BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._495BCode.asyncCallback17639508 = function (runtimeScene, asyncObjectsList) {
}
gdjs._495BCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._495BCode.asyncCallback17639508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._495BCode.GDcounterObjects1});
gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._495BCode.GDtenframeObjects1, "tenframexx": gdjs._495BCode.GDtenframexxObjects1});
gdjs._495BCode.eventsList2 = function(runtimeScene) {

};gdjs._495BCode.eventsList3 = function(runtimeScene) {

{


gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition1IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17623900);
}
}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._495BCode.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._495BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._495BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._495BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._495BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs._495BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDjarObjects1[i].enableEffect("Effect2", false);
}
}{for(var i = 0, len = gdjs._495BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDjarObjects1[i].enableEffect("Effect", false);
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

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDfireflyObjects1[k] = gdjs._495BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDfireflyObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition1IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17627636);
}
}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].setAnimationName("resting");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 5, 1.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( !(gdjs._495BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged()) ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDfireflyObjects1[k] = gdjs._495BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDfireflyObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( !(gdjs._495BCode.GDcountObjects1[i].getString() == "15") ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDfireflyObjects1[i].getX() < 520 ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDfireflyObjects1[k] = gdjs._495BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDfireflyObjects1.length = k;}if (gdjs._495BCode.condition0IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].setX(550);
}
}{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._495BCode.GDdirectionsObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
gdjs._495BCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition2IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17630588);
}
}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._495BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._495BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition1IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17631844);
}
}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._495BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._495BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition1IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17632620);
}
}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._495BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._495BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, false, runtimeScene, false);
}if (gdjs._495BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._495BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, true, runtimeScene, true);
}if (gdjs._495BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._495BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcountObjects1[i].setString("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "15" ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition1IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17635212);
}
}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._495BCode.GDcountinjarObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == (( gdjs._495BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._495BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
gdjs._495BCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition2IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17636500);
}
}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._495BCode.GDdirectionsObjects1);
{for(var i = 0, len = gdjs._495BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDdirectionsObjects1[i].setString("Nice, the ten frame shows the correct number of fireflies!");
}
}{for(var i = 0, len = gdjs._495BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDdirectionsObjects1[i].setColor("184;233;134");
}
}
{ //Subevents
gdjs._495BCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "16" ) {
        gdjs._495BCode.condition0IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition1IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17638764);
}
}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._495BCode.GDdirectionsObjects1);
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._495BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDdirectionsObjects1[i].setString("That is too many counters.");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._495BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._495BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._495BCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "1" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(121,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "2" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(197,238);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "3" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(279,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "4" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(367,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "5" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(436,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "6" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(118,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "7" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(198,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "8" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(277,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "9" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(364,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "10" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(435,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "11" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(116,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "12" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(196,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "13" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(277,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "14" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(357,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "15" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(433,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "16" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(116,490);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "17" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(195,490);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._495BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._495BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._495BCode.GDtenframexxObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDcounterObjects1Objects, gdjs._495BCode.mapOfGDgdjs_46_95495BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95495BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcounterObjects1[k] = gdjs._495BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcounterObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == "18" ) {
        gdjs._495BCode.condition2IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._495BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._495BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDcounterObjects1[i].setCenterPositionInScene(277,490);
}
}}

}


{


gdjs._495BCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._495BCode.GDcountinjarObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 4;
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == (( gdjs._495BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._495BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._495BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._495BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDjarObjects1[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._495BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDjarObjects1[i].enableEffect("Effect2", true);
}
}{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._495BCode.GDcountinjarObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == (( gdjs._495BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._495BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._495BCode.GDcountinjarObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
gdjs._495BCode.condition2IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 6;
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == (( gdjs._495BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._495BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}if ( gdjs._495BCode.condition1IsTrue_0.val ) {
{
{gdjs._495BCode.conditionTrue_1 = gdjs._495BCode.condition2IsTrue_0;
gdjs._495BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17662180);
}
}}
}
if (gdjs._495BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._495BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._495BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._495BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "625392__drotzruhn__female-saying-yey-and-wohoo.wav", false, 25, 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._495BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._495BCode.GDcountinjarObjects1);

gdjs._495BCode.condition0IsTrue_0.val = false;
gdjs._495BCode.condition1IsTrue_0.val = false;
{
gdjs._495BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 20;
}if ( gdjs._495BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._495BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._495BCode.GDcountObjects1[i].getString() == (( gdjs._495BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._495BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._495BCode.condition1IsTrue_0.val = true;
        gdjs._495BCode.GDcountObjects1[k] = gdjs._495BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._495BCode.GDcountObjects1.length = k;}}
if (gdjs._495BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(100, 102)), false);
}}

}


};

gdjs._495BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._495BCode.GDtenframeObjects1.length = 0;
gdjs._495BCode.GDtenframeObjects2.length = 0;
gdjs._495BCode.GDcounterObjects1.length = 0;
gdjs._495BCode.GDcounterObjects2.length = 0;
gdjs._495BCode.GDjarObjects1.length = 0;
gdjs._495BCode.GDjarObjects2.length = 0;
gdjs._495BCode.GDTTSObjects1.length = 0;
gdjs._495BCode.GDTTSObjects2.length = 0;
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._495BCode.GDfireflyObjects1.length = 0;
gdjs._495BCode.GDfireflyObjects2.length = 0;
gdjs._495BCode.GDfireflyObjects1.length = 0;
gdjs._495BCode.GDfireflyObjects2.length = 0;
gdjs._495BCode.GDjarObjects1.length = 0;
gdjs._495BCode.GDjarObjects2.length = 0;
gdjs._495BCode.GDdirectionsObjects1.length = 0;
gdjs._495BCode.GDdirectionsObjects2.length = 0;
gdjs._495BCode.GDcountObjects1.length = 0;
gdjs._495BCode.GDcountObjects2.length = 0;
gdjs._495BCode.GDcountinjarObjects1.length = 0;
gdjs._495BCode.GDcountinjarObjects2.length = 0;
gdjs._495BCode.GDTTSObjects1.length = 0;
gdjs._495BCode.GDTTSObjects2.length = 0;
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._495BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._495BCode.GDtenframeObjects1.length = 0;
gdjs._495BCode.GDtenframeObjects2.length = 0;
gdjs._495BCode.GDcounterObjects1.length = 0;
gdjs._495BCode.GDcounterObjects2.length = 0;
gdjs._495BCode.GDshelfObjects1.length = 0;
gdjs._495BCode.GDshelfObjects2.length = 0;
gdjs._495BCode.GDNewSpriteObjects1.length = 0;
gdjs._495BCode.GDNewSpriteObjects2.length = 0;
gdjs._495BCode.GDtenframexxObjects1.length = 0;
gdjs._495BCode.GDtenframexxObjects2.length = 0;
gdjs._495BCode.GDBG12BObjects1.length = 0;
gdjs._495BCode.GDBG12BObjects2.length = 0;

gdjs._495BCode.eventsList3(runtimeScene);

return;

}

gdjs['_495BCode'] = gdjs._495BCode;
