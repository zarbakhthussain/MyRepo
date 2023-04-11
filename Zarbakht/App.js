
// Assignment Q1.
    //     let abc = 7; 
    //     function print () {
    //     let  add = 7;
    //      console.log(abc + add)
    //     return function () {      
    //     console.log(add)
    // }}
    //     print()
     
    

// Q2.
//   let arr = [1,2,3,4]
// function searchArray(arr, size){
// if (size < 0) {
// return false}
// else if (arr[0] == val){
// return true}
// else {
//     return (searchArray(arr)
// }}
// console.log(searchArray(arr)



// Q3.
// let newPara = document.getElementById("newPara")
// newPara.innerText = "This is new paragraph"



// Q4.
// function mylist(abc){
//     let newItem = document.createElement("li");
//     let itemAbc = document.createTextNode(abc);
//     newItem.appendChild(itemAbc);
//     let list = document.querySelector("ul");
//     list.appendChild(newItem);
// }
// mylist("Amazing list in html element");



// Q5.
// function changeBgColor(element,color){
//     element.style.backgroundColor = color;}
//     let myElement = document.getElementById("myElement")
//     myElement.innerText = "This is background color"
//     changeBgColor(myElement,"#eeff00")
   

// Q6.
// function saveTolocalStorage(key,obj){
//     let objStr = JSON.stringify(obj);
//     localStorage.setItem(key, objStr);
// }
// let myObj = {
//     name : "abc", age : 25};{
//     saveTolocalStorage("myKey", myObj);
// }
//     console.log(myObj);



// Q7.
// function getFromLocalStorage(value) {
//  let objStr = localStorage.getItem(value);
//  let obj = JSON.parse(objStr);
//     return obj;
//   }
//  let myObj = getFromLocalStorage('myValue');
//  console.log(myObj);



//    Q8.
// function saveAndRetrieveObject(obj) {
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       localStorage.setItem(prop, obj[prop]);
//     }
//   }
 
//   let retrievedObj = {};
 
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     retrievedObj[key] = value;
//   }
//   return retrievedObj;
// }

// let myObj = { name: 'Zarbakht', age: 27 };
// let retrievedObj = saveAndRetrieveObject(myObj);
// console.log(retrievedObj);