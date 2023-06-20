"use strict";(self["webpackChunks002"]=self["webpackChunks002"]||[]).push([[6134,8585,6641,5990],{6437:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("新增采购单")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"元器件编码"}},[e("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:t.selectAssetsCode,callback:function(e){t.selectAssetsCode=e},expression:"selectAssetsCode"}})],1)],1),e("Col",{attrs:{span:"16"}},[e("FormItem",{attrs:{label:"元器件名称",prop:"name"}},[e("Input",{staticStyle:{width:"100%"},attrs:{readonly:"",icon:"md-create",placeholder:"点击右边图标导入元器件品类..."},on:{"on-click":t.openAssetSelectWindow},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"采购数量",prop:"quantity"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购数量..."},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"首款费用",prop:"money2"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购首款费用..."},model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"采购总费用",prop:"money"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购总费用..."},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1)],1)],1),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"success"},on:{click:t.handleSubmit}},[t._v("新增采购单")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1),e("assetSelect",{on:{submited:t.ownerSubmited},model:{value:t.showOwnerWindowFlag,callback:function(e){t.showOwnerWindowFlag=e},expression:"showOwnerWindowFlag"}})],1)},l=[],i=s(8168),o=s(5025);const n={name:"add",components:{assetSelect:o["default"]},data(){return{showSupplierWindowFlag:!1,showOwnerWindowFlag:!1,submitLoading:!1,form:{money:0,money1:0,name:"",quantity:0},formValidate:{},selectAssetsCode:""}},methods:{init(){},openAssetSelectWindow(){this.showOwnerWindowFlag=!0},ownerSubmited(t){this.form.name=t.name,this.selectAssetsCode=t.code,this.form.assetId=t.id,this.showOwnerWindowFlag=!1},handleReset(){this.$refs.form.resetFields()},handleSubmit(){var t=this;t.submitLoading=!0,(0,i.oq)(t.form).then((e=>{t.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),t.submited())}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},r=n;var c=s(1001),m=(0,c.Z)(r,a,l,!1,null,null,null);const d=m.exports},9324:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("编辑未提交的采购单")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"元器件编码"}},[e("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:t.form.assetsCode,callback:function(e){t.$set(t.form,"assetsCode",e)},expression:"form.assetsCode"}})],1)],1),e("Col",{attrs:{span:"16"}},[e("FormItem",{attrs:{label:"元器件名称",prop:"name"}},[e("Input",{staticStyle:{width:"100%"},attrs:{readonly:"",icon:"md-create",placeholder:"点击右边图标导入元器件品类..."},on:{"on-click":t.openAssetSelectWindow},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"采购数量",prop:"quantity"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购数量..."},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"首款费用",prop:"money2"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购首款费用..."},model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"采购总费用",prop:"money"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购总费用..."},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1)],1)],1),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"success"},on:{click:t.handleSubmit}},[t._v("更新采购单")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1),e("assetSelect",{on:{submited:t.ownerSubmited},model:{value:t.showOwnerWindowFlag,callback:function(e){t.showOwnerWindowFlag=e},expression:"showOwnerWindowFlag"}})],1)},l=[],i=s(8168),o=s(5025);const n={name:"edit",components:{assetSelect:o["default"]},props:{data:Object},data(){return{showOwnerWindowFlag:!1,submitLoading:!1,form:{money:0,money1:0,name:"",quantity:0},formValidate:{},selectAssetsCode:""}},methods:{init(){this.handleReset(),this.form=this.data},openAssetSelectWindow(){this.showOwnerWindowFlag=!0},ownerSubmited(t){this.form.name=t.name,this.selectAssetsCode=t.code,this.form.assetId=t.id,this.showOwnerWindowFlag=!1},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,i.Pd)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},r=n;var c=s(1001),m=(0,c.Z)(r,a,l,!1,null,null,null);const d=m.exports},1092:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},["add"==t.currView?e("add",{on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),"edit"==t.currView?e("edit",{attrs:{data:t.formData},on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),e("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==t.currView,expression:"currView == 'index'"}]},[e("Row",{directives:[{name:"show",rawName:"v-show",value:t.openSearch,expression:"openSearch"}],staticStyle:{height:"30px"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}}},[e("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{attrs:{label:"",prop:"name"}},[e("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入元器件名称",clearable:""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),e("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[e("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:"",shape:"circle"},on:{click:t.handleSearch}},[t._v("搜索")]),e("Button",{attrs:{type:"warning",size:"small",ghost:"",shape:"circle",icon:"md-refresh"},on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"info",size:"small",ghost:"",shape:"circle",icon:"md-add"},on:{click:t.add}},[t._v("添加")]),e("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",shape:"circle"},on:{click:t.delAll}},[t._v("删除")]),e("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:"",shape:"circle"},on:{click:t.excelData}},[t._v("导出")]),e("Button",{attrs:{type:"error",icon:"md-paper-plane",size:"small",ghost:"",shape:"circle"},on:{click:t.submitFx}},[t._v("提交审批")])],1),e("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"110px"}},[e("Poptip",{attrs:{trigger:"hover",content:"自定义表格的显示列,适应屏幕显示",placement:"left"}},[e("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"ios-settings",size:"small",ghost:""},on:{click:function(e){t.showFilterPanelFlag=!t.showFilterPanelFlag}}},[t._v("列筛选 ")])],1),e("Poptip",{attrs:{trigger:"hover",content:"点我查看本模块的使用教程",placement:"left"}},[e("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"md-help",size:"small",ghost:""},on:{click:function(e){t.modal1=!0}}},[t._v("使用教程 ")])],1),e("Modal",{attrs:{title:"使用教程"},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[e("p",[t._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),e("p",[t._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),e("p",[t._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),e("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[e("CheckboxGroup",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.mycolumns,(function(t){return e("div",{key:t.key},[e("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:t.title}})],1)})),0)],1)])],1),e("Row",{directives:[{name:"show",rawName:"v-show",value:t.openTip,expression:"openTip"}]}),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("Table",{ref:"table",attrs:{loading:t.loading,height:t.tableHeight,border:"",stripe:"",size:"small",columns:t.columns,data:t.data,sortable:"custom","row-class-name":t.rowClassNmae},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect,"on-row-click":t.rowClick,"on-row-dblclick":t.dbrowClick}})],1)],1),e("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[e("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[15,30,50,100],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1),e("Modal",{attrs:{title:"查看详细采购单"},model:{value:t.lookMoreModel,callback:function(e){t.lookMoreModel=e},expression:"lookMoreModel"}},[e("Form",{attrs:{inline:"","label-width":90}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"元器件名称"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.name,callback:function(e){t.$set(t.selectRow,"name",e)},expression:"selectRow.name"}})],1)],1),e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"元器件数量"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.quantity,callback:function(e){t.$set(t.selectRow,"quantity",e)},expression:"selectRow.quantity"}})],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"最低价格"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.minMoney,callback:function(e){t.$set(t.selectRow,"minMoney",e)},expression:"selectRow.minMoney"}})],1)],1),e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"最高价格"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.maxMoney,callback:function(e){t.$set(t.selectRow,"maxMoney",e)},expression:"selectRow.maxMoney"}})],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"计量单位"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.unit,callback:function(e){t.$set(t.selectRow,"unit",e)},expression:"selectRow.unit"}})],1)],1),e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"型号"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.model,callback:function(e){t.$set(t.selectRow,"model",e)},expression:"selectRow.model"}})],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"规格"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.spec,callback:function(e){t.$set(t.selectRow,"spec",e)},expression:"selectRow.spec"}})],1)],1),e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"是否审核"}},[e("span",{staticClass:"lookMoreFont"},[t._v(t._s(1==t.selectRow.auditFlag?"已审核":"未审核"))])])],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"是否提交"}},[e("span",{staticClass:"lookMoreFont"},[t._v(t._s(1==t.selectRow.submitFlag?"已提交":"未提交"))])])],1),e("Col",{attrs:{span:"12"}},[e("Form-item",{attrs:{label:"是否入库"}},[e("span",{staticClass:"lookMoreFont"},[t._v(t._s(1==t.selectRow.wareFlag?"已入库":"未入库"))])])],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("Form-item",{staticStyle:{width:"98%"},attrs:{label:"备注"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.remark,callback:function(e){t.$set(t.selectRow,"remark",e)},expression:"selectRow.remark"}})],1)],1)],1)],1)],1),e("Modal",{attrs:{title:"元器件入库",width:"50","ok-text":"确认入库"},on:{"on-ok":t.inWareFx},model:{value:t.lookMoreModel1,callback:function(e){t.lookMoreModel1=e},expression:"lookMoreModel1"}},[e("Form",{attrs:{inline:"","label-width":90}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"16"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"元器件名称"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.name,callback:function(e){t.$set(t.selectRow,"name",e)},expression:"selectRow.name"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"采购数量"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.quantity,callback:function(e){t.$set(t.selectRow,"quantity",e)},expression:"selectRow.quantity"}})],1)],1)],1),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"元器件编码"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.assetCode,callback:function(e){t.$set(t.selectRow,"assetCode",e)},expression:"selectRow.assetCode"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"元器件供应商"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.supplierName,callback:function(e){t.$set(t.selectRow,"supplierName",e)},expression:"selectRow.supplierName"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"申请人"}},[e("Input",{attrs:{readonly:""},model:{value:t.selectRow.userName,callback:function(e){t.$set(t.selectRow,"userName",e)},expression:"selectRow.userName"}})],1)],1)],1),e("Divider",{attrs:{dashed:""}},[e("span",{staticClass:"lookMoreFont"},[t._v("↓↓↓请填写以下信息↓↓↓")])]),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"入库数量"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{max:t.selectRow.quantity2,min:0},model:{value:t.inAssetsNumber,callback:function(e){t.inAssetsNumber=e},expression:"inAssetsNumber"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"采购日期"}},[e("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:t.inAssetsDate,format:"yyyy-MM-dd"},on:{"on-change":t.changeInAssetsDate}})],1)],1),e("Col",{attrs:{span:"8"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"进入仓库"}},[e("Select",{model:{value:t.inAssetsWare,callback:function(e){t.inAssetsWare=e},expression:"inAssetsWare"}},t._l(t.wareList,(function(s,a){return e("Option",{key:a,attrs:{value:s.id}},[t._v(t._s(s.name))])})),1)],1)],1)],1)],1)],1),e("Modal",{attrs:{width:"1100",title:"发起采购申请"},on:{"on-ok":t.submitFx1},model:{value:t.submitBuyModal,callback:function(e){t.submitBuyModal=e},expression:"submitBuyModal"}},[e("Form",{attrs:{inline:"","label-width":90}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("Table",{attrs:{border:"",stripe:"",size:"small",columns:t.columns1,data:t.selectList}})],1)],1),e("Divider",[t._v("本次费用合计："+t._s(t.submitBuyMoney))]),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"供应商"}},[e("Select",{attrs:{placeholder:"请选择供应商，关联付款信息..."},model:{value:t.submitBuySupplier,callback:function(e){t.submitBuySupplier=e},expression:"submitBuySupplier"}},t._l(t.supplierList,(function(s,a){return e("Option",{key:a,attrs:{value:s.id}},[t._v(t._s(s.name))])})),1)],1)],1),e("Col",{attrs:{span:"24"}},[e("Form-item",{staticStyle:{width:"100%"},attrs:{label:"采购原因"}},[e("Input",{attrs:{type:"textarea",rows:4,maxlength:"240","show-word-limit":"",clearable:"",placeholder:"请输入采购原因..."},model:{value:t.submitBuyReason,callback:function(e){t.submitBuyReason=e},expression:"submitBuyReason"}})],1)],1)],1)],1)],1)],1)},l=[],i=s(8168),o=s(6437),n=s(9324);const r={name:"single-window",components:{add:o["default"],edit:n["default"]},data(){return{submitBuyMoney:0,submitBuySupplier:"",submitBuyReason:"",submitBuyModal:!1,inAssetsWare:"1564489653061554176",inAssetsNumber:0,inAssetsDate:"",lookMoreModel:!1,lookMoreModel1:!1,selected:["选择","序号","元器件名称","提交状态","审核状态","入库状态","首次付款","总费用","采购数量","采购流程号","可入库数量","供应商","付款抬头","收款人姓名","开户行","银行账号","创建时间","创建者","修改时间","修改者","操作"],tableHeight:500,modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:{name:"",maxMoney:0,minMoney:0,quantity:0,unit:"",model:"",spec:"",remark:"",auditFlag:0,submitFlag:0,wareFlag:0},columns1:[{type:"index",width:85,align:"center",fixed:"left"},{title:"元器件名称",key:"name",minWidth:250,fixed:"left",align:"center",tooltip:!0},{title:"首次付款",key:"money1",minWidth:120,sortable:!0,align:"center",tooltip:!0},{title:"总费用",key:"money",minWidth:120,sortable:!0,align:"center",tooltip:!0},{title:"采购数量",key:"quantity",minWidth:120,sortable:!1,align:"center",tooltip:!0,render:(t,e)=>t("div",[e.row.quantity+" "+e.row.unit])}],columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{type:"index",width:85,align:"center",fixed:"left"},{title:"元器件名称",key:"name",minWidth:250,fixed:"left",align:"center",tooltip:!0},{title:"提交状态",key:"submitFlag",align:"center",minWidth:100,render:(t,e)=>1==e.row.submitFlag?t("div",[t("span",{style:{color:"#3CB371"}},"已提交")]):t("div",[t("span",{style:{color:"#ff9900"}},"未提交")])},{title:"审核状态",key:"auditFlag",align:"center",minWidth:100,tooltip:!0,render:(t,e)=>1==e.row.auditFlag?t("div",[t("span",{style:{color:"#3CB371"}},"已审核")]):t("div",[t("span",{style:{color:"#ff9900"}},"未审核")])},{title:"入库状态",key:"auditFlag",align:"center",minWidth:100,tooltip:!0,render:(t,e)=>2==e.row.wareFlag?t("div",[t("span",{style:{color:"#3CB371"}},"已全部入库")]):1==e.row.wareFlag?t("div",[t("span",{style:{color:"#ff9900"}},"部分入库")]):t("div",["未入库"])},{title:"首次付款",key:"money1",minWidth:120,sortable:!0,align:"center",tooltip:!0},{title:"总费用",key:"money",minWidth:120,sortable:!0,align:"center",tooltip:!0},{title:"采购数量",key:"quantity",minWidth:120,align:"center",tooltip:!0,render:(t,e)=>t("div",[e.row.quantity+" "+e.row.unit])},{title:"采购流程号",key:"flowId",minWidth:160,align:"center",tooltip:!0,render:(t,e)=>void 0!=e.row.flowId&&""!=e.row.flowId?t("div",[e.row.flowId]):t("div",["尚未发起"])},{title:"可入库数量",key:"quantity2",minWidth:120,align:"center",tooltip:!0,render:(t,e)=>t("div",[e.row.quantity2+" "+e.row.unit])},{title:"供应商",key:"supplierName",minWidth:180,align:"center",tooltip:!0},{title:"付款抬头",key:"rise",minWidth:120,align:"center",tooltip:!0},{title:"收款人姓名",key:"pushName",minWidth:120,align:"center",tooltip:!0},{title:"开户行",key:"open",minWidth:180,align:"center",tooltip:!0},{title:"银行账号",key:"code",minWidth:180,align:"center",tooltip:!0},{title:"创建时间",key:"createTime",sortable:!0,minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:260,fixed:"right",render:(t,e)=>t("div",[t("Button",{props:{type:"primary",size:"small",ghost:!0,icon:"ios-create-outline",disabled:e.row.submitFlag>0},style:{marginRight:"5px"},on:{click:()=>{this.edit(e.row)}}},"编辑"),t("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0,disabled:e.row.submitFlag>0},style:{marginRight:"5px"},on:{click:()=>{this.remove(e.row)}}},"删除"),t("Button",{props:{type:"warning",size:"small",ghost:!0,icon:"md-arrow-down",disabled:1!=e.row.auditFlag||0==e.row.quantity2},on:{click:()=>{this.inWare(e.row)}}},"入库")])}],data:[],pageNumber:1,pageSize:15,total:0,showFilterPanelFlag:!1,wareList:[],supplierList:[]}},methods:{init(){this.getSupplierListFx(),this.getDataList(),this.getAllWareListFx()},getSupplierListFx(){var t=this;(0,i.dt)().then((e=>{e.success&&(t.supplierList=e.result)}))},getAllWareListFx(){var t=this;(0,i.Ox)().then((e=>{e.success&&(t.wareList=e.result)}))},submitFx1(){var t=this;let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,i.T7)({ids:e,reason:t.submitBuyReason,supplierId:t.submitBuySupplier}).then((e=>{e.success&&(this.$Message.success("提交成功，请等待审批！"),t.clearSelectAll(),t.getDataList())}))},submitFx(){if(this.selectList.length<=0)this.$Message.warning("您还未选择要提交的数据");else{for(var t=0,e=0;e<this.selectList.length;e++)t+=this.selectList[e].money1;this.submitBuyMoney=t,this.submitBuyModal=!0}},submited(){this.currView="index",this.getDataList()},changePage(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize(t){this.searchForm.pageSize=t,this.getDataList()},rowClick(t,e){this.selectRow=t},dbrowClick(t,e){this.selectRow=t,this.lookMoreModel=!0},rowClassNmae(t,e){return t.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"===t.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(t){this.selectList=t,this.selectCount=t.length},getDataList(){this.loading=!0,(0,i.px)(this.searchForm).then((t=>{this.loading=!1,t.success&&(this.data=t.result.records,this.total=t.result.total)}))},add(){this.currView="add"},edit(t){for(let a in t)null==t[a]&&(t[a]="");let e=JSON.stringify(t),s=JSON.parse(e);this.formData=s,this.currView="edit"},inWare(t){this.selectRow=t,this.inAssetsNumber=this.selectRow.quantity;var e=new Date;this.inAssetsDate=e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate()),this.lookMoreModel1=!0},changeInAssetsDate(t){this.inAssetsDate=t},inWareFx(){var t=this;(0,i.B)({id:t.selectRow.id,quantity:t.inAssetsNumber,date:t.inAssetsDate,warehouse:t.inAssetsWare}).then((e=>{e.success&&(this.$Message.success("入库成功"),t.getDataList())}))},remove(t){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.name+" ?",loading:!0,onOk:()=>{(0,i.X_)({ids:t.id}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),(0,i.X_)({ids:t}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-270),this.mycolumns=this.columns;let t=[];for(var e=0;e<this.selected.length;e++)for(var s=this.selected[e],a=0;a<this.columns.length;a++)this.columns[a].title==s&&t.push(this.columns[a]);this.columns=t},watch:{selected:function(t){let e=[];for(var s=0;s<this.mycolumns.length;s++){var a=this.mycolumns[s];(void 0==a.title||t.includes(a.title))&&e.push(a)}this.columns=e}}},c=r;var m=s(1001),d=(0,m.Z)(c,a,l,!1,null,null,null);const u=d.exports}}]);