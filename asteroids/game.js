var c;
var gContext;
var gCanvas;
var ticker;

function init() {
	
	console.log("init()");
	
	ticker = 0;
		
	// Get ctx to canvas (draw context)
	gCanvas = document.getElementById("main");
	gContext = gCanvas.getContext('2d');
	
	
	initScreen();
	loadResources();
	
	window.requestAnimationFrame(gameLoop);
	
}

function initScreen() {
	console.log("InitScreen()");
	// Set canvas size to fullscreen
	const vw = window.innerWidth;
	const vh = window.innerHeight;

	console.log("viewWidth: " + vw + ", viewHeight: " + vh);
	
	gCanvas.width = vw;
	gCanvas.height = vh;
	
}

function onResize() {
	init();
}

function gameLoop() {
	
	
	
	window.requestAnimationFrame(gameLoop);
	
	now = Date.now();
	elapsed = now - then;
	
	// If we've 
	if(elapsed > fpsInterval) {
	
		process();
		draw();
		
		// Update then
		then = now - (elapsed % fpsInterval);
	}
	
}

function clearScreen(color) {
	// Clear Screen
	gContext.fillStyle = color;
	gContext.fillRect(0, 0, gCanvas.width, gCanvas.height);
}

function draw() {
	
	// Clear Screen
	clearScreen("#1199AA");
	
	gContext.drawImage(img, 300 + Math.sin(ticker * 1.0) * 100, 100);	
}

function process() {
	ticker += 0.1;
}

function loadResources() {
	img = new Image();
	img.src = "orbs.png";
	img.onload = function() {
	
	}
}

