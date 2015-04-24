module.exports = function(){

    name: 'bp-array-sort',
    author: 'Gabriel Conceição < gabriel_7340@hotmail.com >',

    sort = function( arr, fn ){
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
}
