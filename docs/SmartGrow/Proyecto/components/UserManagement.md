---
id: user-management-jsx
title: UserManagement.jsx
---

# Componente `UserManagement.jsx`

El componente `UserManagement` se encarga de gestionar la visualización y administración de usuarios. Permite mostrar una tabla con información detallada de cada usuario, así como agregar nuevos usuarios mediante un modal.

## Contenido del Archivo

```jsx
import React, { useEffect, useState } from "react";
import { headersUsers } from "../libs/headersTables";
import { Table } from "./Table";
import api from "../api/api";
import { Row } from "./Row";
import { UserRow } from "./UserRow";
import '../styles/TableUsers.scss';
import '../styles/UserManagement.scss';
import { UserRowExpended } from "./UserRowExpended";
import { LayoutModal } from "../containers/LayoutModal";
import { ModalAddUser } from "./ModalAddUser";

// Componente funcional UserManagement
export const UserManagement = () => {
    // Estados del componente
    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers] = useState([]);

    // Función para obtener la lista de usuarios desde la API
    const getUsers = async () => {
        const token = sessionStorage.getItem('token');
        const res = await api.get('/users/all', {
            headers: {
                Authorization: token
            }
        });

        if (res.data.status) {
            setUsers(res.data.users);
        }
    };

    // Efecto secundario para cargar la lista de usuarios al montar el componente
    useEffect(() => {
        getUsers();
    }, []);

    // Función para abrir o cerrar el modal de agregar usuario
    const handleOpenModal = () => {
        setOpenModal(e => !e);
    };

    // Estructura JSX del componente
    return (
        <section className="UserManagement">
            {/* Botón para agregar usuario */}
            <button className="UM-AddUser" onClick={handleOpenModal}>
                Agregar Usuario
            </button>

            {/* Tabla de usuarios */}
            <Table headers={headersUsers} name="TableUsers">
                {users.map((user) => (
                    <Row
                        key={user._id}
                        data={user}
                        RowType={UserRow}
                        expand
                    >
                        <UserRowExpended data={user} />
                    </Row>
                ))}
            </Table>

            {/* Modal de agregar usuario */}
            {openModal && (
                <LayoutModal setModalAlert={setOpenModal}>
                    <ModalAddUser />
                </LayoutModal>
            )}
        </section>
    );
};
```

## Descripción

- **Estados del Componente:**
  - `openModal`: Estado que controla la visibilidad del modal para agregar usuarios.
  - `users`: Estado que almacena la lista de usuarios obtenida desde la API.

- **Función `getUsers`:**
  - Realiza una solicitud a la API para obtener la lista completa de usuarios.
  - Actualiza el estado `users` con la información obtenida.

- **Efecto Secundario (`useEffect`):**
  - Al montar el componente, se ejecuta la función `getUsers` para cargar la lista inicial de usuarios.

- **Función `handleOpenModal`:**
  - Alterna el estado `openModal` para abrir o cerrar el modal de agregar usuario.

- **Estructura de la Tabla (`Table`):**
  - Utiliza el componente `Table` para renderizar la tabla de usuarios con encabezados personalizados.

- **Botón de Agregar Usuario:**
  - Al hacer clic en el botón "Agregar Usuario", se activa la función `handleOpenModal` para mostrar el modal.

- **Modal de Agregar Usuario (`ModalAddUser`):**
  - Se utiliza un modal para agregar nuevos usuarios. El modal se muestra o se oculta según el estado `openModal`.


Este componente centraliza la gestión de usuarios y proporciona una interfaz para agregar nuevos usuarios de manera interactiva.
