import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'tip-selector',
  templateUrl: './tip-selector.component.html',
  styleUrls: ['./tip-selector.component.css']
})
export class TipSelectorComponent implements OnInit {

  @Input() Category: number;
  @Input() TriggerClear: Observable<any>;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  
  @ViewChild('inField') Input: ElementRef;

  _OldValue: number = 0;
  _Value: number = 0;
  
  constructor() { }

  ngOnInit() 
  {
    this.TriggerClear.subscribe(() =>
    {
      //Clear
      this.Clear();
    });
  }

  private Clear()
  { 
    this.UpdateVal(null);
    let html = this.Input.nativeElement as HTMLInputElement;
    html.value = '';
  }

  UpdateVal(event: Event)
  { 
    let val = '';

    if (event != null)
    { 
      val = (event.target as HTMLInputElement).value;
    }  

    let parsed = Number.parseFloat(val);
    this._OldValue = this._Value;
    this._Value = parsed;

    if (val == '')
    {
      this._Value = 0;
    }  

    this.TriggerUpdate();
  }

  TriggerUpdate()
  { 
    if (this._Value != this._OldValue)
    { 
      if (this._Value > this._OldValue)
      {
        if (this._Value - this._OldValue == 1)
        {
          this.valueChange.emit(this.Category);
        } else if (this._Value - this._OldValue > 1)
        {
          this.valueChange.emit((this.Category * (this._Value - this._OldValue)));
        }
      } else
      { 
        if (this._OldValue - this._Value ==1)
        {
          this.valueChange.emit((this.Category * -1));
        }
        else
        {
          this.valueChange.emit(((this.Category * (this._OldValue - this._Value)) *-1));
        }  
      }  
      
    }  
  }
}
