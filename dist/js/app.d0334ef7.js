(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],l=0,v=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/runcloud-test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0622":function(e,t,n){"use strict";n("2620")},2620:function(e,t,n){},3578:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Contents")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header",attrs:{id:"header"}},[n("h1",[e._v("Where in the world?")]),n("div",{staticClass:"btn-mode"},[n("font-awesome-icon",{staticClass:"icon alt",attrs:{icon:["fas","moon"]}}),n("span",[e._v(" Dark Mode")])],1)])},s=[],c={name:"Header"},u=c,d=(n("c17e"),n("2877")),l=Object(d["a"])(u,o,s,!1,null,"bef44ea2",null),v=l.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[e.isHidden?n("div",{staticClass:"list-container"},[n("div",[n("div",[n("font-awesome-icon",{staticClass:"input-icon",attrs:{icon:["fas","search"]}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Search for a country..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})],1),n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRegion,expression:"selectedRegion"}],attrs:{name:"region",id:"region",value:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedRegion=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Filter by region")]),e._l(e.uniqueList,(function(t){return n("option",{key:t.name,domProps:{value:t}},[e._v(e._s(t))])}))],2)])]),n("div",{attrs:{id:"country-widget"}},e._l(e.resultQuery,(function(t){return n("div",{key:t.name,staticClass:"widget",attrs:{id:t.name},on:{click:function(n){e.isHidden=!e.isHidden|e.showDetails(t)}}},[n("div",[n("img",{attrs:{src:t.flag}})]),n("div",[n("h5",[e._v(e._s(t.name))]),n("div",[e._v("Population: "),n("span",[e._v(e._s(t.population))])]),n("div",[e._v("Region: "),n("span",[e._v(e._s(t.region))])]),n("div",[e._v("Capital: "),n("span",[e._v(e._s(t.capital))])])])])})),0)]):e._e(),e.isHidden?e._e():n("div",{staticClass:"details-container"},[n("div",[n("div",{staticClass:"btn",on:{click:function(t){e.isHidden=!0}}},[n("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-left"]}}),n("span",[e._v(" Back")])],1)]),e._m(0)])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"detail-widget"}},[n("div",{staticClass:"flagDiv"},[n("img",{attrs:{id:"flag"}})]),n("div",{staticClass:"detailsDiv"},[n("h3",{attrs:{id:"countryName"}}),n("div",[n("div",[n("div",[e._v("Native Name: "),n("span",{attrs:{id:"native"}})]),n("div",[e._v("Population: "),n("span",{attrs:{id:"population"}})]),n("div",[e._v("Region: "),n("span",{attrs:{id:"region"}})]),n("div",[e._v("Sub Region: "),n("span",{attrs:{id:"subregion"}})]),n("div",[e._v("Capital: "),n("span",{attrs:{id:"capital"}})])]),n("div",[n("div",[e._v("Top Level Domain: "),n("span",{attrs:{id:"tld"}})]),n("div",[e._v("Currencies: "),n("span",{attrs:{id:"currencies"}})]),n("div",[e._v("Languages: "),n("span",{attrs:{id:"lang"}})])])]),n("div",{attrs:{id:"borderDiv"}},[n("span",[e._v("Border Countries:")])])])])}],m=(n("a623"),n("4de4"),n("caad"),n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("6062"),n("2532"),n("3ca3"),n("1276"),n("ddb0"),n("2909")),g=n("7338"),h={name:"Contents",data:function(){return{searchQuery:null,selectedRegion:"",isHidden:!0,info:[]}},mounted:function(){var e=this;g.get("https://restcountries.eu/rest/v2/all").then((function(t){return e.info=t.data}))},computed:{resultQuery:function(){var e=this,t=this.selectedRegion;return this.searchQuery?this.info.filter((function(t){return e.searchQuery.toLowerCase().split(" ").every((function(e){return t.name.toLowerCase().includes(e)}))})):t?this.info.filter((function(e){return t.toLowerCase().split(" ").every((function(t){return e.region.toLowerCase().includes(t)}))})):this.info},uniqueList:function(){return Object(m["a"])(new Set(this.info.map((function(e){var t=e.region;return t}))))}},methods:{showDetails:function(e){setTimeout((function(){document.getElementById("flag").src=e.flag,document.getElementById("countryName").innerHTML=e.name,document.getElementById("native").innerHTML=e.nativeName,document.getElementById("population").innerHTML=e.population,document.getElementById("region").innerHTML=e.region,document.getElementById("subregion").innerHTML=e.subregion,document.getElementById("capital").innerHTML=e.capital,document.getElementById("tld").innerHTML=e.topLevelDomain.toString(),document.getElementById("currencies").innerHTML=e.currencies[0].name;for(var t=0;t<e.languages.length;t++)document.getElementById("lang").innerHTML+=e.languages[t].name+", ";for(var n=document.getElementById("borderDiv"),i=0;i<e.borders.length;i++){var r=document.createElement("div");r.className="divs",r.innerHTML=e.borders[i],n.appendChild(r)}}),800)}}},y=h,_=(n("0622"),Object(d["a"])(y,p,f,!1,null,"71136088",null)),b=_.exports,w={name:"App",components:{Header:v,Contents:b}},C=w,H=(n("034f"),Object(d["a"])(C,r,a,!1,null,null,null)),L=H.exports,E=n("5fbf"),M=n("58e7"),O=n("c944");E["c"].add(M["b"]),E["c"].add(M["c"]),E["c"].add(M["a"]),i["a"].component("font-awesome-icon",O["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(L)}}).$mount("#app")},"85ec":function(e,t,n){},c17e:function(e,t,n){"use strict";n("3578")}});
//# sourceMappingURL=app.d0334ef7.js.map