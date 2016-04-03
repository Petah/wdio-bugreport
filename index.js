console.log('test1');
describe('PicsOS', function() {
    console.log('test2');
    it('should render the home page', function* () {
        console.log('test3');
        yield browser.url('http://www.example.com/');
        console.log('test4');
    });
});