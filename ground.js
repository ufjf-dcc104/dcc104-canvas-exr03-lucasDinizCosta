function Ground() {
  this.sprite = new Sprite();
  this.sprite.x = 168;
  this.sprite.y = 56;
  this.sprite.w = 20;
  this.sprite.h = 56;

  //imagem status
  this.sprite.wImagem = 168;
  this.sprite.hImagem = 56;
  this.sprite.sx = 292;
  this.sprite.sy = 0;
}

Ground.prototype.desenhar = function(ctx){
  this.sprite.desenharChao(ctx);
}
