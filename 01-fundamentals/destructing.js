// const person = {     //object
//         firstName: 'Bob', 
//         lastName: 'Marley', 
//         email: 'bob@marley.com', 
//         password: 'sekureP@ssw0rd9', 
//         username: 'barley', 
//         createdAt: 1543945177623
//     };
 

//     let bobsfirstname = person.lastName;


//     console.log(person.lastName);
//     console.log(bobsfirstname);
//     console.log(animals)
    

//     let {firstName:bobsfirstname, lastName:bobslastname, email:bobsemail} = person;

//     console.log(firstName, lastName, email);   c
    
    // const animals = ['horse', 'dog', 'fish', 'cat', 'bird']; //array

    // let [,secondAnimal,thridAnimal, , lastAnimal] = animals;

    // console.log(secondAnimal, thridAnimal, lastAnimal);



    const person = {
        firstName: 'Bob',
        lastName: 'Marley',
        email: 'bob@marley.com',
        password: 'sekureP@ssw0rd9',
        username: 'barley',
        addresses: [
          {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
          },
          {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
          }
        ],
        createdAt: 1543945177623
      };

      // const { addresses: [{city, zipcode}, {zipcode:zip2}] } = person;

      // console.log(city);

      // console.log(zip2);

      let {...allofthem } = person;

      console.log(allofthem);
