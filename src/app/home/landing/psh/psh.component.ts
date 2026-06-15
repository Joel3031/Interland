import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psh',
  templateUrl: './psh.component.html',
  styleUrls: ['./psh.component.css']
})
export class PshComponent implements OnInit {
  box: string = 'box1';

  constructor() {}

  ngOnInit(): void {}
}
