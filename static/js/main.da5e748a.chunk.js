(this.webpackJsonplivewebsite=this.webpackJsonplivewebsite||[]).push([[0],{27:function(e,a,c){},57:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c(20),n=c.n(s),l=(c(27),c(28),c(29),c(2)),i=c(4),r=c(0),m=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{id:"header",className:"d-flex align-items-center home-main-div",children:Object(r.jsx)("div",{className:"container-fluid ",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-10 mx-auto ",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-6 pt-5 order-2 order-lg-0  kk",children:[Object(r.jsxs)("h1",{children:[e.name," ",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{className:"brand-name",children:" Developer Adda "})]}),Object(r.jsx)("h2",{className:"small-note",children:"We are a group of talented developers making websites"}),Object(r.jsx)("div",{className:"mt-3",children:Object(r.jsxs)(i.b,{to:e.topage,className:"btn btn-outline-primary ",children:[e.btn," "]})})]}),Object(r.jsx)("div",{className:"col-lg-6 order-1 order-lg-2 header-img ",children:Object(r.jsx)("img",{src:e.imgsrc,alt:"home-img",className:"img-fluid animated common_img"})})]})})})})})})},d=c.p+"static/media/home.f15baae2.jpg",j=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{name:"Grow your business with",btn:"get started",topage:"/service",imgsrc:d})})},o=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col-md-4 col-10 mx-md-0 mx-auto",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:e.img,className:"card-img-top card-image",alt:"card-image"}),Object(r.jsxs)("div",{className:"card-body card_body",children:[Object(r.jsx)("h5",{className:"card-title",children:e.name}),Object(r.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(r.jsx)(i.b,{to:"/contact",className:"btn btn-primary",children:Object(r.jsx)("span",{className:"card-btn",children:"Contact Us "})})]})]})})})},b=[{imgsrc:c.p+"static/media/web.15406681.jpg",title:"web development"},{imgsrc:c.p+"static/media/app.fd9dd850.jpg",title:"App development"},{imgsrc:c.p+"static/media/software.d6e46cc6.jpg",title:"Software development"},{imgsrc:c.p+"static/media/digital.a61974f3.jpeg",title:"digital marketig"},{imgsrc:c.p+"static/media/android.d16c0f0e.jpg",title:"Android development"},{imgsrc:c.p+"static/media/marketing.8ad60e86.png",title:"marketing"}],x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"text-center my-4",children:Object(r.jsx)("h1",{children:"Our Service"})}),Object(r.jsx)("div",{className:"container-fluid ",children:Object(r.jsx)("div",{cla:!0,children:Object(r.jsx)("div",{className:"row ",children:Object(r.jsx)("div",{className:"col-10 mx-auto",children:Object(r.jsx)("div",{className:"mb-5",children:Object(r.jsx)("div",{className:"row gy-5 ",children:b.map((function(e,a){return Object(r.jsx)(o,{name:e.title,img:e.imgsrc},a)}))})})})})})})]})},h=c.p+"static/media/abt.78c6a9cf.png",u=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{name:"Welcome to About Page",btn:"Contact now",topage:"/contact",imgsrc:h})})},O=c(10),v=c(16),p=c(22),g=function(){var e=Object(t.useState)({fullname:"",phonenumber:"",email:"",message:""}),a=Object(p.a)(e,2),c=a[0],s=a[1],n=function(e){var a=e.target,t=a.name,n=a.value;s(Object(v.a)(Object(v.a)({},c),{},Object(O.a)({},t,n))),console.log(c)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-10 mx-auto ",children:[Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("h1",{children:"Contact Us"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-md-6 col-10 mx-auto my-5",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("My name is ".concat(c.fullname,", Phone number is ").concat(c.phonenumber,", my email id is ").concat(c.email)),s({fullname:"",phonenumber:"",email:"",message:""})},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"fullname",className:"form-label",children:"Full Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"fullname",value:c.fullname,name:"fullname",placeholder:"Enter your name",onChange:n,required:!0})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"phonenumber",className:"form-label",children:"Phone Number"}),Object(r.jsx)("input",{type:"number",className:"form-control",id:"phonenumber",value:c.phonenumber,name:"phonenumber",placeholder:"Enter your phone number",onChange:n,required:!0})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"email",className:"form-label",children:"Email ID"}),Object(r.jsx)("input",{type:"email",className:"form-control",id:"email",value:c.email,name:"email",placeholder:"Enter your Email ID",onChange:n,required:!0})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"message",className:"form-label",children:"Message"}),Object(r.jsx)("textarea",{className:"form-control",id:"message",value:c.message,name:"message",rows:"3",onChange:n,required:!0})]}),Object(r.jsx)("div",{class:"col-12",children:Object(r.jsx)("button",{class:"btn btn-outline-primary",type:"submit",children:"Submit form"})})]})})})]})})})})},N=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid nav_bg ",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-10 mx-auto",children:Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Developer Adda"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(r.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0 ",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_nav",className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_nav",className:"nav-link",to:"/service",children:"Service"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_nav",className:"nav-link",to:"/about",children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_nav",className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})})})})},f=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid ",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("footer",{className:"text-center   col-10  mx-auto pt-3 mt-5",children:Object(r.jsx)("p",{children:"\xa9 2021 Developer Adda. All Rights Reserved | Terms and Conditons"})})})})})},w=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(r.jsx)(l.b,{exact:!0,path:"/service",component:x}),Object(r.jsx)(l.b,{exact:!0,path:"/about",component:u}),Object(r.jsx)(l.b,{exact:!0,path:"/contact",component:g}),Object(r.jsx)(l.a,{to:"/"})]}),Object(r.jsx)(f,{})]})};n.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(i.a,{children:Object(r.jsx)(w,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.da5e748a.chunk.js.map