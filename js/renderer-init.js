const canvas = document.getElementById('mycanvas');

let _w = document.documentElement.clientWidth;
let _h = document.documentElement.clientHeight;

const renderer = new PIXI.Renderer({
    view: canvas,
    width: _w,
    height: _h,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    transparent: true
});

window.addEventListener('resize', resize);

function resize() {

    _w =document.documentElement.clientWidth;
    _h = document.documentElement.clientHeight;

    renderer.resize(_w, _h);
}

const interface = new PIXI.Container();
