(this.webpackJsonpregistrationform=this.webpackJsonpregistrationform||[]).push([[0],{28:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(2),s=a.n(n),i=a(15),l=a.n(i),c=(a(28),a(6),a(5)),o=a.n(c),h=a(16),d=a(17),m=a(18),b=a(19),j=a(3),u=a(22),x=a(21),O=a(20),p=a.n(O),N=function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).changeHandler=function(e){var t=r.state.formErr,a=e.target.value;switch(e.target.name){case"name":t.nameErr=a.length>60?"user name must be 5 characters long":"";break;case"EmailId":t.emailErr=a.length>100?"email must be 5 characters long":"";var n=a.indexOf("@"),s=a.indexOf(".");(n<1||s-n<2)&&(t.emailErr="please enter valid email id");break;case"MobileNo":t.mobileNoErr=a.length<10||a.length>10?"mobile no should be exactly 10 letters":"";break;case"FatherName":t.fathernameErr=a.length>60?"must be less than 60":"";break;case"address":t.addressErr=a.length>250?"must be less than 250":"";break;case"PINCode":t.pinErr=a.length>10?"must be less than 10":"";break;case"PANNumber":t.panErr=a.length>=10?"must be less than 10 letters":"";break;case"AdharNumber":t.adharErr=a.length<10||a.length>10?"must be exactly 10 numbers":"";break;case"NomineeName":t.nomineenameeErr=a.length>50?"must be less than 50 letters":"";break;case"NomineeRelation":t.nomineerelationErr=a.length>50?"must be less than 50 letters":"";break;case"Password":t.passwordErr=a.length<8?"at least 8 letters long ":""}r.setState(Object(d.a)({},e.target.name,e.target.value))},r.submithandle=function(){var e=Object(h.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===r.state.formErr.nameErr.length&&0===r.state.formErr.emailErr.length&&0===r.state.formErr.mobileNoErr.length&&0===r.state.formErr.fathernameErr.length&&0===r.state.formErr.addressErr.length&&0===r.state.formErr.pinErr.length&&0===r.state.formErr.panErr.length&&0===r.state.formErr.adharErr.length&&0===r.state.formErr.nomineenameeErr.length&&0===r.state.formErr.nomineerelationErr.length&&0===r.state.formErr.passwordErr.length?(alert("form is valid"),console.log("everything is okay")):alert("fill all the fields"),a={LoginPwd:r.state.Password,Title:r.state.Title,MemberName:r.state.name,FatherTitle:r.state.FatherTitle,FatherName:r.state.FatherName,BirthDate:r.state.birthdate,MemberAddress:r.state.address,MemberPinCode:r.state.PINCode,MobileNo:r.state.MolbileNo,EmailID:r.state.EmailId,MemberPANNo:r.state.PANNumber,NomineeName:r.state.NomineeName,NomineeRelation:r.state.NomineeRelation},"http://uatbenmoon.malayinfotech.com/api/memberapi/",p.a.post("http://uatbenmoon.malayinfotech.com/api/memberapi/",a).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={registrationType:"individual",title:"mr",name:" ",FatherTitle:"S/O",FatherName:"",birthdate:"",address:" ",PINCode:"",MolbileNo:"",EmailId:"",PANNumber:"",AdharNumber:"",NomineeName:"",NomineeRelation:"",Password:"",formErr:{nameErr:"",mobileNoErr:" ",emailErr:" ",fathernameErr:"",addressErr:"",pinErr:" ",panErr:"",adharErr:"",nomineenameeErr:"",nomineerelationErr:"",passwordErr:""}},r.submithandle=r.submithandle.bind(Object(j.a)(r)),r}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.formErr;return Object(r.jsx)("div",{className:"regiform",children:Object(r.jsx)("form",{onSubmit:this.submithandle,children:Object(r.jsxs)("div",{className:"formcontainer",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Registration Type :"}),Object(r.jsxs)("select",{value:this.state.registrationType,onChange:this.changeHandler,name:"registrationType",children:[Object(r.jsx)("option",{value:"individual",children:"Individual"}),Object(r.jsx)("option",{value:"organizational",children:"Organizational"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Title :"}),Object(r.jsxs)("select",{value:this.state.title,name:"title",onChange:this.changeHandler,children:[Object(r.jsx)("option",{value:"mr",children:"Mr"}),Object(r.jsx)("option",{value:"ms",children:"Ms"}),Object(r.jsx)("option",{value:"mrs",children:"Mrs"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Name :"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:this.state.name,onChange:this.changeHandler,className:"textinput",placeholder:"name",name:"name"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.nameErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Father / Husband :"}),Object(r.jsxs)("select",{value:this.state.FatherTitle,onChange:this.changeHandler,name:"fathertitle",children:[Object(r.jsx)("option",{value:"S/0",children:"S/o"}),Object(r.jsx)("option",{value:"D/0",children:"D/o"}),Object(r.jsx)("option",{value:"W/0",children:"W/o"})]})]}),Object(r.jsxs)("div",{className:"fhname",children:[Object(r.jsx)("label",{children:"Father / Husband name :"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"textinput",value:this.state.FatherName,onChange:this.changeHandler,type:"text",placeholder:"",name:"FatherName"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.fathernameErr}),Object(r.jsxs)("div",{className:"dob",value:this.state.Birthdate,onChange:this.changeHandler,name:"Birthdate",children:[Object(r.jsx)("label",{children:"Birth Date :"}),Object(r.jsx)("input",{type:"date"})]}),Object(r.jsxs)("div",{className:"address",children:[Object(r.jsx)("label",{children:"Address : "}),Object(r.jsx)("input",{className:"textinput",type:"text",value:this.state.address,onChange:this.changeHandler,name:"address"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.addressErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"PINCode : "}),Object(r.jsx)("input",{value:this.state.PINCode,onChange:this.changeHandler,className:"textinput",type:"text",name:"PINCode"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.pinErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Mobile No :"}),Object(r.jsx)("input",{className:"textinput",type:"number",value:this.setState.MolbileNo,onChange:this.changeHandler,name:"MobileNo"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.mobileNoErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Email ID :"}),Object(r.jsx)("input",{className:"textinput",value:this.state.EmailId,onChange:this.changeHandler,type:"email",name:"EmailId"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.emailErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"PAN Number :"}),Object(r.jsx)("input",{className:"textinput",value:this.state.PANNumber,onChange:this.changeHandler,type:"text",name:"PANNumber"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.panErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Adhar Number :"}),Object(r.jsx)("input",{className:"textinput",value:this.state.AdharNumber,onChange:this.changeHandler,type:"number",name:"AdharNumber"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.adharErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Nominee Name :"}),Object(r.jsx)("input",{className:"textinput",value:this.state.NomineeName,onChange:this.changeHandler,type:"text",name:"NomineeName"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.nomineenameeErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Nominee Relation :"}),Object(r.jsx)("input",{className:"textinput",value:this.state.NomineeRelation,onChange:this.changeHandler,type:"text",name:"NomineeRelation"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.nomineerelationErr}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Password :"}),Object(r.jsx)("input",{type:"password",value:this.state.Password,onChange:this.changeHandler,className:"textinput",name:"Password"})]}),Object(r.jsx)("div",{style:{fontSize:12,color:"red"},children:e.passwordErr}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",className:"btn",children:"Submit"})})]})})})}}]),a}(n.Component);var g=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(N,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),s(e),i(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),v()},6:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.aa12d872.chunk.js.map