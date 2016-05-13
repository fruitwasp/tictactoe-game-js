const SQUARE_COUNT_X = 3;
const SQUARE_COUNT_Y = 3;
const PLAYER_COUNT = 2;

function TicTacToe()
{
  this.squares = [];
  this.players = [];
}

TicTacToe.prototype.clearSquares = function()
{
  this.squares.forEach(function( key, value )
  {
    value.clear();
  });
}

TicTacToe.prototype.turn = function( squareId, symbol )
{
  this.squares[ squareId ].place( symbol );
}

TicTacToe.prototype.build = function()
{
  for ( var i = 0; i < PLAYER_COUNT; i++ )
  {
    this.players.push(new Player());
  }

  for ( var y = 0; y < SQUARE_COUNT_Y; y++ )
  {
    this.squares[ y ] = [];

    for ( var x = 0; x < SQUARE_COUNT_X; x++ )
    {
      this.squares[ y ][ x ] = new Square();
    }
  }
}
