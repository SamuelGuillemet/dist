import{j as n}from"./jsx-runtime.b650ad46.js";import"./index.df40002d.js";const u=({children:e,danger:a,disabled:r,href:o})=>{const d=a??!1,t=r??!1;let s=()=>{};o&&(s=()=>{document.location.href=o});const i="px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition ease-in duration-200 rounded-md shadow-md transform enabled:hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-1";return d?n.jsx("button",{className:`bg-red-600 hover:bg-red-800 disabled:bg-red-800 border-red-600 focus:outline-red-600 ${i}`,disabled:t,children:e}):n.jsx("button",{className:`bg-[#159915] enabled:hover:bg-[#0e650e] disabled:bg-[#063106] border-[#159915] focus:outline-[#159915] ${i}`,disabled:t,onClick:s,children:e})};export{u as Button};
