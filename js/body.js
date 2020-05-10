/*admixAPI.on('load', function(){ 
	admixAPI.init({
		'resize': [
			{
			'name': 'state-1',
			'width': '300px',
			'height': '250px'
			}
		]
	});
	function $(id){
		return document.getElementById(id);
	}

	document.body.onclick = function(){
		admixAPI.click('');
	};
	document.body.onselectstart = function() {
		return false;
	}
});*/
var styleBanner = "width: 600px;height: 250px;position: absolute;left: 0;top: 0;";
var styleDino = "width: 107px;height: 194px; position: absolute; left: 0; top: 10%;";
var styleAnimation = "animation: animatedBackground 5s linear infinite; @keyframes animatedBackground {	from { background-position: 100% 0; } 	to { background-position: 0 0; } }";
var mainContainer = document.getElementById("container");

//Conten slide 1
var srcBackground = "images/фон.jpg";
var srcTextFirstSlide = "images/текст-первого-слайда.png";
var srcLogoRastishka = "images/лого-растишка.png";
var srcIconApp = "images/иконка-приложения.png";
var srcIconsMarkets = "images/иконки-маркетов.png";

var DOM_Background = document.createElement("img");
var DOM_TextFirstSlide = document.createElement("img");
var DOM_LogoRastishka = document.createElement("img");
var DOM_IconApp = document.createElement("img");
var DOM_IconsMarkets = document.createElement("img");
var startTimerslideOne;


//Content slide 2
var srcDino = "images/Dino.gif";
var DOM_Dino = document.createElement("img");
var srcGameLayer1 = "images/игра-слой-1.png";
var srcGameLayer2 = "images/игра-слой-2.png";
var srcGameLayer3 = "images/игра-слой-3.png";
var srcGameLayer4 = "images/игра-слой-4.png";
var srcGameLayer5 = "images/игра-слой-5.png";
var srcGameLayer6 = "images/игра-слой-6.png";

var DOM_GameLayer1 = document.createElement("img");
var DOM_GameLayer2 = document.createElement("div");
var DOM_GameLayer3 = document.createElement("div");
var DOM_GameLayer4 = document.createElement("div");
var DOM_GameLayer5 = document.createElement("div");
var DOM_GameLayer6 = document.createElement("div");


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

startSlideOne();

mainContainer.addEventListener("mouseup", () => { startTimerslideOne = setTimeout(endSlideOne, 2000); });
//mainContainer.addEventListener("touchend", () => setTimeout(endSlideOne, 2000));

function endSlideOne(EO) {
	clearTimeout(startTimerslideOne);
	console.log("endSlideOne");
	mainContainer.removeChild(DOM_Background);
	mainContainer.removeChild(DOM_TextFirstSlide);
	mainContainer.removeChild(DOM_LogoRastishka);
	mainContainer.removeChild(DOM_IconApp);
	mainContainer.removeChild(DOM_IconsMarkets);
	startSlideTwo();

};

function startSlideTwo() {
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


	mainContainer.appendChild(DOM_GameLayer1);
	mainContainer.appendChild(DOM_GameLayer2);
	mainContainer.appendChild(DOM_GameLayer3);
	mainContainer.appendChild(DOM_GameLayer4);
	mainContainer.appendChild(DOM_GameLayer5);
	mainContainer.appendChild(DOM_Dino);
	mainContainer.appendChild(DOM_GameLayer6);

};
