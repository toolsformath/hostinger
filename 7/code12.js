gdjs.DirectionsB1Code = {};
gdjs.DirectionsB1Code.GDtweObjects1= [];
gdjs.DirectionsB1Code.GDtweObjects2= [];
gdjs.DirectionsB1Code.GDtenObjects1= [];
gdjs.DirectionsB1Code.GDtenObjects2= [];
gdjs.DirectionsB1Code.GDninObjects1= [];
gdjs.DirectionsB1Code.GDninObjects2= [];
gdjs.DirectionsB1Code.GDsevObjects1= [];
gdjs.DirectionsB1Code.GDsevObjects2= [];
gdjs.DirectionsB1Code.GDsixObjects1= [];
gdjs.DirectionsB1Code.GDsixObjects2= [];
gdjs.DirectionsB1Code.GDfivObjects1= [];
gdjs.DirectionsB1Code.GDfivObjects2= [];
gdjs.DirectionsB1Code.GDfouObjects1= [];
gdjs.DirectionsB1Code.GDfouObjects2= [];
gdjs.DirectionsB1Code.GDthrObjects1= [];
gdjs.DirectionsB1Code.GDthrObjects2= [];
gdjs.DirectionsB1Code.GDtwoObjects1= [];
gdjs.DirectionsB1Code.GDtwoObjects2= [];
gdjs.DirectionsB1Code.GDoneObjects1= [];
gdjs.DirectionsB1Code.GDoneObjects2= [];
gdjs.DirectionsB1Code.GDeigObjects1= [];
gdjs.DirectionsB1Code.GDeigObjects2= [];
gdjs.DirectionsB1Code.GDGridButtonObjects1= [];
gdjs.DirectionsB1Code.GDGridButtonObjects2= [];
gdjs.DirectionsB1Code.GDGridObjects1= [];
gdjs.DirectionsB1Code.GDGridObjects2= [];
gdjs.DirectionsB1Code.GDBObjects1= [];
gdjs.DirectionsB1Code.GDBObjects2= [];
gdjs.DirectionsB1Code.GDDObjects1= [];
gdjs.DirectionsB1Code.GDDObjects2= [];
gdjs.DirectionsB1Code.GDAObjects1= [];
gdjs.DirectionsB1Code.GDAObjects2= [];
gdjs.DirectionsB1Code.GDEObjects1= [];
gdjs.DirectionsB1Code.GDEObjects2= [];
gdjs.DirectionsB1Code.GDCObjects1= [];
gdjs.DirectionsB1Code.GDCObjects2= [];
gdjs.DirectionsB1Code.GDlineObjects1= [];
gdjs.DirectionsB1Code.GDlineObjects2= [];
gdjs.DirectionsB1Code.GDPlatform2Objects1= [];
gdjs.DirectionsB1Code.GDPlatform2Objects2= [];
gdjs.DirectionsB1Code.GDCornerPlatformObjects1= [];
gdjs.DirectionsB1Code.GDCornerPlatformObjects2= [];
gdjs.DirectionsB1Code.GDGuardObjects1= [];
gdjs.DirectionsB1Code.GDGuardObjects2= [];
gdjs.DirectionsB1Code.GDTeamScoreObjects1= [];
gdjs.DirectionsB1Code.GDTeamScoreObjects2= [];
gdjs.DirectionsB1Code.GDTeamScoreLabelObjects1= [];
gdjs.DirectionsB1Code.GDTeamScoreLabelObjects2= [];
gdjs.DirectionsB1Code.GDruleObjects1= [];
gdjs.DirectionsB1Code.GDruleObjects2= [];
gdjs.DirectionsB1Code.GDrule2Objects1= [];
gdjs.DirectionsB1Code.GDrule2Objects2= [];
gdjs.DirectionsB1Code.GDskipObjects1= [];
gdjs.DirectionsB1Code.GDskipObjects2= [];
gdjs.DirectionsB1Code.GDspeechbubObjects1= [];
gdjs.DirectionsB1Code.GDspeechbubObjects2= [];
gdjs.DirectionsB1Code.GDdirectionsObjects1= [];
gdjs.DirectionsB1Code.GDdirectionsObjects2= [];
gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1= [];
gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects2= [];
gdjs.DirectionsB1Code.GDRULEObjects1= [];
gdjs.DirectionsB1Code.GDRULEObjects2= [];
gdjs.DirectionsB1Code.GDonehalfObjects1= [];
gdjs.DirectionsB1Code.GDonehalfObjects2= [];
gdjs.DirectionsB1Code.GDscreenObjects1= [];
gdjs.DirectionsB1Code.GDscreenObjects2= [];
gdjs.DirectionsB1Code.GDNewTextObjects1= [];
gdjs.DirectionsB1Code.GDNewTextObjects2= [];

gdjs.DirectionsB1Code.conditionTrue_0 = {val:false};
gdjs.DirectionsB1Code.condition0IsTrue_0 = {val:false};
gdjs.DirectionsB1Code.condition1IsTrue_0 = {val:false};
gdjs.DirectionsB1Code.condition2IsTrue_0 = {val:false};


gdjs.DirectionsB1Code.mapOfGDgdjs_46DirectionsB1Code_46GDspeechbubObjects1Objects = Hashtable.newFrom({"speechbub": gdjs.DirectionsB1Code.GDspeechbubObjects1});
gdjs.DirectionsB1Code.mapOfGDgdjs_46DirectionsB1Code_46GDtweObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDtenObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDninObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDsevObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDsixObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDfivObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDfouObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDthrObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDtwoObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDoneObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDeigObjects1Objects = Hashtable.newFrom({"twe": gdjs.DirectionsB1Code.GDtweObjects1, "ten": gdjs.DirectionsB1Code.GDtenObjects1, "nin": gdjs.DirectionsB1Code.GDninObjects1, "sev": gdjs.DirectionsB1Code.GDsevObjects1, "six": gdjs.DirectionsB1Code.GDsixObjects1, "fiv": gdjs.DirectionsB1Code.GDfivObjects1, "fou": gdjs.DirectionsB1Code.GDfouObjects1, "thr": gdjs.DirectionsB1Code.GDthrObjects1, "two": gdjs.DirectionsB1Code.GDtwoObjects1, "one": gdjs.DirectionsB1Code.GDoneObjects1, "eig": gdjs.DirectionsB1Code.GDeigObjects1});
gdjs.DirectionsB1Code.eventsList0 = function(runtimeScene) {

{


gdjs.DirectionsB1Code.condition0IsTrue_0.val = false;
{
gdjs.DirectionsB1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DirectionsB1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.DirectionsB1Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DirectionsB1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.DirectionsB1Code.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("speechbub"), gdjs.DirectionsB1Code.GDspeechbubObjects1);

gdjs.DirectionsB1Code.condition0IsTrue_0.val = false;
gdjs.DirectionsB1Code.condition1IsTrue_0.val = false;
{
gdjs.DirectionsB1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DirectionsB1Code.mapOfGDgdjs_46DirectionsB1Code_46GDspeechbubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DirectionsB1Code.condition0IsTrue_0.val ) {
{
gdjs.DirectionsB1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DirectionsB1Code.condition1IsTrue_0.val) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "The next round is a BONUS Round!\nIf you are playing with a partner, you will both get a chance to play the BONUS ROUND.\n\nIf you are playing alone, you will do the BONUS ROUND twice in a row.", "Zira", 100, 100, 175, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.DirectionsB1Code.condition0IsTrue_0.val = false;
{
gdjs.DirectionsB1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 14;
}if (gdjs.DirectionsB1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.DirectionsB1Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("screen"), gdjs.DirectionsB1Code.GDscreenObjects1);
{for(var i = 0, len = gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DirectionsB1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.DirectionsB1Code.GDNewTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DirectionsB1Code.GDscreenObjects1.length ;i < len;++i) {
    gdjs.DirectionsB1Code.GDscreenObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1);

gdjs.DirectionsB1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1[k] = gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1.length = k;}if (gdjs.DirectionsB1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bonus 1-1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eig"), gdjs.DirectionsB1Code.GDeigObjects1);
gdjs.copyArray(runtimeScene.getObjects("fiv"), gdjs.DirectionsB1Code.GDfivObjects1);
gdjs.copyArray(runtimeScene.getObjects("fou"), gdjs.DirectionsB1Code.GDfouObjects1);
gdjs.copyArray(runtimeScene.getObjects("nin"), gdjs.DirectionsB1Code.GDninObjects1);
gdjs.copyArray(runtimeScene.getObjects("one"), gdjs.DirectionsB1Code.GDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("sev"), gdjs.DirectionsB1Code.GDsevObjects1);
gdjs.copyArray(runtimeScene.getObjects("six"), gdjs.DirectionsB1Code.GDsixObjects1);
gdjs.copyArray(runtimeScene.getObjects("ten"), gdjs.DirectionsB1Code.GDtenObjects1);
gdjs.copyArray(runtimeScene.getObjects("thr"), gdjs.DirectionsB1Code.GDthrObjects1);
gdjs.copyArray(runtimeScene.getObjects("twe"), gdjs.DirectionsB1Code.GDtweObjects1);
gdjs.copyArray(runtimeScene.getObjects("two"), gdjs.DirectionsB1Code.GDtwoObjects1);

gdjs.DirectionsB1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDtweObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDtweObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDtweObjects1[k] = gdjs.DirectionsB1Code.GDtweObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDtweObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDtenObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDtenObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDtenObjects1[k] = gdjs.DirectionsB1Code.GDtenObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDtenObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDninObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDninObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDninObjects1[k] = gdjs.DirectionsB1Code.GDninObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDninObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDsevObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDsevObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDsevObjects1[k] = gdjs.DirectionsB1Code.GDsevObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDsevObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDsixObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDsixObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDsixObjects1[k] = gdjs.DirectionsB1Code.GDsixObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDsixObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDfivObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDfivObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDfivObjects1[k] = gdjs.DirectionsB1Code.GDfivObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDfivObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDfouObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDfouObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDfouObjects1[k] = gdjs.DirectionsB1Code.GDfouObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDfouObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDthrObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDthrObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDthrObjects1[k] = gdjs.DirectionsB1Code.GDthrObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDthrObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDtwoObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDtwoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDtwoObjects1[k] = gdjs.DirectionsB1Code.GDtwoObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDtwoObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDoneObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDoneObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDoneObjects1[k] = gdjs.DirectionsB1Code.GDoneObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDoneObjects1.length = k;for(var i = 0, k = 0, l = gdjs.DirectionsB1Code.GDeigObjects1.length;i<l;++i) {
    if ( gdjs.DirectionsB1Code.GDeigObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.DirectionsB1Code.condition0IsTrue_0.val = true;
        gdjs.DirectionsB1Code.GDeigObjects1[k] = gdjs.DirectionsB1Code.GDeigObjects1[i];
        ++k;
    }
}
gdjs.DirectionsB1Code.GDeigObjects1.length = k;}if (gdjs.DirectionsB1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.DirectionsB1Code.GDeigObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDfivObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDfouObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDninObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDoneObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDsevObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDsixObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDtenObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDthrObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDtweObjects1 */
/* Reuse gdjs.DirectionsB1Code.GDtwoObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.DirectionsB1Code.mapOfGDgdjs_46DirectionsB1Code_46GDtweObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDtenObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDninObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDsevObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDsixObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDfivObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDfouObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDthrObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDtwoObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDoneObjects1ObjectsGDgdjs_46DirectionsB1Code_46GDeigObjects1Objects, 16, 16, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.DirectionsB1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DirectionsB1Code.GDtweObjects1.length = 0;
gdjs.DirectionsB1Code.GDtweObjects2.length = 0;
gdjs.DirectionsB1Code.GDtenObjects1.length = 0;
gdjs.DirectionsB1Code.GDtenObjects2.length = 0;
gdjs.DirectionsB1Code.GDninObjects1.length = 0;
gdjs.DirectionsB1Code.GDninObjects2.length = 0;
gdjs.DirectionsB1Code.GDsevObjects1.length = 0;
gdjs.DirectionsB1Code.GDsevObjects2.length = 0;
gdjs.DirectionsB1Code.GDsixObjects1.length = 0;
gdjs.DirectionsB1Code.GDsixObjects2.length = 0;
gdjs.DirectionsB1Code.GDfivObjects1.length = 0;
gdjs.DirectionsB1Code.GDfivObjects2.length = 0;
gdjs.DirectionsB1Code.GDfouObjects1.length = 0;
gdjs.DirectionsB1Code.GDfouObjects2.length = 0;
gdjs.DirectionsB1Code.GDthrObjects1.length = 0;
gdjs.DirectionsB1Code.GDthrObjects2.length = 0;
gdjs.DirectionsB1Code.GDtwoObjects1.length = 0;
gdjs.DirectionsB1Code.GDtwoObjects2.length = 0;
gdjs.DirectionsB1Code.GDoneObjects1.length = 0;
gdjs.DirectionsB1Code.GDoneObjects2.length = 0;
gdjs.DirectionsB1Code.GDeigObjects1.length = 0;
gdjs.DirectionsB1Code.GDeigObjects2.length = 0;
gdjs.DirectionsB1Code.GDGridButtonObjects1.length = 0;
gdjs.DirectionsB1Code.GDGridButtonObjects2.length = 0;
gdjs.DirectionsB1Code.GDGridObjects1.length = 0;
gdjs.DirectionsB1Code.GDGridObjects2.length = 0;
gdjs.DirectionsB1Code.GDBObjects1.length = 0;
gdjs.DirectionsB1Code.GDBObjects2.length = 0;
gdjs.DirectionsB1Code.GDDObjects1.length = 0;
gdjs.DirectionsB1Code.GDDObjects2.length = 0;
gdjs.DirectionsB1Code.GDAObjects1.length = 0;
gdjs.DirectionsB1Code.GDAObjects2.length = 0;
gdjs.DirectionsB1Code.GDEObjects1.length = 0;
gdjs.DirectionsB1Code.GDEObjects2.length = 0;
gdjs.DirectionsB1Code.GDCObjects1.length = 0;
gdjs.DirectionsB1Code.GDCObjects2.length = 0;
gdjs.DirectionsB1Code.GDlineObjects1.length = 0;
gdjs.DirectionsB1Code.GDlineObjects2.length = 0;
gdjs.DirectionsB1Code.GDPlatform2Objects1.length = 0;
gdjs.DirectionsB1Code.GDPlatform2Objects2.length = 0;
gdjs.DirectionsB1Code.GDCornerPlatformObjects1.length = 0;
gdjs.DirectionsB1Code.GDCornerPlatformObjects2.length = 0;
gdjs.DirectionsB1Code.GDGuardObjects1.length = 0;
gdjs.DirectionsB1Code.GDGuardObjects2.length = 0;
gdjs.DirectionsB1Code.GDTeamScoreObjects1.length = 0;
gdjs.DirectionsB1Code.GDTeamScoreObjects2.length = 0;
gdjs.DirectionsB1Code.GDTeamScoreLabelObjects1.length = 0;
gdjs.DirectionsB1Code.GDTeamScoreLabelObjects2.length = 0;
gdjs.DirectionsB1Code.GDruleObjects1.length = 0;
gdjs.DirectionsB1Code.GDruleObjects2.length = 0;
gdjs.DirectionsB1Code.GDrule2Objects1.length = 0;
gdjs.DirectionsB1Code.GDrule2Objects2.length = 0;
gdjs.DirectionsB1Code.GDskipObjects1.length = 0;
gdjs.DirectionsB1Code.GDskipObjects2.length = 0;
gdjs.DirectionsB1Code.GDspeechbubObjects1.length = 0;
gdjs.DirectionsB1Code.GDspeechbubObjects2.length = 0;
gdjs.DirectionsB1Code.GDdirectionsObjects1.length = 0;
gdjs.DirectionsB1Code.GDdirectionsObjects2.length = 0;
gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.DirectionsB1Code.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.DirectionsB1Code.GDRULEObjects1.length = 0;
gdjs.DirectionsB1Code.GDRULEObjects2.length = 0;
gdjs.DirectionsB1Code.GDonehalfObjects1.length = 0;
gdjs.DirectionsB1Code.GDonehalfObjects2.length = 0;
gdjs.DirectionsB1Code.GDscreenObjects1.length = 0;
gdjs.DirectionsB1Code.GDscreenObjects2.length = 0;
gdjs.DirectionsB1Code.GDNewTextObjects1.length = 0;
gdjs.DirectionsB1Code.GDNewTextObjects2.length = 0;

gdjs.DirectionsB1Code.eventsList0(runtimeScene);

return;

}

gdjs['DirectionsB1Code'] = gdjs.DirectionsB1Code;
