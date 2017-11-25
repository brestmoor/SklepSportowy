import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  data: UserInput = {name: "", address:""};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(this.data.name + ' ' + this.data.address)
    console.log(this.data)
  }


}

class UserInput{
  constructor(public name: string, public address: string) {}
}
