"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[7093],{7617:(e,A,r)=>{r.r(A),r.d(A,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(5893),t=r(1151);const o={id:"filteralerts-component-jsx",title:"FilterAlerts.jsx"},i="Componente FilterAlerts.jsx",l={id:"SmartGrow/Proyecto/components/filteralerts-component-jsx",title:"FilterAlerts.jsx",description:"El componente FilterAlerts.jsx proporciona una interfaz para filtrar las alertas en funci\xf3n de diferentes criterios, como fechas, bloques y guirnaldas.",source:"@site/docs/SmartGrow/Proyecto/components/FilterAlerts.md",sourceDirName:"SmartGrow/Proyecto/components",slug:"/SmartGrow/Proyecto/components/filteralerts-component-jsx",permalink:"/docs/SmartGrow/Proyecto/components/filteralerts-component-jsx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"filteralerts-component-jsx",title:"FilterAlerts.jsx"},sidebar:"tutorialSidebar",previous:{title:"DataBlocks.jsx",permalink:"/docs/SmartGrow/Proyecto/components/datablocks-component-jsx"},next:{title:"Header.jsx",permalink:"/docs/SmartGrow/Proyecto/components/header-jsx"}},s={},a=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Vista del Componente",id:"vista-del-componente",level:2}];function c(e){const A={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A.h1,{id:"componente-filteralertsjsx",children:["Componente ",(0,n.jsx)(A.code,{children:"FilterAlerts.jsx"})]}),"\n",(0,n.jsxs)(A.p,{children:["El componente ",(0,n.jsx)(A.code,{children:"FilterAlerts.jsx"})," proporciona una interfaz para filtrar las alertas en funci\xf3n de diferentes criterios, como fechas, bloques y guirnaldas."]}),"\n",(0,n.jsx)(A.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-jsx",children:"import React from 'react';\r\nimport { useForm } from 'react-hook-form';\r\nimport '../styles/FilterAlerts.scss';\r\nimport { arrayFilter } from '../libs/functions';\r\n\r\nexport const FilterAlerts = ({ alerts, setAlertsAux }) => {\r\n  const { register, handleSubmit, reset } = useForm();\r\n\r\n  const handleClickFilter = (data) => {\r\n    setAlertsAux(arrayFilter(alerts, data));\r\n  };\r\n\r\n  return (\r\n    <>\r\n      <form className='FilterAlerts' onSubmit={handleSubmit(handleClickFilter)}>\r\n        <div className='FilterAlertsDates'>\r\n          <div>\r\n            <label htmlFor=\"dateStart\">Fecha inicio</label>\r\n            <input type=\"date\" id='dateStart' {...register('fecha_inicio')} />\r\n          </div>\r\n          <div>\r\n            <label htmlFor=\"dateEnd\">Fecha final</label>\r\n            <input type=\"date\" id='dateEnd' {...register('fecha_final')} />\r\n          </div>\r\n        </div>\r\n        <div className='FilterAlertsNumbers'>\r\n          <div>\r\n            <label htmlFor=\"block\">Bloque</label>\r\n            <input type=\"number\" id='block' {...register('bloque')} />\r\n          </div>\r\n          <div>\r\n            <label htmlFor=\"garland\">Guirnalda</label>\r\n            <input type=\"number\" id='garland' {...register('guirnalda')} />\r\n          </div>\r\n          <button type='submit'>Filtrar</button>\r\n          <button onClick={() => reset()}>Limpiar</button>\r\n        </div>\r\n      </form>\r\n    </>\r\n  );\r\n};\n"})}),"\n",(0,n.jsx)(A.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsx)(A.p,{children:(0,n.jsxs)(A.strong,{children:["Manejo de Formularios (",(0,n.jsx)(A.code,{children:"useForm"}),"):"]})}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsxs)(A.li,{children:["Utiliza ",(0,n.jsx)(A.code,{children:"useForm"})," de ",(0,n.jsx)(A.code,{children:"react-hook-form"})," para gestionar el formulario y la validaci\xf3n de datos."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsx)(A.p,{children:(0,n.jsxs)(A.strong,{children:["Funci\xf3n de Filtrado (",(0,n.jsx)(A.code,{children:"handleClickFilter"}),"):"]})}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsxs)(A.li,{children:["Al enviar el formulario, utiliza la funci\xf3n ",(0,n.jsx)(A.code,{children:"arrayFilter"})," del archivo ",(0,n.jsx)(A.code,{children:"functions.js"})," para filtrar las alertas en funci\xf3n de los criterios ingresados y actualiza el estado de ",(0,n.jsx)(A.code,{children:"AlertsAux"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsx)(A.p,{children:(0,n.jsxs)(A.strong,{children:["Bot\xf3n de Limpiar (",(0,n.jsx)(A.code,{children:"reset"}),"):"]})}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"Agrega un bot\xf3n para limpiar los campos del formulario"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(A.h2,{id:"vista-del-componente",children:"Vista del Componente"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"filtros",src:r(9943).Z+"",width:"519",height:"100"})}),"\n",(0,n.jsx)(A.p,{children:"Este componente permite a los usuarios filtrar las alertas seg\xfan varios criterios, facilitando la b\xfasqueda y visualizaci\xf3n de informaci\xf3n espec\xedfica."})]})}function d(e={}){const{wrapper:A}={...(0,t.a)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9943:(e,A,r)=>{r.d(A,{Z:()=>n});const n="data:image/png;base64,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"},1151:(e,A,r)=>{r.d(A,{Z:()=>l,a:()=>i});var n=r(7294);const t={},o=n.createContext(t);function i(e){const A=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function l(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:A},e.children)}}}]);