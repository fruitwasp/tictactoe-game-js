function Square()
{
  this.x = x;
  this.y = y;
  this.player = null;
}

Square.prototype.place = function( player )
{
  this.player = player;
  this.html.attr( 'src', player.getShapeImage() );
}

Square.prototype.clear = function()
{
  this.player = null;
  this.html.attr( 'src', null );
}
