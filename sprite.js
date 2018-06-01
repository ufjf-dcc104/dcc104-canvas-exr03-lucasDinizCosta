function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 15;
  this.colorBG = "grey";
  this.colorBorder = "yellow";
  this.borderSize = 1;

  //imagem status
  this.wImagem = 0;
  this.hImagem = 0;
  this.sx = 0;
  this.sy = 0;
}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.colorBG;
  ctx.strokeStyle = this.colorBorder;
  ctx.lineWidth = this.borderSize;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  ctx.strokeRect(this.x, this.y, this.w, this.h);
}

Sprite.prototype.desenharChao = function (ctx) {
  imageLibrary.drawClipSize(ctx, "spriteSheet", this.sx, this.sy, this.wImagem, this.hImagem, this.x, this.y, this.w, this.h);    //chão
}

Sprite.prototype.colidiuCom = function (alvo) {
  if(alvo.x+alvo.w < this.x) return false;
  if(alvo.x > this.x+this.w) return false;
  if(alvo.y+alvo.h < this.y) return false;
  if(alvo.y > this.y+this.h) return false;
  return true;
};
