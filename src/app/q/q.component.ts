import { Component, OnInit } from '@angular/core';
import { MetalComponent } from './example-model/example-model';
import { insertionSort, insertionSortBasic } from './sort/insertion_sort';
import { PriorityQ } from './structure/queue';

@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.css']
})
export class QComponent implements OnInit {

  public Q = new PriorityQ<MetalComponent>();

  metal1:MetalComponent = {
    type: 'Drill',
    amount: 1,
    description: 'a metal drill'
  }

  metal1a:MetalComponent = {
    type: 'Drill',
    amount: 5,
    description: 'a metal drill with defect'
  }

  metal2:MetalComponent = {
    type: 'Mill',
    amount: 2,
    description: 'a metal mill'
  }

  metal2a:MetalComponent = {
    type: 'Mill',
    amount: 5,
    description: 'a metal mill with defect'
  }

  metal3:MetalComponent = {
    type: 'Gear',
    amount: 6,
    description: 'a metal gear'
  }

  metal3a:MetalComponent = {
    type: 'Gear',
    amount: 10,
    description: 'a metal gear with defect'
  }

  constructor() { }

  operationQ(){
    this.Q.enqueue(this.metal3, 3);
    this.Q.enqueue(this.metal1, 1);
    this.Q.enqueue(this.metal2, 2);
    this.Q.enqueue(this.metal1, 1);
    this.Q.enqueue(this.metal3, 3);
    this.Q.enqueue(this.metal3, 3);
    this.Q.enqueue(this.metal2, 2);
    this.Q.enqueue(this.metal2, 2);
    this.Q.enqueue(this.metal2, 2);
    this.Q.enqueue(this.metal3, 3);
    this.Q.enqueue(this.metal1, 1);
    this.Q.enqueue(this.metal1, 1);

    // console.log(this.Q.getSize());
    // console.log(this.Q);

    for(let i = 0; i < this.Q.getSize(); i++){
      // console.log(this.Q.dequeue());
      i -= 1;
    }
  }

  operationSort(){
    let metals:Array<MetalComponent> = [];

    metals.push(
      this.metal1, 
      this.metal2,
      this.metal3,
      this.metal2,
      this.metal2a,
      this.metal1,
      this.metal2,
      this.metal3,
      this.metal2,
      this.metal1a,
      this.metal1a,
      this.metal2a,
      this.metal3a,
      this.metal2a,
      this.metal1a
    )

    // metals.push(
    //   this.metal2,
    //   this.metal3,
    // )

    console.log(insertionSort<MetalComponent>(metals));
  }

  operationSort2(){
    let metals:Array<number> = [];

    metals.push(
      1, 
      2,
      3,
      2,
      1,
      2,
      3,
      2,
      1,
      2,
      1,
      2,
      3,
      2,
      1
    )

    // metals.push(
    //   3,
    //   2
    // )
    console.log(insertionSortBasic<number>(metals));
  }


  ngOnInit(): void {
    //this.operationQ();
    this.operationSort();
  }

}
