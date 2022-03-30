import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
public collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
     this.collection= result;
     console.log(this.collection)
    });
  }

}
