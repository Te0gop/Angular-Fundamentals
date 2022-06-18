import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {

  @Input() inputValue = 'Default value'; 
  @Output() btnClick = new EventEmitter();

  constructor() { }

  inputKeyupHandler(event: KeyboardEvent) : void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement) : void {
    console.log('btn was clicked!', value);
    this.btnClick.emit({ value });

    this.btnClick.emit({ inputEl })
  }



}
