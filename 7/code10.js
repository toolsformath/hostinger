gdjs.Directions3Code = {};
gdjs.Directions3Code.GDtweObjects1= [];
gdjs.Directions3Code.GDtweObjects2= [];
gdjs.Directions3Code.GDtenObjects1= [];
gdjs.Directions3Code.GDtenObjects2= [];
gdjs.Directions3Code.GDninObjects1= [];
gdjs.Directions3Code.GDninObjects2= [];
gdjs.Directions3Code.GDsevObjects1= [];
gdjs.Directions3Code.GDsevObjects2= [];
gdjs.Directions3Code.GDsixObjects1= [];
gdjs.Directions3Code.GDsixObjects2= [];
gdjs.Directions3Code.GDfivObjects1= [];
gdjs.Directions3Code.GDfivObjects2= [];
gdjs.Directions3Code.GDfouObjects1= [];
gdjs.Directions3Code.GDfouObjects2= [];
gdjs.Directions3Code.GDthrObjects1= [];
gdjs.Directions3Code.GDthrObjects2= [];
gdjs.Directions3Code.GDtwoObjects1= [];
gdjs.Directions3Code.GDtwoObjects2= [];
gdjs.Directions3Code.GDoneObjects1= [];
gdjs.Directions3Code.GDoneObjects2= [];
gdjs.Directions3Code.GDeigObjects1= [];
gdjs.Directions3Code.GDeigObjects2= [];
gdjs.Directions3Code.GDGridButtonObjects1= [];
gdjs.Directions3Code.GDGridButtonObjects2= [];
gdjs.Directions3Code.GDGridObjects1= [];
gdjs.Directions3Code.GDGridObjects2= [];
gdjs.Directions3Code.GDBObjects1= [];
gdjs.Directions3Code.GDBObjects2= [];
gdjs.Directions3Code.GDDObjects1= [];
gdjs.Directions3Code.GDDObjects2= [];
gdjs.Directions3Code.GDAObjects1= [];
gdjs.Directions3Code.GDAObjects2= [];
gdjs.Directions3Code.GDEObjects1= [];
gdjs.Directions3Code.GDEObjects2= [];
gdjs.Directions3Code.GDCObjects1= [];
gdjs.Directions3Code.GDCObjects2= [];
gdjs.Directions3Code.GDlineObjects1= [];
gdjs.Directions3Code.GDlineObjects2= [];
gdjs.Directions3Code.GDPlatform2Objects1= [];
gdjs.Directions3Code.GDPlatform2Objects2= [];
gdjs.Directions3Code.GDCornerPlatformObjects1= [];
gdjs.Directions3Code.GDCornerPlatformObjects2= [];
gdjs.Directions3Code.GDGuardObjects1= [];
gdjs.Directions3Code.GDGuardObjects2= [];
gdjs.Directions3Code.GDTeamScoreObjects1= [];
gdjs.Directions3Code.GDTeamScoreObjects2= [];
gdjs.Directions3Code.GDTeamScoreLabelObjects1= [];
gdjs.Directions3Code.GDTeamScoreLabelObjects2= [];
gdjs.Directions3Code.GDruleObjects1= [];
gdjs.Directions3Code.GDruleObjects2= [];
gdjs.Directions3Code.GDrule2Objects1= [];
gdjs.Directions3Code.GDrule2Objects2= [];
gdjs.Directions3Code.GDskipObjects1= [];
gdjs.Directions3Code.GDskipObjects2= [];
gdjs.Directions3Code.GDspeechbubObjects1= [];
gdjs.Directions3Code.GDspeechbubObjects2= [];
gdjs.Directions3Code.GDdirectionsObjects1= [];
gdjs.Directions3Code.GDdirectionsObjects2= [];
gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1= [];
gdjs.Directions3Code.GDWhiteDecoratedButtonObjects2= [];
gdjs.Directions3Code.GDRULEObjects1= [];
gdjs.Directions3Code.GDRULEObjects2= [];
gdjs.Directions3Code.GDonehalfObjects1= [];
gdjs.Directions3Code.GDonehalfObjects2= [];
gdjs.Directions3Code.GDscreenObjects1= [];
gdjs.Directions3Code.GDscreenObjects2= [];
gdjs.Directions3Code.GDNewTextObjects1= [];
gdjs.Directions3Code.GDNewTextObjects2= [];

gdjs.Directions3Code.conditionTrue_0 = {val:false};
gdjs.Directions3Code.condition0IsTrue_0 = {val:false};
gdjs.Directions3Code.condition1IsTrue_0 = {val:false};
gdjs.Directions3Code.condition2IsTrue_0 = {val:false};


gdjs.Directions3Code.mapOfGDgdjs_46Directions3Code_46GDspeechbubObjects1Objects = Hashtable.newFrom({"speechbub": gdjs.Directions3Code.GDspeechbubObjects1});
gdjs.Directions3Code.mapOfGDgdjs_46Directions3Code_46GDtweObjects1ObjectsGDgdjs_46Directions3Code_46GDtenObjects1ObjectsGDgdjs_46Directions3Code_46GDninObjects1ObjectsGDgdjs_46Directions3Code_46GDsevObjects1ObjectsGDgdjs_46Directions3Code_46GDsixObjects1ObjectsGDgdjs_46Directions3Code_46GDfivObjects1ObjectsGDgdjs_46Directions3Code_46GDfouObjects1ObjectsGDgdjs_46Directions3Code_46GDthrObjects1ObjectsGDgdjs_46Directions3Code_46GDtwoObjects1ObjectsGDgdjs_46Directions3Code_46GDoneObjects1ObjectsGDgdjs_46Directions3Code_46GDeigObjects1Objects = Hashtable.newFrom({"twe": gdjs.Directions3Code.GDtweObjects1, "ten": gdjs.Directions3Code.GDtenObjects1, "nin": gdjs.Directions3Code.GDninObjects1, "sev": gdjs.Directions3Code.GDsevObjects1, "six": gdjs.Directions3Code.GDsixObjects1, "fiv": gdjs.Directions3Code.GDfivObjects1, "fou": gdjs.Directions3Code.GDfouObjects1, "thr": gdjs.Directions3Code.GDthrObjects1, "two": gdjs.Directions3Code.GDtwoObjects1, "one": gdjs.Directions3Code.GDoneObjects1, "eig": gdjs.Directions3Code.GDeigObjects1});
gdjs.Directions3Code.mapOfGDgdjs_46Directions3Code_46GDskipObjects1Objects = Hashtable.newFrom({"skip": gdjs.Directions3Code.GDskipObjects1});
gdjs.Directions3Code.eventsList0 = function(runtimeScene) {

{


gdjs.Directions3Code.condition0IsTrue_0.val = false;
{
gdjs.Directions3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Directions3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Directions3Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Directions3Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Directions3Code.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("speechbub"), gdjs.Directions3Code.GDspeechbubObjects1);

gdjs.Directions3Code.condition0IsTrue_0.val = false;
gdjs.Directions3Code.condition1IsTrue_0.val = false;
{
gdjs.Directions3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Directions3Code.mapOfGDgdjs_46Directions3Code_46GDspeechbubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Directions3Code.condition0IsTrue_0.val ) {
{
gdjs.Directions3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Directions3Code.condition1IsTrue_0.val) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "The rule for the next bridge is:\n\nUSE ONLY RODS THAT ARE ONE-HALF THE LENGTH OF THE LIGHT BLUE ROD.\n\nWhen you have decided which rod to use, click GO!", "Zira", 100, 100, 175, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.Directions3Code.condition0IsTrue_0.val = false;
{
gdjs.Directions3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 14;
}if (gdjs.Directions3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Directions3Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("screen"), gdjs.Directions3Code.GDscreenObjects1);
{for(var i = 0, len = gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Directions3Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Directions3Code.GDNewTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Directions3Code.GDscreenObjects1.length ;i < len;++i) {
    gdjs.Directions3Code.GDscreenObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1);

gdjs.Directions3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1[k] = gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1.length = k;}if (gdjs.Directions3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eig"), gdjs.Directions3Code.GDeigObjects1);
gdjs.copyArray(runtimeScene.getObjects("fiv"), gdjs.Directions3Code.GDfivObjects1);
gdjs.copyArray(runtimeScene.getObjects("fou"), gdjs.Directions3Code.GDfouObjects1);
gdjs.copyArray(runtimeScene.getObjects("nin"), gdjs.Directions3Code.GDninObjects1);
gdjs.copyArray(runtimeScene.getObjects("one"), gdjs.Directions3Code.GDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("sev"), gdjs.Directions3Code.GDsevObjects1);
gdjs.copyArray(runtimeScene.getObjects("six"), gdjs.Directions3Code.GDsixObjects1);
gdjs.copyArray(runtimeScene.getObjects("ten"), gdjs.Directions3Code.GDtenObjects1);
gdjs.copyArray(runtimeScene.getObjects("thr"), gdjs.Directions3Code.GDthrObjects1);
gdjs.copyArray(runtimeScene.getObjects("twe"), gdjs.Directions3Code.GDtweObjects1);
gdjs.copyArray(runtimeScene.getObjects("two"), gdjs.Directions3Code.GDtwoObjects1);

gdjs.Directions3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Directions3Code.GDtweObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDtweObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDtweObjects1[k] = gdjs.Directions3Code.GDtweObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDtweObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDtenObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDtenObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDtenObjects1[k] = gdjs.Directions3Code.GDtenObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDtenObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDninObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDninObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDninObjects1[k] = gdjs.Directions3Code.GDninObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDninObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDsevObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDsevObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDsevObjects1[k] = gdjs.Directions3Code.GDsevObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDsevObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDsixObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDsixObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDsixObjects1[k] = gdjs.Directions3Code.GDsixObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDsixObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDfivObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDfivObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDfivObjects1[k] = gdjs.Directions3Code.GDfivObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDfivObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDfouObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDfouObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDfouObjects1[k] = gdjs.Directions3Code.GDfouObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDfouObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDthrObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDthrObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDthrObjects1[k] = gdjs.Directions3Code.GDthrObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDthrObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDtwoObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDtwoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDtwoObjects1[k] = gdjs.Directions3Code.GDtwoObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDtwoObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDoneObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDoneObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDoneObjects1[k] = gdjs.Directions3Code.GDoneObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDoneObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions3Code.GDeigObjects1.length;i<l;++i) {
    if ( gdjs.Directions3Code.GDeigObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions3Code.condition0IsTrue_0.val = true;
        gdjs.Directions3Code.GDeigObjects1[k] = gdjs.Directions3Code.GDeigObjects1[i];
        ++k;
    }
}
gdjs.Directions3Code.GDeigObjects1.length = k;}if (gdjs.Directions3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Directions3Code.GDeigObjects1 */
/* Reuse gdjs.Directions3Code.GDfivObjects1 */
/* Reuse gdjs.Directions3Code.GDfouObjects1 */
/* Reuse gdjs.Directions3Code.GDninObjects1 */
/* Reuse gdjs.Directions3Code.GDoneObjects1 */
/* Reuse gdjs.Directions3Code.GDsevObjects1 */
/* Reuse gdjs.Directions3Code.GDsixObjects1 */
/* Reuse gdjs.Directions3Code.GDtenObjects1 */
/* Reuse gdjs.Directions3Code.GDthrObjects1 */
/* Reuse gdjs.Directions3Code.GDtweObjects1 */
/* Reuse gdjs.Directions3Code.GDtwoObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Directions3Code.mapOfGDgdjs_46Directions3Code_46GDtweObjects1ObjectsGDgdjs_46Directions3Code_46GDtenObjects1ObjectsGDgdjs_46Directions3Code_46GDninObjects1ObjectsGDgdjs_46Directions3Code_46GDsevObjects1ObjectsGDgdjs_46Directions3Code_46GDsixObjects1ObjectsGDgdjs_46Directions3Code_46GDfivObjects1ObjectsGDgdjs_46Directions3Code_46GDfouObjects1ObjectsGDgdjs_46Directions3Code_46GDthrObjects1ObjectsGDgdjs_46Directions3Code_46GDtwoObjects1ObjectsGDgdjs_46Directions3Code_46GDoneObjects1ObjectsGDgdjs_46Directions3Code_46GDeigObjects1Objects, 16, 16, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.Directions3Code.GDskipObjects1);

gdjs.Directions3Code.condition0IsTrue_0.val = false;
gdjs.Directions3Code.condition1IsTrue_0.val = false;
{
gdjs.Directions3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Directions3Code.mapOfGDgdjs_46Directions3Code_46GDskipObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Directions3Code.condition0IsTrue_0.val ) {
{
gdjs.Directions3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Directions3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}}

}


{


{
}

}


};

gdjs.Directions3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Directions3Code.GDtweObjects1.length = 0;
gdjs.Directions3Code.GDtweObjects2.length = 0;
gdjs.Directions3Code.GDtenObjects1.length = 0;
gdjs.Directions3Code.GDtenObjects2.length = 0;
gdjs.Directions3Code.GDninObjects1.length = 0;
gdjs.Directions3Code.GDninObjects2.length = 0;
gdjs.Directions3Code.GDsevObjects1.length = 0;
gdjs.Directions3Code.GDsevObjects2.length = 0;
gdjs.Directions3Code.GDsixObjects1.length = 0;
gdjs.Directions3Code.GDsixObjects2.length = 0;
gdjs.Directions3Code.GDfivObjects1.length = 0;
gdjs.Directions3Code.GDfivObjects2.length = 0;
gdjs.Directions3Code.GDfouObjects1.length = 0;
gdjs.Directions3Code.GDfouObjects2.length = 0;
gdjs.Directions3Code.GDthrObjects1.length = 0;
gdjs.Directions3Code.GDthrObjects2.length = 0;
gdjs.Directions3Code.GDtwoObjects1.length = 0;
gdjs.Directions3Code.GDtwoObjects2.length = 0;
gdjs.Directions3Code.GDoneObjects1.length = 0;
gdjs.Directions3Code.GDoneObjects2.length = 0;
gdjs.Directions3Code.GDeigObjects1.length = 0;
gdjs.Directions3Code.GDeigObjects2.length = 0;
gdjs.Directions3Code.GDGridButtonObjects1.length = 0;
gdjs.Directions3Code.GDGridButtonObjects2.length = 0;
gdjs.Directions3Code.GDGridObjects1.length = 0;
gdjs.Directions3Code.GDGridObjects2.length = 0;
gdjs.Directions3Code.GDBObjects1.length = 0;
gdjs.Directions3Code.GDBObjects2.length = 0;
gdjs.Directions3Code.GDDObjects1.length = 0;
gdjs.Directions3Code.GDDObjects2.length = 0;
gdjs.Directions3Code.GDAObjects1.length = 0;
gdjs.Directions3Code.GDAObjects2.length = 0;
gdjs.Directions3Code.GDEObjects1.length = 0;
gdjs.Directions3Code.GDEObjects2.length = 0;
gdjs.Directions3Code.GDCObjects1.length = 0;
gdjs.Directions3Code.GDCObjects2.length = 0;
gdjs.Directions3Code.GDlineObjects1.length = 0;
gdjs.Directions3Code.GDlineObjects2.length = 0;
gdjs.Directions3Code.GDPlatform2Objects1.length = 0;
gdjs.Directions3Code.GDPlatform2Objects2.length = 0;
gdjs.Directions3Code.GDCornerPlatformObjects1.length = 0;
gdjs.Directions3Code.GDCornerPlatformObjects2.length = 0;
gdjs.Directions3Code.GDGuardObjects1.length = 0;
gdjs.Directions3Code.GDGuardObjects2.length = 0;
gdjs.Directions3Code.GDTeamScoreObjects1.length = 0;
gdjs.Directions3Code.GDTeamScoreObjects2.length = 0;
gdjs.Directions3Code.GDTeamScoreLabelObjects1.length = 0;
gdjs.Directions3Code.GDTeamScoreLabelObjects2.length = 0;
gdjs.Directions3Code.GDruleObjects1.length = 0;
gdjs.Directions3Code.GDruleObjects2.length = 0;
gdjs.Directions3Code.GDrule2Objects1.length = 0;
gdjs.Directions3Code.GDrule2Objects2.length = 0;
gdjs.Directions3Code.GDskipObjects1.length = 0;
gdjs.Directions3Code.GDskipObjects2.length = 0;
gdjs.Directions3Code.GDspeechbubObjects1.length = 0;
gdjs.Directions3Code.GDspeechbubObjects2.length = 0;
gdjs.Directions3Code.GDdirectionsObjects1.length = 0;
gdjs.Directions3Code.GDdirectionsObjects2.length = 0;
gdjs.Directions3Code.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.Directions3Code.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.Directions3Code.GDRULEObjects1.length = 0;
gdjs.Directions3Code.GDRULEObjects2.length = 0;
gdjs.Directions3Code.GDonehalfObjects1.length = 0;
gdjs.Directions3Code.GDonehalfObjects2.length = 0;
gdjs.Directions3Code.GDscreenObjects1.length = 0;
gdjs.Directions3Code.GDscreenObjects2.length = 0;
gdjs.Directions3Code.GDNewTextObjects1.length = 0;
gdjs.Directions3Code.GDNewTextObjects2.length = 0;

gdjs.Directions3Code.eventsList0(runtimeScene);

return;

}

gdjs['Directions3Code'] = gdjs.Directions3Code;
