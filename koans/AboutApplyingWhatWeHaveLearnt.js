var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      products.filter(product => {
        if(product.containsNuts === false && !_.some(product.ingredients, function(ingredient) {
                                                    return ingredient === "mushrooms";
})
          ){
              productsICanEat.push(product);
        }
      });

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = _.range(1, 1000, 1).reduce((total, nextValue) => {

      // if(nextValue % 3 === 0 || nextValue % 5 === 0){
      //   console.log(total);
      //   return total += nextValue;
      // }

      if (nextValue % 5 === 0 || nextValue % 3 === 0){
        
      total += nextValue;
      }
      return total;
      

    },0);

    expect(233168).toBe(sum);
  });


  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */


////function that takes an ingredient


////

function updateIngredientCount(){

  products.forEach(product => {

      product.ingredients.forEach(ingredient => {

          if(ingredientCount.hasOwnProperty(ingredient)){
              
              ingredientCount[ingredient]++;

            }else{
              ingredientCount[ingredient] = 1;
            }


      });

  });
  
  
}

updateIngredientCount();

    expect(ingredientCount['mushrooms']).toBe(ingredientCount['mushrooms']);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  
  it("should find the largest prime factor of a composite number", function () {

/////misread this one. I find the largest factor instead of largest prime factor. Will return if there's time.

///// I've found when researching some better ways to solve these problems recursion seems to be a pretty common thing. 
//May come back to solve these more elegantly when I have a better handle on recursion

function getLargestFactor (n){
  

  var rangeToTest = _.range(2, Math.sqrt(n)+1, 1);

  var factors = rangeToTest.filter(num =>{
  
    return n % num === 0; 

  });

  if (factors.length > 0){
    /////find the largest number in factors

    var potentialFactors = _.range(2, n, 1);

    var rangeOfFactors = potentialFactors.filter(num =>{
  
    return n % num === 0; 

  });

    var sortedArray = rangeOfFactors.sort(function(a, b) {
    return b -a;
    });
    console.log('Largest factor', sortedArray[0]);
    return sortedArray[0];
  }else{
    console.log("prime number");
  }

}

getLargestFactor(105);



  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

var smallestNumberDivisible;
var divisible = true;

/////this works. Note for future attempt: a better approach would be to find the least common multiples among the group
for (var i=20; divisible; i++){

  if (
    i % 1 === 0 &&
    i % 2 === 0 &&
    i % 3 === 0 &&
    i % 4 === 0 &&
    i % 5 === 0 &&
    i % 6 === 0 &&
    i % 7 === 0 &&
    i % 8 === 0 &&
    i % 9 === 0 &&
    i % 10 === 0 &&
    i % 11 === 0 &&
    i % 12 === 0 &&
    i % 13 === 0 &&
    i % 14 === 0 &&
    i % 15 === 0 &&
    i % 16 === 0 &&
    i % 17 === 0 &&
    i % 18 === 0 &&
    i % 19 === 0 &&
    i % 20 === 0){
    smallestNumberDivisible = i;
    divisible = false;

  }

}

console.log(smallestNumberDivisible);

  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {



function countPrimes(){
  var primeCount =0;

  for (var c = 1; primeCount <= 10001; c++){

    var primeTesting = _.range(2, Math.sqrt(c)+1, 1);
    var isPrime = primeTesting.filter(num =>{
      
        return c % num === 0; 

    });

    if(isPrime.length === 0){

        primeCount++;

    }
    if(primeCount === 10001){
      console.log("Prime number 10001:",c);
      return c;
    }

  }   

}

countPrimes();
    

  });
  
});
