gdjs.Mat_32OnlyCode = {};
gdjs.Mat_32OnlyCode.GDtweObjects1= [];
gdjs.Mat_32OnlyCode.GDtweObjects2= [];
gdjs.Mat_32OnlyCode.GDtenObjects1= [];
gdjs.Mat_32OnlyCode.GDtenObjects2= [];
gdjs.Mat_32OnlyCode.GDninObjects1= [];
gdjs.Mat_32OnlyCode.GDninObjects2= [];
gdjs.Mat_32OnlyCode.GDsevObjects1= [];
gdjs.Mat_32OnlyCode.GDsevObjects2= [];
gdjs.Mat_32OnlyCode.GDsixObjects1= [];
gdjs.Mat_32OnlyCode.GDsixObjects2= [];
gdjs.Mat_32OnlyCode.GDfivObjects1= [];
gdjs.Mat_32OnlyCode.GDfivObjects2= [];
gdjs.Mat_32OnlyCode.GDfouObjects1= [];
gdjs.Mat_32OnlyCode.GDfouObjects2= [];
gdjs.Mat_32OnlyCode.GDthrObjects1= [];
gdjs.Mat_32OnlyCode.GDthrObjects2= [];
gdjs.Mat_32OnlyCode.GDtwoObjects1= [];
gdjs.Mat_32OnlyCode.GDtwoObjects2= [];
gdjs.Mat_32OnlyCode.GDoneObjects1= [];
gdjs.Mat_32OnlyCode.GDoneObjects2= [];
gdjs.Mat_32OnlyCode.GDeigObjects1= [];
gdjs.Mat_32OnlyCode.GDeigObjects2= [];
gdjs.Mat_32OnlyCode.GDmatObjects1= [];
gdjs.Mat_32OnlyCode.GDmatObjects2= [];
gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.Mat_32OnlyCode.GDclearmatlabelObjects1= [];
gdjs.Mat_32OnlyCode.GDclearmatlabelObjects2= [];
gdjs.Mat_32OnlyCode.GDgridlabelObjects1= [];
gdjs.Mat_32OnlyCode.GDgridlabelObjects2= [];
gdjs.Mat_32OnlyCode.GDGridObjects1= [];
gdjs.Mat_32OnlyCode.GDGridObjects2= [];
gdjs.Mat_32OnlyCode.GDGridButtonObjects1= [];
gdjs.Mat_32OnlyCode.GDGridButtonObjects2= [];

gdjs.Mat_32OnlyCode.conditionTrue_0 = {val:false};
gdjs.Mat_32OnlyCode.condition0IsTrue_0 = {val:false};
gdjs.Mat_32OnlyCode.condition1IsTrue_0 = {val:false};
gdjs.Mat_32OnlyCode.condition2IsTrue_0 = {val:false};


gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDtweObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDtenObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDninObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDsevObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDsixObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDfivObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDfouObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDthrObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDtwoObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDoneObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDeigObjects1Objects = Hashtable.newFrom({"twe": gdjs.Mat_32OnlyCode.GDtweObjects1, "ten": gdjs.Mat_32OnlyCode.GDtenObjects1, "nin": gdjs.Mat_32OnlyCode.GDninObjects1, "sev": gdjs.Mat_32OnlyCode.GDsevObjects1, "six": gdjs.Mat_32OnlyCode.GDsixObjects1, "fiv": gdjs.Mat_32OnlyCode.GDfivObjects1, "fou": gdjs.Mat_32OnlyCode.GDfouObjects1, "thr": gdjs.Mat_32OnlyCode.GDthrObjects1, "two": gdjs.Mat_32OnlyCode.GDtwoObjects1, "one": gdjs.Mat_32OnlyCode.GDoneObjects1, "eig": gdjs.Mat_32OnlyCode.GDeigObjects1});
gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1});
gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1});
gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1});
gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDGridButtonObjects1Objects = Hashtable.newFrom({"GridButton": gdjs.Mat_32OnlyCode.GDGridButtonObjects1});
gdjs.Mat_32OnlyCode.eventsList0 = function(runtimeScene) {

{


gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = false;
{
gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Mat_32OnlyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Grid"), gdjs.Mat_32OnlyCode.GDGridObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "84a7c1348513e1f578ed3a9439460c1fdecea0034fb447e63810ad450178cc9e_Power Up 3.aac", false, 20, 1);
}{for(var i = 0, len = gdjs.Mat_32OnlyCode.GDGridObjects1.length ;i < len;++i) {
    gdjs.Mat_32OnlyCode.GDGridObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("eig"), gdjs.Mat_32OnlyCode.GDeigObjects1);
gdjs.copyArray(runtimeScene.getObjects("fiv"), gdjs.Mat_32OnlyCode.GDfivObjects1);
gdjs.copyArray(runtimeScene.getObjects("fou"), gdjs.Mat_32OnlyCode.GDfouObjects1);
gdjs.copyArray(runtimeScene.getObjects("nin"), gdjs.Mat_32OnlyCode.GDninObjects1);
gdjs.copyArray(runtimeScene.getObjects("one"), gdjs.Mat_32OnlyCode.GDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("sev"), gdjs.Mat_32OnlyCode.GDsevObjects1);
gdjs.copyArray(runtimeScene.getObjects("six"), gdjs.Mat_32OnlyCode.GDsixObjects1);
gdjs.copyArray(runtimeScene.getObjects("ten"), gdjs.Mat_32OnlyCode.GDtenObjects1);
gdjs.copyArray(runtimeScene.getObjects("thr"), gdjs.Mat_32OnlyCode.GDthrObjects1);
gdjs.copyArray(runtimeScene.getObjects("twe"), gdjs.Mat_32OnlyCode.GDtweObjects1);
gdjs.copyArray(runtimeScene.getObjects("two"), gdjs.Mat_32OnlyCode.GDtwoObjects1);

gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDtweObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDtweObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDtweObjects1[k] = gdjs.Mat_32OnlyCode.GDtweObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDtweObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDtenObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDtenObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDtenObjects1[k] = gdjs.Mat_32OnlyCode.GDtenObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDtenObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDninObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDninObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDninObjects1[k] = gdjs.Mat_32OnlyCode.GDninObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDninObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDsevObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDsevObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDsevObjects1[k] = gdjs.Mat_32OnlyCode.GDsevObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDsevObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDsixObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDsixObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDsixObjects1[k] = gdjs.Mat_32OnlyCode.GDsixObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDsixObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDfivObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDfivObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDfivObjects1[k] = gdjs.Mat_32OnlyCode.GDfivObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDfivObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDfouObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDfouObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDfouObjects1[k] = gdjs.Mat_32OnlyCode.GDfouObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDfouObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDthrObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDthrObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDthrObjects1[k] = gdjs.Mat_32OnlyCode.GDthrObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDthrObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDtwoObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDtwoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDtwoObjects1[k] = gdjs.Mat_32OnlyCode.GDtwoObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDtwoObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDoneObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDoneObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDoneObjects1[k] = gdjs.Mat_32OnlyCode.GDoneObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDoneObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Mat_32OnlyCode.GDeigObjects1.length;i<l;++i) {
    if ( gdjs.Mat_32OnlyCode.GDeigObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = true;
        gdjs.Mat_32OnlyCode.GDeigObjects1[k] = gdjs.Mat_32OnlyCode.GDeigObjects1[i];
        ++k;
    }
}
gdjs.Mat_32OnlyCode.GDeigObjects1.length = k;}if (gdjs.Mat_32OnlyCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Mat_32OnlyCode.GDeigObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDfivObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDfouObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDninObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDoneObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDsevObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDsixObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDtenObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDthrObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDtweObjects1 */
/* Reuse gdjs.Mat_32OnlyCode.GDtwoObjects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDtweObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDtenObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDninObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDsevObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDsixObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDfivObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDfouObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDthrObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDtwoObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDoneObjects1ObjectsGDgdjs_46Mat_9532OnlyCode_46GDeigObjects1Objects, 16, 16, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 10, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1);

gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = false;
{
gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Mat_32OnlyCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1[i].setAnimationName("hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1);

gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = false;
{
gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Mat_32OnlyCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1[i].setAnimationName("rest");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1);

gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = false;
gdjs.Mat_32OnlyCode.condition1IsTrue_0.val = false;
{
gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mat_32OnlyCode.condition0IsTrue_0.val ) {
{
gdjs.Mat_32OnlyCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Mat_32OnlyCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Mat Only");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GridButton"), gdjs.Mat_32OnlyCode.GDGridButtonObjects1);

gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = false;
gdjs.Mat_32OnlyCode.condition1IsTrue_0.val = false;
{
gdjs.Mat_32OnlyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mat_32OnlyCode.mapOfGDgdjs_46Mat_9532OnlyCode_46GDGridButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Mat_32OnlyCode.condition0IsTrue_0.val ) {
{
gdjs.Mat_32OnlyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Mat_32OnlyCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Grid"), gdjs.Mat_32OnlyCode.GDGridObjects1);
{for(var i = 0, len = gdjs.Mat_32OnlyCode.GDGridObjects1.length ;i < len;++i) {
    gdjs.Mat_32OnlyCode.GDGridObjects1[i].hide(false);
}
}}

}


};

gdjs.Mat_32OnlyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mat_32OnlyCode.GDtweObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDtweObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDtenObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDtenObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDninObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDninObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDsevObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDsevObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDsixObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDsixObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDfivObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDfivObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDfouObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDfouObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDthrObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDthrObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDtwoObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDtwoObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDoneObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDoneObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDeigObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDeigObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDmatObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDmatObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDclearmatlabelObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDclearmatlabelObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDgridlabelObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDgridlabelObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDGridObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDGridObjects2.length = 0;
gdjs.Mat_32OnlyCode.GDGridButtonObjects1.length = 0;
gdjs.Mat_32OnlyCode.GDGridButtonObjects2.length = 0;

gdjs.Mat_32OnlyCode.eventsList0(runtimeScene);

return;

}

gdjs['Mat_32OnlyCode'] = gdjs.Mat_32OnlyCode;
