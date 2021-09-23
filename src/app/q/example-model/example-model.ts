export interface MetalComponent{
    type: string,
    amount: number,
    description: ''
}

export enum MetalTypesPriority{
    'Gear' = 1,
    'Drill' = 2,
    'Mill' = 3
}