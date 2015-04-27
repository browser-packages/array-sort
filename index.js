function sort ( arr, fn ){
    if( arr.length <= 1 ) return arr;
    if( !fn ) var fn = function(){
        return Math.floor(( Math.random() * arr.length ) + 0 );
    }

    for( var i = 0; i < ( arr.length - 1 ); i++ ){
        var res = parseInt( fn( arr[ i ], arr[ i + 1 ] ) ),
            arrEntry = undefined;

        if( res && ( i + ( res ) ) >= 0 && ( i + ( res ) ) < arr.length && fn( arr[ i ], arr[ i + ( res ) ] ) ){
            arrEntry = arr[ i + ( res ) ];
            arr[ i + ( res ) ] = arr[ i ];
            arr[ i ] = arrEntry;
        }
    }
    return arr;
};

module.exports = sort;

sort.contexted = function ( fn ) {
    return sort( this, fn );
};

sort.prototify = function () {
    if ( Array.prototype.sort === sort.contexted ) {
        return false;
    }

    Array.prototype.nativeSort = Array.prototype.sort;
    Array.prototype.sort = sort.contexted;

    return true;
};
