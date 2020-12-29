var style = new PIXI.TextStyle({
    fontFamily: 'Comic Sans MS',
    fontSize: 24,
    fill: 0xffffff
})

var extraSettings = {
    divisionLineExtraLength: 4,    // used for managing "multi-floor" fractions
    divisionLineWidth: 3,   // division line thickness
    powerOffsetMultiplier: 2/3, // managing base Y axis offset relatively to power height
    partOfScreenDedicatedToExpression: 1/4, // part of screen dedicated for drawing current expression after substitutions have been drawn
    sourceToTargetExpressionOffset: 20, // space width between a source and a target of a substitution
    screenWidth: 800,
    screenHeight: 600
}

var expressionRoot;
var turnsDone = 0;
var expressionProgression;
var startingStructureString;
var goalStructureString;

var gameContainer = new PIXI.Container();               // contains the whole scene
var containerRoot = new PIXI.Container();               // contains the whole scene except for an answer hint
var expressionContainerRoot;                            // contains current expression
var substitutionContainerRoot = new PIXI.Container();   // contains clickable substitutions
var answerContainer = new PIXI.Container();             // contains an answer hint
substitutionContainerRoot.position.set(0, extraSettings.screenHeight*extraSettings.partOfScreenDedicatedToExpression);
gameContainer.addChild(containerRoot);
gameContainer.addChild(answerContainer);

containerRoot.width = extraSettings.screenWidth;    // may require invisible block of screenWidth by screenHeight size
containerRoot.height = extraSettings.screenHeight;
gameContainer.position.set((renderer.width-extraSettings.screenWidth)/2, (renderer.height-extraSettings.screenHeight)/2);

interface.addChild(gameContainer);

function changeStepsValue(newValue) {
    turnsDone = newValue;
    updateSteps();
}

function addExpressionSubstitutionByName(name) {
    return twf.api.expressionSubstitutionFromStructureStrings(void 0, void 0, void 0, void 0, void 0, void 0, name);
}

var expressionSubstitutions = [
    addExpressionSubstitutionByName("NumberPlusMinus1"), // ATTENTION: why referring by code doesn't work?
    addExpressionSubstitutionByName("DecimalToFraction"),
    addExpressionSubstitutionByName("PowFactorization"),
    addExpressionSubstitutionByName("MultiplicationFactorization"),
    addExpressionSubstitutionByName("OpeningBrackets"),
    addExpressionSubstitutionByName("ParentBracketsExpansion"),
    addExpressionSubstitutionByName("ArgumentsSwap"),
    addExpressionSubstitutionByName("ArgumentsPermutation"),
    addExpressionSubstitutionByName("ArgumentsPermutationInOther"),
    addExpressionSubstitutionByName("ReduceArithmetic"),
    addExpressionSubstitutionByName("ReduceFraction"),
    addExpressionSubstitutionByName("AdditiveComplicatingExtension"),
    addExpressionSubstitutionByName("MultiplicativeComplicatingExtension"),
    addExpressionSubstitutionByName("MinusInOutBrackets"),
    addExpressionSubstitutionByName("SimpleComputation"),
    twf.api.expressionSubstitutionFromStructureStrings("a", "b"),
    twf.api.expressionSubstitutionFromStructureStrings("sin(a)", "+(1;-(cos(a)))"),
    twf.api.expressionSubstitutionFromStructureStrings("+(1;-(cos(a)))", "sin(a)")];  // ATTENTION: test rule, it works
var config = twf.api.createCompiledConfigurationFromExpressionSubstitutionsAndParams(expressionSubstitutions);

function goToPreviousExpression() {   // for a 'cancel turn' button
    if (expressionProgression.length > 1)
        redrawMainExpression(true, void 0);
}

function goToFirstExpression() {    // for a 'retry from the beginning' button
    outputAnswer(true);
    if (expressionProgression.length > 1) {
        expressionProgression = expressionProgression.slice(0, 2);
        redrawMainExpression(true, void 0);
    }
    changeStepsValue(0);
}

function returnTurnAmount() {
    return turnsDone;
}

function loadLevel(startingStructureStringInput, goalStructureStringInput) {    // load level with a starting expression and a goal expression and start the game
    startingStructureString = startingStructureStringInput;
    goalStructureString = goalStructureStringInput;
    expressionRoot = twf.api.structureStringToExpression(startingStructureString);
    expressionProgression = [];
    redrawMainExpression(false, expressionRoot);
    outputAnswer(true);
    changeStepsValue(0);
}

function checkAnswer(testedExpressionNode) {
    //console.log(win);
    if(twf.api.expressionToStructureString(testedExpressionNode) === goalStructureString) {
      win = true;
      activeWin();
      //console.log(win);
    }
}
