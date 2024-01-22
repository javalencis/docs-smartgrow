"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[4729],{8269:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var a=n(5893),s=n(1151);const t={id:"alerts-controllers-js",title:"alerts.controllers.js"},o="Archivo alerts.controllers.js",l={id:"APIDocs/Archivos/controllers/alerts-controllers-js",title:"alerts.controllers.js",description:"El archivo alerts.controllers.js contiene los controladores que gestionan las operaciones relacionadas con las alertas en la API. Estos controladores se encargan de buscar alertas, actualizar el estado de una alerta y crear nuevas alertas.",source:"@site/docs/APIDocs/Archivos/controllers/alerts.md",sourceDirName:"APIDocs/Archivos/controllers",slug:"/APIDocs/Archivos/controllers/alerts-controllers-js",permalink:"/docs/APIDocs/Archivos/controllers/alerts-controllers-js",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alerts-controllers-js",title:"alerts.controllers.js"},sidebar:"tutorialSidebar",previous:{title:"db.js",permalink:"/docs/APIDocs/Archivos/db-js"},next:{title:"blocks.controllers.js",permalink:"/docs/APIDocs/Archivos/controllers/blocks-controllers-js"}},c={},i=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"archivo-alertscontrollersjs",children:["Archivo ",(0,a.jsx)(r.code,{children:"alerts.controllers.js"})]}),"\n",(0,a.jsxs)(r.p,{children:["El archivo ",(0,a.jsx)(r.code,{children:"alerts.controllers.js"})," contiene los controladores que gestionan las operaciones relacionadas con las alertas en la API. Estos controladores se encargan de buscar alertas, actualizar el estado de una alerta y crear nuevas alertas."]}),"\n",(0,a.jsx)(r.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"// Importar el modelo de Alerta y la instancia de la aplicaci\xf3n Express\r\nimport Alert from '../models/alert.model.js';\r\nimport app from '../app.js';\r\n\r\n// Controlador para buscar alertas y establecer una conexi\xf3n SSE (Server-Sent Events)\r\nexport const findAlerts = async (req, res) => {\r\n    res.writeHead(200, {\r\n        'Content-Type': 'text/event-stream',\r\n        'Cache-Control': 'no-cache',\r\n        'Connection': 'keep-alive'\r\n    });\r\n\r\n    const alerts = await Alert.find();\r\n    res.write(`data: ${JSON.stringify(alerts)}\\n\\n`);\r\n\r\n    // Configurar un oyente para eventos de alerta y enviar actualizaciones a trav\xe9s de SSE\r\n    app.on('alert', async () => {\r\n        const alerts = await Alert.find();\r\n        res.write(`data: ${JSON.stringify(alerts)}\\n\\n`);\r\n    });\r\n};\r\n\r\n// Controlador para actualizar el estado y la edici\xf3n de una alerta\r\nexport const updateAlert = async (req, res) => {\r\n    const { id, estado, edicion } = req.body;\r\n    const usuario = {\r\n        _id: req.user.id,\r\n        usuario: req.user.username,\r\n        nombre: req.user.name\r\n    };\r\n\r\n    // Actualizar la alerta en la base de datos\r\n    const alertUpdated = await Alert.findByIdAndUpdate(id, { estado, edicion, usuario }, {\r\n        new: true\r\n    });\r\n\r\n    // Emitir un evento de alerta para notificar a los clientes\r\n    app.emit('alert');\r\n\r\n    res.status(200).json({\r\n        status: true,\r\n        message: \"Alerta actualizada\",\r\n        alerta: alertUpdated\r\n    });\r\n};\r\n\r\n// Controlador para crear una nueva alerta\r\nexport const createAlert = async (req, res) => {\r\n    try {\r\n        const newAlert = new Alert(req.body);\r\n        const alertSaved = await newAlert.save();\r\n\r\n        // Emitir un evento de alerta para notificar a los clientes\r\n        app.emit('alert');\r\n\r\n        res.status(200).json({\r\n            status: true,\r\n            message: \"Alerta agregada\",\r\n            alerta: alertSaved\r\n        });\r\n    } catch (error) {\r\n        res.json({\r\n            status: false,\r\n            message: \"Alerta no pudo ser agregada\",\r\n            error\r\n        });\r\n    }\r\n};\n"})}),"\n",(0,a.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsxs)(r.strong,{children:["Controlador ",(0,a.jsx)(r.code,{children:"findAlerts"}),":"]})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Este controlador se encarga de buscar alertas en la base de datos y establecer una conexi\xf3n ",(0,a.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events",children:"SSE (Server-Sent Events)"})," para enviar actualizaciones a los clientes en tiempo real."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsxs)(r.strong,{children:["Controlador ",(0,a.jsx)(r.code,{children:"updateAlert"}),":"]})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Gestiona la actualizaci\xf3n del estado y la edici\xf3n de una alerta existente en la base de datos. Adem\xe1s, emite un evento de alerta para notificar a los clientes."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsxs)(r.strong,{children:["Controlador ",(0,a.jsx)(r.code,{children:"createAlert"}),":"]})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Crea una nueva alerta a partir de los datos proporcionados en la solicitud. Emite un evento de alerta para informar a los clientes sobre la adici\xf3n de una nueva alerta."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>o});var a=n(7294);const s={},t=a.createContext(s);function o(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);