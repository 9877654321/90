
var canvas = new fabric.Canvas('myCanvas');

ball_x = 0;
ball_y = 0;
ball_x = 400;
ball_y = 800;

ball_width = 5;
ball_height = 5;
function load_img() {
    fabric.Image.fromURL("golf-history.png", function(Img){
        hole_object= Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_object);
});
new_image();

}

function new_image() {
	fabric.Image.fromURL("ball.png", function(Img){
        ball_object= Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_object);
});
new_image();
    
}
if((ball_x=hole_x),(ball_y=hole_y)){
    canvas.remove (ball.obj);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	
	}
	function up()
{
    if(ball_y>= 0)
    {
        ball_y = ball_y - ball_height
        console.log("block image height = "+ball_height);
        console.log("when up arrow key is pressed =  "+ball_x+  +ball_y );
        canvas.remove(player_object);
        new_image();
    }
}
function down()
{
    if(ball_y<= 500)
    {
        ball_y = ball_y + ball_height
        console.log("block image height = "+ball_height);
        console.log("when  arrow key is pressed,  X=  "+ball_x+"  ,Y= "+ball_y );
        canvas.remove(player_object);
        new_image();
    }
}
function left()
{
    if(ball_x>= 0)
    {
        ball_x = ball_x - ball_width
        console.log("block image width = "+ball_width);
        console.log("when left arrow key is pressed,  X=  "+ball_x+"  ,Y= "+ball_y );
        canvas.remove(player_object);
        new_image();
    }
}
function right()
{
    if(ball_x<= 850)
	{
        ball_x = ball_x + ball_width
        console.log("block image width = "+ball_width);
        console.log("when right arrow key is pressed,  X=  "+ball_x+"  ,Y= "+ball_y );
        canvas.remove(player_object);
        new_image();
    }
}