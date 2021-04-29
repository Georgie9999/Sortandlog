window.addEventListener('load', main, false);
 function main() {
	 
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;
	
	var N = 4;
	var dt = 0.1;
	var V = 10;
	var balls = [];
	
	function Ball(x,y,r,vx,vy){
		this.x = x;
		this.y = y;
		this.r = r;
		this.vx = vx;
		this.vy = vy;
		var that = this;

		function generateColor()
		{
			return '#' + Math.floor(Math.random()*1677721500).toString(30)
		}
		
		this.draw = function(ctx){
			ctx.beginPath();
			ctx.arc(that.x,that.y,that.r, 0,2*Math.PI)
			ctx.lineWidth = 4;
			
			ctx.fillStyle ="LightYellow";
			ctx.fill();
			ctx.stroke();

			
		}
		this.isCollided = function(other){
			return (that.x-other.x)*(that.x-other.x)+(that.y-other.y)*(that.y-other.y)<=(that.r+other.r)*(that.r+other.r);
		}
	}
	for(var i = 0; i<N; i++){
		for(var j = 0; j<N; j++){
			var ball = new Ball(
				w/(2*N)+i*w/N, 
				h/(2*N)+j*h/N,
				Math.min(w,h)/(4*N),
				(Math.random()-0.5)*V,
				(Math.random()-0.5)*V
				
			);
			balls.push(ball);
			ball.draw(ctx);
		}
	}
	function draw(){
		ctx.clearRect(0,0,w,h);
		for(var i = 0; i < balls.length; i++){
			balls[i].draw(ctx);
    
		}
	}	
	var j = 1;
	function draw2()
	{
		if (j<100)
		{
		ctx.font = "small-caps 80px Colatemta"
	    ctx.fillStyle = "Teal"
	    ctx.fillText("HTML - это язык разметки!", 260, 0+30*j);
		ctx.font = "small-caps 80px Colatemta"
	    ctx.fillStyle = "Blue"
	    ctx.fillText("А JS - язык программирования!", 260+30*j, 250);
		
		}
		j = j+0.05;

		
	}
	function physics(){
		for(var i = 0; i < balls.length; i++){
			balls[i].x+=balls[i].vx*dt;
			balls[i].y+=balls[i].vy*dt;
			if (balls[i].x<balls[i].r || balls[i].x>w-balls[i].r){
				balls[i].vx *= -1;
				if (balls[i].x<balls[i].r)
					balls[i].x = balls[i].r;
				if (balls[i].x>w-balls[i].r)
					balls[i].x=w-balls[i].r;
			}
			if (balls[i].y<=balls[i].r || balls[i].y>=h-balls[i].r){
			balls[i].vy *= -1;
				if (balls[i].y<balls[i].r)
					balls[i].y = balls[i].r;
				if (balls[i].y>h-balls[i].r)
					balls[i].y=h-balls[i].r;
			}
		}
		for(var i = 0; i < balls.length; i++){
			for(var j = 0; j<i; j++){
				if (balls[i].isCollided(balls[j])){
					
					var tmp = balls[i].vx;
					balls[i].vx = balls[j].vx;
					balls[j].vx = tmp;
					
					
					var tmp = balls[i].vy;
					balls[i].vy = balls[j].vy;
					balls[j].vy = tmp;
					
				}
			}
		}
	}	
	function control(){
		physics();
		draw();
		draw2();
	}
	setInterval(control, 1000/60);	
}
