// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.

 var details={
    firstName: "Mukesh",
    lastName: "Ambani",
    age:67
};

details.city="New York";
console.log(details);




// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.


var product={
    name:"lap top",
    price:"50000",
    instock:"true",
};

product.price="40000",
delete product.instock
console.log(product);


// Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.

// Delete the mystery genre from the object.


var library={
    fantasy:{
        books:["a game of thrones",
                "The Hobbit"]
    },

    mystery:{
        books:["This Girl's a Killer",
               "Where They Last Saw Her"]
    },

    motivational:{
        books:["Believe In Yourself",
               "You Can"]
    }
};

library.sciencefiction={
    books: ["Time Machine",
     "Dune"]
};

delete library.mystery;

console.log(library.fantasy.books[0]);
console.log(library);




// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

var user={
    username:"Ambika",
    email:"hello@gmail.com",
    address:{
        city:["Hyderabad"],
        state:["Telangana"],
        zip:["500055"]
    }
};
Object.freeze(user);

user.email="new_email@example.com";

 
console.log(Object.isFrozen(user));


user.phone="1234567890"

console.log(user);







// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.seal().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

 var car ={
    make: "aaa",
    model:"bbbb",
    price:"10000000"

}

Object.seal(car)

delete car.make;

console.log( Object.isSealed(car))
  
car.price ="2000000"

console.log(Object.isExtensible(car));

console.log(car);




// Question 6:

 const store = {
   name: "SuperMart",
  products: {
    electronics: {
      phones: {
        apple: {
          iPhoneX: { price: 999, stock: 20 },
          iPhone12: { price: 1099, stock: 15 },
        },
        samsung: {
          galaxyS21: { price: 799, stock: 25 },
          galaxyNote20: { price: 999, stock: 10 },
        },
      },
      laptops: {
        dell: {
          XPS13: { price: 1200, stock: 10 },
          Inspiron15: { price: 800, stock: 30 },
        },
        hp: {
          SpectreX360: { price: 1300, stock: 5 },
          Pavilion15: { price: 750, stock: 20 },
        },
      },
    },
    groceries: {
      fruits: {
        apples: { price: 2, stock: 100 },
        bananas: { price: 1, stock: 150 },
      },
      vegetables: {
        carrots: { price: 1.5, stock: 200 },
        spinach: { price: 1, stock: 100 },
      },
    },
  },
};
console.log(store.products.groceries.vegetables.spinach.stock);
console.log(store.products.electronics.laptops.hp.Pavilion15.price);


// Console.log the spinach stock and console .log the hp Pavilion15 price



