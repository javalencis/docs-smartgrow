"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[2826],{3710:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var r=o(5893),s=o(1151);const l={id:"blocks-controllers-js",title:"blocks.controllers.js"},c="Archivo blocks.controllers.js",a={id:"APIDocs/Archivos/controllers/blocks-controllers-js",title:"blocks.controllers.js",description:"El archivo blocks.controllers.js contiene los controladores responsables de gestionar las operaciones relacionadas con los bloques en la API. Estos controladores abordan la b\xfasqueda de bloques, el almacenamiento de nuevos bloques y la actualizaci\xf3n de informaci\xf3n de bloques existentes.",source:"@site/docs/APIDocs/Archivos/controllers/blocks.md",sourceDirName:"APIDocs/Archivos/controllers",slug:"/APIDocs/Archivos/controllers/blocks-controllers-js",permalink:"/docs/APIDocs/Archivos/controllers/blocks-controllers-js",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-controllers-js",title:"blocks.controllers.js"},sidebar:"tutorialSidebar",previous:{title:"alerts.controllers.js",permalink:"/docs/APIDocs/Archivos/controllers/alerts-controllers-js"},next:{title:"control.controllers.js",permalink:"/docs/APIDocs/Archivos/controllers/control-controllers-js"}},t={},i=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"archivo-blockscontrollersjs",children:["Archivo ",(0,r.jsx)(e.code,{children:"blocks.controllers.js"})]}),"\n",(0,r.jsxs)(e.p,{children:["El archivo ",(0,r.jsx)(e.code,{children:"blocks.controllers.js"})," contiene los controladores responsables de gestionar las operaciones relacionadas con los bloques en la API. Estos controladores abordan la b\xfasqueda de bloques, el almacenamiento de nuevos bloques y la actualizaci\xf3n de informaci\xf3n de bloques existentes."]}),"\n",(0,r.jsx)(e.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"// Importar el modelo de Bloque, la instancia del cliente MQTT y la instancia de la aplicaci\xf3n Express\r\nimport Block from '../models/block.model.js';\r\nimport client from '../mqtt/client.js';\r\nimport app from '../app.js';\r\n\r\n// Controlador para buscar bloques y establecer una conexi\xf3n SSE (Server-Sent Events)\r\nexport const findBlocks = async (req, res) => {\r\n    res.writeHead(200, {\r\n        'Content-Type': 'text/event-stream',\r\n        'Cache-Control': 'no-cache',\r\n        'Connection': 'keep-alive'\r\n    });\r\n\r\n    const blocks = await Block.find();\r\n    res.write(`data: ${JSON.stringify(blocks)}\\n\\n`);\r\n\r\n    // Configurar un oyente para eventos de bloques y enviar actualizaciones a trav\xe9s de SSE\r\n    app.on('blocks', async () => {\r\n        const blocks = await Block.find();\r\n        res.write(`data: ${JSON.stringify(blocks)}\\n\\n`);\r\n    });\r\n};\r\n\r\n// Controlador para almacenar un nuevo bloque\r\nexport const saveBlock = async (req, res) => {\r\n    const { bloque } = req.body;\r\n    try {\r\n        const foundBlock = await Block.findOne({ bloque });\r\n\r\n        // Verificar si el bloque ya existe\r\n        if (foundBlock) {\r\n            return res.json({\r\n                status: false,\r\n                message: \"El bloque ya se encuentra almacenado\"\r\n            });\r\n        }\r\n\r\n        // Crear y guardar un nuevo bloque\r\n        const newBlock = new Block(req.body);\r\n        const blockSaved = await newBlock.save();\r\n\r\n        res.status(200).json({\r\n            status: true,\r\n            message: \"Bloque creado con \xe9xito\",\r\n            block: blockSaved\r\n        });\r\n    } catch (error) {\r\n        res.json({\r\n            status: false,\r\n            message: \"El bloque no pudo ser creado\",\r\n            error\r\n        });\r\n    }\r\n};\r\n\r\n// Controlador para actualizar la informaci\xf3n de un bloque\r\nexport const updateBlock = async (req, res) => {\r\n    try {\r\n        const { bloque } = req.body;\r\n\r\n        // Actualizar el bloque en la base de datos\r\n        const blockUpdated = await Block.findOneAndUpdate({ bloque }, req.body, {\r\n            new: true\r\n        });\r\n\r\n        // Configurar datos de control para el cliente MQTT\r\n        const controlEsp = {\r\n            start_time: blockUpdated.hora_inicio,\r\n            end_time: blockUpdated.hora_final,\r\n            on_time: blockUpdated.tiempo_encendido,\r\n            off_time: blockUpdated.tiempo_apagado\r\n        };\r\n\r\n        // Publicar informaci\xf3n de control al cliente MQTT\r\n        client.publish('capiro/bloques/control', JSON.stringify(controlEsp), (error) => {\r\n            console.log(\"No se pudo enviar el mensaje\");\r\n            console.log(error);\r\n        });\r\n\r\n        res.status(200).json({\r\n            status: true,\r\n            message: \"Bloque actualizado\",\r\n            block: blockUpdated\r\n        });\r\n    } catch (error) {\r\n        res.json({\r\n            status: false,\r\n            message: \"El bloque no pudo ser actualizado\",\r\n            error\r\n        });\r\n    }\r\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Controlador ",(0,r.jsx)(e.code,{children:"findBlocks"}),":"]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Este controlador busca bloques en la base de datos y establece una conexi\xf3n SSE para enviar actualizaciones a los clientes en tiempo real."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Controlador ",(0,r.jsx)(e.code,{children:"saveBlock"}),":"]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Gestiona el almacenamiento de un nuevo bloque verificando primero si ya existe. Retorna un mensaje indicando si el bloque se almacen\xf3 correctamente."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Controlador ",(0,r.jsx)(e.code,{children:"updateBlock"}),":"]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Actualiza la informaci\xf3n de un bloque existente en la base de datos. Adem\xe1s, publica informaci\xf3n de control al cliente MQTT para sincronizar cambios."}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>a,a:()=>c});var r=o(7294);const s={},l=r.createContext(s);function c(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);