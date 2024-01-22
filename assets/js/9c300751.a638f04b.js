"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[8519],{1030:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=e(5893),o=e(1151);const a={id:"user-controllers-js",title:"user.controllers.js"},t="Archivo user.controllers.js",i={id:"APIDocs/Archivos/controllers/user-controllers-js",title:"user.controllers.js",description:"El archivo user.controllers.js contiene los controladores relacionados con la gesti\xf3n de usuarios en la API. Estos controladores se encargan del registro de usuarios, inicio de sesi\xf3n, visualizaci\xf3n de perfiles y b\xfasqueda de usuarios.",source:"@site/docs/APIDocs/Archivos/controllers/user.md",sourceDirName:"APIDocs/Archivos/controllers",slug:"/APIDocs/Archivos/controllers/user-controllers-js",permalink:"/docs/APIDocs/Archivos/controllers/user-controllers-js",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user-controllers-js",title:"user.controllers.js"},sidebar:"tutorialSidebar",previous:{title:"garlands.controllers.js",permalink:"/docs/APIDocs/Archivos/controllers/garlands-controllers-js"},next:{title:"functions.js",permalink:"/docs/APIDocs/Archivos/libs/functions-js"}},c={},l=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"archivo-usercontrollersjs",children:["Archivo ",(0,s.jsx)(n.code,{children:"user.controllers.js"})]}),"\n",(0,s.jsxs)(n.p,{children:["El archivo ",(0,s.jsx)(n.code,{children:"user.controllers.js"})," contiene los controladores relacionados con la gesti\xf3n de usuarios en la API. Estos controladores se encargan del registro de usuarios, inicio de sesi\xf3n, visualizaci\xf3n de perfiles y b\xfasqueda de usuarios."]}),"\n",(0,s.jsx)(n.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// Importar funciones y modelos necesarios\r\nimport { createAccessToken } from \'../libs/jwt.js\';\r\nimport User from \'../models/user.model.js\';\r\nimport bcrypt from \'bcryptjs\';\r\n\r\n// Controlador para registrar un nuevo usuario\r\nexport const register = async (req, res) => {\r\n    const { username, password, name, role } = req.body;\r\n\r\n    // Verificar permisos de administrador\r\n    if (req.user.role !== \'admin\') {\r\n        return res.json({\r\n            status: false,\r\n            message: "Permiso denegado"\r\n        });\r\n    }\r\n\r\n    try {\r\n        // Generar hash de la contrase\xf1a\r\n        const passwordHash = await bcrypt.hash(password, 10);\r\n\r\n        // Crear nuevo usuario y almacenar en la base de datos\r\n        const newUser = new User({\r\n            username,\r\n            password: passwordHash,\r\n            name,\r\n            role\r\n        });\r\n\r\n        const userSaved = await newUser.save();\r\n\r\n        res.status(200).json({\r\n            status: true,\r\n            message: "Usuario almacenado con \xe9xito",\r\n            user: {\r\n                username: userSaved.username,\r\n                name: userSaved.name,\r\n                role: userSaved.role,\r\n                createdAt: userSaved.createdAt\r\n            }\r\n        });\r\n\r\n    } catch (error) {\r\n        res.json({\r\n            status: false,\r\n            message: "Error almacenando usuario",\r\n            error\r\n        });\r\n    }\r\n};\r\n\r\n// Controlador para iniciar sesi\xf3n de un usuario\r\nexport const login = async (req, res) => {\r\n    const { username, password } = req.body;\r\n\r\n    try {\r\n        // Buscar usuario por nombre de usuario\r\n        const userFound = await User.findOne({ username });\r\n\r\n        // Verificar coincidencia de contrase\xf1as\r\n        const isMatch = await bcrypt.compare(password, userFound.password);\r\n        if (!isMatch) {\r\n            return res.json({\r\n                status: false,\r\n                message: "Contrase\xf1a incorrecta"\r\n            });\r\n        }\r\n\r\n        // Crear token de acceso y responder con informaci\xf3n del usuario y token\r\n        const token = await createAccessToken({\r\n            id: userFound._id,\r\n            username: userFound.username,\r\n            role: userFound.role,\r\n            name: userFound.name\r\n        });\r\n\r\n        res.status(200).json({\r\n            status: true,\r\n            messaje: "Usuario encontrado",\r\n            user: {\r\n                id: userFound._id,\r\n                username: userFound.username,\r\n                role: userFound.role,\r\n                name: userFound.name\r\n            },\r\n            token\r\n        });\r\n\r\n    } catch (error) {\r\n        res.json({\r\n            status: false,\r\n            message: "Usuario o contrase\xf1a incorrecta",\r\n            error\r\n        });\r\n    }\r\n};\r\n\r\n// Controlador para obtener el perfil de un usuario autenticado\r\nexport const profile = async (req, res) => {\r\n    // Buscar usuario por su ID y omitir la contrase\xf1a en la respuesta\r\n    const userFound = await User.findById(req.user.id).select({ password: 0 });\r\n\r\n    if (!userFound) {\r\n        return res.json({\r\n            status: false,\r\n            message: "Usuario no encontrado"\r\n        });\r\n    }\r\n\r\n    res.status(200).json({\r\n        status: true,\r\n        message: "Usuario encontrado",\r\n        user: userFound\r\n    });\r\n};\r\n\r\n// Controlador para buscar todos los usuarios (sin incluir la contrase\xf1a)\r\nexport const findUsers = async (req, res) => {\r\n    // Buscar todos los usuarios y omitir la contrase\xf1a en la respuesta\r\n    const users = await User.find().select({ password: 0 });\r\n\r\n    res.status(200).json({\r\n        status: true,\r\n        users\r\n    });\r\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Controlador ",(0,s.jsx)(n.code,{children:"register"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Registra un nuevo usuario en la base de datos, requiere permisos de administrador."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Controlador ",(0,s.jsx)(n.code,{children:"login"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Inicia sesi\xf3n de un usuario verificando las credenciales y responde con un token de acceso."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Controlador ",(0,s.jsx)(n.code,{children:"profile"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Obtiene el perfil del usuario autenticado omitiendo la contrase\xf1a en la respuesta."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Controlador ",(0,s.jsx)(n.code,{children:"findUsers"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Busca y responde con todos los usuarios de la base de datos (sin incluir la contrase\xf1a)."}),"\n"]}),"\n"]}),"\n"]})]})}function u(r={}){const{wrapper:n}={...(0,o.a)(),...r.components};return n?(0,s.jsx)(n,{...r,children:(0,s.jsx)(d,{...r})}):d(r)}},1151:(r,n,e)=>{e.d(n,{Z:()=>i,a:()=>t});var s=e(7294);const o={},a=s.createContext(o);function t(r){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function i(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:t(r.components),s.createElement(a.Provider,{value:n},r.children)}}}]);