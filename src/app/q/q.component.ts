import { Component, OnInit } from '@angular/core';
import { PriorityQ, QItem } from './structure/queue';

@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.css']
})
export class QComponent implements OnInit {

  public Q = new PriorityQ();

  constructor() { }

  ngOnInit(): void {
    this.Q.enqueue(new QItem('bir', 1), 1);
    this.Q.enqueue(new QItem('üç', 3), 3);
    this.Q.enqueue(new QItem('iki', 2), 2);
    this.Q.enqueue(new QItem('on', 10), 10);
    this.Q.enqueue(new QItem('sekiz', 8), 8);

    console.log(this.Q);
  }

}
