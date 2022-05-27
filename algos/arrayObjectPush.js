

const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
      { id: 112, type: "pickup" },
      { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
      {
        id: 123,
        type: "delivery",
        gateCode: "#2552",
      },
      {
        id: 153,
        type: "delivery",
        instructions: "Place in secure delivery box.",
      },
    ],
    openPickupOrders: [
      {
        id: 123,
        type: "pickup",
      },
    ],
    returnPickupOrders: [],
  };
  
  const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
  ];
  
  /**
   * Takes an object containing arrays of objects and places all the nested
   * objects into a new one-dim array.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} o Containing arrays of objects.
   * @returns {Object[]} An array of objects.
   */
  


  function flattenObjectOfArrays(object) {
    const result = [];

    for (value in object){
        for (let obj of object[value]){
            let tempObj = {};
            tempObj["id"] = obj["id"];
            tempObj["type"] = obj["type"];
            tempObj["instructions"] = obj["instructions"];
            tempObj["gatecode"] = obj["gatecode"];
            result.push(tempObj);
        }
    }

    return result;
}

console.log(flattenObjectOfArrays1(object1))

// function arrow function for react
const functionalFlattenObjectOfArrays1 = (o) =>{
    // Get an array of the object's values. Since they are arrays it will be 2d.
    return Object.values(o)
      // Reduce the nested arrays into a single array.
      .reduce((mergedArr, arrOfObjects) => mergedArr.concat(arrOfObjects), [])
      // Transform the data to the structure we want (not all keys are wanted).
      .map(({ id, type }) => ({
        id,
        type,
      }));

}
  
  /*****************************************************************************/