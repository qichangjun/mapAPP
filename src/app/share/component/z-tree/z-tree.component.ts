import { Component, OnInit, Input, Output, EventEmitter,OnChanges,SimpleChange  } from '@angular/core';
import { zTreeService } from './z-tree.service';
import { Options } from './option.class';
import { merge as lodashMerge }  from "lodash";

declare var jQuery:any;
declare var $ : any;
@Component({
  selector: 'app-z-tree',
  templateUrl: './z-tree.component.html',
  styleUrls: ['./z-tree.component.scss'],
  providers: [zTreeService]
})
export class ZTreeComponent implements OnInit {  
  @Input() ids : Array<any>;
  @Input() option : Options;
  @Output() clickTree : EventEmitter<any> = new EventEmitter();
  keepNode : any;
  defaultOptions : Options = {
    treeId : 'treeId',
    data : {simpleData: {enable: true,pIdKey:'parent_id',idKey:'r_object_id'},key: {name: 'object_name'}},
    view : {
        addDiyDom: this.addDiyDom.bind(this),
        selectedMulti : false
    },
    callback : {
        onClick : this.clickDom.bind(this),
        onAsyncSuccess : this.onAsyncSuccess.bind(this)
    },
    async : {
      enable: true,
      dataType:"json",
      type : "get",
      url : 'null',
      dataFilter: this.ajaxDataFilter.bind(this),
      autoParam:["r_object_id=ids"],
      otherParam: {}
    }
  }
  constructor(
    private _zTreeService : zTreeService
  ) {
    //合并用户设置和默认设置
    this.option = lodashMerge(this.defaultOptions,this.option)   
  }

  ngOnInit() {        
  }

  /**
   * 第一次加载树的数据
   * 并根据ids，默认展开ids最后一个节点(即定位功能)
   */
  async getTreeDataInit(){    
    let treeData = await this._zTreeService.getTreeDataPaths(this.option.async.url,this.ids,this.option.async.otherParam)
    if (this.option.additionData){
      treeData.push(this.option.additionData)
    }    
    for (let i = 0 ; i < treeData.length; i ++) {
      treeData[i].isParent = treeData[i].child_count > 0
      treeData[i].iconSkin = treeData[i].r_object_type
    }    
    let zTreeObj = $.fn.zTree.init(jQuery('#' + this.option.treeId),this.option,treeData);
    let treeNode = zTreeObj.getNodeByParam("r_object_id", this.ids[this.ids.length - 1])
    setTimeout(function(){
      zTreeObj.expandNode(treeNode, true, false, true);
      zTreeObj.selectNode(treeNode);
    },10)
  }

  /**
   * 自定义dom节点
   * @param treeId 树容器id
   * @param treeNode 节点对象
   */
  addDiyDom (treeId, treeNode):void{
    let spaceWidth = 18;
    let switchObj = jQuery("#" + treeNode.tId + "_switch");
    let icoObj = jQuery("#" + treeNode.tId + "_ico");
    switchObj.remove();
    icoObj.before(switchObj);
    let spaceStr = "<span class='ztree-gap' style='width:" + (spaceWidth * treeNode.level)+ "px'></span>";
    switchObj.before(spaceStr);
  }

  /**
   * 点击节点事件
   * @param event 
   * @param treeId 
   * @param treeNode 
   */
  clickDom (event, treeId, treeNode):void {
    let zTreeObj = $.fn.zTree.getZTreeObj(this.option.treeId);
    if (!zTreeObj) return console.error('未找到树对象')
    setTimeout(function(){
      zTreeObj.expandNode(treeNode, true, false, true);
      zTreeObj.selectNode(treeNode);
    },10)
    var nodes = zTreeObj.getSelectedNodes();
    if (nodes.length>0) {
      zTreeObj.reAsyncChildNodes(nodes[0], "refresh");
    }
    this.clickTree.emit({ids:this.generateTreeNodeIds(treeNode),node:treeNode});
  }

  /**
   * 
   * @param treeId 
   * @param parentNode 父节点对象
   * @param res http请求的返回值
   */
  ajaxDataFilter (treeId, parentNode, res){
    if (res.code == '1') {
      let c_docTreeData=[];
      if (res.data.length == 0){
        let zTreeObj = $.fn.zTree.getZTreeObj(treeId);
        if (!zTreeObj) return console.error('未找到树对象')
        parentNode.child_count = 0
        parentNode.isParent = false        
        zTreeObj.updateNode(parentNode)
      }
      for (let i = 0; i < res.data.length ; i++) {
        let c_docItem={
          r_object_type:res.data[i].r_object_type,
          r_object_id:res.data[i].r_object_id,
          parent_id:res.data[i].parent_id,
          object_name:res.data[i].object_name,
          isParent:(res.data[i].child_count > 0),
          iconSkin : res.data[i].r_object_type
        };       
        c_docTreeData.push(c_docItem);
      }
      return c_docTreeData
    }
  }

  /**
   * 所有异步操作的成功回调(展开，刷新，重新初始化等操作)
   * @param event 
   * @param treeId 
   * @param treeNode 
   */
  onAsyncSuccess(event, treeId, treeNode){
    if (this.keepNode){
      let zTreeObj = $.fn.zTree.getZTreeObj(this.option.treeId);
      if (!zTreeObj) return console.error('未找到树对象')      
      let treeNode = zTreeObj.getNodeByParam("r_object_id", this.keepNode)
      zTreeObj.expandNode(treeNode, true, false, true);
      zTreeObj.selectNode(treeNode);
      this.keepNode = null                
    }
  }

  /**
   * 根据节点获取ids路径
   * @param treeNode 
   */
  generateTreeNodeIds(treeNode): Array<any> {
    let treeNodeIds=[];
    treeNodeIds.unshift(treeNode.r_object_id);
    let getTreeNodeIds=(treeNode)=> {
      let parentNode=treeNode.getParentNode();
      if (!parentNode) {
        treeNodeIds.unshift(treeNode.r_object_id);
        return
      }
      treeNodeIds.unshift(parentNode.r_object_id);
      getTreeNodeIds(parentNode)
    };
    getTreeNodeIds(treeNode);
    treeNodeIds.shift();
    return treeNodeIds
  };

  /**
   * 父控件更新ids时，在树节点中展开对应节点
   * @param ids 
   */
  async updateData(ids){    
    let zTreeObj = $.fn.zTree.getZTreeObj(this.option.treeId);
    if (!zTreeObj) return console.error('未找到树对象')
    let treeNode = zTreeObj.getNodeByParam("r_object_id", ids[ids.length - 1])
    setTimeout(function(){
      zTreeObj.expandNode(treeNode, true, false, true);
      zTreeObj.selectNode(treeNode);
    },10)
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
    /**
     * 初始化操作/每次用户修改otion时，重新加载树
     */
    if (changes['option']) {
      this.option = lodashMerge(this.defaultOptions,this.option)  
      this.getTreeDataInit()          
    } 
    /**
     * 若时第一次设置ids，则用getTreeDataInit()方法初始化
     * 否则用updateData方法定位
     */
    if (changes['ids']) {    
      if (changes['ids'].firstChange) return               
      this.updateData(this.ids)      
    }
  }
}
