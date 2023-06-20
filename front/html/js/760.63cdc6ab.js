"use strict";(self["webpackChunks002"]=self["webpackChunks002"]||[]).push([[760,8188],{760:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑行政元器件类型")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"大类",prop:"type"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"adminAssetType",transfer:"",placeholder:"请选择元器件大类..."},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),t("FormItem",{attrs:{label:"分类名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请填写元器件分类名称..."},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"类型编码",prop:"code"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请填写元器件编码..."},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),t("FormItem",{attrs:{label:"备注",prop:"remark"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请选填元器件类型备注..."},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},s=[],r=a(7048),i=a(8188);const n={name:"edit",components:{dict:i["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{type:"",title:"",sortOrder:0,code:"",remark:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,r.DR)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=n;var c=a(1001),d=(0,c.Z)(o,l,s,!1,null,null,null);const u=d.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,l){return t("Option",{key:l,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},s=[],r=a(7877);const i={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,r.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},n=i;var o=a(1001),c=(0,o.Z)(n,l,s,!1,null,null,null);const d=c.exports},7048:(e,t,a)=>{a.d(t,{DR:()=>i,UM:()=>n,mz:()=>s,u1:()=>r});var l=a(7184);const s=e=>(0,l.A_)("/adminAssetType/getByPage",e),r=e=>(0,l.j0)("/adminAssetType/insert",e),i=e=>(0,l.j0)("/adminAssetType/update",e),n=e=>(0,l.j0)("/adminAssetType/delByIds",e)}}]);