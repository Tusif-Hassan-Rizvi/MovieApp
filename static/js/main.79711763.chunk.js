(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),i=(a(13),a(1));a(15);function o(){return c.a.createElement("h1",{className:"header"},"MovieData")}var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),u=m[0],s=m[1],d=Object(n.useState)([]),p=Object(i.a)(d,2),f=p[0],v=p[1];return Object(n.useEffect)(function(){fetch("https://movies-app1.p.rapidapi.com/api/movies?query=".concat(u),{method:"GET",headers:{"X-RapidAPI-Key":"a1ce5217f4mshf903431d8cda75ep175079jsn1efbd9f5f6f9","X-RapidAPI-Host":"movies-app1.p.rapidapi.com"}}).then(function(e){return e.json()}).then(function(e){v(e.results)}).catch(function(e){return console.error(e)})},[u]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o,null),c.a.createElement("div",{className:"inputbox"},c.a.createElement("input",{type:"search",placeholder:"Type movie name here ex: lucy",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),s(a)}},"Search")),c.a.createElement("div",{className:"container data-box"},c.a.createElement("div",{className:"row"},f.map(function(e){return c.a.createElement("div",{className:"col-xl-2 col-lg-4 col-md-6 col-sm-12 main-data-box"},c.a.createElement("img",{className:"image",src:e.image,alt:"movieImage"}),c.a.createElement("div",null,e.titleOriginal),c.a.createElement("div",null,e.rating," IMDb"),c.a.createElement("div",null,e.countries.map(function(e){return c.a.createElement("span",null,e.name)})),c.a.createElement("div",null,e.release),c.a.createElement("div",{className:"stream-link"},e.embedUrls.map(function(e){return c.a.createElement("a",{href:e.url,className:"links",target:"_blank"},e.server)})))}))))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null))),u()},4:function(e,t,a){e.exports=a(18)}},[[4,3,2]]]);
//# sourceMappingURL=main.79711763.chunk.js.map