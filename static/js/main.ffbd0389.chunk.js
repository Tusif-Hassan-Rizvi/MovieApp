(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),o=(a(13),a(1));a(15);function i(){return c.a.createElement("h1",{className:"header"},"MovieApp")}function u(e){return c.a.createElement("div",{className:"inputbox"},c.a.createElement("input",{type:"search",placeholder:"Type movie name here ex: lucy",value:e.data,onChange:e.HandleChange}),c.a.createElement("button",{onClick:e.handleClick},"Search"))}function m(e){return c.a.createElement("div",{className:"container data-box"},c.a.createElement("div",{className:"row"},0===e.getdata.length?c.a.createElement("h1",{className:"nodatafound"},"Movie not found!"):e.getdata.map(function(e,t){return c.a.createElement("div",{className:"col-xl-2 col-lg-4 col-md-6 col-sm-12 main-data-box",key:t},c.a.createElement("img",{className:"image",src:e.image,alt:"movieImage"}),c.a.createElement("div",null,e.titleOriginal),c.a.createElement("div",null,e.rating," IMDb"),c.a.createElement("div",null,e.countries.map(function(e,t){return c.a.createElement("span",{key:t},e.name," ")})),c.a.createElement("div",null,e.release),c.a.createElement("div",{className:"stream-link"},e.embedUrls.map(function(e,t){return c.a.createElement("a",{href:e.url,className:"links",target:"_blank",key:t},e.server)})))})))}var s=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),d=s[0],p=s[1],f=Object(n.useState)([]),h=Object(o.a)(f,2),E=h[0],g=h[1];return Object(n.useEffect)(function(){fetch("https://movies-app1.p.rapidapi.com/api/movies?query=".concat(d),{method:"GET",headers:{"X-RapidAPI-Key":"2e55db2a2fmsh05d234eb2f8078ap1143c5jsn2c0955a8d78a","X-RapidAPI-Host":"movies-app1.p.rapidapi.com"}}).then(function(e){return e.json()}).then(function(e){g(e.results)}).catch(function(e){return console.error(e)})},[d]),c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(u,{data:a,handleClick:function(e){e.preventDefault(),p(a),console.log(d)},HandleChange:function(e){l(e.target.value)}}),c.a.createElement(m,{getdata:E}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null))),d()},4:function(e,t,a){e.exports=a(18)}},[[4,3,2]]]);
//# sourceMappingURL=main.ffbd0389.chunk.js.map