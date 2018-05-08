import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../_Services/ui.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Categories: number[] = [1,5,10,20,50,100];
  Total: number = 0;

  _ClearEmitter: Subject<any> = new Subject<any>();
  ClearObservable: Observable<any>;

  constructor(public UI: UIService)
  {
    this.ClearObservable = this._ClearEmitter.asObservable();
  }

  ngOnInit() {
  }

  Clear()
  { 
    var result = confirm("Are you sure you want to clear all the fields?");
    if (result)
    { 
      this._ClearEmitter.next();
    }  
  }

  UpdateTotal(value: number)
  { 
    console.log(value);
    this.Total += value;
  }

}
