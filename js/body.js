var count;
var countMeter;

//Get main container banner
var DOM_mainContainer = document.getElementById("container");
var WIDTH_MAIN = DOM_mainContainer.offsetWidth;
var HEIGHT_MAIN = DOM_mainContainer.offsetHeight;

//Styles
var styleBanner = "width: ${WIDTH_MAIN} px; height: ${HEIGHT_MAIN} px; position: absolute; left: 0;top: 0; ";
var styleDino = "height: 150px; position: absolute; left: 2%; top: 30%;";
var styleCounterMeter = "width: 100px; position: absolute; left: 5px; top: 5px;";
var styleCounterEnergy = "width: 100px; position: absolute; left: 545px;; top: 5px;";
var styleCounterMeterImg = "width: 100px; position: absolute; ";
var styleCounterEnergyImg = "width: 100px; position: absolute; ";
var styleGameTableMeters = "width: 70px; position: absolute; top: 70%;";

//Conten slide 1
var srcBackground = "images/bg.jpg";
var srcTextFirstSlide = "images/slide-1-text.png";
var srcLogoRastishka = "images/logo-rastishka.png";
var srcIconApp = "images/icon-app.png";
var srcIconsMarkets = "images/icon-stores.png";

var DOM_Background = document.createElement("img");
var DOM_TextFirstSlide = document.createElement("img");
var DOM_LogoRastishka = document.createElement("img");
var DOM_IconApp = document.createElement("img");
var DOM_IconsMarkets = document.createElement("img");
var startTimerslideOne;


//Content slide 2
var srcDino = "images/Dino.gif";
var DOM_Dino = document.createElement("img");
var srcGameLayer1 = "images/game-layer-1.png";
var srcGameLayer2 = "images/game-layer-2.png";
var srcGameLayer3 = "images/game-layer-3.png";
var srcGameLayer4 = "images/game-layer-4.png";
var srcGameLayer5 = "images/game-layer-5.png";
var srcGameLayer6 = "images/game-layer-6.png";
var srcCounterMeter = "images/counter-meters.png";
var srcCounterEnergy = "images/counter-energy-0.png";

var DOM_GameLayer1 = document.createElement("img");
var DOM_GameLayer2 = document.createElement("div");
var DOM_GameLayer3 = document.createElement("div");
var DOM_GameLayer4 = document.createElement("div");
var DOM_GameLayer5 = document.createElement("div");
var DOM_GameLayer6 = document.createElement("div");
var DOM_GameMetersCount = document.createElement("p");

//Counters
var DOM_CounterMeter = document.createElement("div");
var DOM_CounterEnergy = document.createElement("div");
var DOM_CounterMeterImg = document.createElement("img");
var DOM_CounterEnergyImg = document.createElement("img");

DOM_Dino.src = srcDino;
DOM_Dino.style.cssText = styleDino;
DOM_GameLayer1.src = srcGameLayer1;
DOM_GameLayer1.style.cssText = styleBanner;
DOM_GameLayer2.id = "animatedBackground2";
DOM_GameLayer3.id = "animatedBackground3";
DOM_GameLayer4.id = "animatedBackground4";
DOM_GameLayer5.id = "animatedBackground5";
DOM_GameLayer6.id = "animatedBackground6";

DOM_CounterMeter.style.cssText = styleCounterMeter;
DOM_CounterMeterImg.src = srcCounterMeter;
DOM_CounterMeterImg.style.cssText = styleCounterMeterImg;
DOM_CounterMeter.appendChild(DOM_CounterMeterImg);
DOM_CounterEnergy.style.cssText = styleCounterEnergy;
DOM_CounterEnergyImg.src = srcCounterEnergy;
DOM_CounterEnergyImg.style.cssText = styleCounterEnergyImg;
DOM_CounterEnergy.appendChild(DOM_CounterEnergyImg);


//Start Slide One
function startSlideOne() {

	DOM_Background.src = srcBackground;
	DOM_Background.style.cssText = styleBanner;


	DOM_TextFirstSlide.src = srcTextFirstSlide;
	DOM_TextFirstSlide.style.cssText = styleBanner;


	DOM_LogoRastishka.src = srcLogoRastishka;
	DOM_LogoRastishka.style.cssText = styleBanner;


	DOM_IconApp.src = srcIconApp;
	DOM_IconApp.style.cssText = styleBanner;

	DOM_IconsMarkets.src = srcIconsMarkets;
	DOM_IconsMarkets.style.cssText = styleBanner;

	DOM_mainContainer.appendChild(DOM_Background);
	DOM_mainContainer.appendChild(DOM_TextFirstSlide);
	DOM_mainContainer.appendChild(DOM_LogoRastishka);
	DOM_mainContainer.appendChild(DOM_IconApp);
	DOM_mainContainer.appendChild(DOM_IconsMarkets);
	




};
//End First Slide
function endSlideOne() {
	clearTimeout(startTimerslideOne);
	console.log("endSlideOne");
	DOM_mainContainer.removeChild(DOM_Background);
	DOM_mainContainer.removeChild(DOM_TextFirstSlide);
	DOM_mainContainer.removeChild(DOM_LogoRastishka);
	DOM_mainContainer.removeChild(DOM_IconApp);
	DOM_mainContainer.removeChild(DOM_IconsMarkets);
	startSlideTwo();

};

//Start Slide Two
function startSlideTwo() {
	count = 0;
	DOM_mainContainer.appendChild(DOM_GameLayer1);
	DOM_mainContainer.appendChild(DOM_GameLayer2);
	DOM_mainContainer.appendChild(DOM_GameLayer3);
	DOM_mainContainer.appendChild(DOM_GameLayer4);
	DOM_mainContainer.appendChild(DOM_GameLayer5);
	DOM_mainContainer.appendChild(DOM_CounterMeter);
	DOM_mainContainer.appendChild(DOM_CounterEnergy);
	DOM_mainContainer.appendChild(DOM_Dino);
	DOM_mainContainer.appendChild(DOM_GameLayer6);

	namePlaceMove();

	namePlaceLoop = setInterval(function () {
		namePlaceMove();
	}, 10000);



};

function namePlaceMove() {
	countMeter = 0;
	var countText = "" + count;
	//DOM_GameTableMetersCount.innerText = countText;


	count = count + 10;

	let start = Date.now(); // запомнить время начала

	let timer = setInterval(function () {
		let timePassed = Date.now() - start;
		DOM_GameMetersCount.innerText = timePassed;

		DOM_CounterMeter.appendChild(DOM_GameMetersCount);

	}, 20);


}
//Step by step run app
startSlideOne();

DOM_mainContainer.addEventListener("mouseup", () => { startTimerslideOne = setTimeout(endSlideOne, 2000); });
DOM_mainContainer.addEventListener("touchend", () => { startTimerslideOne = setTimeout(endSlideOne, 2000); });





var RAF = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) { window.setTimeout(callback, 1000 / 60); }
	;

var DOM_IconApp_Position = {
	posX: -200,
	posY: -500,
	speedX: 4,
	speedY: 10,
	scale: 1,
	opacity: 0,

	update: function () {
		DOM_IconApp.style.left = this.posX + "px";
		DOM_IconApp.style.top = this.posY + "px";
		DOM_IconApp.style.width= this.scale + "px";
		DOM_IconApp.style.opacity = this.opacity;
	}
};

var DOM_TextFirstSlide_Position = {
	posX: 300,
	posY: 600,
	speedX: 8,
	speedY: 15,
	scale: 2000,
	opacity: 0,

	update: function () {
		DOM_TextFirstSlide.style.left = this.posX + "px";
		DOM_TextFirstSlide.style.top = this.posX + "px";
		DOM_TextFirstSlide.style.width = this.scale + "px";
		DOM_TextFirstSlide.style.opacity = this.opacity;
	}
}


function startAnime() {
	// синхрон с внутренней анимацией браузера
	// обычно 60 раз в сек
	RAF(tick);
}

function tick() {

	DOM_IconApp_Position.posX += DOM_IconApp_Position.speedX;
	DOM_IconApp_Position.posY += DOM_IconApp_Position.speedY;
	DOM_IconApp_Position.scale += DOM_IconApp_Position.speedY;
	DOM_IconApp_Position.opacity += 0.006;
	if (DOM_IconApp_Position.posX >= 0) DOM_IconApp_Position.posX =0;
	if (DOM_IconApp_Position.posY >= 0) DOM_IconApp_Position.posY =0;
	if (DOM_IconApp_Position.scale >= WIDTH_MAIN) DOM_IconApp_Position.scale =WIDTH_MAIN;
	if (DOM_IconApp_Position.opacity >= 1) DOM_IconApp_Position.opacity =1;
	DOM_IconApp_Position.update();

	DOM_TextFirstSlide_Position.posX -= DOM_TextFirstSlide_Position.speedX;
	DOM_TextFirstSlide_Position.posY -= DOM_TextFirstSlide_Position.speedY;
	DOM_TextFirstSlide_Position.scale -= DOM_TextFirstSlide_Position.speedY;
	DOM_TextFirstSlide_Position.opacity += 0.005;
	if (DOM_TextFirstSlide_Position.posX <= 0) DOM_TextFirstSlide_Position.posX =0;
	if (DOM_TextFirstSlide_Position.posY <= 0) DOM_TextFirstSlide_Position.posY =0;
	if (DOM_TextFirstSlide_Position.scale <= WIDTH_MAIN) DOM_TextFirstSlide_Position.scale = WIDTH_MAIN;
	if (DOM_TextFirstSlide_Position.opacity >= 1) DOM_TextFirstSlide_Position.opacity =1;
	DOM_TextFirstSlide_Position.update();



	RAF(tick);
}

DOM_IconApp_Position.update();

startAnime();