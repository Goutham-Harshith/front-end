import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id: number;
  name: string = "";
  address: string = "";
  flag = false;

  ngOnInit() {
    this.flag = false;
  }
  constructor(private service: ServiceService) {

  }

  makeRequest() {
    console.log("2nd request is made");
    this.service.secondRequest().subscribe((response: any) => {
      console.log("inside sub")
      this.flag = true;
      this.id = response.id;
      this.name = response.name;
      this.address = response.address;
      console.log(name);
    }, error => {
      console.log("something went wrong", error);
    });
  }
}
