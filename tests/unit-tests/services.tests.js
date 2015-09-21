describe('Friends service', function(){
    var Friends;

    beforeEach(module('starter.services'));

    beforeEach(inject(function (_Friends_) {
        Friends = _Friends_;
    }));

    it('can get an instance of my factory', inject(function(Friends) {
        expect(Friends).toBeDefined();
    }));

    it('has 3 friends', inject(function(Friends) {
        expect(Friends.all().length).toEqual(3);
    }));

    it('has Fulano de Tal as friend with id 0', inject(function(Friends) {
        var oneFriend = {
            id: 0,
            name: 'Fulano de Tal'
        };

        expect(Friends.get(0).name).toEqual(oneFriend.name);
    }));
});
