gdjs._492BCode = {};
gdjs._492BCode.GDtenframeObjects1= [];
gdjs._492BCode.GDtenframeObjects2= [];
gdjs._492BCode.GDcounterObjects1= [];
gdjs._492BCode.GDcounterObjects2= [];
gdjs._492BCode.GDjarObjects1= [];
gdjs._492BCode.GDjarObjects2= [];
gdjs._492BCode.GDTTSObjects1= [];
gdjs._492BCode.GDTTSObjects2= [];
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._492BCode.GDfireflyObjects1= [];
gdjs._492BCode.GDfireflyObjects2= [];
gdjs._492BCode.GDfireflyObjects1= [];
gdjs._492BCode.GDfireflyObjects2= [];
gdjs._492BCode.GDjarObjects1= [];
gdjs._492BCode.GDjarObjects2= [];
gdjs._492BCode.GDdirectionsObjects1= [];
gdjs._492BCode.GDdirectionsObjects2= [];
gdjs._492BCode.GDcountObjects1= [];
gdjs._492BCode.GDcountObjects2= [];
gdjs._492BCode.GDcountinjarObjects1= [];
gdjs._492BCode.GDcountinjarObjects2= [];
gdjs._492BCode.GDTTSObjects1= [];
gdjs._492BCode.GDTTSObjects2= [];
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs._492BCode.GDtenframeObjects1= [];
gdjs._492BCode.GDtenframeObjects2= [];
gdjs._492BCode.GDcounterObjects1= [];
gdjs._492BCode.GDcounterObjects2= [];
gdjs._492BCode.GDshelfObjects1= [];
gdjs._492BCode.GDshelfObjects2= [];
gdjs._492BCode.GDNewSpriteObjects1= [];
gdjs._492BCode.GDNewSpriteObjects2= [];
gdjs._492BCode.GDtenframexxObjects1= [];
gdjs._492BCode.GDtenframexxObjects2= [];
gdjs._492BCode.GDBG12BObjects1= [];
gdjs._492BCode.GDBG12BObjects2= [];

gdjs._492BCode.conditionTrue_0 = {val:false};
gdjs._492BCode.condition0IsTrue_0 = {val:false};
gdjs._492BCode.condition1IsTrue_0 = {val:false};
gdjs._492BCode.condition2IsTrue_0 = {val:false};
gdjs._492BCode.condition3IsTrue_0 = {val:false};
gdjs._492BCode.conditionTrue_1 = {val:false};
gdjs._492BCode.condition0IsTrue_1 = {val:false};
gdjs._492BCode.condition1IsTrue_1 = {val:false};
gdjs._492BCode.condition2IsTrue_1 = {val:false};
gdjs._492BCode.condition3IsTrue_1 = {val:false};


gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDdirectionsObjects1Objects = Hashtable.newFrom({"directions": gdjs._492BCode.GDdirectionsObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1);
/* Reuse gdjs._492BCode.GDcountObjects1 */
/* Reuse gdjs._492BCode.GDcountinjarObjects1 */

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == (( gdjs._492BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._492BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition2IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17537548);
}
}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._492BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._492BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._492BCode.asyncCallback17539316 = function (runtimeScene, asyncObjectsList) {
}
gdjs._492BCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._492BCode.asyncCallback17539316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects = Hashtable.newFrom({"counter": gdjs._492BCode.GDcounterObjects1});
gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects = Hashtable.newFrom({"tenframe": gdjs._492BCode.GDtenframeObjects1, "tenframexx": gdjs._492BCode.GDtenframexxObjects1});
gdjs._492BCode.eventsList2 = function(runtimeScene) {

};gdjs._492BCode.eventsList3 = function(runtimeScene) {

{


gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition1IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17523708);
}
}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._492BCode.GDdirectionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._492BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._492BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDjarObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambiance_Nature_Night_Grasshopper_Crickets_Loop_Stereo.wav", true, 50, 1);
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._492BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._492BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs._492BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDjarObjects1[i].enableEffect("Effect2", false);
}
}{for(var i = 0, len = gdjs._492BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDjarObjects1[i].enableEffect("Effect", false);
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

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDfireflyObjects1[k] = gdjs._492BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDfireflyObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition1IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17527444);
}
}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].setAnimationName("resting");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 5, 1.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( !(gdjs._492BCode.GDfireflyObjects1[i].getBehavior("Draggable").isDragged()) ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDfireflyObjects1[k] = gdjs._492BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDfireflyObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( !(gdjs._492BCode.GDcountObjects1[i].getString() == "12") ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDfireflyObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDfireflyObjects1[i].getX() < 520 ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDfireflyObjects1[k] = gdjs._492BCode.GDfireflyObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDfireflyObjects1.length = k;}if (gdjs._492BCode.condition0IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDfireflyObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].setX(550);
}
}{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].setAnimationName("flying");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._492BCode.GDdirectionsObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDdirectionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
gdjs._492BCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition2IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17530396);
}
}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDdirectionsObjects1 */
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._492BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._492BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition1IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17531652);
}
}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._492BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._492BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDTTSObjects1[i].setAnimationName("ON");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition1IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17532428);
}
}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TTS"), gdjs._492BCode.GDTTSObjects1);
{for(var i = 0, len = gdjs._492BCode.GDTTSObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDTTSObjects1[i].setAnimationName("OFF");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "Reading OFF", "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, false, runtimeScene, false);
}if (gdjs._492BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._492BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcountObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, true, runtimeScene, true);
}if (gdjs._492BCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
{for(var i = 0, len = gdjs._492BCode.GDcountObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcountObjects1[i].setString("0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "12" ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition1IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17535020);
}
}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._492BCode.GDcountinjarObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == (( gdjs._492BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._492BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
gdjs._492BCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition2IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17536308);
}
}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._492BCode.GDdirectionsObjects1);
{for(var i = 0, len = gdjs._492BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDdirectionsObjects1[i].setString("Nice, the ten frame shows the correct number of fireflies!");
}
}{for(var i = 0, len = gdjs._492BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDdirectionsObjects1[i].setColor("184;233;134");
}
}
{ //Subevents
gdjs._492BCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "13" ) {
        gdjs._492BCode.condition0IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition1IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17538572);
}
}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("directions"), gdjs._492BCode.GDdirectionsObjects1);
{gdjs.evtsExt__TextToSpeech__StopSpeaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._492BCode.GDdirectionsObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDdirectionsObjects1[i].setString("That is too many counters.");
}
}{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, (( gdjs._492BCode.GDdirectionsObjects1.length === 0 ) ? "" :gdjs._492BCode.GDdirectionsObjects1[0].getString()), "Zira", 100, 100, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._492BCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "1" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(121,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "2" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(197,238);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "3" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(279,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "4" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(367,237);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "5" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(436,239);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "6" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(118,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "7" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(198,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "8" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(277,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "9" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(364,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "10" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(435,312);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "11" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(116,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "12" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(196,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "13" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(277,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "14" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(357,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "15" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(433,417);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "16" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(116,490);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "17" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(195,490);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs._492BCode.GDcounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframe"), gdjs._492BCode.GDtenframeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tenframexx"), gdjs._492BCode.GDtenframexxObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDcounterObjects1Objects, gdjs._492BCode.mapOfGDgdjs_46_95492BCode_46GDtenframeObjects1ObjectsGDgdjs_46_95492BCode_46GDtenframexxObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcounterObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcounterObjects1[k] = gdjs._492BCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcounterObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == "18" ) {
        gdjs._492BCode.condition2IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
/* Reuse gdjs._492BCode.GDcounterObjects1 */
{for(var i = 0, len = gdjs._492BCode.GDcounterObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDcounterObjects1[i].setCenterPositionInScene(277,490);
}
}}

}


{


gdjs._492BCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._492BCode.GDcountinjarObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 4;
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == (( gdjs._492BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._492BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);
gdjs.copyArray(runtimeScene.getObjects("jar"), gdjs._492BCode.GDjarObjects1);
{for(var i = 0, len = gdjs._492BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDjarObjects1[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._492BCode.GDjarObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDjarObjects1[i].enableEffect("Effect2", true);
}
}{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._492BCode.GDcountinjarObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 5;
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == (( gdjs._492BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._492BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].setAnimationName("firefly");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._492BCode.GDcountinjarObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
gdjs._492BCode.condition2IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 6;
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == (( gdjs._492BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._492BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}if ( gdjs._492BCode.condition1IsTrue_0.val ) {
{
{gdjs._492BCode.conditionTrue_1 = gdjs._492BCode.condition2IsTrue_0;
gdjs._492BCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17561988);
}
}}
}
if (gdjs._492BCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("firefly"), gdjs._492BCode.GDfireflyObjects1);
{for(var i = 0, len = gdjs._492BCode.GDfireflyObjects1.length ;i < len;++i) {
    gdjs._492BCode.GDfireflyObjects1[i].addForceTowardPosition(gdjs.randomInRange(550, 750), -(10), 3, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "625392__drotzruhn__female-saying-yey-and-wohoo.wav", false, 25, 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("count"), gdjs._492BCode.GDcountObjects1);
gdjs.copyArray(runtimeScene.getObjects("countinjar"), gdjs._492BCode.GDcountinjarObjects1);

gdjs._492BCode.condition0IsTrue_0.val = false;
gdjs._492BCode.condition1IsTrue_0.val = false;
{
gdjs._492BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 20;
}if ( gdjs._492BCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492BCode.GDcountObjects1.length;i<l;++i) {
    if ( gdjs._492BCode.GDcountObjects1[i].getString() == (( gdjs._492BCode.GDcountinjarObjects1.length === 0 ) ? "" :gdjs._492BCode.GDcountinjarObjects1[0].getString()) ) {
        gdjs._492BCode.condition1IsTrue_0.val = true;
        gdjs._492BCode.GDcountObjects1[k] = gdjs._492BCode.GDcountObjects1[i];
        ++k;
    }
}
gdjs._492BCode.GDcountObjects1.length = k;}}
if (gdjs._492BCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.randomInRange(100, 102)), false);
}}

}


};

gdjs._492BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._492BCode.GDtenframeObjects1.length = 0;
gdjs._492BCode.GDtenframeObjects2.length = 0;
gdjs._492BCode.GDcounterObjects1.length = 0;
gdjs._492BCode.GDcounterObjects2.length = 0;
gdjs._492BCode.GDjarObjects1.length = 0;
gdjs._492BCode.GDjarObjects2.length = 0;
gdjs._492BCode.GDTTSObjects1.length = 0;
gdjs._492BCode.GDTTSObjects2.length = 0;
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._492BCode.GDfireflyObjects1.length = 0;
gdjs._492BCode.GDfireflyObjects2.length = 0;
gdjs._492BCode.GDfireflyObjects1.length = 0;
gdjs._492BCode.GDfireflyObjects2.length = 0;
gdjs._492BCode.GDjarObjects1.length = 0;
gdjs._492BCode.GDjarObjects2.length = 0;
gdjs._492BCode.GDdirectionsObjects1.length = 0;
gdjs._492BCode.GDdirectionsObjects2.length = 0;
gdjs._492BCode.GDcountObjects1.length = 0;
gdjs._492BCode.GDcountObjects2.length = 0;
gdjs._492BCode.GDcountinjarObjects1.length = 0;
gdjs._492BCode.GDcountinjarObjects2.length = 0;
gdjs._492BCode.GDTTSObjects1.length = 0;
gdjs._492BCode.GDTTSObjects2.length = 0;
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs._492BCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs._492BCode.GDtenframeObjects1.length = 0;
gdjs._492BCode.GDtenframeObjects2.length = 0;
gdjs._492BCode.GDcounterObjects1.length = 0;
gdjs._492BCode.GDcounterObjects2.length = 0;
gdjs._492BCode.GDshelfObjects1.length = 0;
gdjs._492BCode.GDshelfObjects2.length = 0;
gdjs._492BCode.GDNewSpriteObjects1.length = 0;
gdjs._492BCode.GDNewSpriteObjects2.length = 0;
gdjs._492BCode.GDtenframexxObjects1.length = 0;
gdjs._492BCode.GDtenframexxObjects2.length = 0;
gdjs._492BCode.GDBG12BObjects1.length = 0;
gdjs._492BCode.GDBG12BObjects2.length = 0;

gdjs._492BCode.eventsList3(runtimeScene);

return;

}

gdjs['_492BCode'] = gdjs._492BCode;
