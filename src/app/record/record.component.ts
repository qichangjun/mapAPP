import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'record-detail',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent implements OnInit {
  fileInforList=[
    {id:1,number:'D-2018-0001',title:'江干区秋涛路191号仓库工程审批文件',year:2011},
    {id:2,number:'D-2018-0002',title:'江干区秋涛路192号仓库工程审批文件',year:2012},
    {id:3,number:'D-2018-0003',title:'江干区秋涛路193号仓库工程审批文件',year:2013},
    {id:4,number:'D-2018-0004',title:'江干区秋涛路194号仓库工程审批文件',year:2014},
    {id:5,number:'D-2018-0005',title:'江干区秋涛路195号仓库工程审批文件',year:2015},
    {id:6,number:'D-2018-0006',title:'江干区秋涛路196号仓库工程审批文件',year:2016},
  ]
 
  constructor() { }

  ngOnInit() {
  
  }

}
