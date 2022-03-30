import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-update',
  templateUrl: './app-update.component.html',
  styleUrls: ['./app-update.component.css']
})
export class AppUpdateComponent implements OnInit {

  alert: boolean = false;
  editRestaurent = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurent = new FormGroup({
       
      })
      
    })
  }

}
