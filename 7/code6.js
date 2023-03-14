gdjs.Directions1Code = {};
gdjs.Directions1Code.GDtweObjects1= [];
gdjs.Directions1Code.GDtweObjects2= [];
gdjs.Directions1Code.GDtenObjects1= [];
gdjs.Directions1Code.GDtenObjects2= [];
gdjs.Directions1Code.GDninObjects1= [];
gdjs.Directions1Code.GDninObjects2= [];
gdjs.Directions1Code.GDsevObjects1= [];
gdjs.Directions1Code.GDsevObjects2= [];
gdjs.Directions1Code.GDsixObjects1= [];
gdjs.Directions1Code.GDsixObjects2= [];
gdjs.Directions1Code.GDfivObjects1= [];
gdjs.Directions1Code.GDfivObjects2= [];
gdjs.Directions1Code.GDfouObjects1= [];
gdjs.Directions1Code.GDfouObjects2= [];
gdjs.Directions1Code.GDthrObjects1= [];
gdjs.Directions1Code.GDthrObjects2= [];
gdjs.Directions1Code.GDtwoObjects1= [];
gdjs.Directions1Code.GDtwoObjects2= [];
gdjs.Directions1Code.GDoneObjects1= [];
gdjs.Directions1Code.GDoneObjects2= [];
gdjs.Directions1Code.GDeigObjects1= [];
gdjs.Directions1Code.GDeigObjects2= [];
gdjs.Directions1Code.GDGridButtonObjects1= [];
gdjs.Directions1Code.GDGridButtonObjects2= [];
gdjs.Directions1Code.GDGridObjects1= [];
gdjs.Directions1Code.GDGridObjects2= [];
gdjs.Directions1Code.GDBObjects1= [];
gdjs.Directions1Code.GDBObjects2= [];
gdjs.Directions1Code.GDDObjects1= [];
gdjs.Directions1Code.GDDObjects2= [];
gdjs.Directions1Code.GDAObjects1= [];
gdjs.Directions1Code.GDAObjects2= [];
gdjs.Directions1Code.GDEObjects1= [];
gdjs.Directions1Code.GDEObjects2= [];
gdjs.Directions1Code.GDCObjects1= [];
gdjs.Directions1Code.GDCObjects2= [];
gdjs.Directions1Code.GDlineObjects1= [];
gdjs.Directions1Code.GDlineObjects2= [];
gdjs.Directions1Code.GDPlatform2Objects1= [];
gdjs.Directions1Code.GDPlatform2Objects2= [];
gdjs.Directions1Code.GDCornerPlatformObjects1= [];
gdjs.Directions1Code.GDCornerPlatformObjects2= [];
gdjs.Directions1Code.GDGuardObjects1= [];
gdjs.Directions1Code.GDGuardObjects2= [];
gdjs.Directions1Code.GDTeamScoreObjects1= [];
gdjs.Directions1Code.GDTeamScoreObjects2= [];
gdjs.Directions1Code.GDTeamScoreLabelObjects1= [];
gdjs.Directions1Code.GDTeamScoreLabelObjects2= [];
gdjs.Directions1Code.GDruleObjects1= [];
gdjs.Directions1Code.GDruleObjects2= [];
gdjs.Directions1Code.GDrule2Objects1= [];
gdjs.Directions1Code.GDrule2Objects2= [];
gdjs.Directions1Code.GDskipObjects1= [];
gdjs.Directions1Code.GDskipObjects2= [];
gdjs.Directions1Code.GDspeechbubObjects1= [];
gdjs.Directions1Code.GDspeechbubObjects2= [];
gdjs.Directions1Code.GDdirectionsObjects1= [];
gdjs.Directions1Code.GDdirectionsObjects2= [];
gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1= [];
gdjs.Directions1Code.GDWhiteDecoratedButtonObjects2= [];
gdjs.Directions1Code.GDRULEObjects1= [];
gdjs.Directions1Code.GDRULEObjects2= [];
gdjs.Directions1Code.GDonehalfObjects1= [];
gdjs.Directions1Code.GDonehalfObjects2= [];
gdjs.Directions1Code.GDscreenObjects1= [];
gdjs.Directions1Code.GDscreenObjects2= [];
gdjs.Directions1Code.GDNewTextObjects1= [];
gdjs.Directions1Code.GDNewTextObjects2= [];
gdjs.Directions1Code.GDNewTiledSpriteObjects1= [];
gdjs.Directions1Code.GDNewTiledSpriteObjects2= [];

gdjs.Directions1Code.conditionTrue_0 = {val:false};
gdjs.Directions1Code.condition0IsTrue_0 = {val:false};
gdjs.Directions1Code.condition1IsTrue_0 = {val:false};
gdjs.Directions1Code.condition2IsTrue_0 = {val:false};


gdjs.Directions1Code.mapOfGDgdjs_46Directions1Code_46GDspeechbubObjects1Objects = Hashtable.newFrom({"speechbub": gdjs.Directions1Code.GDspeechbubObjects1});
gdjs.Directions1Code.mapOfGDgdjs_46Directions1Code_46GDtweObjects1ObjectsGDgdjs_46Directions1Code_46GDtenObjects1ObjectsGDgdjs_46Directions1Code_46GDninObjects1ObjectsGDgdjs_46Directions1Code_46GDsevObjects1ObjectsGDgdjs_46Directions1Code_46GDsixObjects1ObjectsGDgdjs_46Directions1Code_46GDfivObjects1ObjectsGDgdjs_46Directions1Code_46GDfouObjects1ObjectsGDgdjs_46Directions1Code_46GDthrObjects1ObjectsGDgdjs_46Directions1Code_46GDtwoObjects1ObjectsGDgdjs_46Directions1Code_46GDoneObjects1ObjectsGDgdjs_46Directions1Code_46GDeigObjects1Objects = Hashtable.newFrom({"twe": gdjs.Directions1Code.GDtweObjects1, "ten": gdjs.Directions1Code.GDtenObjects1, "nin": gdjs.Directions1Code.GDninObjects1, "sev": gdjs.Directions1Code.GDsevObjects1, "six": gdjs.Directions1Code.GDsixObjects1, "fiv": gdjs.Directions1Code.GDfivObjects1, "fou": gdjs.Directions1Code.GDfouObjects1, "thr": gdjs.Directions1Code.GDthrObjects1, "two": gdjs.Directions1Code.GDtwoObjects1, "one": gdjs.Directions1Code.GDoneObjects1, "eig": gdjs.Directions1Code.GDeigObjects1});
gdjs.Directions1Code.mapOfGDgdjs_46Directions1Code_46GDskipObjects1Objects = Hashtable.newFrom({"skip": gdjs.Directions1Code.GDskipObjects1});
gdjs.Directions1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Directions1Code.condition0IsTrue_0.val = false;
{
gdjs.Directions1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Directions1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Directions1Code.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Directions1Code.GDBObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.Directions1Code.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Directions1Code.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.Directions1Code.GDEObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Directions1Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Directions1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Directions1Code.GDBObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDBObjects1[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Directions1Code.GDDObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDDObjects1[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Directions1Code.GDAObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDAObjects1[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Directions1Code.GDEObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDEObjects1[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.Directions1Code.GDCObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDCObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("speechbub"), gdjs.Directions1Code.GDspeechbubObjects1);

gdjs.Directions1Code.condition0IsTrue_0.val = false;
gdjs.Directions1Code.condition1IsTrue_0.val = false;
{
gdjs.Directions1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Directions1Code.mapOfGDgdjs_46Directions1Code_46GDspeechbubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Directions1Code.condition0IsTrue_0.val ) {
{
gdjs.Directions1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Directions1Code.condition1IsTrue_0.val) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "To choose the correct rods for your bridge, you must follow rules.\n\nThe rule for the next bridge is:\n\nUSE ONLY RODS THAT ARE ONE-HALF THE LENGTH OF THE ORANGE ROD.\n\nUse the rods to decide, with your partner, which one is one-half of the ORANGE ROD.\n\nWhen you have decided, click GO!", "Zira", 100, 100, 175, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.Directions1Code.condition0IsTrue_0.val = false;
{
gdjs.Directions1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 20;
}if (gdjs.Directions1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Directions1Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("screen"), gdjs.Directions1Code.GDscreenObjects1);
{for(var i = 0, len = gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Directions1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDNewTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Directions1Code.GDscreenObjects1.length ;i < len;++i) {
    gdjs.Directions1Code.GDscreenObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1);

gdjs.Directions1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1[k] = gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1.length = k;}if (gdjs.Directions1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eig"), gdjs.Directions1Code.GDeigObjects1);
gdjs.copyArray(runtimeScene.getObjects("fiv"), gdjs.Directions1Code.GDfivObjects1);
gdjs.copyArray(runtimeScene.getObjects("fou"), gdjs.Directions1Code.GDfouObjects1);
gdjs.copyArray(runtimeScene.getObjects("nin"), gdjs.Directions1Code.GDninObjects1);
gdjs.copyArray(runtimeScene.getObjects("one"), gdjs.Directions1Code.GDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("sev"), gdjs.Directions1Code.GDsevObjects1);
gdjs.copyArray(runtimeScene.getObjects("six"), gdjs.Directions1Code.GDsixObjects1);
gdjs.copyArray(runtimeScene.getObjects("ten"), gdjs.Directions1Code.GDtenObjects1);
gdjs.copyArray(runtimeScene.getObjects("thr"), gdjs.Directions1Code.GDthrObjects1);
gdjs.copyArray(runtimeScene.getObjects("twe"), gdjs.Directions1Code.GDtweObjects1);
gdjs.copyArray(runtimeScene.getObjects("two"), gdjs.Directions1Code.GDtwoObjects1);

gdjs.Directions1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Directions1Code.GDtweObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDtweObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDtweObjects1[k] = gdjs.Directions1Code.GDtweObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDtweObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDtenObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDtenObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDtenObjects1[k] = gdjs.Directions1Code.GDtenObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDtenObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDninObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDninObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDninObjects1[k] = gdjs.Directions1Code.GDninObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDninObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDsevObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDsevObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDsevObjects1[k] = gdjs.Directions1Code.GDsevObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDsevObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDsixObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDsixObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDsixObjects1[k] = gdjs.Directions1Code.GDsixObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDsixObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDfivObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDfivObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDfivObjects1[k] = gdjs.Directions1Code.GDfivObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDfivObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDfouObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDfouObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDfouObjects1[k] = gdjs.Directions1Code.GDfouObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDfouObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDthrObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDthrObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDthrObjects1[k] = gdjs.Directions1Code.GDthrObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDthrObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDtwoObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDtwoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDtwoObjects1[k] = gdjs.Directions1Code.GDtwoObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDtwoObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDoneObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDoneObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDoneObjects1[k] = gdjs.Directions1Code.GDoneObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDoneObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions1Code.GDeigObjects1.length;i<l;++i) {
    if ( gdjs.Directions1Code.GDeigObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions1Code.condition0IsTrue_0.val = true;
        gdjs.Directions1Code.GDeigObjects1[k] = gdjs.Directions1Code.GDeigObjects1[i];
        ++k;
    }
}
gdjs.Directions1Code.GDeigObjects1.length = k;}if (gdjs.Directions1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Directions1Code.GDeigObjects1 */
/* Reuse gdjs.Directions1Code.GDfivObjects1 */
/* Reuse gdjs.Directions1Code.GDfouObjects1 */
/* Reuse gdjs.Directions1Code.GDninObjects1 */
/* Reuse gdjs.Directions1Code.GDoneObjects1 */
/* Reuse gdjs.Directions1Code.GDsevObjects1 */
/* Reuse gdjs.Directions1Code.GDsixObjects1 */
/* Reuse gdjs.Directions1Code.GDtenObjects1 */
/* Reuse gdjs.Directions1Code.GDthrObjects1 */
/* Reuse gdjs.Directions1Code.GDtweObjects1 */
/* Reuse gdjs.Directions1Code.GDtwoObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Directions1Code.mapOfGDgdjs_46Directions1Code_46GDtweObjects1ObjectsGDgdjs_46Directions1Code_46GDtenObjects1ObjectsGDgdjs_46Directions1Code_46GDninObjects1ObjectsGDgdjs_46Directions1Code_46GDsevObjects1ObjectsGDgdjs_46Directions1Code_46GDsixObjects1ObjectsGDgdjs_46Directions1Code_46GDfivObjects1ObjectsGDgdjs_46Directions1Code_46GDfouObjects1ObjectsGDgdjs_46Directions1Code_46GDthrObjects1ObjectsGDgdjs_46Directions1Code_46GDtwoObjects1ObjectsGDgdjs_46Directions1Code_46GDoneObjects1ObjectsGDgdjs_46Directions1Code_46GDeigObjects1Objects, 16, 16, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.Directions1Code.GDskipObjects1);

gdjs.Directions1Code.condition0IsTrue_0.val = false;
gdjs.Directions1Code.condition1IsTrue_0.val = false;
{
gdjs.Directions1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Directions1Code.mapOfGDgdjs_46Directions1Code_46GDskipObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Directions1Code.condition0IsTrue_0.val ) {
{
gdjs.Directions1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Directions1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}}

}


{


{
}

}


};

gdjs.Directions1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Directions1Code.GDtweObjects1.length = 0;
gdjs.Directions1Code.GDtweObjects2.length = 0;
gdjs.Directions1Code.GDtenObjects1.length = 0;
gdjs.Directions1Code.GDtenObjects2.length = 0;
gdjs.Directions1Code.GDninObjects1.length = 0;
gdjs.Directions1Code.GDninObjects2.length = 0;
gdjs.Directions1Code.GDsevObjects1.length = 0;
gdjs.Directions1Code.GDsevObjects2.length = 0;
gdjs.Directions1Code.GDsixObjects1.length = 0;
gdjs.Directions1Code.GDsixObjects2.length = 0;
gdjs.Directions1Code.GDfivObjects1.length = 0;
gdjs.Directions1Code.GDfivObjects2.length = 0;
gdjs.Directions1Code.GDfouObjects1.length = 0;
gdjs.Directions1Code.GDfouObjects2.length = 0;
gdjs.Directions1Code.GDthrObjects1.length = 0;
gdjs.Directions1Code.GDthrObjects2.length = 0;
gdjs.Directions1Code.GDtwoObjects1.length = 0;
gdjs.Directions1Code.GDtwoObjects2.length = 0;
gdjs.Directions1Code.GDoneObjects1.length = 0;
gdjs.Directions1Code.GDoneObjects2.length = 0;
gdjs.Directions1Code.GDeigObjects1.length = 0;
gdjs.Directions1Code.GDeigObjects2.length = 0;
gdjs.Directions1Code.GDGridButtonObjects1.length = 0;
gdjs.Directions1Code.GDGridButtonObjects2.length = 0;
gdjs.Directions1Code.GDGridObjects1.length = 0;
gdjs.Directions1Code.GDGridObjects2.length = 0;
gdjs.Directions1Code.GDBObjects1.length = 0;
gdjs.Directions1Code.GDBObjects2.length = 0;
gdjs.Directions1Code.GDDObjects1.length = 0;
gdjs.Directions1Code.GDDObjects2.length = 0;
gdjs.Directions1Code.GDAObjects1.length = 0;
gdjs.Directions1Code.GDAObjects2.length = 0;
gdjs.Directions1Code.GDEObjects1.length = 0;
gdjs.Directions1Code.GDEObjects2.length = 0;
gdjs.Directions1Code.GDCObjects1.length = 0;
gdjs.Directions1Code.GDCObjects2.length = 0;
gdjs.Directions1Code.GDlineObjects1.length = 0;
gdjs.Directions1Code.GDlineObjects2.length = 0;
gdjs.Directions1Code.GDPlatform2Objects1.length = 0;
gdjs.Directions1Code.GDPlatform2Objects2.length = 0;
gdjs.Directions1Code.GDCornerPlatformObjects1.length = 0;
gdjs.Directions1Code.GDCornerPlatformObjects2.length = 0;
gdjs.Directions1Code.GDGuardObjects1.length = 0;
gdjs.Directions1Code.GDGuardObjects2.length = 0;
gdjs.Directions1Code.GDTeamScoreObjects1.length = 0;
gdjs.Directions1Code.GDTeamScoreObjects2.length = 0;
gdjs.Directions1Code.GDTeamScoreLabelObjects1.length = 0;
gdjs.Directions1Code.GDTeamScoreLabelObjects2.length = 0;
gdjs.Directions1Code.GDruleObjects1.length = 0;
gdjs.Directions1Code.GDruleObjects2.length = 0;
gdjs.Directions1Code.GDrule2Objects1.length = 0;
gdjs.Directions1Code.GDrule2Objects2.length = 0;
gdjs.Directions1Code.GDskipObjects1.length = 0;
gdjs.Directions1Code.GDskipObjects2.length = 0;
gdjs.Directions1Code.GDspeechbubObjects1.length = 0;
gdjs.Directions1Code.GDspeechbubObjects2.length = 0;
gdjs.Directions1Code.GDdirectionsObjects1.length = 0;
gdjs.Directions1Code.GDdirectionsObjects2.length = 0;
gdjs.Directions1Code.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.Directions1Code.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.Directions1Code.GDRULEObjects1.length = 0;
gdjs.Directions1Code.GDRULEObjects2.length = 0;
gdjs.Directions1Code.GDonehalfObjects1.length = 0;
gdjs.Directions1Code.GDonehalfObjects2.length = 0;
gdjs.Directions1Code.GDscreenObjects1.length = 0;
gdjs.Directions1Code.GDscreenObjects2.length = 0;
gdjs.Directions1Code.GDNewTextObjects1.length = 0;
gdjs.Directions1Code.GDNewTextObjects2.length = 0;
gdjs.Directions1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Directions1Code.GDNewTiledSpriteObjects2.length = 0;

gdjs.Directions1Code.eventsList0(runtimeScene);

return;

}

gdjs['Directions1Code'] = gdjs.Directions1Code;
