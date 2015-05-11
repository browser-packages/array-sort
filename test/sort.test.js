var sort = require( '../' ),
    chai = require( 'chai' ),
    expect = chai.expect;

describe( 'sort', function() {

    function test( title, fn, input, output ) {
        it( title, function () {
            var res = sort( input, fn );
            expect( res ).to.have.length( output.length );
            expect( res ).to.deep.equal( output );
        });
    }

    test(
        'should return numbers on array in order',
        function(a,b){
            return a>b;
        },
        [6,5,4,3,2,1],
        [1,2,3,4,5,6]
    );

    test(
        'should return numbers on array in order',
        undefined,
        ['Hugo','Ana','Julio','Joaquim','Raptor','Miguel'],
        ['Raptor','Miguel','Julio','Joaquim','Hugo','Ana']
    );

});
