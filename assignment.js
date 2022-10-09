console.log("Assignment 08");
//=> Program # 1: Write a ts program to read and print elements of array.
// var a:string[] = ["Muneeb", "Ali", "Imran"]
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);   
// }
//=> Program # 2: Write a ts program to print all negative elements in an array.
// var myArr:any[] = [4, -5, 0, 2, -67, 8, 10, -34 ];
// function getNegativeNumbers(array:any) {
//     var negatives:any = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negatives.push(array[i]);
//         }
//     }
//     return negatives;
// }
// console.log(getNegativeNumbers(myArr));
//=>Program # 3: Write a ts program to find sum of all array elements
// function sumArray(array:number[]):any{
//     var ourArray:number[] = [1, 4, 0, 9, -3];
//     var sum = 0;
//     for (let i = 0; i < ourArray.length; i += 1) {
//       sum += ourArray[i];
//     }
//     return sum;
//   }
// console.log(sumArray([1, 4, 0, 9, -3]));
//=>Program # 4: Write a ts program to find maximum and minimum element in an array.
// var myArray:any [] = [20, 23, 27];
// var minElement = myArray.reduce((a, b) => {
//     return Math.min(a, b);
// });
// console.log("Minimum Value:",minElement);
// var maxElement= myArray.reduce((a, b)=>{
// return Math.max(a, b)
// })
// console.log("Maximum Value:",maxElement);
//=>Program # 5:  Write a ts program to find second largest element in an array.
// function findSecondLargestElem(arr:any){
//     var first:any = -1 
//     var  second:any = -1;
//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         }
//         else if( arr[i] > second && arr[i] != first){
//             second = arr[i];
//         }
//     }
//     console.log(second);
// }
// var arr = [12, 35, 1, 10, 34, 1]
// findSecondLargestElem(arr);
//=>Program # 6: Write a ts program to count total number of even and odd elements in an array.
// function CountingEvenOdd(arr:any, arrSize:any)
// {
// 	var evenCount:any = 0;
// 	var oddCount:any = 0;
// 	for (let i = 0; i < arrSize; i++) {
// 		if (arr[i] %2 == 0)
// 			oddCount++;
// 		else
// 			evenCount++;
// 	}
//     console.log("Number of even elements = ",evenCount,  " and Number of odd elements = ",oddCount);
// }
// 	var arr = [ 2, 3, 4, 5, 6 ];
// 	var n:any = arr.length;
// 	CountingEvenOdd(arr, n);
//=>Program # 7: Write a ts program to count total number of negative elements in an array.
// var myArray:number[] = [4, -5, 0, 2, -67, 8, 10, -34 ];
// function getNegativeNumbers(array:any) {
//     var negatives:any = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negatives.push(array[i]);
//         }
//     }
//     return negatives.length;
// }
// console.log(getNegativeNumbers(myArray),"Negative Elements in array");
// =>Program # 8: Write a ts program to copy all elements from an array to another array.
// var a:string[] = ["birds" , "Parrot"]
// var b:any = a.slice()
// console.log(b);
//=>Program # 9: Write a ts program to insert an element in an array.
// function insertElement() {
//     let array = [6,9,3,2];
//     array.splice(4, 0, 8);
//     console.log(array);
// }
// insertElement()
//=>Program # 10:  Write a ts program to delete an element from an array at specified position.
// var arr:string[] = ["Apple", "Mango", "Grapes", "Guava", "Banana"]
// var b:any = arr.pop()
// console.log("Remove element:", b);
// console.log("Remaining Elemnts:",arr);
// =>Program # 12:Write a ts program to print all unique elements in the array.
//  function getUniqueArray(array:any){
//     var newArray:any = array.filter((element:any, index:any, array:any) => array.indexOf(element) === index);
//     return newArray
//   }
//   var myArray:any = ["Hello", "This", "Is","Language","This", "Is" ];
//   console.log("Print all unique elements", getUniqueArray(myArray));
// => Program # 13:Write a ts program to count total number of duplicate elements in an array.
var counts = {};
var sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts);
//=> Program # 14: Write a ts program to delete all duplicate elements from an array.
// var newArr:string[] = ["Mango", "Grapes", "Orange", "Apple", "Mango", "Banana", "Apple"]
// function deleteDuplicateWords(data:any) {
//   return data.filter((value:any, index:any)=>data.indexOf(value) === index)
// }
// console.log(deleteDuplicateWords(newArr));
//=> Program # 15: Write a ts program to merge two array to third array.
// var a:string[] = ["Pakistan"]
// var b:string[] = ["Zindabad"]
// var C:any = a.concat(b)
// console.log(C);
//=> Program # 16: Write a ts program to find reverse of an array.
// var a:string[] = ["Hello", "Hi", "Ok"]
// var b:any = a.reverse()
// console.log(b);
//=> Program # 17: Write a ts program to put even and odd elements of array in two separate array.
// var seperateArr:number[] = [1, 2, 3, 4, 6, 8]
// function seperateArray(array:any):any{
// var even:any = array.filter(num => num%2===0)
// var odd:any = array.filter(num => num%2 !=0)
// return {odd:odd, even:even}
// }
// console.log(seperateArray(seperateArr));
//=>Program # 18:  Write a ts program to search an element in an array.
// var a:any[] = [1, 32, 45, 13]
// var elem:any = 32
// function findElem(elem:any) {
//   for (let i = 0; i < a.length; i++) {
//     if(a[i]===elem){
//       return "Search Found"
//     }
//   }
//   return "search not found"
// }
// console.log(findElem(elem));
//=> Program # 19: Write a ts program to sort array elements in ascending or descending order.
// var arr1:number[] = [21, 2100, 2, 35000];
// var arr2:number[] = [21, 2100, 2, 35000];
// var ascN:any = arr1.sort((f, s) => f - s);
// var dscN:any = arr2.sort((f, s) => s - f);
// console.log("Ascending:",ascN);
// console.log("Descending:",dscN);
//=>Program # 20:Write a ts program to sort even and odd elements of array separately.
// var a:any[] = [2, 5, 7, 8, 9, 12]
// function seperateArray(array:any):any{
//  var even:any = array.filter(num => num%2===0)
//  var odd:any = array.filter(num => num%2 !=0)
//  return {odd:odd, even:even}
// }
// console.log(seperateArray(a));
