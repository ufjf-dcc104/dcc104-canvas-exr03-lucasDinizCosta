function Bird() {
  this.x = 100;
  this.y = 100;
  this.w = 30;
  this.h = 20;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.acel = 0;
  this.cor = "grey";
  this.vento = 0;
  this.pontos = 0;
  this.vidas = 3;
  this.energia = 100;
}

/*Bird.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.w, this.y + this.h/2);
  ctx.lineTo(this.x, this.y + this.h);

  ctx.lineTo(this.x, this.y);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}*/

Bird.prototype.desenhar = function (ctx) {
  //this.w = 32;
  //this.h = 32;

  //imageLibrary.drawClipAngle(ctx, "asteroides", this.sx, this.sy, this.w, this.h, this.x, this.y, this.ang);
  //imageLibrary.draw(ctx, "tijolo-laser", this.x, this.y);
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 2;
  ctx.fillRect(this.x, this.y,this.w,this.h);
  ctx.strokeRect(this.x, this.y,this.w,this.h);

  //console.log("TESTE");
  /*ctx.fillStyle = this.cor;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.w/2, this.y + this.h);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.lineTo(this.x, this.y);
  ctx.fill();
  ctx.stroke();
  //ctx.rotate(Math.PI);

  ctx.closePath();*/
}

Bird.prototype.mover = function (dt) {

    this.vx = this.vx + this.ax*dt;
    this.vy = this.vy + (G+this.ay)*dt;

    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;

}

Bird.prototype.impoeLimites = function(x, y, w, h){
  if(this.x < x){
    this.x = x;
    this.vx = 0;
  }
  if(this.x + this.w > x + w){
    this.x = x + w - this.w;
    this.vx = 0;
  }
  if(this.y < y){
    this.y = y ;//+ this.h;
    this.vy = 0;
  }
  if(this.y+this.h > y + h){
    this.y = y + h - this.h;
    this.vy = 0;
  }
};

Bird.prototype.colidiuCom = function (alvo) {
  if(alvo.x + alvo.w < this.x)  return false;
  if(alvo.x > this.x + this.w)  return false;
  if(alvo.y + alvo.h < this.y)  return false;
  if(alvo.y > this.y + this.h)  return false;
  return true;
};
