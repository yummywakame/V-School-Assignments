var shopper = {
    firstName: "Olivia",
    lastName: "Meiring",
    shopperID: 2100198,
    isMember: false,
    fullname: function() {
        return(this.firstName + " " + this.lastName + "!");
    },
    groceryCart: ["apples", "oranges", "bananas", "eggs"]
 }
 
 console.log("Hello " + shopper.fullname());
 if (shopper.isMember) {
    console.log("Thank you for being a member.")
 }
 console.log("Your grocery cart contains:")
 console.log(shopper.groceryCart);
 