import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-app-add',
  templateUrl: './app-add.component.html',
  styleUrls: ['./app-add.component.css']
})
export class AppAddComponent implements OnInit {
  addRestaurent= new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createResto(){
    //console.log(this.addRestaurent.value);
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      console.log("Get Data From Service", result)
    })
  }

}
