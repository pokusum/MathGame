var win = false;

const num = [10];
const dec_num = [10];
const sec_num = [10];
const dsec_num = [10];
const min_num = [10];
const dmin_num = [10];
for(let i = 0; i < 10; i++) {
  num[i] = new PIXI.Sprite();
  dec_num[i] = new PIXI.Sprite();
  sec_num[i] = new PIXI.Sprite();
  dsec_num[i] = new PIXI.Sprite();
  min_num[i] = new PIXI.Sprite();
  dmin_num[i] = new PIXI.Sprite();
}

var style_login = new PIXI.TextStyle({
  fontFamily: 'Nerko One',
  fontSize: 40,
  fill: 0xFFA500,
  align: 'left',
});

var style_login_2 = new PIXI.TextStyle({
  fontFamily: 'Nerko One',
  fontSize: 40,
  fill: 0xFFFFFF,
  align: 'left',
});

var style_menu= new PIXI.TextStyle({
  fontFamily: 'Nerko One',
  fontSize: 35,
  fill: 0xFFA500,
  align: 'left',
});

var style_menu_head= new PIXI.TextStyle({
  fontFamily: 'Nerko One',
  fontSize: 45,
  fill: 0xFFA500,
  align: 'left',
});

var style_win= new PIXI.TextStyle({
  fontFamily: 'Nerko One',
  fontSize: 40,
  fill: 0xFFA500,
  align: 'left',
});

var style_head_win= new PIXI.TextStyle({
  fontFamily: 'Nerko One',
  fontSize: 55,
  fill: 0xFFA500,
  align: 'left',
});


const buttonLogin = new PIXI.Sprite();
buttonLogin.x = _w - 150;
buttonLogin.y = 40;
buttonLogin.hitArea = new PIXI.Rectangle(0, 0, 110, 47);

buttonLogin.buttonMode = true;
buttonLogin.interactive = true;

buttonLogin.on('pointerdown', onPointer_buttonLogin_Down );

buttonLogin.on('pointerover', onPointer_buttonLogin_Over);

buttonLogin.on('pointerout', onPointer_buttonLogin_Out);

interface.addChild(buttonLogin);

function onPointer_buttonLogin_Down() {
  removeNotification();
  notification.addChild(notificationVersion);
  interface.addChild(notification);
}

function onPointer_buttonLogin_Over() {
    buttonLogin.removeChild(buttonLogin_main);
    buttonLogin.addChild(buttonLogin_Over);

}

function onPointer_buttonLogin_Out() {
    buttonLogin.removeChild(buttonLogin_Over);
    buttonLogin.addChild(buttonLogin_main);
}

const buttonLogin_main = new PIXI.Sprite();
buttonLogin_main.addChild(creatRoundBoxLogin(0xFFA500));
buttonLogin.addChild(buttonLogin_main);

const buttonLogin_Over = new PIXI.Sprite();
buttonLogin_Over.addChild(creatRoundBoxLogin(0xFFFFFF));

function creatRoundBoxLogin(color){
  const roundBoxLogin = new PIXI.Graphics();
  roundBoxLogin.lineStyle(3, color, 1);
  roundBoxLogin.beginFill(0x4B0082, 0.2);
  roundBoxLogin.drawRoundedRect(0, 0, 110, 47, 22);
  roundBoxLogin.endFill();
  return roundBoxLogin;
}

var stopwatch = new PIXI.Sprite();
var sec = new PIXI.Sprite();
var dec_sec = new PIXI.Sprite();
var minute = new PIXI.Sprite();
var dec_minute = new PIXI.Sprite();
sec.addChild(sec_num[0]);
dec_sec.addChild(dsec_num[0]);
minute.addChild(min_num[0]);
dec_minute.addChild(dmin_num[0]);
sec.x = 73;
stopwatch.addChild(sec);
dec_sec.x = 53;
stopwatch.addChild(dec_sec);
minute.x = 20;
stopwatch.addChild(minute);
stopwatch.addChild(dec_minute);
var time = [4];
for(let i = 0; i < 4; i++) {
  time[i] = 0;
}



var menu = new PIXI.Sprite();
menu.x = _w - 400;
menu.y = _h - 230;
const roundBoxMenu = new PIXI.Graphics();
roundBoxMenu.lineStyle(3, 0xFFA500, 1);
roundBoxMenu.beginFill(0x4B0082, 0.5);
roundBoxMenu.drawRoundedRect(0, 0, 380, 220, 25);
roundBoxMenu.endFill();
menu.addChild(roundBoxMenu);
const roundBoxMenuHead = new PIXI.Graphics();
roundBoxMenuHead.lineStyle(3, 0xFFA500, 1);
roundBoxMenuHead.beginFill(0x4B0082, 0.5);
roundBoxMenuHead.drawRoundedRect(0, 0, 380, 55, 25);
roundBoxMenuHead.endFill();
menu.addChild(roundBoxMenuHead);
var levelHead = new PIXI.Sprite();
levelHead.x = 125;
levelHead.y = 5;
roundBoxMenuHead.addChild(levelHead);
var level_num = 0;
var levelName = new PIXI.Sprite();
var name = 'Test level';
levelName.x = 10;
levelName.y = 60;
menu.addChild(levelName);
var levelTheme = new PIXI.Sprite();
var theme = 'Math';
levelTheme.x = 10;
levelTheme.y = 100;
menu.addChild(levelTheme);
var steps_round = new PIXI.Sprite();
var steps = 0;
var steps_num = 0;
var steps_dec = 0;
var steps_round_num = new PIXI.Sprite();
steps_round_num.addChild(num[0]);
steps_round_num.position.set(121, 0);
var steps_round_dec = new PIXI.Sprite();
steps_round.addChild(steps_round_num);
steps_round_dec.addChild(dec_num[0]);
steps_round_dec.position.set(100, 0);
steps_round.addChild(steps_round_dec);
steps_round.x = 10;
steps_round.y = 140;
menu.addChild(steps_round);
var time_cnt_round = new PIXI.Sprite();
let time_cnt = 0;
time_cnt_round.x = 10;
time_cnt_round.y = 180;
updateStopwatch();
//stopwatch.position.set(_w - 300, _h - 51);
stopwatch.position.set(90, 0);
time_cnt_round.addChild(stopwatch);
menu.addChild(time_cnt_round);
interface.addChild(menu);
//interface.addChild(stopwatch);


var buttonSet = new PIXI.Sprite;
buttonSet.x = 10;
buttonSet.y = _h - 210;

var buttonAgain = [3];
buttonAgain[0] = new PIXI.Sprite;
buttonAgain[0].x = 0;
buttonAgain[0].y = 50;
buttonAgain[1] = new PIXI.Sprite;
buttonAgain[1].addChild(createButtonCircleMain(0xFFA500));
buttonAgain[2] = new PIXI.Sprite;
buttonAgain[2].addChild(createButtonCircleOver(0xFFA500));
buttonAgain[0].hitArea = new PIXI.Circle(33, 18, 13);
buttonAgain[0].buttonMode = true;
buttonAgain[0].interactive = true;
buttonAgain[0].addChild(buttonAgain[1]);
buttonSet.addChild(buttonAgain[0]);
buttonAgain[0].on('pointerdown', (event) => onPointer_buttonAgain_Down(buttonAgain));
buttonAgain[0].on('pointerover', (event) => onPointer_buttonSet_Over(buttonAgain));
buttonAgain[0].on('pointerout', (event) => onPointer_buttonSet_Out(buttonAgain));

var buttonBack = [3];
buttonBack[0] = new PIXI.Sprite;
buttonBack[0].x = 0;
buttonBack[0].y = 0;
buttonBack[1] = new PIXI.Sprite;
buttonBack[1].addChild(createButtonCircleMain(0xFFA500));
buttonBack[2] = new PIXI.Sprite;
buttonBack[2].addChild(createButtonCircleOver(0xFFA500));
buttonBack[0].hitArea = new PIXI.Circle(33, 18, 13);
buttonBack[0].buttonMode = true;
buttonBack[0].interactive = true;
buttonBack[0].addChild(buttonBack[1]);
buttonSet.addChild(buttonBack[0]);
buttonBack[0].on('pointerdown', (event) => onPointer_buttonBack_Down(buttonBack));
buttonBack[0].on('pointerover', (event) => onPointer_buttonSet_Over(buttonBack));
buttonBack[0].on('pointerout', (event) => onPointer_buttonSet_Out(buttonBack));

var buttonHelp = [3];
buttonHelp[0] = new PIXI.Sprite;
buttonHelp[0].x = 0;
buttonHelp[0].y = 100;
buttonHelp[1] = new PIXI.Sprite;
buttonHelp[1].addChild(createButtonCircleMain(0xFFA500));
buttonHelp[2] = new PIXI.Sprite;
buttonHelp[2].addChild(createButtonCircleOver(0xFFA500));
buttonHelp[0].hitArea = new PIXI.Circle(33, 18, 13);
buttonHelp[0].buttonMode = true;
buttonHelp[0].interactive = true;
buttonHelp[0].addChild(buttonHelp[1]);
buttonSet.addChild(buttonHelp[0]);
buttonHelp[0].on('pointerdown', onPointer_buttonHelp_Down);
buttonHelp[0].on('pointerover', (event) => onPointer_buttonSet_Over(buttonHelp));
buttonHelp[0].on('pointerout', (event) => onPointer_buttonSet_Out(buttonHelp));

var buttonInfo = [4];
var hide = 0;
buttonInfo[0] = new PIXI.Sprite;
buttonInfo[0].x = 0;
buttonInfo[0].y = 150;
buttonInfo[1] = new PIXI.Sprite;
buttonInfo[1].addChild(createButtonCircleMain(0xFFA500));
buttonInfo[2] = new PIXI.Sprite;
buttonInfo[2].addChild(createButtonCircleOver(0xFFA500));
buttonInfo[3] = new PIXI.Sprite;
buttonInfo[3].addChild(createButtonCircleOver(0xFFA500));
buttonInfo[0].hitArea = new PIXI.Circle(33, 18, 13);
buttonInfo[0].buttonMode = true;
buttonInfo[0].interactive = true;
buttonInfo[0].addChild(buttonInfo[1]);
buttonSet.addChild(buttonInfo[0]);
buttonInfo[0].on('pointerdown', onPointer_buttonInfo_Down);
buttonInfo[0].on('pointerover', onPointer_buttonInfo_Over);
buttonInfo[0].on('pointerout', onPointer_buttonInfo_Out);


interface.addChild(buttonSet);

function onPointer_buttonHelp_Down() {
  removeNotification();
  notification.addChild(notificationVersion);
  interface.addChild(notification);
}

function onPointer_buttonAgain_Down(){
  sec.removeChild(sec_num[time[0]]);
  sec.addChild(sec_num[0]);
  time[0] = 0;
  dec_sec.removeChild(dsec_num[time[1]]);
  dec_sec.addChild(dsec_num[0]);
  time[1] = 0;
  minute.removeChild(min_num[time[2]]);
  minute.addChild(min_num[0]);
  time[2] = 0;
  dec_minute.removeChild(dmin_num[time[3]]);
  dec_minute.addChild(dmin_num[0]);
  time[3] = 0;
  time_cnt = 0;

  win = false;
  updateStopwatch();
  goToFirstExpression();
}

function onPointer_buttonBack_Down(){
  if(steps != 0) {
    goToPreviousExpression();
    updateSteps();
  }else{
    removeNotification();
    notification.addChild(notificationAction);
    interface.addChild(notification);
  }
}

function onPointer_buttonSet_Over(choice) {
    choice[0].removeChild(choice[1]);
    choice[0].addChild(choice[2]);
}
function onPointer_buttonSet_Out(choice) {
    choice[0].removeChild(choice[2]);
    choice[0].addChild(choice[1]);
}

function onPointer_buttonInfo_Down() {
  if(hide == 1){
    time_cnt_round.addChild(stopwatch);
    interface.addChild(menu);
    stopwatch.position.set(90, 0);
    hide = 0;
    buttonInfo[0].removeChild(buttonInfo[3]);
    buttonInfo[0].addChild(buttonInfo[2]);
  }else{
    interface.removeChild(menu);
    interface.addChild(stopwatch);
    stopwatch.position.set(_w - 120, _h - 50);
    hide = 1;
    buttonInfo[0].removeChild(buttonInfo[2]);
    buttonInfo[0].addChild(buttonInfo[3]);
  }
}

function onPointer_buttonInfo_Over() {
  if(hide == 1){
    buttonInfo[0].removeChild(buttonInfo[1]);
    buttonInfo[0].addChild(buttonInfo[3]);
  }else{
    buttonInfo[0].removeChild(buttonInfo[1]);
    buttonInfo[0].addChild(buttonInfo[2]);
  }
}
function onPointer_buttonInfo_Out() {
  if(hide == 1){
    buttonInfo[0].removeChild(buttonInfo[3]);
    buttonInfo[0].removeChild(buttonInfo[2]);
    buttonInfo[0].addChild(buttonInfo[1]);
  }else{
    buttonInfo[0].removeChild(buttonInfo[2]);
    buttonInfo[0].removeChild(buttonInfo[3]);
    buttonInfo[0].addChild(buttonInfo[1]);
  }
}

function createButtonCircleMain(color){
  var buttonCircleMain = new PIXI.Graphics();
  buttonCircleMain.lineStyle(2, color, 1);
  buttonCircleMain.drawCircle(33, 18, 13);
  return buttonCircleMain;
}

function createButtonCircleOver(color){
  var buttonCircleOver = new PIXI.Graphics();
  buttonCircleOver.lineStyle(2, color, 1);
  buttonCircleOver.beginFill(color, 1);
  buttonCircleOver.drawCircle(33, 18, 13);
  buttonCircleOver.endFill();
  return buttonCircleOver;
}

var notification = new PIXI.Sprite();
notification.x = _w / 2 - 350;
notification.y = _h / 2 - 30;

var notificationBody = new PIXI.Graphics();
notificationBody.lineStyle(3, 0xFFA500, 1);
notificationBody.beginFill(0x4B0082);
notificationBody.drawRoundedRect(0, 0, 700, 60, 22);
notificationBody.endFill();
notification.addChild(notificationBody);
notification.hitArea = new PIXI.Rectangle(0, 0, 700, 60);
notification.buttonMode = true;
notification.interactive = true;
notification.on('pointerdown', removeNotification);

function removeNotification(){
  notification.removeChild(notificationAction);
  notification.removeChild(notificationVersion);
  interface.removeChild(notification);
}

var notificationVersion = new PIXI.Sprite();
notificationVersion.position.set(32, 10);
var notificationAction = new PIXI.Sprite();
notificationAction.position.set(120, 10);




var menuWin = new PIXI.Sprite();
menuWin.x = (_w - 500) / 2;
menuWin.y = (_h - 400) / 2;
const roundBoxMenuWin = new PIXI.Graphics();
roundBoxMenuWin.lineStyle(3, 0xFFA500, 1);
roundBoxMenuWin.beginFill(0x8f17ad, 1);
roundBoxMenuWin.drawRoundedRect(0, 0, 500, 400, 25);
roundBoxMenuWin.endFill();
menuWin.addChild(roundBoxMenuWin);
const roundBoxMenuHeadWin = new PIXI.Graphics();
roundBoxMenuHeadWin.lineStyle(3, 0xFFA500, 1);
roundBoxMenuHeadWin.beginFill(0x67107d, 0.8);
roundBoxMenuHeadWin.drawRoundedRect(0, 0, 500, 75, 25);
roundBoxMenuHeadWin.endFill();
menuWin.addChild(roundBoxMenuHeadWin);
var headWin = new PIXI.Sprite();
headWin.x = 143;
headWin.y = 12;
roundBoxMenuHeadWin.addChild(headWin);
var levelNameWin = new PIXI.Sprite();
levelNameWin.x = 20;
levelNameWin.y = 90;
menuWin.addChild(levelNameWin);
var levelThemeWin = new PIXI.Sprite();
levelThemeWin.x = 20;
levelThemeWin.y = 135;
menuWin.addChild(levelThemeWin);
var steps_round_win = new PIXI.Sprite();
var steps_round_num_win = new PIXI.Sprite();
steps_round_num_win.position.set(131, 0);
steps_round_win.addChild(steps_round_num_win);
var steps_round_dec_win = new PIXI.Sprite();
steps_round_dec_win.position.set(110, 0);
steps_round_win.addChild(steps_round_dec_win);
steps_round_win.x = 20;
steps_round_win.y = 180;
menuWin.addChild(steps_round_win);
var time_cnt_round_win = new PIXI.Sprite();
time_cnt_round_win.x = 20;
time_cnt_round_win.y = 225;
menuWin.addChild(time_cnt_round_win);
var restartButton = new PIXI.Sprite();
restartButton.x = 0;
restartButton.y = 300;
menuWin.addChild(restartButton);
var restartButtonOut = new PIXI.Sprite();
const roundBoxrestartButtonOut = new PIXI.Graphics();
roundBoxrestartButtonOut.lineStyle(3, 0xFFA500, 1);
roundBoxrestartButtonOut.beginFill(0x67107d, 0.5);
roundBoxrestartButtonOut.drawRoundedRect(125, 5, 250, 50, 25);
roundBoxrestartButtonOut.endFill();
restartButtonOut.addChild(roundBoxrestartButtonOut);
restartButton.addChild(restartButtonOut);
var restartButtonOver = new PIXI.Sprite();
const roundBoxRestartButtonOver = new PIXI.Graphics();
roundBoxRestartButtonOver.lineStyle(3, 0xFFA500, 1);
roundBoxRestartButtonOver.beginFill(0x67107d, 1);
roundBoxRestartButtonOver.drawRoundedRect(125, 5, 250, 50, 25);
roundBoxRestartButtonOver.endFill();
restartButtonOver.addChild(roundBoxRestartButtonOver);


restartButton.hitArea = new PIXI.Rectangle(0, 0, 250, 50);
restartButton.buttonMode = true;
restartButton.interactive = true;

restartButton.on('pointerdown', againAfterWin);
restartButton.on('pointerover', onPointer_buttonRestart_Over);
restartButton.on('pointerout', onPointer_buttonRestart_Out);

function onPointer_buttonRestart_Over() {
  restartButton.removeChild(restartButtonOut);
  restartButton.addChild(restartButtonOver);
}

function onPointer_buttonRestart_Out() {
  restartButton.removeChild(restartButtonOver);
  restartButton.addChild(restartButtonOut);
}

function activeWin() {
  steps_round_num_win.addChild(num[steps_num]);
  steps_round_dec_win.addChild(dec_num[steps_dec]);
  stopwatch.position.set(100, 0);
  time_cnt_round_win.addChild(stopwatch);
  interface.addChild(menuWin);
  interface.removeChild(menu);
  buttonBack[0].interactive = false;
  buttonAgain[0].interactive = false;
  buttonHelp[0].interactive = false;
  buttonInfo[0].interactive = false;

}

function againAfterWin() {
  steps_round_num_win.removeChild(num[steps_num]);
  steps_round_dec_win.removeChild(dec_num[steps_dec]);
  buttonBack[0].interactive = true;
  buttonAgain[0].interactive = true;
  buttonHelp[0].interactive = true;
  buttonInfo[0].interactive = true;
  interface.removeChild(menuWin);
  onPointer_buttonAgain_Down();
  time_cnt_round.addChild(stopwatch);
  interface.addChild(menu);
}



window.WebFontConfig = {
    google: {
        families: ['Snippet', 'Nerko One'],
    },

    active() {
        init();
    },
};

(function() {
    const wf = document.createElement('script');
    wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
}());

function init() {
    const textMain = new PIXI.Text('MathGame', {
        fontFamily: 'Nerko One',
        fontSize: 100,
        fill: 0xFFA500,
        align: 'left',
    });
    textMain.position.set(20, 5);
    interface.addChild(textMain);

    const textLogin = new PIXI.Text(' Login', style_login);
    buttonLogin_main.addChild(textLogin);

    const textLogin_Over = new PIXI.Text(' Login', style_login_2);
    buttonLogin_Over.addChild(textLogin_Over);

    for(let i = 0; i < 10; i++) {
      const number = new PIXI.Text(i, style_login);
      num[i].addChild(number);
    }
    for(let i = 0; i < 10; i++) {
      const dec_number = new PIXI.Text(i, style_login);
      dec_num[i].addChild(dec_number);
    }

    for(let i = 0; i < 10; i++) {
      const sec_number = new PIXI.Text(i, style_login);
      sec_num[i].addChild(sec_number);
    }
    for(let i = 0; i < 10; i++) {
      const sec_number = new PIXI.Text(i, style_login);
      dsec_num[i].addChild(sec_number);
    }
    for(let i = 0; i < 10; i++) {
      const sec_number = new PIXI.Text(i, style_login);
      min_num[i].addChild(sec_number);
    }
    for(let i = 0; i < 10; i++) {
      const sec_number = new PIXI.Text(i, style_login);
      dmin_num[i].addChild(sec_number);
    }
    const text_sep_stopwatch = new PIXI.Text(':', style_login);
    text_sep_stopwatch.position.set(40, 0);
    stopwatch.addChild(text_sep_stopwatch);

    const text_level_head = new PIXI.Text('Level', style_menu_head);
    levelHead.addChild(text_level_head);
    const text_level_num = new PIXI.Text(level_num, style_menu_head);
    text_level_num.position.set(120, 0);
    levelHead.addChild(text_level_num);

    const text_level = new PIXI.Text('Level:', style_menu);
    levelName.addChild(text_level);
    const text_level_name = new PIXI.Text(name, style_menu);
    text_level_name.position.set(100, 0);
    levelName.addChild(text_level_name);

    const text_theme = new PIXI.Text('Theme:', style_menu);
    levelTheme.addChild(text_theme);
    const text_level_theme = new PIXI.Text(theme, style_menu);
    text_level_theme.position.set(110, 0);
    levelTheme.addChild(text_level_theme);

    const text_steps = new PIXI.Text('Steps:', style_menu);
    steps_round.addChild(text_steps);

    const text_time_cnt = new PIXI.Text('Time:', style_menu);
    time_cnt_round.addChild(text_time_cnt);


    const text_buttonAgain_over = new PIXI.Text('again', style_menu);
    text_buttonAgain_over.position.set(58, -1);
    buttonAgain[2].addChild(text_buttonAgain_over);

    const text_buttonBack_over = new PIXI.Text('back', style_menu);
    text_buttonBack_over.position.set(58, -1);
    buttonBack[2].addChild(text_buttonBack_over);

    const text_buttonHelp_over = new PIXI.Text('help', style_menu);
    text_buttonHelp_over.position.set(58, -1);
    buttonHelp[2].addChild(text_buttonHelp_over);

    const text_buttonInfo_over_hide = new PIXI.Text('hide info', style_menu);
    text_buttonInfo_over_hide.position.set(58, -1);
    buttonInfo[2].addChild(text_buttonInfo_over_hide);
    const text_buttonInfo_over_show = new PIXI.Text('show info', style_menu);
    text_buttonInfo_over_show.position.set(58, -1);
    buttonInfo[3].addChild(text_buttonInfo_over_show);

    const text_notificationVersion = new PIXI.Text('It will be available in the next versions.', style_login);
    notificationVersion.addChild(text_notificationVersion);

    const text_notificationAction = new PIXI.Text('This action is not available!', style_login);
    notificationAction.addChild(text_notificationAction);


    const text_level_head_win = new PIXI.Text('You win!!!', style_head_win);
    headWin.addChild(text_level_head_win);

    const text_level_win = new PIXI.Text('Level:', style_win);
    levelNameWin.addChild(text_level_win);
    const text_level_name_wim = new PIXI.Text(name, style_win);
    text_level_name_wim.position.set(105, 0);
    levelNameWin.addChild(text_level_name_wim);

    const text_theme_win = new PIXI.Text('Theme:', style_win);
    levelThemeWin.addChild(text_theme_win);
    const text_level_theme_win = new PIXI.Text(theme, style_win);
    text_level_theme_win.position.set(120, 0);
    levelThemeWin.addChild(text_level_theme_win);

    const text_steps_win = new PIXI.Text('Steps:', style_win);
    steps_round_win.addChild(text_steps_win);

    const text_time_cnt_win = new PIXI.Text('Time:', style_win);
    time_cnt_round_win.addChild(text_time_cnt_win);

    const text_restart_button = new PIXI.Text('play again', style_win);
    text_restart_button.position.set(167, 8);
    restartButtonOut.addChild(text_restart_button);

    const text_restart_button_over = new PIXI.Text('play again', style_win);
    text_restart_button_over.position.set(167, 8);
    restartButtonOver.addChild(text_restart_button_over);

}


function updateStopwatch() {
  var pr_id = setTimeout(updateStopwatch, 1000);

  if(win){
    clearTimeout(pr_id);
  }else{
  time_cnt++;
  sec.removeChild(sec_num[time[0]]);
  sec.addChild(sec_num[(time_cnt)%10]);
  time[0] = (time_cnt)%10;

  if(time_cnt%10 == 0) {
    dec_sec.removeChild(dsec_num[time[1]]);
    dec_sec.addChild(dsec_num[(time_cnt/10)%6]);
    time[1] = (time_cnt/10)%6;
  }

  if(time_cnt%60 == 0) {
    minute.removeChild(min_num[time[2]]);
    minute.addChild(min_num[(time_cnt/60)%10]);
    time[2] = (time_cnt/60)%10;
  }

  if(time_cnt%600 == 0) {
    dec_minute.removeChild(dmin_num[time[3]]);
    dec_minute.addChild(dmin_num[(time_cnt/600)%6]);
    time[3] = (time_cnt/600)%6;
  }

  }

}

function updateSteps() {
  steps = returnTurnAmount();
  steps_round_num.removeChild(num[steps_num]);
  steps_round_dec.removeChild(dec_num[steps_dec]);
  steps_num = steps % 10;
  steps_dec = ((steps - steps%10) /10) % 10;
  steps_round_num.addChild(num[steps_num]);
  steps_round_dec.addChild(dec_num[steps_dec]);
}


let ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start();

//loadLevel("(*(+(/(a;b);c;d);x))", "(b)");
loadLevel("(sin(a))", "(+(1;-(cos(a))))");


function animate() {

  renderer.render(interface);
}
