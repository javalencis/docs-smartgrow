"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[2377],{6974:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(5893),o=r(1151);const s={id:"layout-pages-jsx",title:"LayoutPages.jsx"},t="Archivo LayoutPages.jsx",c={id:"SmartGrow/Proyecto/containers/layout-pages-jsx",title:"LayoutPages.jsx",description:"El archivo LayoutPages.jsx es un componente de React que define el dise\xf1o principal de las p\xe1ginas en la aplicaci\xf3n. Este componente incluye una barra de encabezado (Header), un men\xfa lateral (LateralMenu), y un contenedor de secci\xf3n para mostrar el contenido de las p\xe1ginas.",source:"@site/docs/SmartGrow/Proyecto/containers/LayoutPages.md",sourceDirName:"SmartGrow/Proyecto/containers",slug:"/SmartGrow/Proyecto/containers/layout-pages-jsx",permalink:"/docs/SmartGrow/Proyecto/containers/layout-pages-jsx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"layout-pages-jsx",title:"LayoutPages.jsx"},sidebar:"tutorialSidebar",previous:{title:"LayoutModal.jsx",permalink:"/docs/SmartGrow/Proyecto/containers/layout-modal-jsx"},next:{title:"LayoutPrivate.jsx",permalink:"/docs/SmartGrow/Proyecto/containers/layout-private-jsx"}},i={},l=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"archivo-layoutpagesjsx",children:["Archivo ",(0,a.jsx)(n.code,{children:"LayoutPages.jsx"})]}),"\n",(0,a.jsxs)(n.p,{children:["El archivo ",(0,a.jsx)(n.code,{children:"LayoutPages.jsx"})," es un componente de React que define el dise\xf1o principal de las p\xe1ginas en la aplicaci\xf3n. Este componente incluye una barra de encabezado (",(0,a.jsx)(n.code,{children:"Header"}),"), un men\xfa lateral (",(0,a.jsx)(n.code,{children:"LateralMenu"}),"), y un contenedor de secci\xf3n para mostrar el contenido de las p\xe1ginas."]}),"\n",(0,a.jsx)(n.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'import { useState } from "react";\r\nimport { Header } from "../components/Header";\r\nimport { LateralMenu } from "../components/LateralMenu";\r\nimport \'../styles/LayoutPages.scss\';\r\nimport { useAppContext } from "../contexts/AppContext";\r\n\r\n\r\nexport const LayoutPages = ({ children }) => {\r\n  // Para controlar el estado del men\xfa lateral.\r\n  const { openMenu, setOpenMenu } = useAppContext();\r\n\r\n  return (\r\n    <section className="PagesContainer">\r\n      {/* Barra de encabezado */}\r\n      <Header setOpenMenu={setOpenMenu} />\r\n\r\n      {/* Men\xfa lateral */}\r\n      <LateralMenu />\r\n\r\n      {/* Contenedor de secci\xf3n para el contenido de las p\xe1ginas */}\r\n      <section className={openMenu ? "PageSectionContainer open" : "PageSectionContainer"}>\r\n        {children}\r\n      </section>\r\n    </section>\r\n  );\r\n};\n'})}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Componentes Importados:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Header"}),": Componente que representa la barra de encabezado."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"LateralMenu"}),": Componente que representa el men\xfa lateral."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Estilos Importados:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"LayoutPages.scss"}),": Archivo de estilos espec\xedficos para el componente ",(0,a.jsx)(n.code,{children:"LayoutPages"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Propiedades del Componente:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"children"}),": Elementos secundarios a renderizar dentro del dise\xf1o de p\xe1ginas."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Estado del Men\xfa Lateral:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"openMenu"}),": Estado que controla la apertura o cierre del men\xfa lateral."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"setOpenMenu"}),": Funci\xf3n para actualizar el estado del men\xfa lateral."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Estructura del Componente:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'<section className="PagesContainer">'}),": Contenedor principal del componente ",(0,a.jsx)(n.code,{children:"LayoutPages"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<Header setOpenMenu={setOpenMenu} />"}),": Barra de encabezado con la capacidad de abrir/cerrar el men\xfa lateral."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<LateralMenu />"}),": Men\xfa lateral de la aplicaci\xf3n."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'<section className={openMenu ? "PageSectionContainer open" : "PageSectionContainer"}>'}),": Contenedor de secci\xf3n para el contenido de las p\xe1ginas."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Este componente define la estructura principal para la disposici\xf3n de las p\xe1ginas en la aplicaci\xf3n, incluyendo una barra de encabezado, un men\xfa lateral y un contenedor para el contenido de las p\xe1ginas."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var a=r(7294);const o={},s=a.createContext(o);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);