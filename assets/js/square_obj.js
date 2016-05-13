var symbols =
{
  'x': 'assets/img/cross.png',
  'o': 'assets/img/circle.png',
}

function Square()
{
  this.x = x;
  this.y = y;
  this.symbol = '';
}

Square.prototype.place = function(symbol)
{
  this.symbol = symbol;
  this.html.attr('src', symbols[symbol]);
}

Square.prototype.clear = function()
{
  this.symbol = null;
  //this.html.attr('src', null);
}
