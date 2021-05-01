window.addEventListener('load',main,false);
function main() {
console.log("заработало!");

var ctx = canvas_example.getContext('2d');
var w = canvas_example.width;
var h = canvas_example.height;

ctx.font = "small-caps 30px STXinwei"
ctx.fillStyle = "DarkBlue"
ctx.fillText("Вы играете в камень, ножницы, бумага!!!", 0, 50 )
var xf;
var k = 0;
b2.onclick = function()
{
	ctx.clearRect(0,0,w,h);
	k = k+1;
		var x2 = Math.random()*3;
	if (k==1)
		xf = 1;
	if ((x2<=1)&&(xf==1))
		ctx.fillText("Камень - Ничья, ауф", 0, 100)
	if ((x2<=2)&&(x2>=1.01)&&(xf==1))
		ctx.fillText("Ножницы - Ты победил, ауф", 0, 100)
	if ((x2>=2.01)&&(xf==1))
		ctx.fillText("Бумага - Ты проиграл, ауф", 0, 100)
		k = 0;

}
b3.onclick = function()
{
	ctx.clearRect(0,0,w,h);
	k = k+2;
	var x2 = Math.random()*3;

	if (k==2)
		xf = 2;
	if ((x2<=1)&&(xf==2))
		ctx.fillText("Камень - Ты проиграл, ауф", 0, 100)
	if ((x2<=2)&&(x2>=1.01)&&(xf==2))
		ctx.fillText("Ножницы - Ничья, ауф", 0, 100)
	if ((x2>=2.01)&&(xf==2))
		ctx.fillText("Бумага - Ты победил, ауф", 0, 100)
		k = 0;
}
b4.onclick = function()
{
	ctx.clearRect(0,0,w,h);
	k = k+3;
	var x2 = Math.random()*3;

	if (k == 3)
		xf = 3;
	if ((x2<=1)&&(xf==3))
		ctx.fillText("Камень - Ты победил, ауф", 0, 100)
	if ((x2<=2)&&(x2>=1.01)&&(xf==3))
		ctx.fillText("Ножницы - Ты проиграл, ауф", 0, 100)
	if ((x2>=2.01)&&(xf==3))
		ctx.fillText("Бумага - Ничья, ауф", 0, 100)
		k = 0;
}
}
