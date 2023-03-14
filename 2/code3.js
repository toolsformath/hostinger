gdjs._49_32frameCode = {};
gdjs._49_32frameCode.GDtenframeObjects1= [];
gdjs._49_32frameCode.GDtenframeObjects2= [];
gdjs._49_32frameCode.GDWhitepanelObjects1= [];
gdjs._49_32frameCode.GDWhitepanelObjects2= [];
gdjs._49_32frameCode.GDcounterredObjects1= [];
gdjs._49_32frameCode.GDcounterredObjects2= [];
gdjs._49_32frameCode.GDcounteryellowObjects1= [];
gdjs._49_32frameCode.GDcounteryellowObjects2= [];
gdjs._49_32frameCode.GDpointerObjects1= [];
gdjs._49_32frameCode.GDpointerObjects2= [];
gdjs._49_32frameCode.GDopentoolboxObjects1= [];
gdjs._49_32frameCode.GDopentoolboxObjects2= [];
gdjs._49_32frameCode.GDBrownBoxObjects1= [];
gdjs._49_32frameCode.GDBrownBoxObjects2= [];
gdjs._49_32frameCode.GDKeyButtonObjects1= [];
gdjs._49_32frameCode.GDKeyButtonObjects2= [];
gdjs._49_32frameCode.GDNewSpriteObjects1= [];
gdjs._49_32frameCode.GDNewSpriteObjects2= [];
gdjs._49_32frameCode.GDBathroomCleanerObjects1= [];
gdjs._49_32frameCode.GDBathroomCleanerObjects2= [];
gdjs._49_32frameCode.GDNewTextObjects1= [];
gdjs._49_32frameCode.GDNewTextObjects2= [];
gdjs._49_32frameCode.GDbackObjects1= [];
gdjs._49_32frameCode.GDbackObjects2= [];

gdjs._49_32frameCode.conditionTrue_0 = {val:false};
gdjs._49_32frameCode.condition0IsTrue_0 = {val:false};
gdjs._49_32frameCode.condition1IsTrue_0 = {val:false};
gdjs._49_32frameCode.condition2IsTrue_0 = {val:false};


gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDWhitepanelObjects1Objects = Hashtable.newFrom({"Whitepanel": gdjs._49_32frameCode.GDWhitepanelObjects1});
gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDWhitepanelObjects1Objects = Hashtable.newFrom({"Whitepanel": gdjs._49_32frameCode.GDWhitepanelObjects1});
gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDcounterredObjects1Objects = Hashtable.newFrom({"counterred": gdjs._49_32frameCode.GDcounterredObjects1});
gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDcounteryellowObjects1Objects = Hashtable.newFrom({"counteryellow": gdjs._49_32frameCode.GDcounteryellowObjects1});
gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDBathroomCleanerObjects1Objects = Hashtable.newFrom({"BathroomCleaner": gdjs._49_32frameCode.GDBathroomCleanerObjects1});
gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs._49_32frameCode.GDbackObjects1});
gdjs._49_32frameCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whitepanel"), gdjs._49_32frameCode.GDWhitepanelObjects1);

gdjs._49_32frameCode.condition0IsTrue_0.val = false;
{
gdjs._49_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDWhitepanelObjects1Objects, runtimeScene, true, false);
}if (gdjs._49_32frameCode.condition0IsTrue_0.val) {
/* Reuse gdjs._49_32frameCode.GDWhitepanelObjects1 */
{for(var i = 0, len = gdjs._49_32frameCode.GDWhitepanelObjects1.length ;i < len;++i) {
    gdjs._49_32frameCode.GDWhitepanelObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whitepanel"), gdjs._49_32frameCode.GDWhitepanelObjects1);

gdjs._49_32frameCode.condition0IsTrue_0.val = false;
{
gdjs._49_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDWhitepanelObjects1Objects, runtimeScene, true, true);
}if (gdjs._49_32frameCode.condition0IsTrue_0.val) {
/* Reuse gdjs._49_32frameCode.GDWhitepanelObjects1 */
{for(var i = 0, len = gdjs._49_32frameCode.GDWhitepanelObjects1.length ;i < len;++i) {
    gdjs._49_32frameCode.GDWhitepanelObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._49_32frameCode.GDcounterredObjects1);

gdjs._49_32frameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49_32frameCode.GDcounterredObjects1.length;i<l;++i) {
    if ( gdjs._49_32frameCode.GDcounterredObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._49_32frameCode.condition0IsTrue_0.val = true;
        gdjs._49_32frameCode.GDcounterredObjects1[k] = gdjs._49_32frameCode.GDcounterredObjects1[i];
        ++k;
    }
}
gdjs._49_32frameCode.GDcounterredObjects1.length = k;}if (gdjs._49_32frameCode.condition0IsTrue_0.val) {
/* Reuse gdjs._49_32frameCode.GDcounterredObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDcounterredObjects1Objects, 64, 64, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "728f601047e39503df2771c699e7d39447d3701a764e067b7ff7f46aa48f5bee_Bleep_04.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._49_32frameCode.GDcounteryellowObjects1);

gdjs._49_32frameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49_32frameCode.GDcounteryellowObjects1.length;i<l;++i) {
    if ( gdjs._49_32frameCode.GDcounteryellowObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._49_32frameCode.condition0IsTrue_0.val = true;
        gdjs._49_32frameCode.GDcounteryellowObjects1[k] = gdjs._49_32frameCode.GDcounteryellowObjects1[i];
        ++k;
    }
}
gdjs._49_32frameCode.GDcounteryellowObjects1.length = k;}if (gdjs._49_32frameCode.condition0IsTrue_0.val) {
/* Reuse gdjs._49_32frameCode.GDcounteryellowObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDcounteryellowObjects1Objects, 64, 64, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "728f601047e39503df2771c699e7d39447d3701a764e067b7ff7f46aa48f5bee_Bleep_04.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BathroomCleaner"), gdjs._49_32frameCode.GDBathroomCleanerObjects1);

gdjs._49_32frameCode.condition0IsTrue_0.val = false;
gdjs._49_32frameCode.condition1IsTrue_0.val = false;
{
gdjs._49_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDBathroomCleanerObjects1Objects, runtimeScene, true, false);
}if ( gdjs._49_32frameCode.condition0IsTrue_0.val ) {
{
gdjs._49_32frameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._49_32frameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "1 frame");
}{gdjs.evtTools.sound.playSound(runtimeScene, "f178b15d07558149164ad923a614264b44c769f5db110a20d848bc6a22617ad2_Jump_Start_05.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs._49_32frameCode.GDbackObjects1);

gdjs._49_32frameCode.condition0IsTrue_0.val = false;
gdjs._49_32frameCode.condition1IsTrue_0.val = false;
{
gdjs._49_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49_32frameCode.mapOfGDgdjs_46_9549_9532frameCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs._49_32frameCode.condition0IsTrue_0.val ) {
{
gdjs._49_32frameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._49_32frameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Choose", false);
}}

}


};

gdjs._49_32frameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49_32frameCode.GDtenframeObjects1.length = 0;
gdjs._49_32frameCode.GDtenframeObjects2.length = 0;
gdjs._49_32frameCode.GDWhitepanelObjects1.length = 0;
gdjs._49_32frameCode.GDWhitepanelObjects2.length = 0;
gdjs._49_32frameCode.GDcounterredObjects1.length = 0;
gdjs._49_32frameCode.GDcounterredObjects2.length = 0;
gdjs._49_32frameCode.GDcounteryellowObjects1.length = 0;
gdjs._49_32frameCode.GDcounteryellowObjects2.length = 0;
gdjs._49_32frameCode.GDpointerObjects1.length = 0;
gdjs._49_32frameCode.GDpointerObjects2.length = 0;
gdjs._49_32frameCode.GDopentoolboxObjects1.length = 0;
gdjs._49_32frameCode.GDopentoolboxObjects2.length = 0;
gdjs._49_32frameCode.GDBrownBoxObjects1.length = 0;
gdjs._49_32frameCode.GDBrownBoxObjects2.length = 0;
gdjs._49_32frameCode.GDKeyButtonObjects1.length = 0;
gdjs._49_32frameCode.GDKeyButtonObjects2.length = 0;
gdjs._49_32frameCode.GDNewSpriteObjects1.length = 0;
gdjs._49_32frameCode.GDNewSpriteObjects2.length = 0;
gdjs._49_32frameCode.GDBathroomCleanerObjects1.length = 0;
gdjs._49_32frameCode.GDBathroomCleanerObjects2.length = 0;
gdjs._49_32frameCode.GDNewTextObjects1.length = 0;
gdjs._49_32frameCode.GDNewTextObjects2.length = 0;
gdjs._49_32frameCode.GDbackObjects1.length = 0;
gdjs._49_32frameCode.GDbackObjects2.length = 0;

gdjs._49_32frameCode.eventsList0(runtimeScene);

return;

}

gdjs['_49_32frameCode'] = gdjs._49_32frameCode;
