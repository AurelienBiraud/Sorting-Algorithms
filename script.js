
let arr = [5, 2, 19, 11, 17, 4, 6, 1, 3, 7];
selectionSort(arr);
console.log(arr);

function selectionSort(arr){
  for(i = 0; i < arr.length; i++){
    var min = i;
    for(var j = i + 1;j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(i !== min){
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}



let count = 0;
function binarySearch(search, min, max){
  count++;
  console.log(count);
  let middle = (min + max)/2;
  console.log(middle);
  if(middle == search){
      return middle;
  }else{
    if(middle < search){
      binarySearch(search, middle, max);
    }
    if(middle > search){
      binarySearch(search, min, middle);
    }
  }
}
binarySearch(5, 8, 9 ,0 ,10000000);



let arr = [5, 2, 19, 11, 17, 4, 6, 1, 3, 7];
bubbleSort(arr);
console.log(arr);

function bubbleSort(arr){
  let length = arr.length;
  for(i = 0; i < length; i++){
    for(j = 0; j < length; j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}






function mergeSort(arr, half = arr.length/2){
  if (arr.length < 2){
    return arr
  }
  let left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}
function merge(left,right){
  let arr = [];
  while(left.length && right.length){
    if(left[0] < right [0]){
      arr.push(left.shift())
    }else{
      arr.push(right.shift())
    }
  }
  return [...arr,...left,...right];
}

console.log(mergeSort([5, 2, 19, 11, 17, 4, 6, 1, 3, 7]));
