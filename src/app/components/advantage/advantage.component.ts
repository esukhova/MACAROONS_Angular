import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.css']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() index: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      text: ''
    }
  }

  ngOnInit(): void {
  }

}
