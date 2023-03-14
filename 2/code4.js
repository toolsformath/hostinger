gdjs._50_32framesCode = {};
gdjs._50_32framesCode.GDtenframeObjects1= [];
gdjs._50_32framesCode.GDtenframeObjects2= [];
gdjs._50_32framesCode.GDWhitepanelObjects1= [];
gdjs._50_32framesCode.GDWhitepanelObjects2= [];
gdjs._50_32framesCode.GDcounterredObjects1= [];
gdjs._50_32framesCode.GDcounterredObjects2= [];
gdjs._50_32framesCode.GDcounteryellowObjects1= [];
gdjs._50_32framesCode.GDcounteryellowObjects2= [];
gdjs._50_32framesCode.GDpointerObjects1= [];
gdjs._50_32framesCode.GDpointerObjects2= [];
gdjs._50_32framesCode.GDopentoolboxObjects1= [];
gdjs._50_32framesCode.GDopentoolboxObjects2= [];
gdjs._50_32framesCode.GDBrownBoxObjects1= [];
gdjs._50_32framesCode.GDBrownBoxObjects2= [];
gdjs._50_32framesCode.GDKeyButtonObjects1= [];
gdjs._50_32framesCode.GDKeyButtonObjects2= [];
gdjs._50_32framesCode.GDNewSpriteObjects1= [];
gdjs._50_32framesCode.GDNewSpriteObjects2= [];
gdjs._50_32framesCode.GDcleanupObjects1= [];
gdjs._50_32framesCode.GDcleanupObjects2= [];
gdjs._50_32framesCode.GDNewSprite2Objects1= [];
gdjs._50_32framesCode.GDNewSprite2Objects2= [];

gdjs._50_32framesCode.conditionTrue_0 = {val:false};
gdjs._50_32framesCode.condition0IsTrue_0 = {val:false};
gdjs._50_32framesCode.condition1IsTrue_0 = {val:false};
gdjs._50_32framesCode.condition2IsTrue_0 = {val:false};


gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDWhitepanelObjects1Objects = Hashtable.newFrom({"Whitepanel": gdjs._50_32framesCode.GDWhitepanelObjects1});
gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDWhitepanelObjects1Objects = Hashtable.newFrom({"Whitepanel": gdjs._50_32framesCode.GDWhitepanelObjects1});
gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDcounterredObjects1Objects = Hashtable.newFrom({"counterred": gdjs._50_32framesCode.GDcounterredObjects1});
gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDcounteryellowObjects1Objects = Hashtable.newFrom({"counteryellow": gdjs._50_32framesCode.GDcounteryellowObjects1});
gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._50_32framesCode.GDNewSpriteObjects1});
gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._50_32framesCode.GDNewSprite2Objects1});
gdjs._50_32framesCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whitepanel"), gdjs._50_32framesCode.GDWhitepanelObjects1);

gdjs._50_32framesCode.condition0IsTrue_0.val = false;
{
gdjs._50_32framesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDWhitepanelObjects1Objects, runtimeScene, true, false);
}if (gdjs._50_32framesCode.condition0IsTrue_0.val) {
/* Reuse gdjs._50_32framesCode.GDWhitepanelObjects1 */
{for(var i = 0, len = gdjs._50_32framesCode.GDWhitepanelObjects1.length ;i < len;++i) {
    gdjs._50_32framesCode.GDWhitepanelObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whitepanel"), gdjs._50_32framesCode.GDWhitepanelObjects1);

gdjs._50_32framesCode.condition0IsTrue_0.val = false;
{
gdjs._50_32framesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDWhitepanelObjects1Objects, runtimeScene, true, true);
}if (gdjs._50_32framesCode.condition0IsTrue_0.val) {
/* Reuse gdjs._50_32framesCode.GDWhitepanelObjects1 */
{for(var i = 0, len = gdjs._50_32framesCode.GDWhitepanelObjects1.length ;i < len;++i) {
    gdjs._50_32framesCode.GDWhitepanelObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counterred"), gdjs._50_32framesCode.GDcounterredObjects1);

gdjs._50_32framesCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._50_32framesCode.GDcounterredObjects1.length;i<l;++i) {
    if ( gdjs._50_32framesCode.GDcounterredObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._50_32framesCode.condition0IsTrue_0.val = true;
        gdjs._50_32framesCode.GDcounterredObjects1[k] = gdjs._50_32framesCode.GDcounterredObjects1[i];
        ++k;
    }
}
gdjs._50_32framesCode.GDcounterredObjects1.length = k;}if (gdjs._50_32framesCode.condition0IsTrue_0.val) {
/* Reuse gdjs._50_32framesCode.GDcounterredObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDcounterredObjects1Objects, 64, 64, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "728f601047e39503df2771c699e7d39447d3701a764e067b7ff7f46aa48f5bee_Bleep_04.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counteryellow"), gdjs._50_32framesCode.GDcounteryellowObjects1);

gdjs._50_32framesCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._50_32framesCode.GDcounteryellowObjects1.length;i<l;++i) {
    if ( gdjs._50_32framesCode.GDcounteryellowObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs._50_32framesCode.condition0IsTrue_0.val = true;
        gdjs._50_32framesCode.GDcounteryellowObjects1[k] = gdjs._50_32framesCode.GDcounteryellowObjects1[i];
        ++k;
    }
}
gdjs._50_32framesCode.GDcounteryellowObjects1.length = k;}if (gdjs._50_32framesCode.condition0IsTrue_0.val) {
/* Reuse gdjs._50_32framesCode.GDcounteryellowObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDcounteryellowObjects1Objects, 64, 64, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "728f601047e39503df2771c699e7d39447d3701a764e067b7ff7f46aa48f5bee_Bleep_04.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._50_32framesCode.GDNewSpriteObjects1);

gdjs._50_32framesCode.condition0IsTrue_0.val = false;
gdjs._50_32framesCode.condition1IsTrue_0.val = false;
{
gdjs._50_32framesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs._50_32framesCode.condition0IsTrue_0.val ) {
{
gdjs._50_32framesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50_32framesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2 frames", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Jump_Start_05.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50_32framesCode.GDNewSprite2Objects1);

gdjs._50_32framesCode.condition0IsTrue_0.val = false;
gdjs._50_32framesCode.condition1IsTrue_0.val = false;
{
gdjs._50_32framesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._50_32framesCode.mapOfGDgdjs_46_9550_9532framesCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs._50_32framesCode.condition0IsTrue_0.val ) {
{
gdjs._50_32framesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._50_32framesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Choose", false);
}}

}


};

gdjs._50_32framesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50_32framesCode.GDtenframeObjects1.length = 0;
gdjs._50_32framesCode.GDtenframeObjects2.length = 0;
gdjs._50_32framesCode.GDWhitepanelObjects1.length = 0;
gdjs._50_32framesCode.GDWhitepanelObjects2.length = 0;
gdjs._50_32framesCode.GDcounterredObjects1.length = 0;
gdjs._50_32framesCode.GDcounterredObjects2.length = 0;
gdjs._50_32framesCode.GDcounteryellowObjects1.length = 0;
gdjs._50_32framesCode.GDcounteryellowObjects2.length = 0;
gdjs._50_32framesCode.GDpointerObjects1.length = 0;
gdjs._50_32framesCode.GDpointerObjects2.length = 0;
gdjs._50_32framesCode.GDopentoolboxObjects1.length = 0;
gdjs._50_32framesCode.GDopentoolboxObjects2.length = 0;
gdjs._50_32framesCode.GDBrownBoxObjects1.length = 0;
gdjs._50_32framesCode.GDBrownBoxObjects2.length = 0;
gdjs._50_32framesCode.GDKeyButtonObjects1.length = 0;
gdjs._50_32framesCode.GDKeyButtonObjects2.length = 0;
gdjs._50_32framesCode.GDNewSpriteObjects1.length = 0;
gdjs._50_32framesCode.GDNewSpriteObjects2.length = 0;
gdjs._50_32framesCode.GDcleanupObjects1.length = 0;
gdjs._50_32framesCode.GDcleanupObjects2.length = 0;
gdjs._50_32framesCode.GDNewSprite2Objects1.length = 0;
gdjs._50_32framesCode.GDNewSprite2Objects2.length = 0;

gdjs._50_32framesCode.eventsList0(runtimeScene);

return;

}

gdjs['_50_32framesCode'] = gdjs._50_32framesCode;
