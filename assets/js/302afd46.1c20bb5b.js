"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[6137],{9753:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=o(5893),s=o(1151);const c={id:"db-js",title:"db.js",sidebar_position:3},a="Archivo db.js",i={id:"APIDocs/Archivos/db-js",title:"db.js",description:"El archivo db.js contiene la funci\xf3n connectDB, encargada de establecer la conexi\xf3n con la base de datos MongoDB utilizando Mongoose.",source:"@site/docs/APIDocs/Archivos/db.md",sourceDirName:"APIDocs/Archivos",slug:"/APIDocs/Archivos/db-js",permalink:"/docs/APIDocs/Archivos/db-js",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"db-js",title:"db.js",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"app.js",permalink:"/docs/APIDocs/Archivos/app-js"},next:{title:"alerts.controllers.js",permalink:"/docs/APIDocs/Archivos/controllers/alerts-controllers-js"}},t={},d=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"archivo-dbjs",children:["Archivo ",(0,r.jsx)(n.code,{children:"db.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["El archivo ",(0,r.jsx)(n.code,{children:"db.js"})," contiene la funci\xf3n ",(0,r.jsx)(n.code,{children:"connectDB"}),", encargada de establecer la conexi\xf3n con la base de datos MongoDB utilizando Mongoose."]}),"\n",(0,r.jsx)(n.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Importar la biblioteca Mongoose para la conexi\xf3n a MongoDB\r\nimport mongoose from 'mongoose';\r\n\r\n// Definir la funci\xf3n para conectar a la base de datos\r\nexport async function connectDB() {\r\n    try { \r\n        // Intentar conectar con la base de datos utilizando la URL proporcionada en las variables de entorno\r\n        await mongoose.connect(process.env.MONGODB_URL);\r\n\r\n        // Mostrar mensaje en la consola si la conexi\xf3n es exitosa\r\n        console.log('>> DB is connected');\r\n    } catch (error) {\r\n        // Capturar y mostrar cualquier error que ocurra durante la conexi\xf3n\r\n        console.log(error);\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Biblioteca Mongoose:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Se importa la biblioteca Mongoose, que proporciona una interfaz de modelado de objetos MongoDB para Node.js."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Funci\xf3n ",(0,r.jsx)(n.code,{children:"connectDB"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:"connectDB"})," es as\xedncrona y se encarga de realizar la conexi\xf3n a la base de datos. Utiliza la URL de conexi\xf3n definida en ",(0,r.jsx)(n.code,{children:"process.env.MONGODB_URL"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Manejo de Errores:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Se incluye un bloque ",(0,r.jsx)(n.code,{children:"try...catch"})," para manejar cualquier error que pueda ocurrir durante la conexi\xf3n. En caso de \xe9xito, se muestra un mensaje indicando que la base de datos est\xe1 conectada."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Este archivo es esencial para establecer la conexi\xf3n con la base de datos MongoDB antes de iniciar la aplicaci\xf3n, asegurando que la aplicaci\xf3n pueda interactuar con la base de datos de manera efectiva."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>a});var r=o(7294);const s={},c=r.createContext(s);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);