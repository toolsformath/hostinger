gdjs.Game_32ENDINGCode = {};
gdjs.Game_32ENDINGCode.GDtweObjects1= [];
gdjs.Game_32ENDINGCode.GDtweObjects2= [];
gdjs.Game_32ENDINGCode.GDtenObjects1= [];
gdjs.Game_32ENDINGCode.GDtenObjects2= [];
gdjs.Game_32ENDINGCode.GDninObjects1= [];
gdjs.Game_32ENDINGCode.GDninObjects2= [];
gdjs.Game_32ENDINGCode.GDsevObjects1= [];
gdjs.Game_32ENDINGCode.GDsevObjects2= [];
gdjs.Game_32ENDINGCode.GDsixObjects1= [];
gdjs.Game_32ENDINGCode.GDsixObjects2= [];
gdjs.Game_32ENDINGCode.GDfivObjects1= [];
gdjs.Game_32ENDINGCode.GDfivObjects2= [];
gdjs.Game_32ENDINGCode.GDfouObjects1= [];
gdjs.Game_32ENDINGCode.GDfouObjects2= [];
gdjs.Game_32ENDINGCode.GDthrObjects1= [];
gdjs.Game_32ENDINGCode.GDthrObjects2= [];
gdjs.Game_32ENDINGCode.GDtwoObjects1= [];
gdjs.Game_32ENDINGCode.GDtwoObjects2= [];
gdjs.Game_32ENDINGCode.GDoneObjects1= [];
gdjs.Game_32ENDINGCode.GDoneObjects2= [];
gdjs.Game_32ENDINGCode.GDeigObjects1= [];
gdjs.Game_32ENDINGCode.GDeigObjects2= [];
gdjs.Game_32ENDINGCode.GDGridButtonObjects1= [];
gdjs.Game_32ENDINGCode.GDGridButtonObjects2= [];
gdjs.Game_32ENDINGCode.GDGridObjects1= [];
gdjs.Game_32ENDINGCode.GDGridObjects2= [];
gdjs.Game_32ENDINGCode.GDBObjects1= [];
gdjs.Game_32ENDINGCode.GDBObjects2= [];
gdjs.Game_32ENDINGCode.GDDObjects1= [];
gdjs.Game_32ENDINGCode.GDDObjects2= [];
gdjs.Game_32ENDINGCode.GDAObjects1= [];
gdjs.Game_32ENDINGCode.GDAObjects2= [];
gdjs.Game_32ENDINGCode.GDEObjects1= [];
gdjs.Game_32ENDINGCode.GDEObjects2= [];
gdjs.Game_32ENDINGCode.GDCObjects1= [];
gdjs.Game_32ENDINGCode.GDCObjects2= [];
gdjs.Game_32ENDINGCode.GDlineObjects1= [];
gdjs.Game_32ENDINGCode.GDlineObjects2= [];
gdjs.Game_32ENDINGCode.GDPlatform2Objects1= [];
gdjs.Game_32ENDINGCode.GDPlatform2Objects2= [];
gdjs.Game_32ENDINGCode.GDCornerPlatformObjects1= [];
gdjs.Game_32ENDINGCode.GDCornerPlatformObjects2= [];
gdjs.Game_32ENDINGCode.GDGuardObjects1= [];
gdjs.Game_32ENDINGCode.GDGuardObjects2= [];
gdjs.Game_32ENDINGCode.GDTeamScoreObjects1= [];
gdjs.Game_32ENDINGCode.GDTeamScoreObjects2= [];
gdjs.Game_32ENDINGCode.GDTeamScoreLabelObjects1= [];
gdjs.Game_32ENDINGCode.GDTeamScoreLabelObjects2= [];
gdjs.Game_32ENDINGCode.GDruleObjects1= [];
gdjs.Game_32ENDINGCode.GDruleObjects2= [];
gdjs.Game_32ENDINGCode.GDrule2Objects1= [];
gdjs.Game_32ENDINGCode.GDrule2Objects2= [];
gdjs.Game_32ENDINGCode.GDskipObjects1= [];
gdjs.Game_32ENDINGCode.GDskipObjects2= [];
gdjs.Game_32ENDINGCode.GDNewSpriteObjects1= [];
gdjs.Game_32ENDINGCode.GDNewSpriteObjects2= [];
gdjs.Game_32ENDINGCode.GDNewTextObjects1= [];
gdjs.Game_32ENDINGCode.GDNewTextObjects2= [];
gdjs.Game_32ENDINGCode.GDMagicLoopObjects1= [];
gdjs.Game_32ENDINGCode.GDMagicLoopObjects2= [];

gdjs.Game_32ENDINGCode.conditionTrue_0 = {val:false};
gdjs.Game_32ENDINGCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32ENDINGCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32ENDINGCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32ENDINGCode.conditionTrue_1 = {val:false};
gdjs.Game_32ENDINGCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32ENDINGCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32ENDINGCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32ENDINGCode.asyncCallback36339460 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("MagicLoop"), gdjs.Game_32ENDINGCode.GDMagicLoopObjects2);

{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Game_32ENDINGCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32ENDINGCode.GDMagicLoopObjects1) asyncObjectsList.addObject("MagicLoop", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32ENDINGCode.asyncCallback36339460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32ENDINGCode.asyncCallback10095892 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Game_32ENDINGCode.GDAObjects2);
gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Game_32ENDINGCode.GDBObjects2);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.Game_32ENDINGCode.GDCObjects2);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Game_32ENDINGCode.GDDObjects2);
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.Game_32ENDINGCode.GDEObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("MagicLoop"), gdjs.Game_32ENDINGCode.GDMagicLoopObjects2);

{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDBObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDBObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDDObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDDObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDAObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDAObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDEObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDEObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDCObjects2.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}
gdjs.Game_32ENDINGCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_32ENDINGCode.GDMagicLoopObjects1) asyncObjectsList.addObject("MagicLoop", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32ENDINGCode.asyncCallback10095892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32ENDINGCode.eventsList2 = function(runtimeScene) {

{


gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32ENDINGCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Game_32ENDINGCode.GDBObjects1);
gdjs.copyArray(runtimeScene.getObjects("MagicLoop"), gdjs.Game_32ENDINGCode.GDMagicLoopObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "91f7d998879fc526c32be78528008258d08031716d6eedc9eb8a7cba7ec30aac_Fancy Family.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDBObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDBObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects1[i].hide();
}
}}

}


{


gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = false;
gdjs.Game_32ENDINGCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 1;
}if ( gdjs.Game_32ENDINGCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32ENDINGCode.conditionTrue_1 = gdjs.Game_32ENDINGCode.condition1IsTrue_0;
gdjs.Game_32ENDINGCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10104804);
}
}}
if (gdjs.Game_32ENDINGCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MagicLoop"), gdjs.Game_32ENDINGCode.GDMagicLoopObjects1);
{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects1[i].addForce(0, -(50), 1);
}
}
{ //Subevents
gdjs.Game_32ENDINGCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = false;
gdjs.Game_32ENDINGCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 3;
}if ( gdjs.Game_32ENDINGCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32ENDINGCode.conditionTrue_1 = gdjs.Game_32ENDINGCode.condition1IsTrue_0;
gdjs.Game_32ENDINGCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10557156);
}
}}
if (gdjs.Game_32ENDINGCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MagicLoop"), gdjs.Game_32ENDINGCode.GDMagicLoopObjects1);
{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects1[i].setColor("80;227;194");
}
}{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDMagicLoopObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDMagicLoopObjects1[i].addForce(0, -(50), 1);
}
}
{ //Subevents
gdjs.Game_32ENDINGCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 4;
}if (gdjs.Game_32ENDINGCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.Game_32ENDINGCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.Game_32ENDINGCode.GDBObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.Game_32ENDINGCode.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.Game_32ENDINGCode.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("E"), gdjs.Game_32ENDINGCode.GDEObjects1);
{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDBObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDBObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDDObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDDObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDAObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDAObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDEObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDEObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDCObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDCObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDBObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDBObjects1[i].setAnimationName("Walking Right");
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDDObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDDObjects1[i].setAnimationName("Walking Right");
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDAObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDAObjects1[i].setAnimationName("Walking Right");
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDEObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDEObjects1[i].setAnimationName("Walking Right");
}
for(var i = 0, len = gdjs.Game_32ENDINGCode.GDCObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDCObjects1[i].setAnimationName("Walking Right");
}
}}

}


{


gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Game_32ENDINGCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TeamScore"), gdjs.Game_32ENDINGCode.GDTeamScoreObjects1);
{for(var i = 0, len = gdjs.Game_32ENDINGCode.GDTeamScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32ENDINGCode.GDTeamScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player1"))));
}
}}

}


{


gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32ENDINGCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 10;
}if (gdjs.Game_32ENDINGCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mat Only", false);
}}

}


};

gdjs.Game_32ENDINGCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32ENDINGCode.GDtweObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDtweObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDtenObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDtenObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDninObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDninObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDsevObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDsevObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDsixObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDsixObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDfivObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDfivObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDfouObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDfouObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDthrObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDthrObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDtwoObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDtwoObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDoneObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDoneObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDeigObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDeigObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDGridButtonObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDGridButtonObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDGridObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDGridObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDBObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDBObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDDObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDDObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDAObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDAObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDEObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDEObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDCObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDCObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDlineObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDlineObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDPlatform2Objects1.length = 0;
gdjs.Game_32ENDINGCode.GDPlatform2Objects2.length = 0;
gdjs.Game_32ENDINGCode.GDCornerPlatformObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDCornerPlatformObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDGuardObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDGuardObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDTeamScoreObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDTeamScoreObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDTeamScoreLabelObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDTeamScoreLabelObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDruleObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDruleObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDrule2Objects1.length = 0;
gdjs.Game_32ENDINGCode.GDrule2Objects2.length = 0;
gdjs.Game_32ENDINGCode.GDskipObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDskipObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDNewTextObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDNewTextObjects2.length = 0;
gdjs.Game_32ENDINGCode.GDMagicLoopObjects1.length = 0;
gdjs.Game_32ENDINGCode.GDMagicLoopObjects2.length = 0;

gdjs.Game_32ENDINGCode.eventsList2(runtimeScene);

return;

}

gdjs['Game_32ENDINGCode'] = gdjs.Game_32ENDINGCode;
