(this.webpackJsonpappone=this.webpackJsonpappone||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(6),r=a.n(i),s=(a(12),a(1)),o=a(2),c=a(4),m=a(3),u=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={count:0,showInfo:!1},e.handleAdd=function(){e.setState({count:e.state.count+1})},e.handleMinus=function(){e.setState({count:e.state.count-1})},e.handleReset=function(){e.setState({count:0})},e.toggleInfo=function(){e.setState({showInfo:!e.state.showInfo})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.info,t=e.id,a=e.img,n=e.title,i=e.author,r=this.props.handleDelete;return l.a.createElement("section",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gridColumnGap:"3rem",margin:"2rem 0"},className:"App"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("img",{src:a,className:"responsive-img materialboxed",alt:"books"})),l.a.createElement("div",{className:"col s12 l7 offset-l1"},l.a.createElement("div",{className:"collection"},l.a.createElement("h5",{className:"title collection-item indigo-text text-darken-4"},"Title: ",n),l.a.createElement("h5",{className:"collection-item indigo-text text-darken-4"},"Author: ",i),l.a.createElement("h6",{className:"collection-item indigo-text text-darken-4"},"Count: ",this.state.count),l.a.createElement("button",{className:"btn-small",type:"button",onClick:this.handleAdd},l.a.createElement("i",{class:"material-icons prefix"},"add")),l.a.createElement("button",{className:"btn-small",type:"button",onClick:this.handleReset},l.a.createElement("i",{class:"material-icons"},"restore")),l.a.createElement("button",{type:"button",className:"btn-small",onClick:this.handleMinus},l.a.createElement("i",{class:"material-icons"},"remove")),l.a.createElement("button",{type:"button",className:"btn-small",onClick:function(){return r(t)}},l.a.createElement("i",{class:"material-icons"},"delete")),l.a.createElement("button",{type:"button",className:"btn-small center",onClick:this.toggleInfo},l.a.createElement("i",{class:"material-icons"},"info")),this.state.showInfo?l.a.createElement("h6",{className:"white-text"},n):null))))}}]),a}(n.Component),d=[{id:1,img:"https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._AC_SX184_.jpg",title:"Live Free Or Die: America (and the World) on the BrinkLive Free",author:"Sean Hannity"},{id:2,img:"https://images-na.ssl-images-amazon.com/images/I/41r4MsfTSxL._AC_SX184_.jpg",title:"Rage",author:"Bob Woodward"},{id:3,img:"https://images-na.ssl-images-amazon.com/images/I/41+V+iVRLiL._AC_SX184_.jpg",title:"Melania and Me: The Rise and Fall of My Friendship with the First Lady",author:"Stephanie Winston"},{id:4,img:"https://images-na.ssl-images-amazon.com/images/I/41TJxOmPRjL._AC_SX184_.jpg",title:"Me: Elton John Official AutobiographyMe: Elton John Official",author:"Elton John"}],h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={books:d,name:null,age:null},e.handleDelete=function(t){console.log(e.state.books);var a=e.state.books.filter((function(e){return e.id!==t}));e.setState({books:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"booklist"},this.state.books.map((function(t){return l.a.createElement(u,{info:t,key:t.id,handleDelete:e.handleDelete})})))}}]),a}(n.Component);var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("nav",{class:"nav-wrapper teal"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{href:"",class:"brand-logo"},"Book Store"),l.a.createElement("a",{href:"",class:"sidenav-trigger","data-target":"mobile-menu"},l.a.createElement("i",{class:"material-icons"},"menu")),l.a.createElement("ul",{class:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"#photos"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#services"},"References")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",class:" tooltipped btn-floating btn-small indigo darken-4","data-tooltip":"This is Instagram"},l.a.createElement("i",{class:"fab fa-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",class:"tooltipped btn-floating btn-small indigo darken-4","data-tooltip":"This is Facebook"},l.a.createElement("i",{class:"fab fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",class:"tooltipped btn-floating btn-small indigo darken-4","data-tooltip":"This is Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})))),l.a.createElement("ul",{class:"sidenav teal darken-3",id:"mobile-menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"References")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Contact")))))),l.a.createElement("div",{className:"App container"},l.a.createElement("h1",{className:"teal-text center"},"Books Catalog"),l.a.createElement(h,null)),l.a.createElement("footer",{class:"page-footer grey darken-3"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col s12 l6"},l.a.createElement("h5",null,"About Me"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium esse repellat, autem tenetur eligendi quam eum maxime earum! Delectus!"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium esse repellat, autem tenetur eligendi quam eum maxime earum! Delectus!")),l.a.createElement("div",{class:"col s12 l4 offset-l2"},l.a.createElement("h5",null,"Connect"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"",class:"grey-text text-lighten-3"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"",class:"grey-text text-lighten-3"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"",class:"grey-text text-lighten-3"},"LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"",class:"grey-text text-lighten-3"},"Instagram")))))),l.a.createElement("div",{class:"footer-copyright grey darken-4"},l.a.createElement("div",{class:"container center-align"},"\xa9 2020 Felix "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1c98b973.chunk.js.map