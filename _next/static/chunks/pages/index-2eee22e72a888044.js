(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,o,n){"use strict";n.r(o);var l=n(5893),t=n(7294),c=n(2729),a=n.n(c);let s=()=>{let[e,o]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),n=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],[c,s]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),i=JSON.parse(JSON.stringify(e)),r=JSON.parse(JSON.stringify(c)),_=(e,o)=>{let l=0;for(let[t,a]of n){let n=e+t,s=o+a;n>=0&&n<9&&s>=0&&s<9&&1===c[s][n]&&l++}return l},d=(e,o)=>{if(m[o][e]=_(e,o),0===_(e,o))for(let[l,t]of n){let n=e+l,c=o+t;n>=0&&n<9&&c>=0&&c<9&&-1===m[c][n]&&d(n,c)}},f=0===e.flat().filter(e=>1===e).length;e.some((e,o)=>e.some((e,n)=>1===e&&1===c[o][n]));let m=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]];for(let o=0;o<9;o++)for(let n=0;n<9;n++)1===e[o][n]?1===c[o][n]?m[o][n]=11:d(n,o):2===e[o][n]?m[o][n]=9:3===e[o][n]&&(m[o][n]=10);console.log("bombMap"),console.table(c),console.log("board"),console.table(m);let u=(e,o)=>{document.getElementsByTagName("html")[0].oncontextmenu=()=>!1},N=(e,n)=>{if(console.log(e,n),i[n][e]=1,o(i),f){for(let o=0;o<10;o++){let o=!1;for(;!o;){let l=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0!==r[l][t]||t===e&&l===n||(r[l][t]=1,o=!0)}}console.log("newbombmap"),console.table(r),s(r)}};return(0,l.jsx)("div",{className:a().container,children:(0,l.jsx)("div",{className:a().board,children:m.map((e,o)=>e.map((e,n)=>-1===e?(0,l.jsx)("div",{className:a().cell1,onClick:()=>N(n,o),onContextMenu:()=>u(n,o)},"".concat(n,"-").concat(o)):(0,l.jsxs)("div",{className:a().cell,onClick:()=>N(n,o),children:[11===e&&(0,l.jsx)("div",{className:a().bom}),e>-1&&e<9&&(0,l.jsx)("div",{className:a().icon,style:{backgroundPositionX:-(30*e)+30}})]},"".concat(n,"-").concat(o))))})})};o.default=s},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",icon:"index_icon__Noc_h",bom:"index_bom__ERRzB",cell1:"index_cell1__SO9xL"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);