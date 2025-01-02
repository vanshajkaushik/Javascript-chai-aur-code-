const homefood = ["daal","roti","sabji","salad"]
const streetfood = ["momos","chowmein","chaap","burger"]

//homefood.push(streetfood)
console.log(homefood); //this makes an array inside another array (it takes the streetfood array as an complete object)
//console.log(homefood[4][1]);//so to access the array inside the existing array we use the 2-d array concept

const allfood = homefood.concat(streetfood)
console.log(allfood);

// There are different other types of operators that can be found once going in the prototype feature of the chrome 
