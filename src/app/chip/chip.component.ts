import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() chip: any;
  @Output() click: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void { }
  removeItem(event: any): void {
    this.click.emit(event.target.parentElement.id);
  }
}
