(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,o,t){"use strict";t.r(o);var l=t(5893),n=t(7294),s=t(2729),a=t.n(s);let r=()=>{let[e,o]=(0,n.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),t=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],[s,r]=(0,n.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),c=(t,l)=>{console.log(t,l),JSON.parse(JSON.stringify(e));let n=[...e];if(n[l][t]=1,o(n),i)for(let e=0;e<10;e++){let e=!1;for(;!e;){let o=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());0===s[o][t]&&(s[o][t]=1,e=!0)}}console.log("bombMap"),console.table(s),console.log("boardMap"),console.table(f)};e.some(e=>e.some(e=>0!==e));let i=1===e.flat().filter(e=>1===e).length;e.some((e,o)=>e.some((e,t)=>1===e&&1===s[o][t]));let f=[];for(let e=0;e<9;e++){let e=[];for(let o=0;o<9;o++)e.push(-1);f.push(e)}for(let o=0;o<9;o++)for(let l=0;l<9;l++)if(1===e[o][l]){if(1===s[o][l])f[o][l]=11;else{let e=0;for(let[n,a]of t){let t=l+n,r=o+a;t>=0&&t<9&&r>=0&&r<9&&1===s[r][t]&&e++}f[o][l]=e}}else 1===s[o][l]?f[o][l]=9:f[o][l]=0;return(0,l.jsx)("div",{className:a().container,children:(0,l.jsx)("div",{className:a().board,children:e.map((e,o)=>e.map((e,t)=>(0,l.jsx)("div",{className:a().cell,onClick:()=>c(t,o),children:0!==e&&(0,l.jsx)("div",{className:a().stone})},"".concat(t,"-").concat(o))))})})};o.default=r},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);