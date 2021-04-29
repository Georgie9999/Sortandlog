window.addEventListener('load',main,false);
function main() {
console.log("заработало!");

var ctx = canvas_example.getContext('2d');
var w = canvas_example.width;
var h = canvas_example.height;
var ctx2 = canvas_example2.getContext('2d');
var w1 = canvas_example2.width;
var h1 = canvas_example2.height;

var scaleX = w1/(5*Math.PI);
	var scaleY = h/2;
	
	var x_min = 0;
	var x_max = 0;

var x = 0;
var y = 1;
var z;
var i = 150;
var n;

	var img = new Image();
	img.onload = function() {
  ctx.save();
    ctx.rect(0, 0, w, h);//Здесь первый 0=X
    ctx.clip();
    ctx.drawImage(img,0, 0,w,h);//Первый 0=X
    ctx.restore();
};
img.src = 'https://thumbs.gfycat.com/AdvancedScrawnyArgentinehornedfrog-size_restricted.gif';
b1.onclick  = function()
{
	z=1;
	ctx.clearRect(0,0,w,h);

n = ((vx.value)-2)*i+1;
function draw(){
	if (i==0){
		i=150;
	}
	ctx.clearRect(0,0,w,h);
	ctx.font = "small-caps 170px STXinwei"
	ctx.fillStyle = "DarkSlateBlue"
	ctx.fillText(z, 200, 250);
	ctx.fillText(x, 200+i, 250);
	i= i-2;
	n= n-2;
	if (n<=0){
		i=150;
		x=0;
		y=1;
		ctx.clearRect(0,0,w,h);
			ctx.fillText(z, 300, 250);
	}

}

function Fibb()
{
if(i==0){
console.log(x);
console.log(y);

  z = x + y;
  x = y;
  y = z;
}
}
function control(){
	if(n > 0){
	Fibb();
	draw();
	}
}
setInterval(control, 1000/60);


 function f(x3)
	{
		return Math.exp(x3)/60;
		
		
	}	
	
	function axis2()
	{
		ctx2.beginPath();
		//обводим линию
		ctx2.lineWidth = 8;
		ctx2.strokeStyle='Crimson';
		ctx2.stroke();	
	}

	
	function plot(f)
	{
		ctx2.beginPath();
		ctx2.moveTo(0, h1);
		for( var x3 = x_min; x3< x_max; x3+= 0.01)
		{
			ctx2.lineTo(scaleX*(x3 - x_min), -scaleY*f(x3) + h1);
			
		}
		
		ctx2.stroke();	
		
	}
	
	function draw2()
	{
		ctx2.clearRect(0, 0, w1, h1);
		axis2();
		plot(f);
			
	}
	draw2();
	
	function physics()
	{
	   x_max+= 0.1;
	
	}
	
	function control2()
	{
	  physics();
	  draw2();	  
			
	}
		setInterval(control2, 1000/60); 

 
 

}
}