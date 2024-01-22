"use strict";(self.webpackChunksmart_grow_capiro=self.webpackChunksmart_grow_capiro||[]).push([[613],{6422:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var o=r(5893),a=r(1151);const i={id:"header-jsx",title:"Header.jsx"},s="Componente Header.jsx",t={id:"SmartGrow/Proyecto/components/header-jsx",title:"Header.jsx",description:"El componente Header representa la barra de encabezado de la aplicaci\xf3n, que contiene el men\xfa desplegable, el logo y el bot\xf3n de notificaciones. Este componente se utiliza en el dise\xf1o de las p\xe1ginas y proporciona funcionalidades para la navegaci\xf3n y la gesti\xf3n de notificaciones.",source:"@site/docs/SmartGrow/Proyecto/components/Header.md",sourceDirName:"SmartGrow/Proyecto/components",slug:"/SmartGrow/Proyecto/components/header-jsx",permalink:"/docs/SmartGrow/Proyecto/components/header-jsx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"header-jsx",title:"Header.jsx"},sidebar:"tutorialSidebar",previous:{title:"FilterAlerts.jsx",permalink:"/docs/SmartGrow/Proyecto/components/filteralerts-component-jsx"},next:{title:"LateralMenu.jsx",permalink:"/docs/SmartGrow/Proyecto/components/lateral-menu-jsx"}},c={},l=[{value:"Contenido del Archivo",id:"contenido-del-archivo",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"componente-headerjsx",children:["Componente ",(0,o.jsx)(n.code,{children:"Header.jsx"})]}),"\n",(0,o.jsxs)(n.p,{children:["El componente ",(0,o.jsx)(n.code,{children:"Header"})," representa la barra de encabezado de la aplicaci\xf3n, que contiene el men\xfa desplegable, el logo y el bot\xf3n de notificaciones. Este componente se utiliza en el dise\xf1o de las p\xe1ginas y proporciona funcionalidades para la navegaci\xf3n y la gesti\xf3n de notificaciones."]}),"\n",(0,o.jsx)(n.h2,{id:"contenido-del-archivo",children:"Contenido del Archivo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\r\nimport iMenu from '../assets/icons/menu-burger.png';\r\nimport iAlert from '../assets/icons/alertas.png';\r\nimport iLogo from '../assets/imgs/logoblanco.png';\r\nimport '../styles/Header.scss';\r\nimport { useNavigate } from 'react-router-dom';\r\nimport { useAppContext } from '../contexts/AppContext';\r\n\r\n// Componente funcional Header\r\nexport const Header = ({ setOpenMenu }) => {\r\n    // Obtener datos del contexto\r\n    const { user } = useAppContext();\r\n    const navigate = useNavigate();\r\n\r\n    // Manejar clic en el bot\xf3n de men\xfa para abrir o cerrar el men\xfa lateral\r\n    const handleClickOpenMenu = () => {\r\n        setOpenMenu(e => !e);\r\n    }\r\n\r\n    // Manejar clic en el bot\xf3n de notificaciones para dirigir a la p\xe1gina correspondiente\r\n    const handleClickNotifications = ()  => {\r\n        // Redirigir a la p\xe1gina de alertas seg\xfan el rol del usuario\r\n        if (user.role === 'admin') {\r\n            navigate('/admin/alertas');\r\n        } else {\r\n            navigate('/app/alertas');\r\n        }\r\n    }\r\n\r\n    // Estructura JSX del componente Header\r\n    return (\r\n        <header className=\"Header\">\r\n            <div className=\"HeaderMenuBurger\" onClick={handleClickOpenMenu}>\r\n                <img src={iMenu} alt=\"Men\xfa desplegable\" />\r\n            </div>\r\n            <div className=\"HeaderLogo\">\r\n                <img src={iLogo} alt=\"Logo capiro blanco\" />\r\n            </div>\r\n            <div className=\"HeaderNotifications\" onClick={handleClickNotifications}>\r\n                <img src={iAlert} alt=\"Bot\xf3n de notificaciones\" />\r\n            </div>\r\n        </header>\r\n    );\r\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Propiedades:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"setOpenMenu"}),": Funci\xf3n para cambiar el estado del men\xfa lateral en el componente padre."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Datos del Contexto (",(0,o.jsx)(n.code,{children:"useAppContext"}),"):"]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"user"}),": Informaci\xf3n sobre el usuario obtenida del contexto."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Manejo de Clic (",(0,o.jsx)(n.code,{children:"handleClickOpenMenu"})," y ",(0,o.jsx)(n.code,{children:"handleClickNotifications"}),"):"]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"handleClickOpenMenu"}),": Abre o cierra el men\xfa lateral al hacer clic en el bot\xf3n de men\xfa."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"handleClickNotifications"}),": Dirige al usuario a la p\xe1gina de alertas seg\xfan su rol al hacer clic en el bot\xf3n de notificaciones."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Este componente proporciona la interfaz de usuario para la navegaci\xf3n y acceso r\xe1pido a las notificaciones, ofreciendo una experiencia consistente en la aplicaci\xf3n."})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var o=r(7294);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);