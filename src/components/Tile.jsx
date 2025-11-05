function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null
    if(value === null && playerTurn != null) {
        hoverClass = `board__tile--${playerTurn.toLowerCase()}-hover`
    }

    return ( 
        <div onClick={onClick} className={`board__tile ${className} ${hoverClass}`}>
            {value}
        </div>
     );
}

export default Tile;