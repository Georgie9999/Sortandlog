window.addEventListener('load',main,false);
function main() {
console.log("заработало!");

var ctx = canvas_example.getContext('2d');
var w = canvas_example.width;
var h = canvas_example.height;
	var ctx2 = canvas_example2.getContext('2d');
	var w1 = canvas_example2.width;
	var h1 = canvas_example2.height;
	
	
	var scaleX = w/(5*Math.PI);
	var scaleY = h/2;
	
	var x_min = 0;
	var x_max = 0;
	 var T = [];
	 var x1;	 
	 var wt;
	b1.onclick  = function()
	{
	ctx.clearRect(0,0,w,h);
	
	 x1 = vx.value;
      console.log(x1)
	 T = [];
	r = x1.length;
	console.log(123123);
	for (i = 0; i<r; i++)
	{
		T.push(parseInt(x1[i]));		
	}
	console.log(T)
wt = w/T.length;
var ht  = h/10;
function axis(k)
{
	ctx.clearRect(0,0,w,h);
	for(j = 0; j<=r; j++)
	{
ctx.beginPath();
ctx.strokeStyle='black';
//от
ctx.moveTo(wt*j,h);
//до
ctx.lineTo(wt*j,h- ht*T[j]);
ctx.lineTo(wt*(j+1), h- ht*T[j]);
ctx.lineTo(wt*(j+1), h);
ctx.lineWidth = 8;
ctx.moveTo(wt*(k),0);
ctx.lineTo(wt*(k),h/11);
ctx.lineTo(wt*(k+1),h/11);
ctx.lineTo(wt*(k+1),0);
ctx.fillStyle = "MediumSpringGreen";
ctx.fill();
//рисуем линию
ctx.stroke();

	}
}
console.log(T)
var i = 1
var m = T.length;
var x = 0;
function shakerSort(){
//forward
if (x == 0){
if (T[i]<T[i-1]){
[T[i],T[i-1]] = [T[i-1],T[i]];
}
i++;
if (i>m)
{
	i=m;
	x = 1;
}
}
//backward
if (x == 1){
if (T[i]<T[i-1]){
[T[i],T[i-1]] = [T[i-1],T[i]];
}
i--
if (i<T.length - m)
{
	i=T.length - m;
	m--;
	x = 0;
}
} return i;
}
console.log(shakerSort(T));
var q;
	function control()
	{
	  q = shakerSort();
      axis(q);	  
	}
 setInterval(control, 1000/5);  
 
 	function f(x)
	{
		return (T.length)*x*x/50;
		
		
	}	
	
	function axis2()
	{
		ctx2.beginPath();
		//обводим линию
		ctx2.lineWidth = 8;
		ctx2.strokeStyle='DarkOrchid';
		ctx2.stroke();	
		ctx2.fillStyle = "SteelBlue"
	ctx2.fillText(T.length, 210, h-10);
	ctx2.font = "small-caps 70px Arial"
	}

	
	function plot(f)
	{
		ctx2.beginPath();
		ctx2.moveTo(0, h1);
		for( var x = x_min; x< x_max; x+= 0.01)
		{
			ctx2.lineTo(scaleX*(x - x_min), -scaleY*f(x) + h1);
			
		}
		ctx2.stroke();	
		
	}
	
	function draw()
	{
		ctx2.clearRect(0, 0, w1, h1);
		axis2();
		plot(f);
			
	}
	draw();
	
	function physics()
	{
	   x_max+= 0.1;

		
		
	}
	
	function control2()
	{
	  physics();
	  draw();	  
			
	}
		setInterval(control2, 1000/60);

 
 
	}
}