var count;

//Styles
var styleBanner = "width: 600px;height: 250px;position: absolute;left: 0;top: 0;";
var styleDino = "height: 150px; position: absolute; left: 2%; top: 30%;";

var styleCounterMeter = "width: 100px; position: absolute; left: 5px; top: 5px;";
var styleCounterEnergy = "width: 100px; position: absolute; left: 495px;; top: 5px;";
var styleAnimation = "animation: animatedBackground 5s linear infinite; @keyframes animatedBackground {	from { background-position: 100% 0; } 	to { background-position: 0 0; } }";
var styleGameTableMeters = "width: 70px; position: absolute; top: 70%;";

//Get main container banner
var mainContainer = document.getElementById("container");

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
var barrierLoop;
var objects = [];
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
var srcGameTableMeters = "images/game-table-meters.png";

var DOM_GameLayer1 = document.createElement("img");
var DOM_GameLayer2 = document.createElement("div");
var DOM_GameLayer3 = document.createElement("div");
var DOM_GameLayer4 = document.createElement("div");
var DOM_GameLayer5 = document.createElement("div");
var DOM_GameLayer6 = document.createElement("div");
var DOM_GameTableMeters = document.createElement("div");
var DOM_GameTableMetersImage = document.createElement("img");
var numTop = document.createElement("p");
//Counters
var DOM_CounterMeter = document.createElement("img");
var DOM_CounterEnergy = document.createElement("img");

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

	mainContainer.appendChild(DOM_Background);
	mainContainer.appendChild(DOM_TextFirstSlide);
	mainContainer.appendChild(DOM_LogoRastishka);
	mainContainer.appendChild(DOM_IconApp);
	mainContainer.appendChild(DOM_IconsMarkets);
};
//End First Slide
function endSlideOne() {
	clearTimeout(startTimerslideOne);
	console.log("endSlideOne");
	mainContainer.removeChild(DOM_Background);
	mainContainer.removeChild(DOM_TextFirstSlide);
	mainContainer.removeChild(DOM_LogoRastishka);
	mainContainer.removeChild(DOM_IconApp);
	mainContainer.removeChild(DOM_IconsMarkets);
	startSlideTwo();

};

//Start Slide Two
function startSlideTwo() {
	count = 0;
	console.log("startSlideTwo");
	DOM_Dino.src = srcDino;
	DOM_Dino.style.cssText = styleDino;
	DOM_GameLayer1.src = srcGameLayer1;
	DOM_GameLayer1.style.cssText = styleBanner;
	DOM_GameLayer2.id = "animatedBackground2";
	DOM_GameLayer3.id = "animatedBackground3";
	DOM_GameLayer4.id = "animatedBackground4";
	DOM_GameLayer5.id = "animatedBackground5";
	DOM_GameLayer6.id = "animatedBackground6";

	DOM_CounterMeter.src = srcCounterMeter;
	DOM_CounterMeter.style.cssText = styleCounterMeter;
	DOM_CounterEnergy.src = srcCounterEnergy;
	DOM_CounterEnergy.style.cssText = styleCounterEnergy;


	DOM_GameTableMetersImage.src = srcGameTableMeters;
	DOM_GameTableMetersImage.style.cssText = styleGameTableMeters;
	DOM_GameTableMeters.style.cssText = styleGameTableMeters;

	mainContainer.appendChild(DOM_GameLayer1);
	mainContainer.appendChild(DOM_GameLayer2);
	mainContainer.appendChild(DOM_GameLayer3);
	mainContainer.appendChild(DOM_GameLayer4);
	mainContainer.appendChild(DOM_GameLayer5);
	mainContainer.appendChild(DOM_CounterMeter);
	mainContainer.appendChild(DOM_CounterEnergy);
	mainContainer.appendChild(DOM_Dino);
	mainContainer.appendChild(DOM_GameLayer6);

	namePlaceMove();

	namePlaceLoop = setInterval(function () {
		namePlaceMove();
	}, 10000);



};

//Step by step run app
startSlideOne();

mainContainer.addEventListener("mouseup", () => { startTimerslideOne = setTimeout(endSlideOne, 2000); });
mainContainer.addEventListener("touchend", () => { startTimerslideOne = setTimeout(endSlideOne, 2000); });

function namePlaceMove() {
	++count;
	var countText = ""+count;
	//var numTop = document.createElement("p");
	numTop.style.cssText = styleGameTableMeters;
	//numTop.style.position = "absolute";
	numTop.style.textAlign = "center";
	numTop.style.top= -25 + "px";
	//numTop.style.height = 30 + "px";
	numTop.style.fontSize = 30  + "px";
	numTop.style.fontStyle = "Geneva, Arial, Helvetica, sans-serif";
	numTop.style.color = "#FFFFFF";
	numTop.innerText = countText +" м.";


	let start = Date.now(); // запомнить время начала

	let timer = setInterval(function () {
		DOM_GameTableMeters.appendChild(DOM_GameTableMetersImage);
		DOM_GameTableMeters.appendChild(numTop);
		mainContainer.appendChild(DOM_GameTableMeters);
		// сколько времени прошло с начала анимации?
		let timePassed = Date.now() - start;
		DOM_GameTableMeters.style.left = mainContainer.offsetWidth - timePassed / 9 + 'px';

		//if (timePassed >= 5000 ) {
		if (DOM_GameTableMeters.offsetLeft <= mainContainer.offsetLeft - DOM_GameTableMeters.offsetWidth) {
			DOM_GameTableMeters.removeChild(DOM_GameTableMetersImage);
			DOM_GameTableMeters.removeChild(numTop);
			mainContainer.removeChild(DOM_GameTableMeters);
			
			clearInterval(timer); // закончить анимацию через 2 секунды
			return;
		}

		// отрисовать анимацию на момент timePassed, прошедший с начала анимации
		//draw(timePassed);

	}, 00);

	// в то время как timePassed идёт от 0 до 2000
	// left изменяет значение от 0px до 400px
	function draw(timePassed) {
		DOM_GameTableMeters.style.left = mainContainer.offsetWidth - DOM_GameTableMeters.offsetWidth - timePassed / 5 + 'px';
		console.log(DOM_GameTableMeters.offsetLeft);
		if (DOM_GameTableMeters.offsetLeft <= mainContainer.offsetLeft) clearInterval(timer);
	}
}