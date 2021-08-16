
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	marioJump = loadSound("jump.wav")
	coinSound = loadSound("coin.wav")
	gameOver = loadSound("gameover.wav")
	kickSound = loadSound("kick.wav")
	marioDie = loadSound("mariodie.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("gameConsole")
	instializeInSetup(mario);
	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on('pose', gotPoses)
}
function modelLoaded(){
console.log("Model loaded.")
}
function gotPoses(results){
	if(results.length > 0){
console.log(results)		
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y
console.log("Nose X = " + noseX + " | Nose Y = " + noseY)
	}
}

function draw() {
	game()
}






