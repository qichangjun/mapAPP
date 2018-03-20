import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Options as breadcrumbOption }  from '@shareComponent/breadcrumb';
import { Options as zTreeOption } from '@shareComponent/z-tree'
import { BreadcrumbService } from '../share/component/breadcrumb/breadcrumb.service';
@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  providers: [BreadcrumbService]
})
export class NotFoundComponent implements OnInit,AfterViewInit {
  @ViewChild('breadCrumb') breadCrumb:any;
  queryParamsSubscription : any;
  ids : Array<any>;
  breadCrumbOptions : breadcrumbOption = {
    keyId : 'r_object_id',
    requestId : 'ids',
    keyTitle : 'object_name',
    url:'http://kmdoc.wison.com/edmsapi/navigation/breadcrumbs',
    additionalParam : {        
      docbase : 'wison_company',
      accessToken : 'e66805ee5135f86c25c5df9a26a18f37',
      accessUser : 'czU5dmN1Qm9qREw4cG1XL0NnV3ZXbEx5djRkZDJnaEJVSXNqeHJTckE1RHdwTFpqZ2s5Q2p4Sm0wa3hySCswTlowb3NNQXFTNzNrYWp1TXJpOENjOWdOT29sKzgrVXhMN1hVQWk5UXhKbUIrRUh4SUtycS9jb2tra0pVYmE1SGg='
    },
    requestCallBack : res => res.data
  }  
  zTreeOption : zTreeOption = {
    treeId : 'ztree',
    async : {
      url : 'http://kmdoc.wison.com/edmsapi/navigation/treeNodes',
      otherParam : {
        accessToken : 'e66805ee5135f86c25c5df9a26a18f37',
        accessUser : 'czU5dmN1Qm9qREw4cG1XL0NnV3ZXbEx5djRkZDJnaEJVSXNqeHJTckE1RHdwTFpqZ2s5Q2p4Sm0wa3hySCswTlowb3NNQXFTNzNrYWp1TXJpOENjOWdOT29sKzgrVXhMN1hVQWk5UXhKbUIrRUh4SUtycS9jb2tra0pVYmE1SGg=',        
        docbase: 'wison_company',
        column: 'object_name',
        direction: 'asc'
      }
    },
    additionData : {r_object_id:'0',object_name:'root',isParent:true,r_object_type:'root'}   
  }
  constructor(
    private breadcrumbService : BreadcrumbService,
    private router: Router,
    private route: ActivatedRoute
  ) {    
    
  }
  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.ids = params.ids ? params.ids.split('.') : [0]
    })
    this.breadcrumbService.setRootNode('root')
  }

  ngAfterViewInit(){
    
  }

  clickBreadcrumb(event){      
    let strIds = event.ids.join('.')
    this.router.navigate([], { queryParams: {ids:strIds}});
  }

  rootClickEvent({node}){
    console.log(node)
    this.router.navigate([], { queryParams: {ids:0}});
  }

  updateBreadCrumb(){    
    this.ids = [1,2,3]   
  }

  forceRefresh(){
    this.breadCrumb.updateData(this.ids)
    this.breadcrumbService.hideRoute('1')
    this.breadcrumbService.setRootNode(['根节点1','根节点2','根节点3'])
  }

  clickTreeEvent(event){    
    let strIds = event.ids.join('.')
    this.router.navigate([], { queryParams: {ids:strIds}});
  }
}
