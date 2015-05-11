function sort ( arr, fn ) {
    if( arr.length <= 1 ) {
        return arr;
    }

    fn =
        typeof fn === 'function' && fn ||
        function( a, b ){
            return a+'' < b+'';
        };

    for( var i = 0; i < arr.length; i++ ){
        for( var s = 0; s < ( arr.length - 1 ); s++ ){
            var fnRes = fn( arr[ s ], arr[ s + 1 ] ),
                res = typeof fnRes == 'boolean' && fnRes || parseInt( fn( arr[ s ], arr[ s + 1 ] ) ),
                arrEntry;

            if( res && res > 0 ){
                arrEntry = arr[ s + 1 ];
                arr[ s + 1 ] = arr[ s ];
                arr[ s ] = arrEntry;
            }
        }
    }

    return arr;
}

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
