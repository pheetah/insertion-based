import { prioritize, PrioritySelection } from "../example-model/example-model";

export function insertionSort<T extends PrioritySelection, K extends T>(array:Array<K>){
    var currentValue:K;
    for(var i = 0; i < array.length; i++){
        currentValue = array[i];
        for(var j = i - 1; j >= 0 && (prioritize(array[j].type) > prioritize(currentValue.type)) ; j--){
                array[j+1] = array[j];
        }
        array[j+1] = currentValue;
    }

    return array;
}

export function insertionSortBasic<K extends number>(arr:Array<K>){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// let metal:MetalComponent = {
//     type: 'Gear',
//     amount: 6,
//     description: 'a metal gear'
// }

// let metals = [];

// metals.push(metal);

// console.log(insertionSort<MetalComponent>(metals));