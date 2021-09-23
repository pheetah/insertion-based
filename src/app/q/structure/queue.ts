export class QItem<T>{
    public val:T;
    public priority:number;

    constructor(val:T, priority:number){
        this.val = val;
        this.priority = priority;
    }
}

export class PriorityQ<K> {
    private values:Array<QItem<K>>;

    constructor(){
        this.values = [];
    }

    public enqueue(val:K, priority:number){
        let newNode = new QItem<K>(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    private bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    public dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            if(end !== undefined) this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    private sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && leftChild && rightChild.priority < leftChild.priority)
                ){
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    public getSize(){
        return this.values.length;
    }

}