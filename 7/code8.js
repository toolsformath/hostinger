gdjs.Directions2Code = {};
gdjs.Directions2Code.GDtweObjects1= [];
gdjs.Directions2Code.GDtweObjects2= [];
gdjs.Directions2Code.GDtenObjects1= [];
gdjs.Directions2Code.GDtenObjects2= [];
gdjs.Directions2Code.GDninObjects1= [];
gdjs.Directions2Code.GDninObjects2= [];
gdjs.Directions2Code.GDsevObjects1= [];
gdjs.Directions2Code.GDsevObjects2= [];
gdjs.Directions2Code.GDsixObjects1= [];
gdjs.Directions2Code.GDsixObjects2= [];
gdjs.Directions2Code.GDfivObjects1= [];
gdjs.Directions2Code.GDfivObjects2= [];
gdjs.Directions2Code.GDfouObjects1= [];
gdjs.Directions2Code.GDfouObjects2= [];
gdjs.Directions2Code.GDthrObjects1= [];
gdjs.Directions2Code.GDthrObjects2= [];
gdjs.Directions2Code.GDtwoObjects1= [];
gdjs.Directions2Code.GDtwoObjects2= [];
gdjs.Directions2Code.GDoneObjects1= [];
gdjs.Directions2Code.GDoneObjects2= [];
gdjs.Directions2Code.GDeigObjects1= [];
gdjs.Directions2Code.GDeigObjects2= [];
gdjs.Directions2Code.GDGridButtonObjects1= [];
gdjs.Directions2Code.GDGridButtonObjects2= [];
gdjs.Directions2Code.GDGridObjects1= [];
gdjs.Directions2Code.GDGridObjects2= [];
gdjs.Directions2Code.GDBObjects1= [];
gdjs.Directions2Code.GDBObjects2= [];
gdjs.Directions2Code.GDDObjects1= [];
gdjs.Directions2Code.GDDObjects2= [];
gdjs.Directions2Code.GDAObjects1= [];
gdjs.Directions2Code.GDAObjects2= [];
gdjs.Directions2Code.GDEObjects1= [];
gdjs.Directions2Code.GDEObjects2= [];
gdjs.Directions2Code.GDCObjects1= [];
gdjs.Directions2Code.GDCObjects2= [];
gdjs.Directions2Code.GDlineObjects1= [];
gdjs.Directions2Code.GDlineObjects2= [];
gdjs.Directions2Code.GDPlatform2Objects1= [];
gdjs.Directions2Code.GDPlatform2Objects2= [];
gdjs.Directions2Code.GDCornerPlatformObjects1= [];
gdjs.Directions2Code.GDCornerPlatformObjects2= [];
gdjs.Directions2Code.GDGuardObjects1= [];
gdjs.Directions2Code.GDGuardObjects2= [];
gdjs.Directions2Code.GDTeamScoreObjects1= [];
gdjs.Directions2Code.GDTeamScoreObjects2= [];
gdjs.Directions2Code.GDTeamScoreLabelObjects1= [];
gdjs.Directions2Code.GDTeamScoreLabelObjects2= [];
gdjs.Directions2Code.GDruleObjects1= [];
gdjs.Directions2Code.GDruleObjects2= [];
gdjs.Directions2Code.GDrule2Objects1= [];
gdjs.Directions2Code.GDrule2Objects2= [];
gdjs.Directions2Code.GDskipObjects1= [];
gdjs.Directions2Code.GDskipObjects2= [];
gdjs.Directions2Code.GDspeechbubObjects1= [];
gdjs.Directions2Code.GDspeechbubObjects2= [];
gdjs.Directions2Code.GDdirectionsObjects1= [];
gdjs.Directions2Code.GDdirectionsObjects2= [];
gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1= [];
gdjs.Directions2Code.GDWhiteDecoratedButtonObjects2= [];
gdjs.Directions2Code.GDRULEObjects1= [];
gdjs.Directions2Code.GDRULEObjects2= [];
gdjs.Directions2Code.GDonehalfObjects1= [];
gdjs.Directions2Code.GDonehalfObjects2= [];
gdjs.Directions2Code.GDscreenObjects1= [];
gdjs.Directions2Code.GDscreenObjects2= [];
gdjs.Directions2Code.GDNewTextObjects1= [];
gdjs.Directions2Code.GDNewTextObjects2= [];

gdjs.Directions2Code.conditionTrue_0 = {val:false};
gdjs.Directions2Code.condition0IsTrue_0 = {val:false};
gdjs.Directions2Code.condition1IsTrue_0 = {val:false};
gdjs.Directions2Code.condition2IsTrue_0 = {val:false};


gdjs.Directions2Code.mapOfGDgdjs_46Directions2Code_46GDspeechbubObjects1Objects = Hashtable.newFrom({"speechbub": gdjs.Directions2Code.GDspeechbubObjects1});
gdjs.Directions2Code.mapOfGDgdjs_46Directions2Code_46GDtweObjects1ObjectsGDgdjs_46Directions2Code_46GDtenObjects1ObjectsGDgdjs_46Directions2Code_46GDninObjects1ObjectsGDgdjs_46Directions2Code_46GDsevObjects1ObjectsGDgdjs_46Directions2Code_46GDsixObjects1ObjectsGDgdjs_46Directions2Code_46GDfivObjects1ObjectsGDgdjs_46Directions2Code_46GDfouObjects1ObjectsGDgdjs_46Directions2Code_46GDthrObjects1ObjectsGDgdjs_46Directions2Code_46GDtwoObjects1ObjectsGDgdjs_46Directions2Code_46GDoneObjects1ObjectsGDgdjs_46Directions2Code_46GDeigObjects1Objects = Hashtable.newFrom({"twe": gdjs.Directions2Code.GDtweObjects1, "ten": gdjs.Directions2Code.GDtenObjects1, "nin": gdjs.Directions2Code.GDninObjects1, "sev": gdjs.Directions2Code.GDsevObjects1, "six": gdjs.Directions2Code.GDsixObjects1, "fiv": gdjs.Directions2Code.GDfivObjects1, "fou": gdjs.Directions2Code.GDfouObjects1, "thr": gdjs.Directions2Code.GDthrObjects1, "two": gdjs.Directions2Code.GDtwoObjects1, "one": gdjs.Directions2Code.GDoneObjects1, "eig": gdjs.Directions2Code.GDeigObjects1});
gdjs.Directions2Code.mapOfGDgdjs_46Directions2Code_46GDskipObjects1Objects = Hashtable.newFrom({"skip": gdjs.Directions2Code.GDskipObjects1});
gdjs.Directions2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Directions2Code.condition0IsTrue_0.val = false;
{
gdjs.Directions2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Directions2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Directions2Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Directions2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Directions2Code.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("speechbub"), gdjs.Directions2Code.GDspeechbubObjects1);

gdjs.Directions2Code.condition0IsTrue_0.val = false;
gdjs.Directions2Code.condition1IsTrue_0.val = false;
{
gdjs.Directions2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Directions2Code.mapOfGDgdjs_46Directions2Code_46GDspeechbubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Directions2Code.condition0IsTrue_0.val ) {
{
gdjs.Directions2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Directions2Code.condition1IsTrue_0.val) {
{gdjs.evtsExt__TextToSpeech__Speak.func(runtimeScene, "The rule for the next bridge is:\n\nUSE ONLY RODS THAT ARE ONE-HALF THE LENGTH OF THE DARK GREEN ROD.\n\nUse the rods to decide, with your partner, which one is one-half of the DARK GREEN ROD.\n\nWhen you have decided, click GO!", "Zira", 100, 100, 175, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.Directions2Code.condition0IsTrue_0.val = false;
{
gdjs.Directions2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 20;
}if (gdjs.Directions2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Directions2Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("screen"), gdjs.Directions2Code.GDscreenObjects1);
{for(var i = 0, len = gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Directions2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Directions2Code.GDNewTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Directions2Code.GDscreenObjects1.length ;i < len;++i) {
    gdjs.Directions2Code.GDscreenObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1);

gdjs.Directions2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1[k] = gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1.length = k;}if (gdjs.Directions2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("eig"), gdjs.Directions2Code.GDeigObjects1);
gdjs.copyArray(runtimeScene.getObjects("fiv"), gdjs.Directions2Code.GDfivObjects1);
gdjs.copyArray(runtimeScene.getObjects("fou"), gdjs.Directions2Code.GDfouObjects1);
gdjs.copyArray(runtimeScene.getObjects("nin"), gdjs.Directions2Code.GDninObjects1);
gdjs.copyArray(runtimeScene.getObjects("one"), gdjs.Directions2Code.GDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("sev"), gdjs.Directions2Code.GDsevObjects1);
gdjs.copyArray(runtimeScene.getObjects("six"), gdjs.Directions2Code.GDsixObjects1);
gdjs.copyArray(runtimeScene.getObjects("ten"), gdjs.Directions2Code.GDtenObjects1);
gdjs.copyArray(runtimeScene.getObjects("thr"), gdjs.Directions2Code.GDthrObjects1);
gdjs.copyArray(runtimeScene.getObjects("twe"), gdjs.Directions2Code.GDtweObjects1);
gdjs.copyArray(runtimeScene.getObjects("two"), gdjs.Directions2Code.GDtwoObjects1);

gdjs.Directions2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Directions2Code.GDtweObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDtweObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDtweObjects1[k] = gdjs.Directions2Code.GDtweObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDtweObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDtenObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDtenObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDtenObjects1[k] = gdjs.Directions2Code.GDtenObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDtenObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDninObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDninObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDninObjects1[k] = gdjs.Directions2Code.GDninObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDninObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDsevObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDsevObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDsevObjects1[k] = gdjs.Directions2Code.GDsevObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDsevObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDsixObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDsixObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDsixObjects1[k] = gdjs.Directions2Code.GDsixObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDsixObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDfivObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDfivObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDfivObjects1[k] = gdjs.Directions2Code.GDfivObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDfivObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDfouObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDfouObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDfouObjects1[k] = gdjs.Directions2Code.GDfouObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDfouObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDthrObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDthrObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDthrObjects1[k] = gdjs.Directions2Code.GDthrObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDthrObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDtwoObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDtwoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDtwoObjects1[k] = gdjs.Directions2Code.GDtwoObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDtwoObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDoneObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDoneObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDoneObjects1[k] = gdjs.Directions2Code.GDoneObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDoneObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Directions2Code.GDeigObjects1.length;i<l;++i) {
    if ( gdjs.Directions2Code.GDeigObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Directions2Code.condition0IsTrue_0.val = true;
        gdjs.Directions2Code.GDeigObjects1[k] = gdjs.Directions2Code.GDeigObjects1[i];
        ++k;
    }
}
gdjs.Directions2Code.GDeigObjects1.length = k;}if (gdjs.Directions2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Directions2Code.GDeigObjects1 */
/* Reuse gdjs.Directions2Code.GDfivObjects1 */
/* Reuse gdjs.Directions2Code.GDfouObjects1 */
/* Reuse gdjs.Directions2Code.GDninObjects1 */
/* Reuse gdjs.Directions2Code.GDoneObjects1 */
/* Reuse gdjs.Directions2Code.GDsevObjects1 */
/* Reuse gdjs.Directions2Code.GDsixObjects1 */
/* Reuse gdjs.Directions2Code.GDtenObjects1 */
/* Reuse gdjs.Directions2Code.GDthrObjects1 */
/* Reuse gdjs.Directions2Code.GDtweObjects1 */
/* Reuse gdjs.Directions2Code.GDtwoObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Directions2Code.mapOfGDgdjs_46Directions2Code_46GDtweObjects1ObjectsGDgdjs_46Directions2Code_46GDtenObjects1ObjectsGDgdjs_46Directions2Code_46GDninObjects1ObjectsGDgdjs_46Directions2Code_46GDsevObjects1ObjectsGDgdjs_46Directions2Code_46GDsixObjects1ObjectsGDgdjs_46Directions2Code_46GDfivObjects1ObjectsGDgdjs_46Directions2Code_46GDfouObjects1ObjectsGDgdjs_46Directions2Code_46GDthrObjects1ObjectsGDgdjs_46Directions2Code_46GDtwoObjects1ObjectsGDgdjs_46Directions2Code_46GDoneObjects1ObjectsGDgdjs_46Directions2Code_46GDeigObjects1Objects, 16, 16, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.Directions2Code.GDskipObjects1);

gdjs.Directions2Code.condition0IsTrue_0.val = false;
gdjs.Directions2Code.condition1IsTrue_0.val = false;
{
gdjs.Directions2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Directions2Code.mapOfGDgdjs_46Directions2Code_46GDskipObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Directions2Code.condition0IsTrue_0.val ) {
{
gdjs.Directions2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Directions2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}}

}


{


{
}

}


};

gdjs.Directions2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Directions2Code.GDtweObjects1.length = 0;
gdjs.Directions2Code.GDtweObjects2.length = 0;
gdjs.Directions2Code.GDtenObjects1.length = 0;
gdjs.Directions2Code.GDtenObjects2.length = 0;
gdjs.Directions2Code.GDninObjects1.length = 0;
gdjs.Directions2Code.GDninObjects2.length = 0;
gdjs.Directions2Code.GDsevObjects1.length = 0;
gdjs.Directions2Code.GDsevObjects2.length = 0;
gdjs.Directions2Code.GDsixObjects1.length = 0;
gdjs.Directions2Code.GDsixObjects2.length = 0;
gdjs.Directions2Code.GDfivObjects1.length = 0;
gdjs.Directions2Code.GDfivObjects2.length = 0;
gdjs.Directions2Code.GDfouObjects1.length = 0;
gdjs.Directions2Code.GDfouObjects2.length = 0;
gdjs.Directions2Code.GDthrObjects1.length = 0;
gdjs.Directions2Code.GDthrObjects2.length = 0;
gdjs.Directions2Code.GDtwoObjects1.length = 0;
gdjs.Directions2Code.GDtwoObjects2.length = 0;
gdjs.Directions2Code.GDoneObjects1.length = 0;
gdjs.Directions2Code.GDoneObjects2.length = 0;
gdjs.Directions2Code.GDeigObjects1.length = 0;
gdjs.Directions2Code.GDeigObjects2.length = 0;
gdjs.Directions2Code.GDGridButtonObjects1.length = 0;
gdjs.Directions2Code.GDGridButtonObjects2.length = 0;
gdjs.Directions2Code.GDGridObjects1.length = 0;
gdjs.Directions2Code.GDGridObjects2.length = 0;
gdjs.Directions2Code.GDBObjects1.length = 0;
gdjs.Directions2Code.GDBObjects2.length = 0;
gdjs.Directions2Code.GDDObjects1.length = 0;
gdjs.Directions2Code.GDDObjects2.length = 0;
gdjs.Directions2Code.GDAObjects1.length = 0;
gdjs.Directions2Code.GDAObjects2.length = 0;
gdjs.Directions2Code.GDEObjects1.length = 0;
gdjs.Directions2Code.GDEObjects2.length = 0;
gdjs.Directions2Code.GDCObjects1.length = 0;
gdjs.Directions2Code.GDCObjects2.length = 0;
gdjs.Directions2Code.GDlineObjects1.length = 0;
gdjs.Directions2Code.GDlineObjects2.length = 0;
gdjs.Directions2Code.GDPlatform2Objects1.length = 0;
gdjs.Directions2Code.GDPlatform2Objects2.length = 0;
gdjs.Directions2Code.GDCornerPlatformObjects1.length = 0;
gdjs.Directions2Code.GDCornerPlatformObjects2.length = 0;
gdjs.Directions2Code.GDGuardObjects1.length = 0;
gdjs.Directions2Code.GDGuardObjects2.length = 0;
gdjs.Directions2Code.GDTeamScoreObjects1.length = 0;
gdjs.Directions2Code.GDTeamScoreObjects2.length = 0;
gdjs.Directions2Code.GDTeamScoreLabelObjects1.length = 0;
gdjs.Directions2Code.GDTeamScoreLabelObjects2.length = 0;
gdjs.Directions2Code.GDruleObjects1.length = 0;
gdjs.Directions2Code.GDruleObjects2.length = 0;
gdjs.Directions2Code.GDrule2Objects1.length = 0;
gdjs.Directions2Code.GDrule2Objects2.length = 0;
gdjs.Directions2Code.GDskipObjects1.length = 0;
gdjs.Directions2Code.GDskipObjects2.length = 0;
gdjs.Directions2Code.GDspeechbubObjects1.length = 0;
gdjs.Directions2Code.GDspeechbubObjects2.length = 0;
gdjs.Directions2Code.GDdirectionsObjects1.length = 0;
gdjs.Directions2Code.GDdirectionsObjects2.length = 0;
gdjs.Directions2Code.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.Directions2Code.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.Directions2Code.GDRULEObjects1.length = 0;
gdjs.Directions2Code.GDRULEObjects2.length = 0;
gdjs.Directions2Code.GDonehalfObjects1.length = 0;
gdjs.Directions2Code.GDonehalfObjects2.length = 0;
gdjs.Directions2Code.GDscreenObjects1.length = 0;
gdjs.Directions2Code.GDscreenObjects2.length = 0;
gdjs.Directions2Code.GDNewTextObjects1.length = 0;
gdjs.Directions2Code.GDNewTextObjects2.length = 0;

gdjs.Directions2Code.eventsList0(runtimeScene);

return;

}

gdjs['Directions2Code'] = gdjs.Directions2Code;
