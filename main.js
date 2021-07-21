
var canvas = new fabric.Canvas(' myCanvas');
ball_y = 0;
ball_x = 0;
ball_y = 400;
ball_x = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Iamge.fromURl("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
fabric.Image.fromURL("ball.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
		top:ball_y,
		left:ball_x
	});
	canvas.add(ball_obj);
});
new_image();
 }


window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="You have hit the Goal!!";
	document.getElementById("myCanvas").style.borderColor="red";


	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}		
	
	
	function up()
	{
		if(ball_y >=0)
		{
			ball_y = ball_y - block_img_height;
			console.log("block image height = " +  block_img_height);
			console.log("When up arrow key is pressed, X = "+ball_x + " , Y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}
	

	function down()
	{
		{
			if(ball_y <=0)
			{
				ball_y = ball_y - block_img_height;
				console.log("block image height = " +  block_img_height);
				console.log("When down arrow key is pressed, X = "+ball_x + " , Y = "+ball_y);
				canvas.remove(ball_object);
				new_image();
			}
		}
		
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_img_width;
        console.log("block image width = " +  block_img_width);
        console.log("When left arrow key is pressed, X = " +ball_x + " , Y = "+ball_y);
        canvas.remove(ball_object);
    new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_img_width;
        console.log("block image width = " +  block_img_width);
        console.log("When right arrow key is pressed, X = " +ball_x + " , Y = "+ball_y);
        canvas.remove(ball_object);
       new_image();
		}
	}
	
}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_img_height;
        console.log("block image height = " +  block_img_height);
        console.log("When up arrow key is pressed, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_img_height;
        console.log("block image height = " +  block_img_height);
        console.log("When down arrow key is pressed, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_img_width;
        console.log("block image width = " +  block_img_width);
        console.log("When left arrow key is pressed, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_img_width;
        console.log("block image width = " +  block_img_width);
        console.log("When right arrow key is pressed, X = " +player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}




    