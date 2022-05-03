// let groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// let groceryList = groceries.map( item => `<li>${item}</li>` );

// console.log(groceries)
// console.log(groceryList)

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );

// console.log(values);
// console.log(cubes);


// const values = [1, 2, 3, 4, 5];
// const evens = values.filter( val => val % 2 !== 0 );

// console.log(evens);

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const oFoods = groceries.filter( item => item.includes("y") );

// console.log(oFoods);


// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
        return { 
            firstName: 'John',
            lastName: 'Wick',
            middleName: 'candle'
        }
    }
    /**
      * The example below wouldn't work because the 
      * brackets are interpreted as opening the body of the 
      * function rather than brackets to create an object literal 
      */
    // const returnObj = () => { firstName: 'John', lastName: 'Wick' }
    // console.log(returnObj)
    // surrounding the implicit return with parenthesis solves the problem
    const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick', middleName: 'meow'});
    console.log(returnObjFixed());
    
