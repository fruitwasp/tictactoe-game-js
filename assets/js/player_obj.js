const SHAPE_IMAGES =
{
  'x': 'assets/img/cross.png',
  'o': 'assets/img/circle.png',
}

function Player(name)
{
  this.name = name;
}

Player.prototype.getShape = function()
{
  return this.shape;
}

Player.prototype.getShapeImage = function()
{
  return SHAPE_IMAGES[ this.shape ];
}
