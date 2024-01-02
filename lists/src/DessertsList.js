function dessertList( props ) {
    const lowCaloriesdessert=props.data
        .filter( ( dessert ) => {
            return dessert.calories<500;
        } )
        .sort( ( x, y ) => {
            return x.calories-y.calories
        }
        )
        .map( ( dessert ) => {
            return <li>{dessert.name} - {dessert.calories} cal</li>
        } );
    return <ul>{lowCaloriesdessert}</ul>;
}


export default dessertList;