window.addEventListener('load',main,false);
function main() {
console.log("заработало!");

var ctx = canvas_example.getContext('2d');
var w = canvas_example.width;
var h = canvas_example.height;

var T = [];
var x1;

var P;
var k = 0;


b1.onclick  = function()
{
     x1 = vx.value;
	 ctx.clearRect(0,0,w,h);
    r = x1.length;
     T = [];
	for (i = 0; i<r; i++)
	{
		T.push(parseInt(x1[i]));		
	}
	if (r == 4)
	   console.log(T)
	else
       console.log("Такое число нельзя")
	var Y =  T[0]*1000+T[1]*100+ T[2]*10 +T[3]
	console.log(Y)
	ctx.font = "small-caps 50px STXinwei"
	ctx.fillStyle = "DarkBlue"
	ctx.fillText(Y, 20,45)
    var C1 = T.sort()
	var i = 90;
	   
    Y = (C1[3]*1000+C1[2]*100+ C1[1]*10 +C1[0]) - (C1[0]*1000+C1[1]*100+ C1[2]*10 +C1[3]) ;
	console.log(Y);
	P = Y;
	ctx.font = "small-caps 50px STXinwei"
	ctx.fillStyle = "DarkBlue"
	ctx.fillText(Y, 160,130)

	function Kapr()
	{
	while(Y!=6174)
	{
		var E = [];
		E.push(Y%10)
		E.push((Y%100-Y%10)/10)
		E.push(Math.trunc(Y/1000))
		E.push((Y-Math.trunc(Y/1000)*1000 - Y%100)/100)
		E.sort()
		console.log(E)
		Y = (E[3]*1000+E[2]*100+ E[1]*10 +E[0]) - (E[0]*1000+E[1]*100+ E[2]*10 +E[3]) ;
		ctx.font = "small-caps 70px Arial"
		ctx.fillStyle = "DarkBlue"
		ctx.fillText(Y, 160+2*i, 130+i);
		E = [];	

		i = i+90;
		k = k+1;
		
		console.log(Y, k)

	}
		console.log(k)
		k = k+1
		ctx.font = "small-caps 80px Arial"
		ctx.fillStyle = "MediumAquamarine"
		ctx.fillText(k, 190, 400);
		ctx.font = "small-caps 50px Arial"
		ctx.fillStyle = "RoyalBlue"
		ctx.fillText("Итераций!", 80, 460);
		ctx.fillStyle = "CadetBlue"
		ctx.font = "small-caps 30px Arial"
		ctx.fillText("Число Капрекара - число,", 700, 80);
		ctx.fillStyle = "SteelBlue"
		ctx.fillText("которое получается вычитанием", 700, 105);
		ctx.fillText("чисел, цифры которых", 700, 130);
		ctx.fillStyle = "LightSteelBlue"
		ctx.fillText("расположены в порядке", 700, 155);
		ctx.fillStyle = "PowderBlue"
		ctx.fillText("убывания и возрастания", 700, 180);
		ctx.fillStyle = "LightBlue"
		ctx.fillText("Повторение такой операции", 700, 205);
		ctx.fillStyle = "SkyBlue"
		ctx.fillText("всегда приведет к числу 6174!", 700, 230);
	
	}
	k = 0
	if (((T[0] == T[1]) && (T[0] == T[2]) && (T[0] == T[3])) || (1000>P) || (P>9999) )
	{
		ctx.font = "small-caps 30px STXinwei"
		ctx.fillStyle = "DarkBlue"
		ctx.fillText("Введите корректное число", 150, 300 )	
	}
	else
	    Kapr();
}
/*
	console.log(T)
	ctx.clearRect(0,0,w,h);
n = ((vx.value)-2)*i+1;
function draw(){
	if (i==0){
		i=150;
	}
	ctx.clearRect(0,0,w,h);
	ctx.font = "small-caps 100px Colatempta"
	ctx.fillStyle = "#00F"
	ctx.fillText(z, 425, 250);
	ctx.fillText(x, 425+i, 250);
	i= i-2;
	n= n-2;
	if (n<=0){
		i=150;
		x=0;
		y=1;
		ctx.clearRect(0,0,w,h);
			ctx.fillText(z, 425, 250);
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
}*/
} 