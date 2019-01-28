var member = {
    firstName:"Mario",
    lastName: "Bro",
    occupation: "Adventurer",
    pets: [
        {
            name: "Toad",
            animal: "cat",
            breed: "Domestic shorthair",
            pedigree: true,              
            birthday: "1/1/2017",
            favoriteFoods: [
                {
                    brand: "Iams",
                    name: "Organic Steering Control",
                    count: 3
                }
            ]
        }
    ]
}

// Add properties to one of the objects
member.badges = 2;
member.addresses = [{}];

// Add items to one of the arrays
member.addresses[0].line1 = "56 Rainbow Road";
member.addresses[0].line2 = "";
member.addresses[0].city = "Marioville";
member.addresses[0].state = "CA";
member.addresses[0].zip = 91364;
member.addresses[0].country = "USA";

console.log(member);