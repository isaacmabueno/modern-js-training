let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (a) {
        let b = this.guestCapacity - this.guestCount;
        return a <= b        
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}


// try to seat a party of 72
restaurant.seatParty(72)
// this should fail
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
// after removing the 5, i should now have room for these 5
console.log(restaurant.checkAvailability(4))