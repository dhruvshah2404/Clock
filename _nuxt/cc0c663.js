(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(e,t,n){var content=n(236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("1b7833da",content,!0,{sourceMap:!1})},235:function(e,t,n){"use strict";n(234)},236:function(e,t,n){(t=n(53)(!1)).push([e.i,"h1{font-size:50px;font-weight:300}h1,h2{color:#858ae3}h2{font-size:25px;font-weight:500}.clock{display:flex;justify-content:space-evenly;margin:40px 0}.container,.phase-container{width:20%;background:#858ae3;text-transform:uppercase;margin:0;padding:10px 0;box-shadow:0 8px 12px -8px #000;border-radius:20px;cursor:pointer}.phase-container{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-top:auto}.container:hover{transform:scale(1.1);transition:all .3s ease}.hour,.minutes,.seconds{font-size:70px}.phase{font-size:50px;display:flex;align-items:center;justify-content:center}@media only screen and (max-width:500px){.container{width:23%}.hour,.minutes,.seconds{font-size:50px}.phase{font-size:30px}.clock{justify-content:space-between}}",""]),e.exports=t},237:function(e,t,n){"use strict";n.r(t);n(15),n(43),n(52);var o=n(11);setInterval((function(){var e=document.querySelector(".hour"),t=document.querySelector(".minutes"),n=document.querySelector(".seconds"),o=document.querySelector(".phase"),c=(new Date).getHours(),r=(new Date).getMinutes(),s=(new Date).getSeconds(),d="AM";if(c>12){c-=12;d="PM"}c=c<10?"0"+c:c,r=r<10?"0"+r:r,s=s<10?"0"+s:s,e.innerHTML=c,t.innerHTML=r,n.innerHTML=s,o.innerHTML=d}),1e3);var c={components:{},data:function(){return{city:"",country:"",province:"",flag:""}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.ipdata.co/?api-key=1fea32ceddf32d0b6b02368d167292ae9974950134c6613bdeb737d6").then((function(e){return e.json()})).then((function(data){console.log(data),e.city=data.city,e.country=data.country_name,e.province=data.region,e.flag=data.emoji_flag}));case 2:case"end":return t.stop()}}),t)})))()}},r=(n(235),n(50)),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Day2 - Clock")]),e._v(" "),n("h2",[e._v(e._s(e.city)+", "+e._s(e.province))]),e._v(" "),n("h2",[e._v(e._s(e.country)+" "+e._s(e.flag))]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clock"},[n("div",{staticClass:"container"},[n("div",{staticClass:"hour"}),e._v(" "),n("div",[e._v("hours")])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"minutes"}),e._v(" "),n("div",[e._v("minutes")])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"seconds"}),e._v(" "),n("div",[e._v("seconds")])]),e._v(" "),n("div",{staticClass:"phase-container"},[n("div",{staticClass:"phase"})])])}],!1,null,null,null);t.default=component.exports}}]);