export interface MetalComponent{
    type: string,
    amount: number,
    description: string
}

export enum MetalTypesPriority{
    Gear = 'Gear',
    Drill = 'Drill',
    Mill = 'Mill'
}

export interface PrioritySelection{
    type:string
}

export let prioritize = (type:string) => {
    if(type === MetalTypesPriority.Gear){
        return 1;
    }else if(type === MetalTypesPriority.Drill){
        return 2;
    }else if(type === MetalTypesPriority.Mill){
        return 3;
    }else{
        return 4;
    }
}