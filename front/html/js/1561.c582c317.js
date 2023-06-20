"use strict";(self["webpackChunks002"]=self["webpackChunks002"]||[]).push([[1561],{1561:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"file-upload-wrap"},[t("Upload",{staticClass:"file-upload",attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[t("Button",{attrs:{loading:e.loading,type:e.type,ghost:e.ghost,shape:e.shape,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v(e._s(e.text))])],1),t("Tooltip",{attrs:{transfer:"",content:e.title,placement:"top"}},[t("a",{on:{click:e.download}},[e._v(e._s(e.currentValue.name))])])],1)])},i=[],r=a(7877);const n={name:"fileUpload",props:{value:Object,size:String,type:String,ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},shape:String,icon:{type:String,default:"ios-cloud-upload-outline"},text:{type:String,default:"上传文件"},maxSize:{type:Number,default:5},accept:String},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach((t=>{e.push(t.replace(".","").replace(" ",""))})),e}return[]}},data(){return{accessToken:{},title:"点击下载",currentValue:this.value,loading:!1,uploadFileUrl:r.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},download(){this.currentValue.url?window.open(this.currentValue.url+"?attname=&response-content-type=application/octet-stream&filename="+this.currentValue.name):this.$Message.error("无效的链接")},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue={url:e.result,name:t.name,size:t.size},this.title="点击下载("+(1*t.size/1048576).toFixed(2)+" MB)",this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.currentValue.size?this.title="点击下载("+(1*this.currentValue.size/1048576).toFixed(2)+" MB)":this.title="点击下载",this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},l=n;var o=a(1001),c=(0,o.Z)(l,s,i,!1,null,"5c2928dc",null);const u=c.exports}}]);