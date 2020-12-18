const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

const app = new PIXI.Application({
  width: windowInnerWidth,
  height: windowInnerHeight,
  transparent: true
});
document.body.appendChild(app.view);

const mainLine = new PIXI.Graphics();
mainLine.lineStyle(4, 0xFFA500, 1)
//mainLine.beginFill(0x48036F);
mainLine.drawRect(-5, 2, windowInnerWidth + 10, 115);
//mainLine.endFill();
app.stage.addChild(mainLine);

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
    app.stage.addChild(textMain);

    const textLogin = new PIXI.Text(' Login', style_login);
    buttonLogin_main.addChild(textLogin);

    const textLogin_Over = new PIXI.Text(' Login', style_login_2);
    buttonLogin_Over.addChild(textLogin_Over);
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

const buttonLogin = new PIXI.Container();
buttonLogin.x = windowInnerWidth - 150;
buttonLogin.y = 40;
buttonLogin.hitArea = new PIXI.Rectangle(0, 0, 110, 47);

buttonLogin.buttonMode = true;
buttonLogin.interactive = true;

buttonLogin.on('pointerdown', (event) => console.log("clickLogin"));

buttonLogin.on('pointerover', (event) => onPointer_buttonLogin_Over());

buttonLogin.on('pointerout', (event) => onPointer_buttonLogin_Out());

app.stage.addChild(buttonLogin);


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
  //roundBoxLogin.beginFill(0x696969);
  roundBoxLogin.drawRoundedRect(0, 0, 110, 47, 22);
  //roundBoxLogin.endFill();
  return roundBoxLogin;
}
