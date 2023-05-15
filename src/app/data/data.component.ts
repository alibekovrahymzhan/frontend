import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  name = "test name";
  disabled = false;
  visibled = false;

  constructor() {
  }


  ngOnInit(): void {

  }

  changeName(): void {
    this.name ="change name";
  }

  changeDisable() {
   this.disabled = !this.disabled;
   this.changeVisible();
  }

  changeVisible() {
    this.visibled = !this.visibled;
  }
}



