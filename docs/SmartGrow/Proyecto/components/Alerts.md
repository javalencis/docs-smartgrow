---
id: alerts-component-jsx
title: Alerts.jsx
---

# Componente `Alerts.jsx`

El componente `Alerts.jsx` se encarga de mostrar una lista de alertas en tiempo real o histórico, permitiendo a los usuarios ver y gestionar las alertas. También proporciona la capacidad de visualizar detalles específicos de una alerta a través de un modal.

## Contenido del Archivo

```jsx
import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { LayoutModal } from '../containers/LayoutModal';
import { ModalAlert } from './ModalAlert';
import '../styles/Alerts.scss';
import { Alert } from "./Alert";
import { AlertsHistory } from "./AlertsHistory";

export const Alerts = ({ view, type }) => {
    const { user } = useAppContext();
    const [modalAlert, setModalAlert] = useState(false);
    const [alertClick, setAlertClick] = useState({});
    const [alerts, setAlerts] = useState([]);
    const [btnSelected, setBtnSelected] = useState('tr');

    useEffect(() => {
        // Configurar EventSource para recibir alertas en tiempo real
        const eventSource = new EventSource('http://localhost:3001/api/alerts');
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setAlerts(data.reverse());
        };

        // Cerrar la conexión cuando el componente se desmonta
        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <section className="Alerts">
            <div className="AlertsButtons">
                <button onClick={() => setBtnSelected('tr')}>
                    Tiempo Real
                </button>
                {
                    view === "alerts" && (
                        user.role === "admin" && (
                            <button onClick={() => setBtnSelected('hi')}>
                                Histórico
                            </button>
                        )
                    )
                }
            </div>
            {
                btnSelected === 'tr' ?
                    <div className="AlertsList">
                        {
                            alerts.map((alert) => (
                                <Alert
                                    key={alert._id}
                                    data={alert}
                                    setModalAlert={setModalAlert}
                                    setAlertClick={setAlertClick}
                                    type={type}
                                />
                            ))
                        }
                    </div> :
                    <AlertsHistory alerts={alerts} />
            }

            {
                modalAlert && (
                    <LayoutModal setModalAlert={setModalAlert}>
                        <ModalAlert alert={alertClick} setModalAlert={setModalAlert} />
                    </LayoutModal>
                )
            }

        </section>
    );
};
```

## Descripción

- **Propiedades (`view`, `type`):**
  - `view`: Indica si se debe mostrar en tiempo real ("tr") o histórico ("hi").
  - `type`: Tipo de alerta (opcional).

- **Estado Local (`modalAlert`, `alertClick`, `alerts`, `btnSelected`):**
  - `modalAlert`: Estado para controlar la visibilidad del modal de alerta.
  - `alertClick`: Estado para almacenar la alerta seleccionada.
  - `alerts`: Estado que contiene la lista de alertas.
  - `btnSelected`: Estado que indica qué botón de vista está seleccionado.

- **(`useEffect`):**
  - Se utiliza useEffect para configurar un [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) y recibir alertas en tiempo real desde la API. La conexión se cierra cuando el componente se desmonta.

- **Renderizado Condicional:**
  - Muestra botones para cambiar entre las vistas de tiempo real e histórico.
  - Muestra la lista de alertas en tiempo real o histórico según la selección del botón.

- **Modal de Alerta (`LayoutModal` y `ModalAlert`):**
  - Muestra un modal con detalles específicos cuando se hace clic en una alerta.


## Vista del Componente
- **Tiempo Real:**
   - ![imagen de alerta](/img/alerts1.png) 

- **Historico:**
   - ![imagen de alerta](/img/alerts2.png)


Este componente es esencial para la gestión de alertas y proporciona una interfaz de usuario interactiva para los usuarios administradores.

