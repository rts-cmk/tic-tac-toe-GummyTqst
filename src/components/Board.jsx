import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
    return ( 
        <div className="board">
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} className="board__tile board__tile--right-border board__tile--bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={tiles[1]} className="board__tile board__tile--right-border board__tile--bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)} value={tiles[2]} className="board__tile board__tile--bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={tiles[3]} className="board__tile board__tile--right-border board__tile--bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)} value={tiles[4]} className="board__tile board__tile--right-border board__tile--bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)} value={tiles[5]} className="board__tile board__tile--bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)} value={tiles[6]} className="board__tile board__tile--right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)} value={tiles[7]} className="board__tile board__tile--right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tiles[8]} className="board__tile" />
            <Strike strikeClass={`board__strike ${strikeClass}`} />
        </div>
    );
}

export default Board;