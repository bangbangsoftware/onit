(function(e){function t(t){for(var n,r,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},s=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5ccbb86e"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,a[1](c)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="onit/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"147b":function(e,t,a){},"4f4f":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-btn",{staticClass:"d-flex align-center",staticStyle:{"background-color":"#1976d2"},attrs:{href:"/"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("span",{staticStyle:{"font-size":"23px","font-weight":"bold"}},[e._v("On it")])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://bangbangsoftware.github.io/binder/example/",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Binder")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-main",[a("router-view")],1)],1)},s=[],r=n["a"].extend({name:"App"}),i=r,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),v=a("8336"),f=a("132d"),m=a("adda"),h=a("f6c4"),b=a("2fa4"),g=Object(l["a"])(i,o,s,!1,null,null,null),y=g.exports;u()(g,{VApp:d["a"],VAppBar:p["a"],VBtn:v["a"],VIcon:f["a"],VImg:m["a"],VMain:h["a"],VSpacer:b["a"]});var _=a("9483");Object(_["a"])("".concat("onit/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7"),a("3ca3"),a("ddb0");var w=a("8c4f"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fill")},k=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.showDays?a("div",{staticClass:"fill-grid"},[a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:e.loading}},[a("v-card-title",[e._v("What are the teams working hours?")]),a("days",{attrs:{people:e.people,dateRange:e.dateRange},on:{"times-changed":function(t){return e.update(t)}}})],1),a("div",{staticClass:"gap-right"},[a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:e.loading}},[a("v-card-title",[e._v("How are we busy?")]),a("work",{attrs:{timeBudget:e.timeBudget,times:e.times}})],1)],1)],1):a("div",{staticClass:"center"},[a("v-card",{staticClass:"mx-auto my-3",attrs:{loading:e.loading}},[a("div",[a("v-card-title",{staticClass:"title"},[e._v("Pick Date Range for the Sprint")]),a("v-card-subtitle",[a("b",[e._v(e._s(e.dateRange[0]))]),e._v(" to "),a("b",[e._v(e._s(e.dateRange[1]))])]),a("dates",{on:{"dates-picked":function(t){return e.dates(t)}}})],1),a("v-row",{staticClass:"d-hours"},[a("v-text-field",{attrs:{type:"number",label:"Default Hours"},model:{value:e.defaultHours,callback:function(t){e.defaultHours=t},expression:"defaultHours"}})],1),e._l(e.people,(function(t,n){return a("v-row",{key:n,staticClass:"people-grid"},[a("v-col",[a("v-btn",{attrs:{"x-small":""},on:{click:function(t){return e.drop(n)}}},[e._v("-")])],1),a("v-col",[e._v(" "+e._s(t.name)+" ")]),a("v-col",[e._v(" "+e._s(t.role)+" ")])],1)})),a("v-row",{staticClass:"add-grid"},[a("v-col",{staticClass:"add-but"},[a("v-btn",{attrs:{"x-small":""},on:{click:function(t){return e.add()}}},[e._v("+")])],1),a("v-col",[a("v-text-field",{attrs:{label:"Name*",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-col",[a("v-autocomplete",{staticClass:"role",attrs:{required:"",items:["Developer","Tester"],label:"Role*"},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}})],1)],1),e.ready()?a("v-card-actions",{staticClass:"right-action"},[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:function(t){return e.done()}}},[e._v("Done")])],1):e._e()],2)],1)])},D=[],M=(a("b0c0"),a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"day-row"},[a("v-col",{staticClass:"mb-1 head controls"},[e._v(" Controls")]),a("v-col",{staticClass:"mb-1 date head"},[e._v(" Date ")]),e._l(e.times[0].people,(function(t,n){return a("div",{key:n},[a("v-col",{staticClass:"mb-1 name-head"},[a("div",{staticClass:"text-left"},[e._v(" "+e._s(t.name)+" ")]),a("div",{staticClass:"role"},[e._v("("+e._s(t.role)+")")])])],1)}))],2),e._l(e.times,(function(t,n){return a("v-row",{key:n},[a("div",{staticClass:"day-row"},[a("v-col",{staticClass:"mb-1 but-grid"},[a("v-btn",{staticClass:"small-but",attrs:{"x-small":""},on:{click:function(t){return e.allDayUp(n)}}},[e._v("+")]),a("v-btn",{staticClass:"small-but",attrs:{"x-small":""},on:{click:function(t){return e.allDayDown(n)}}},[e._v("-")]),a("v-btn",{staticClass:"small-but",attrs:{"x-small":""},on:{click:function(t){return e.zeroDay(n)}}},[e._v("X")])],1),a("v-col",{staticClass:"date mb-1"},[e._v(" "+e._s(e._f("date")(t.date,"iii dd MMMM yyyy"))+" ")]),e._l(t.people,(function(t,o){return a("div",{key:o},[a("v-col",{staticClass:"mb-1 col-width"},[a("v-text-field",{attrs:{label:"Hours",type:"number"},model:{value:e.times[n].people[o].hours,callback:function(t){e.$set(e.times[n].people[o],"hours",t)},expression:"times[index].people[peopleIndex].hours"}})],1)],1)}))],2)])})),a("v-row",[a("div",{staticClass:"total-row"},[a("v-col",{staticClass:"mb-1 controls"},[a("v-btn",{attrs:{"x-small":""},on:{click:function(t){return e.addDay()}}},[e._v("+")])],1),a("v-col",{staticClass:"date mb-1"},[e._v("Total Hours")]),e._l(e.times[0].people,(function(t,n){return a("div",{key:n},[a("v-col",{staticClass:"col-width mb-1 head"},[e._v(" "+e._s(e.total(t.name))+" ")])],1)})),a("v-col",{staticClass:"col-width mb-1 head"},[e._v(" "+e._s(e.grandTotal())+" ")])],2)]),a("v-row",[a("div",{staticClass:"total-row"},[a("v-col",{staticClass:"mb-1 controls"}),a("v-col",{staticClass:"date mb-1"},[e._v("Total Days")]),e._l(e.times[0].people,(function(t,n){return a("div",{key:n},[a("v-col",{staticClass:"col-width mb-1 head"},[e._v(" "+e._s(e.total(t.name,!0))+" ")])],1)})),a("v-col",{staticClass:"col-width mb-1 head"},[e._v(" "+e._s(e.grandTotal(!0))+" ")])],2)])],2)}),O=[],V=(a("d81d"),a("0d03"),a("7db0"),a("13d5"),a("e25e"),a("498a"),a("4c9f")),T=a("340b"),j=(a("f2da"),7.5),S=[{name:"Mick",hours:j+0,role:"Developer"},{name:"Ben",hours:j+0,role:"Developer"},{name:"Ethan",hours:j+0,role:"Developer"},{name:"Michelle",hours:j+0,role:"Tester"}],B=function(e,t){var a=e.people.map((function(e){return e.hours=t+0,e})),n=e.date.getDay()>4?8-e.date.getDay():1,o=Object(T["addDays"])(e.date,n),s=JSON.parse(JSON.stringify(a));return{date:o,people:s}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(T["addDays"])(new Date,14),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S,n=arguments.length>3?arguments[3]:void 0,o=[],s=Object(T["differenceInDays"])(e,t),r=s>0?s:-1*s;localStorage.setItem("DAY_QTY",r+"");for(var i=t>e?e:t,l=0;l<r;l++)0==l?o.push({date:i,people:a}):o.push(B(o[l-1],n));return o},I=function(e,t,a){try{var n=new Date(t[0]),o=new Date(t[1]),s=$(n,o,e,a);return s}catch(r){console.error(r)}return[]},P=n["a"].extend({name:"days",filters:{date:V["dateFilter"]},props:["people","dateRange","defaultHours"],methods:{resetDates:function(e){new Date(e[0]),new Date(e[1])},addDay:function(){var e=this.times[this.times.length-1],t=B(e,this.hoursPerDay);this.times.push(t)},allZero:function(e){var t=this.times[e].people.find((function(e){return e.hours>0}));return null==t},zeroDay:function(e){var t=this.allZero(e)?this.hoursPerDay:0,a=this.times[e].people.map((function(e){return e.hours=t,e}));this.times[e].people=a},allDayDown:function(e){var t=this.times[e].people.map((function(e){return e.hours=e.hours-1,e}));this.times[e].people=t},allDayUp:function(e){var t=this.times[e].people.map((function(e){return e.hours=e.hours+1,e}));this.times[e].people=t},grandTotal:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=this.times[0].people,n=a.map((function(t){return e.total(t.name)})).reduce((function(e,t){return e+t})),o=t?n/this.hoursPerDay:n,s=parseInt(o);return t||this.$emit("times-changed",{times:this.times,timeBudget:s}),s},total:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.times.map((function(t){var a=t.people.find((function(t){return t.name===e}));if(void 0==a)return 0;if("number"==typeof a.hours)return a.hours;var n=a.hours+"";if(0==n.trim().length)return 0;try{return parseInt(n)}catch(o){console.error(o)}return 0})),n=a.reduce((function(e,t){return e+t})),o=t?n/this.hoursPerDay:n;return parseInt(o)}},data:function(){var e=this.defaultHours?this.defaultHours:j,t=I(this.people,this.dateRange,e),a="",n="",o=!1;return{times:t,name:a,role:n,dialog:o,hoursPerDay:e}}}),R=P,A=a("62ad"),H=a("a523"),E=a("0fd9"),F=a("8654"),N=Object(l["a"])(R,M,O,!1,null,null,null),J=N.exports;u()(N,{VBtn:v["a"],VCol:A["a"],VContainer:H["a"],VRow:E["a"],VTextField:F["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-date-picker",{attrs:{range:""},on:{change:function(t){return e.picked()}},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1)},Y=[],z=(a("accc"),10),L=n["a"].extend({name:"dates",methods:{picked:function(){this.$emit("dates-picked",this.dates)}},data:function(){var e=new Date,t=localStorage.getItem("DAY_QTY"),a=t?parseInt(t):z,n=Object(T["addDays"])(e,a),o=e.toISOString().substr(0,10),s=n.toISOString().substr(0,10),r=[o,s];return this.$emit("dates-picked",r),{dates:r}}}),Q=L,U=a("2e4b"),Z=Object(l["a"])(Q,q,Y,!1,null,null,null),G=Z.exports;u()(Z,{VDatePicker:U["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{staticClass:"link"},[a("v-text-field",{attrs:{label:"Ticket link"}}),a("v-btn",{staticClass:"butt",attrs:{small:"",elevation:"2",text:""},on:{click:function(t){return e.reset()}}},[e._v(" Clear All ")])],1),e.times[0]?a("div",{staticClass:"people-lines"},[e._l(e.times[0].people,(function(t,n){return a("div",{key:n},[a("div",{staticClass:"people-row"},[a("v-col",{staticClass:"col-width mb-1 head"},[e._v(" "+e._s(t.name)+" ")]),a("v-checkbox",{attrs:{hint:"Remember this"},model:{value:e.pins[t.name],callback:function(a){e.$set(e.pins,t.name,a)},expression:"pins[person.name]"}}),a("v-text-field",{attrs:{label:"Ticket / Meeting etc"},model:{value:e.descs[t.name],callback:function(a){e.$set(e.descs,t.name,a)},expression:"descs[person.name]"}}),a("v-text-field",{attrs:{type:"number",label:"Hours"},model:{value:e.hours[t.name],callback:function(a){e.$set(e.hours,t.name,a)},expression:"hours[person.name]"}}),a("v-btn",{staticClass:"butt",attrs:{small:"",elevation:"2",fab:"",icon:""},on:{click:function(a){return e.add(t.name,t.role)}}},[a("v-icon",[e._v("mdi-plus")])],1),a("div")],1),e.peopleMap&&e.peopleMap[t.name]?a("div",[e._l(e.peopleMap[t.name].times,(function(n,o){return a("div",{key:o,staticClass:"people-row"},[a("span"),a("v-checkbox",{attrs:{hint:"Remember this"},model:{value:n.pin,callback:function(t){e.$set(n,"pin",t)},expression:"personTime.pin"}}),a("v-text-field",{attrs:{label:"Ticket / Meeting etc"},model:{value:n.desc,callback:function(t){e.$set(n,"desc",t)},expression:"personTime.desc"}}),a("v-text-field",{attrs:{type:"number",label:"Hours"},model:{value:n.hours,callback:function(t){e.$set(n,"hours",t)},expression:"personTime.hours"}}),a("v-btn",{staticClass:"butt",attrs:{small:"",elevation:"2",fab:"",icon:""},on:{click:function(a){return e.take(t.name,o)}}},[a("v-icon",[e._v("mdi-minus")])],1),a("div")],1)})),a("div",{staticClass:"people-row"},[a("div"),a("div"),a("div"),a("div"),a("div",{staticClass:"total"},[e._v("Total")]),a("div",{staticClass:"total"},[e._v(e._s(e.total(e.peopleMap[t.name].times)))]),a("div")])],2):e._e()])})),a("br"),a("br"),a("div",{staticClass:"people-row"},[a("div"),a("div"),a("div"),a("div"),a("div",{staticClass:"total"},[e._v("Grand")]),a("div",{staticClass:"total"},[e._v(e._s(e.grandTotal()))]),a("div")]),a("div",{staticClass:"people-row"},[a("div"),a("div"),a("div"),a("div"),a("div",{staticClass:"total"},[e._v("Continuity")]),a("div",{staticClass:"total"},[e._v(e._s(e.continuity()))]),a("div")]),a("div",{staticClass:"gap"})],2):e._e()],1)},X=[],K=(a("acd8"),a("b64b"),a("c975"),a("4160"),a("159b"),a("4de4"),a("147b"),function(e){var t=e.reduce((function(e,t){var a={hours:parseFloat(e.hours+"")+parseFloat(t.hours+""),pin:!1,desc:""};return a}));return t.hours}),ee=function(e){var t=Object.keys(e),a=t.map((function(t){var a=e[t],n=K(a.times);return parseInt(""+n)}));if(0==a.length)return 0;var n=a.reduce((function(e,t){return e+t}));return n},te=function(e){localStorage.setItem("fill",JSON.stringify(e))},ae={},ne=n["a"].extend({name:"work",props:["times","timeBudget"],methods:{add:function(e,t){var a=e,n=""+this.descs[a],o=!!this.pins[a],s=0+this.hours[a];if(n&&!(s<=0)){var r=this.peopleMap[a],i=r||{name:e,role:t,times:new Array},l={pin:o,desc:n,hours:s};i.times.push(l),this.peopleMap[a]=i;var c=n.indexOf("-"),u=c>-1?n.substring(0,c+1):"";this.descs[a]=u,this.pins[a]=!1,this.hours[a]=0}},take:function(e,t){var a=this.peopleMap[e],n=a.times;n.splice(t),this.peopleMap[e]={name:a.name,role:a.role,times:n}},total:function(e){return K(e)},grandTotal:function(){return ee(this.peopleMap)},continuity:function(){te(this.peopleMap);var e=ee(this.peopleMap);return this.timeBudget-e},reset:function(){var e=this,t=Object.keys(this.peopleMap);t.forEach((function(t){var a=e.peopleMap[t],n=a.times.filter((function(e){return e.pin}));a.times=n,e.peopleMap[t]=a}))}},watch:{times:function(e,t){var a=localStorage.getItem("fill");ae=a?JSON.parse(a):this.peopleMap?this.peopleMap:{},this.peopleMap=ae}},data:function(){var e=new Array,t={},a={},n={},o=ae;return{tickets:e,pins:t,hours:a,descs:n,peopleMap:o}}}),oe=ne,se=a("ac7c"),re=Object(l["a"])(oe,W,X,!1,null,null,null),ie=re.exports;u()(re,{VBtn:v["a"],VCheckbox:se["a"],VCol:A["a"],VIcon:f["a"],VRow:E["a"],VTextField:F["a"]});a("4f4f");var le=7.5,ce=[{name:"Mick",hours:le+0,role:"Developer"},{name:"Ben",hours:le+0,role:"Developer"},{name:"Ethan",hours:le+0,role:"Developer"},{name:"Michelle",hours:le+0,role:"Tester"}],ue=n["a"].extend({name:"fill",components:{days:J,dates:G,work:ie},methods:{dates:function(e){this.dateRange=e},ready:function(){return 2==this.dateRange.length&&this.people.length>0},add:function(){var e={name:this.name,role:this.role,hours:le};this.people.push(e),this.name="",this.role=""},drop:function(e){this.people.splice(e)},done:function(){this.showDays=!0},update:function(e){this.times=e.times,this.timeBudget=e.timeBudget}},data:function(){return{showDays:!1,dateRange:[],people:ce,name:"",role:"",timeBudget:0,defaultHours:7.5,times:[]}}}),de=ue,pe=a("c6a6"),ve=a("b0af"),fe=a("99d9"),me=Object(l["a"])(de,x,D,!1,null,null,null),he=me.exports;u()(me,{VAutocomplete:pe["a"],VBtn:v["a"],VCard:ve["a"],VCardActions:fe["a"],VCardSubtitle:fe["b"],VCardTitle:fe["c"],VCol:A["a"],VRow:E["a"],VTextField:F["a"]});var be=n["a"].extend({name:"Home",components:{fill:he}}),ge=be,ye=Object(l["a"])(ge,C,k,!1,null,null,null),_e=ye.exports;n["a"].use(w["a"]);var we=[{path:"/",name:"Home",component:_e},{path:"/fill",name:"Fill",component:he},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ce=new w["a"]({routes:we}),ke=Ce,xe=a("2f62");n["a"].use(xe["a"]);var De=new xe["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Me=a("f309");n["a"].use(Me["a"]);var Oe=new Me["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ke,store:De,vuetify:Oe,render:function(e){return e(y)}}).$mount("#app")},f2da:function(e,t,a){}});
//# sourceMappingURL=app.fa8919a6.js.map