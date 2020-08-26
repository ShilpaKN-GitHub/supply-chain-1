const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterImage, helicopterSprite;
var packageSprite, packageImage, package;
var ground, groundSprite;

function preload()
{
	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
}

function setup()
{
	createCanvas(400, 400);

	groundSprite = createSprite(200, 385, 400, 10);
	groundSprite.shapeColor = color(150, 75, 0);
	
	packageSprite = createSprite(200, 100, 10, 10);
	packageSprite.addImage(packageImage);
	packageSprite.scale = 0.15;

	helicopterSprite = createSprite(200, 100, 10, 10);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale = 0.5;

	engine = Engine.create();
	world = engine.world;

	var package_options = {
		restitution: 0.4,
		isStatic: true
	}
	package = Bodies.circle(200, 100, 10, package_options);
	World.add(world, package);

	var ground_options = {
		isStatic: true
	}
	ground = Bodies.rectangle(200, 385, 400, 10, ground_options);
 	World.add(world, ground);
}

function draw()
{
	background("lightblue");

	Engine.update(engine);

	rectMode(CENTER);	
	packageSprite.x = package.position.x;
	packageSprite.y = package.position.y;

	drawSprites();
}

function keyPressed()
{
	if (keyCode === DOWN_ARROW)
	{
		Body.setStatic(package, false);	
	}
}