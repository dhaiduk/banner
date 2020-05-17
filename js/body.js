var count;
var timer;
//Get main container banner
var DOM_mainContainer = document.getElementById("container");
var WIDTH_MAIN = DOM_mainContainer.offsetWidth;
var HEIGHT_MAIN = DOM_mainContainer.offsetHeight;
var timePassedBufer = 0, timePassedGoBufer = 0;
var timePassed, timePassedGO;
var start;
var passBubble1 = false;
//Styles
var styleBanner = "width: ${WIDTH_MAIN} px; height: ${HEIGHT_MAIN} px; position: absolute; left: 0;top: 0; ";
var styleDino = "height: 150px; position: absolute; left: 30px; top: 30%;";
var styleDinoStop = "height: 150px; position: absolute; left: -130px; top: 30%;";
var styleCounterMeter = "width: 115px; position: absolute; left: 20px; top: 0px;";
var styleCounterEnergy = "width: 115px; position: absolute; left: 515px; top: 0px;";
var styleCounterMeterImg = "width: 115px; position: absolute; left: 5px; top: 5px;";
var styleCounterEnergyImg = "width: 115px; position: absolute; left: 530px; top: 5px;";
var styleCounterEnergyFull = "width: 80px; height:51px; position: absolute; left: 530px; top: 5px; overflow: hidden;";
var styleCounterEnergyImgFull = "width: 115px; margin: 0px 0px 0px 0px; position: absolute; left: 0px; top: 0px;";
var styleGameTableMeters = "width: 70px; position: absolute; top: 70%;";
var styleBubble1 = "position: absolute; top: 100px; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: 3px 0px; width: 125px; height: 125px;  animation: animatedBubble1 5s linear;";
var styleBubble2 = "position: absolute; top: 50px; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: -133px 0px; width: 125px; height: 125px; animation: animatedBubble2 7s linear ;";
var styleBubble3 = "position: absolute; top: 110px; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: 3px -125px; width: 125px; height: 125px; animation: animatedBubble3 10s linear ;";
var styleBubble4 = "position: absolute; top: 70px; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: -133px -125px; width: 125px; height: 125px; animation: animatedBubble4 12s linear ;";
var styleCursor = "position: absolute; left: 430px; top: 150px; overflow: hidden; opacity: 1; -webkit-animation: pulsing 2s infinite;  animation: pulsing 2s infinite;";
var styleCursorPress = "position: absolute; left: 430px; top: 150px; overflow: hidden; opacity: 1; -webkit-animation: pulsing2 2s infinite;  animation: pulsing2 2s infinite;";
var styleCursorText = "position: absolute; left: 400px; top: 70px; overflow: hidden; opacity: 1; -webkit-animation: pulsing2 2s infinite;  animation: pulsing2 2s infinite;";
var styleMessage = "position: inherit; opacity: 0; animation: hide 1s linear;";


//Conten slide 1
var srcBackground = "images/bgall80.jpg";
var srcTextFirstSlide = "images/slide-1-text.png";
var srcLogoRastishka = "images/logo-rastishka.png";
var srcLogoRastishka2 = "images/logo-rastishka.png";
//var srcIconApp = "images/icon-app.png";
//var srcIconsMarkets = "images/icon-stores.png";

//Conten slide 3
var srcTextSecondSlide = "images/slide-2-text.png";
var srcBtnSecondSlide = "images/slide-2-btn.png";

var DOM_Background = document.createElement("img");
var DOM_TextFirstSlide = document.createElement("img");
var DOM_TextSecondSlide = document.createElement("img");
var DOM_BtnSecondSlide = document.createElement("img");
var DOM_LogoRastishka = document.createElement("img");
var DOM_LogoRastishka2 = document.createElement("img");
var DOM_IconApp = document.createElement("img");
var DOM_IconsMarkets = document.createElement("img");
var startTimerslideOne;


//Content slide 2
var srcDino = "images/dinosize2.gif";
var srcDinoStop = "images/dinosize2.png";
var DOM_Dino = document.createElement("img");
var DOM_Dino_Stop = document.createElement("img");
var srcGameLayer1 = "images/game-layer-1.png";
var srcGameLayer2 = "images/game-layer-2.png";
var srcGameLayer3 = "images/game-layer-3.png";
var srcGameLayer4 = "images/game-layer-4.png";
var srcGameLayer5 = "images/game-layer-5.png";
var srcGameLayer6 = "images/game-layer-6.png";
var srcCounterMeter = "images/counter-meters.png";
var srcCounterEnergy = "images/counter-energy-100.png";
var srcCounterEnergyFull = "images/counter-energy-0.png";
var srcCursor = "images/cursor.png";
var srcCursorPress = "images/cursor-press.png";
var srcCursorText = "images/n.png";
var srcMessageSk = "images/sk.png";
var srcMessageM = "images/m.png";
var srcMessageS = "images/s.png";
var srcMessageC = "images/c.png";

var DOM_GameLayer1 = document.createElement("img");
var DOM_GameLayer2 = document.createElement("div");
var DOM_GameLayer3 = document.createElement("div");
var DOM_GameLayer4 = document.createElement("div");
var DOM_GameLayer5 = document.createElement("div");
var DOM_GameLayer6 = document.createElement("div");
var DOM_GameMetersCount = document.createElement("p");
var DOM_GameEnergyCount = document.createElement("p");
var DOM_Bubble1 = document.createElement("div");
var DOM_Bubble2 = document.createElement("div");
var DOM_Bubble3 = document.createElement("div");
var DOM_Bubble4 = document.createElement("div");
var DOM_cursor = document.createElement("img");
var DOM_cursor_press = document.createElement("img");
var DOM_cursor_text = document.createElement("img");


var DOM_messageC = document.createElement("img");
var DOM_messageM = document.createElement("img");
var DOM_messageS = document.createElement("img");
var DOM_messageSk = document.createElement("img");


//Counters
var DOM_CounterMeter = document.createElement("div");
var DOM_CounterEnergy = document.createElement("div");
var DOM_CounterEnergyFull = document.createElement("div");
var DOM_CounterMeterImg = document.createElement("img");
var DOM_CounterEnergyImg = document.createElement("img");
var DOM_CounterEnergyImgFull = document.createElement("img");

DOM_Dino.src = srcDino;
DOM_Dino.style.cssText = styleDino;

DOM_Dino_Stop.src = srcDinoStop;
DOM_Dino_Stop.style.cssText = styleDinoStop;

DOM_GameLayer1.src = srcGameLayer1;
DOM_GameLayer1.style.cssText = styleBanner;
DOM_GameLayer2.id = "animatedBackground2";
DOM_GameLayer3.id = "animatedBackground3";
DOM_GameLayer4.id = "animatedBackground4";
DOM_GameLayer5.id = "animatedBackground5";
DOM_GameLayer6.id = "animatedBackground6";

DOM_CounterMeter.style.cssText = styleCounterMeter;
DOM_CounterMeter.appendChild(DOM_GameMetersCount);
DOM_CounterMeterImg.src = srcCounterMeter;
DOM_CounterMeterImg.style.cssText = styleCounterMeterImg;

DOM_CounterEnergy.style.cssText = styleCounterEnergy;
DOM_CounterEnergy.appendChild(DOM_GameEnergyCount);
DOM_CounterEnergyImg.src = srcCounterEnergy;
DOM_CounterEnergyImg.style.cssText = styleCounterEnergyImg;

DOM_CounterEnergyFull.style.cssText = styleCounterEnergyFull;
DOM_CounterEnergyFull.appendChild(DOM_CounterEnergyImgFull);
DOM_CounterEnergyImgFull.src = srcCounterEnergyFull;
DOM_CounterEnergyImgFull.style.cssText = styleCounterEnergyImgFull;

DOM_Bubble1.style.cssText = styleBubble1;
DOM_Bubble2.style.cssText = styleBubble2;
DOM_Bubble3.style.cssText = styleBubble3;
DOM_Bubble4.style.cssText = styleBubble4;

DOM_messageC.src = srcMessageC;
DOM_messageC.style.cssText = styleMessage;
DOM_messageM.src = srcMessageM;
DOM_messageM.style.cssText = styleMessage;
DOM_messageS.src = srcMessageS;
DOM_messageS.style.cssText = styleMessage;
DOM_messageSk.src = srcMessageSk;
DOM_messageSk.style.cssText = styleMessage;

DOM_cursor.src = srcCursor;
DOM_cursor.style.cssText = styleCursor;
DOM_cursor_press.src = srcCursorPress;
DOM_cursor_press.style.cssText = styleCursorPress;
DOM_cursor_text.src = srcCursorText;
DOM_cursor_text.style.cssText = styleCursorText;
//Start Slide One
function startSlideOne() {

	DOM_Background.src = srcBackground;
	DOM_Background.style.cssText = styleBanner;


	DOM_TextFirstSlide.src = srcTextFirstSlide;
	DOM_TextFirstSlide.style.cssText = styleBanner;


	DOM_LogoRastishka.src = srcLogoRastishka;
	DOM_LogoRastishka.style.cssText = styleBanner;

    DOM_LogoRastishka2.src = srcLogoRastishka2;
	DOM_LogoRastishka2.style.cssText = styleBanner;

	//DOM_IconApp.src = srcIconApp;
	//DOM_IconApp.style.cssText = styleBanner;

	//DOM_IconsMarkets.src = srcIconsMarkets;
	//DOM_IconsMarkets.style.cssText = styleBanner;

	DOM_mainContainer.appendChild(DOM_Background);
	DOM_mainContainer.appendChild(DOM_TextFirstSlide);
	DOM_mainContainer.appendChild(DOM_LogoRastishka);
	//DOM_mainContainer.appendChild(DOM_IconApp);
	//DOM_mainContainer.appendChild(DOM_IconsMarkets);

	startTimerslideOne = setTimeout(endSlideOne, 3000);

};
//End First Slide
function endSlideOne() {
	clearTimeout(startTimerslideOne);
	console.log("endSlideOne");
	DOM_mainContainer.removeChild(DOM_Background);
	DOM_mainContainer.removeChild(DOM_TextFirstSlide);
	DOM_mainContainer.removeChild(DOM_LogoRastishka);
	//DOM_mainContainer.removeChild(DOM_IconApp);
	//DOM_mainContainer.removeChild(DOM_IconsMarkets);
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
	DOM_mainContainer.appendChild(DOM_CounterMeterImg);
	DOM_mainContainer.appendChild(DOM_CounterMeter);
	DOM_mainContainer.appendChild(DOM_CounterEnergyImg);
	DOM_mainContainer.appendChild(DOM_CounterEnergyFull);
	DOM_mainContainer.appendChild(DOM_CounterEnergy);
	DOM_mainContainer.appendChild(DOM_Dino);
	DOM_mainContainer.appendChild(DOM_Dino_Stop);
	DOM_mainContainer.appendChild(DOM_GameLayer6);
	DOM_mainContainer.appendChild(DOM_Bubble1);
	DOM_mainContainer.appendChild(DOM_Bubble2);
	DOM_mainContainer.appendChild(DOM_Bubble3);
	DOM_mainContainer.appendChild(DOM_Bubble4);
	

	namePlaceMove();
}


// Paused Slide 2
function PauseSlide2() {
	DOM_mainContainer.appendChild(DOM_cursor);
	DOM_mainContainer.appendChild(DOM_cursor_press);
	DOM_mainContainer.appendChild(DOM_cursor_text);
	timePassedBufer = timePassed;
	timePassedGoBufer = timePassedGo;
	DOM_GameLayer1.style.animationPlayState = "paused";
	DOM_GameLayer2.style.animationPlayState = "paused";
	DOM_GameLayer3.style.animationPlayState = "paused";
	DOM_GameLayer4.style.animationPlayState = "paused";
	DOM_GameLayer5.style.animationPlayState = "paused";
	DOM_GameLayer6.style.animationPlayState = "paused";
	DOM_Bubble1.style.animationPlayState = "paused";
	DOM_Bubble2.style.animationPlayState = "paused";
	DOM_Bubble3.style.animationPlayState = "paused";
	DOM_Bubble4.style.animationPlayState = "paused";
    DOM_Dino.style.cssText = "height: 150px; position: absolute; left: -130px; top: 30%;";;
    DOM_Dino_Stop.style.cssText = "height: 150px; position: absolute; left: 30px; top: 30%;";
	clearInterval(timer);
	DOM_Bubble1.addEventListener("mousedown", () => { СontinuationSlide2(); });
	DOM_cursor.addEventListener("mousedown", () => { СontinuationSlide2(); });
	DOM_cursor_press.addEventListener("mousedown", () => { СontinuationSlide2(); });
	DOM_cursor_text.addEventListener("mousedown", () => { СontinuationSlide2(); });
	
	DOM_Bubble1.addEventListener("touchstart", () => { СontinuationSlide2(); });
	DOM_cursor.addEventListener("touchstart", () => { СontinuationSlide2(); });
	DOM_cursor_press.addEventListener("touchstart", () => { СontinuationSlide2(); });
	DOM_cursor_text.addEventListener("touchstart", () => { СontinuationSlide2(); });
};

// Paused Slide 2
function СontinuationSlide2() {
	//namePlaceMove();
	passBubble1 = true;
	DOM_GameLayer1.style.animationPlayState = "running";
	DOM_GameLayer2.style.animationPlayState = "running";
	DOM_GameLayer3.style.animationPlayState = "running";
	DOM_GameLayer4.style.animationPlayState = "running";
	DOM_GameLayer5.style.animationPlayState = "running";
	DOM_GameLayer6.style.animationPlayState = "running";
	DOM_Bubble1.style.backgroundImage = "none";
	DOM_Bubble1.appendChild(DOM_messageS);
	DOM_mainContainer.removeChild(DOM_cursor);
	DOM_mainContainer.removeChild(DOM_cursor_press);
	DOM_mainContainer.removeChild(DOM_cursor_text);
	DOM_Bubble1.style.animationPlayState = "running";
	DOM_Bubble2.style.animationPlayState = "running";
	DOM_Bubble3.style.animationPlayState = "running";
	DOM_Bubble4.style.animationPlayState = "running";
    DOM_Dino.style.cssText = "height: 150px; position: absolute; left: 30px; top: 30%;";;
    DOM_Dino_Stop.style.cssText = "height: 150px; position: absolute; left: -130px; top: 30%;";
    
	DOM_Bubble2.addEventListener("mousedown", () => {
		DOM_Bubble2.style.backgroundImage = "none";
		DOM_Bubble2.appendChild(DOM_messageM)
	});
	DOM_Bubble3.addEventListener("mousedown", () => {
		DOM_Bubble3.style.backgroundImage = "none";
		DOM_Bubble3.appendChild(DOM_messageSk)
	});
	DOM_Bubble4.addEventListener("mousedown", () => {
		DOM_Bubble4.style.backgroundImage = "none";
		DOM_Bubble4.appendChild(DOM_messageC)
	});
	
	DOM_Bubble2.addEventListener("touchstart", () => {
		DOM_Bubble2.style.backgroundImage = "none";
		DOM_Bubble2.appendChild(DOM_messageM)
	});
	DOM_Bubble3.addEventListener("touchstart", () => {
		DOM_Bubble3.style.backgroundImage = "none";
		DOM_Bubble3.appendChild(DOM_messageSk)
	});
	DOM_Bubble4.addEventListener("touchstart", () => {
		DOM_Bubble4.style.backgroundImage = "none";
		DOM_Bubble4.appendChild(DOM_messageC)
	});
	
	namePlaceMove();
};
//End First Slide
function endSlideTwo() {
	DOM_mainContainer.removeChild(DOM_GameLayer1);
	DOM_mainContainer.removeChild(DOM_GameLayer2);
	DOM_mainContainer.removeChild(DOM_GameLayer3);
	DOM_mainContainer.removeChild(DOM_GameLayer4);
	DOM_mainContainer.removeChild(DOM_GameLayer5);
	DOM_mainContainer.removeChild(DOM_CounterMeterImg);
	DOM_mainContainer.removeChild(DOM_CounterMeter);
	DOM_mainContainer.removeChild(DOM_CounterEnergyImg);
	DOM_mainContainer.removeChild(DOM_CounterEnergyFull);
	DOM_mainContainer.removeChild(DOM_CounterEnergy);
	DOM_mainContainer.removeChild(DOM_Dino);
	DOM_mainContainer.removeChild(DOM_Dino_Stop);
	DOM_mainContainer.removeChild(DOM_GameLayer6);
	startSlideThree();
};

//Start Slide Two
function startSlideThree() {
	DOM_Background.src = srcBackground;
	DOM_Background.style.cssText = styleBanner;

	DOM_TextSecondSlide.src = srcTextSecondSlide;
	DOM_TextSecondSlide.style.cssText = "width: 650px; height: 250px; position: absolute; left: 0px; top: 10px;";

	DOM_BtnSecondSlide.src = srcBtnSecondSlide;
	DOM_BtnSecondSlide.style.cssText = styleBanner;

    DOM_LogoRastishka2.src = srcLogoRastishka2;
	DOM_LogoRastishka2.style.cssText = "width: 325px; height: 125px; position: absolute; left: 225px;top: 0px;";
	
	/*DOM_IconApp.src = srcIconApp;
	DOM_IconApp.style.cssText = styleBanner;

	DOM_IconsMarkets.src = srcIconsMarkets;
	DOM_IconsMarkets.style.cssText = styleBanner;*/
	DOM_mainContainer.appendChild(DOM_Background);
	DOM_mainContainer.appendChild(DOM_TextSecondSlide);
	DOM_mainContainer.appendChild(DOM_BtnSecondSlide);
    DOM_mainContainer.appendChild(DOM_LogoRastishka2);
	//DOM_mainContainer.appendChild(DOM_IconApp);
	//DOM_mainContainer.appendChild(DOM_IconsMarkets);
	startAnime3();
};

function namePlaceMove() {
	//count = count + 10;

	start = Date.now(); // запомнить время начала

	timer = setInterval(function () {
		timePassed = timePassedBufer + Math.round(1.5 * (Date.now() - start) / 1000);
		timePassedGo = timePassedGoBufer + (1.5 * (Date.now() - start) / 1000);
		DOM_GameMetersCount.innerText = timePassed + "m";
		DOM_GameEnergyCount.innerText = Math.round((15 - timePassedGo) * 6) + "%";
		DOM_CounterEnergyFull.style.cssText = "width: " + Math.round(80 * ((15 - timePassedGo) * 6 / 100)) + "px; height:51px; position: absolute; left: 530px; top: 5px; overflow: hidden;";
		// Условие, если проценты меньше 0 то показываем финишный слайд.
		//DOM_GameMetersCount.innerText = "150m";
		if ((15 - timePassedGo) < 1) endSlideTwo();
		if ((15 - timePassedGo) < 1) clearInterval(timer);
		if (DOM_Bubble1.offsetLeft <= 400 && !passBubble1) PauseSlide2();
		if (DOM_Bubble1.offsetLeft <=-90) DOM_mainContainer.removeChild(DOM_Bubble1);
		if (DOM_Bubble2.offsetLeft <=-90) DOM_mainContainer.removeChild(DOM_Bubble2);
		if (DOM_Bubble3.offsetLeft <=-90) DOM_mainContainer.removeChild(DOM_Bubble3);
		if (DOM_Bubble4.offsetLeft <=-90) DOM_mainContainer.removeChild(DOM_Bubble4);
	}, 20);
}
//Step by step run app
startSlideOne();

var RAF = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) { window.setTimeout(callback, 1000 / 60); }
	;

var DOM_IconApp_Position = {
	posY: -500,
	speedY: 10,
	update: function () {
		DOM_LogoRastishka.style.top = this.posY + "px";
		DOM_LogoRastishka.style.opacity = this.opacity;
	}
};

var DOM_TextFirstSlide_Position = {
	posY: 600,
	speedY: 15,
	opacity: 0,
	update: function () {
		DOM_TextFirstSlide.style.top = this.posY + "px";
		DOM_TextFirstSlide.style.opacity = this.opacity;
	}
}

var DOM_BtnSecondSlide_Position = {
	posY: -500,
	speedY: 20,
	update: function () {
		DOM_TextSecondSlide.style.top = this.posY + "px";
		DOM_TextSecondSlide.style.opacity = this.opacity;
	}
};

var DOM_TextSecondSlide_Position = {
	posY: 600,
	speedY: 10,
	opacity: 0,
	update: function () {
		DOM_BtnSecondSlide.style.top = this.posY + "px";
		DOM_BtnSecondSlide.style.opacity = this.opacity;
	}
}


function startAnime() {
	RAF(tick);
}

function tick() {
	DOM_IconApp_Position.posY += DOM_IconApp_Position.speedY;
	DOM_IconApp_Position.opacity += 0.016;
	if (DOM_IconApp_Position.posY >= 0) DOM_IconApp_Position.posY = 0;
	if (DOM_IconApp_Position.opacity >= 1) DOM_IconApp_Position.opacity = 1;
	DOM_IconApp_Position.update();

	DOM_TextFirstSlide_Position.posY -= DOM_TextFirstSlide_Position.speedY;
	DOM_TextFirstSlide_Position.opacity += 0.017;
	if (DOM_TextFirstSlide_Position.posY <= 0) DOM_TextFirstSlide_Position.posY = 0;
	if (DOM_TextFirstSlide_Position.opacity >= 1) DOM_TextFirstSlide_Position.opacity = 1;
	DOM_TextFirstSlide_Position.update();

	RAF(tick);
}

DOM_IconApp_Position.update();


function startAnime3() {
	RAF(tick3);
}

function tick3() {
	DOM_BtnSecondSlide_Position.posY += DOM_BtnSecondSlide_Position.speedY;
	DOM_BtnSecondSlide_Position.opacity += 0.016;
	if (DOM_BtnSecondSlide_Position.posY >= 10) DOM_BtnSecondSlide_Position.posY = 10;
	if (DOM_BtnSecondSlide_Position.opacity >= 1) DOM_BtnSecondSlide_Position.opacity = 1;
	DOM_BtnSecondSlide_Position.update();

	DOM_TextSecondSlide_Position.posY -= DOM_TextSecondSlide_Position.speedY;
	DOM_TextSecondSlide_Position.opacity += 0.017;
	if (DOM_TextSecondSlide_Position.posY <= 0) DOM_TextSecondSlide_Position.posY = 0;
	if (DOM_TextSecondSlide_Position.opacity >= 1) DOM_TextSecondSlide_Position.opacity = 1;
	DOM_TextSecondSlide_Position.update();

	RAF(tick3);
}

//startSlideThree();
//startAnime3();

startAnime();

admixAPI.on('load', function () {
	admixAPI.init({
		'resize': [
			{
				'name': 'state-1',
				'width': '650px',
				'height': '250px'
			}
		]
	});
	function $(id) {
		return document.getElementById(id);
	}

	DOM_BtnSecondSlide.onclick = function(){
		admixAPI.click('https://rastishka.ar.team/app/');
	};
	/*document.body.onselectstart = function() {
		return false;
	}*/
});