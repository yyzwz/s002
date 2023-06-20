"use strict";(self["webpackChunks002"]=self["webpackChunks002"]||[]).push([[8585,6641],{6437:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var o=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("新增采购单")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"元器件编码"}},[e("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:t.selectAssetsCode,callback:function(e){t.selectAssetsCode=e},expression:"selectAssetsCode"}})],1)],1),e("Col",{attrs:{span:"16"}},[e("FormItem",{attrs:{label:"元器件名称",prop:"name"}},[e("Input",{staticStyle:{width:"100%"},attrs:{readonly:"",icon:"md-create",placeholder:"点击右边图标导入元器件品类..."},on:{"on-click":t.openAssetSelectWindow},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"采购数量",prop:"quantity"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购数量..."},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"首款费用",prop:"money2"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购首款费用..."},model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1),e("Col",{attrs:{span:"8"}},[e("FormItem",{attrs:{label:"采购总费用",prop:"money"}},[e("InputNumber",{staticStyle:{width:"100%"},attrs:{min:"0",max:"10000000",placeholder:"请输入采购总费用..."},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1)],1)],1),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"success"},on:{click:t.handleSubmit}},[t._v("新增采购单")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1),e("assetSelect",{on:{submited:t.ownerSubmited},model:{value:t.showOwnerWindowFlag,callback:function(e){t.showOwnerWindowFlag=e},expression:"showOwnerWindowFlag"}})],1)},a=[],l=s(8168),n=s(5025);const i={name:"add",components:{assetSelect:n["default"]},data(){return{showSupplierWindowFlag:!1,showOwnerWindowFlag:!1,submitLoading:!1,form:{money:0,money1:0,name:"",quantity:0},formValidate:{},selectAssetsCode:""}},methods:{init(){},openAssetSelectWindow(){this.showOwnerWindowFlag=!0},ownerSubmited(t){this.form.name=t.name,this.selectAssetsCode=t.code,this.form.assetId=t.id,this.showOwnerWindowFlag=!1},handleReset(){this.$refs.form.resetFields()},handleSubmit(){var t=this;t.submitLoading=!0,(0,l.oq)(t.form).then((e=>{t.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),t.submited())}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},r=i;var m=s(1001),c=(0,m.Z)(r,o,a,!1,null,null,null);const d=c.exports}}]);