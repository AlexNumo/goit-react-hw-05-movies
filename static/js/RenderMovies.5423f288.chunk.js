"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[116],{559:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e=r(907);var i=r(181);function o(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a,u=r(885),c=r(2791),s=r(3295),l=r(168),f=r(501),d=r(5751),v=r(184),h=(0,d.ZP)(f.OL)(a||(a=(0,l.Z)(["\n    display: flex;\n    padding: 5px 5px 5px 5px;\n      &.active {\n    color: tomato;\n  }\n"]))),p=function(n){var t=n.showMovies;return(0,v.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title;return(0,v.jsx)("li",{children:(0,v.jsx)(h,{to:"/movies/".concat(t),children:r})},t)}))})},m=function(){var n=(0,c.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1];return(0,c.useEffect)((function(){(0,s.s2)().then((function(n){var t=n.results.map((function(n){return{title:n.title,id:n.id}}));e((function(n){return[].concat(o(n),o(t))}))}))}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Trending today"}),(0,v.jsx)(p,{showMovies:r})]})}}}]);
//# sourceMappingURL=RenderMovies.5423f288.chunk.js.map