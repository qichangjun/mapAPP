import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  private gridOptions: GridOptions;
  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions = {
      suppressRowClickSelection: true,
      suppressCellSelection: true,
      rowSelection: 'multiple',
      enableColResize: true,
      showToolPanel : true,
      enableServerSideSorting : true,      
      columnDefs : [
        {
          headerCheckboxSelection: true,
          checkboxSelection:true,
          suppressSizeToFit : true,
          suppressResize : true
        },      
        {
            headerName: "ID",
            field: "id",
            minWidth: 200, 
            menuTabs:['filterMenuTab','generalMenuTab','columnsMenuTab'],
        },
        {
            headerName: "Value",
            field: "value",          
            minWidth: 200,
        },
      ],
      rowData : [
        {id: 5, value: 10},
        {id: 10, value: 15},
        {id: 15, value: 20}
      ],
      overlayLoadingTemplate: '<span class="ag-overlay-loading-center">正在加载数据中...</span>',
      overlayNoRowsTemplate: '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">没有数据</span>',
      onGridReady : ()=>{
        this.gridOptions.api.sizeColumnsToFit();
        let columnState = localStorage.getItem('aa')
        if (!columnState) {return}
        columnState = JSON.parse(columnState);                
        this.gridOptions.columnApi.setColumnState(columnState)
      },
      onColumnResized:(e)=>{
        let columnState = JSON.stringify(this.gridOptions.columnApi.getColumnState());        
        window.localStorage.setItem('aa',columnState)
      },
      onDragStopped:(e)=>{
        let columnState = JSON.stringify(this.gridOptions.columnApi.getColumnState());
        window.localStorage.setItem('aa',columnState)
      }, 
      onSortChanged:(e)=>{        
        console.log(this.gridOptions.api.getSortModel())
      },
      onRowClicked: (event)=>{
        if(event.node.isSelected()){
          event.node.setSelected(false, false);
        } else {
          event.node.setSelected(true);
        }
      }
    }   
   }

  ngOnInit() {
  }

  toggleColumn(item,index){      
    let rows = this.gridOptions.columnApi.getColumnState()
    rows.forEach((row)=>{
      if (row.colId == item.field){
        item.hide = row.hide
      }
    })
    item.hide = !item.hide
    this.gridOptions.columnApi.setColumnVisible(item.field, !item.hide);    
    let columnState = JSON.stringify(this.gridOptions.columnApi.getColumnState());
    window.localStorage.setItem('aa',columnState)    
  }
}
