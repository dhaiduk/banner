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

};

function startSlideTwo() {

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
