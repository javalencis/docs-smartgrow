---
id: alerts-history-component-jsx
title: AlertsHistory.jsx
---

# Componente `AlertsHistory.jsx`

El componente `AlertsHistory.jsx` se encarga de mostrar el historial de alertas, permitiendo a los usuarios filtrar y visualizar alertas pasadas. Utiliza componentes como `FilterAlerts`, `Table`, `Row`, `AlertRow`, y `AlertRowExpended` para ofrecer una interfaz intuitiva y fácil de usar.

## Contenido del Archivo

```jsx
import React, { useEffect, useState } from "react";
import { FilterAlerts } from "./FilterAlerts";
import { Table } from "./Table";
import { AlertRow } from "./AlertRow";
import { headersAlerts } from "../libs/headersTables";
import { Row } from "./Row";
import { AlertRowExpended } from "./AlertRowExpended";
import '../styles/AlertsHistory.scss';
import '../styles/TableAlerts.scss';

export const AlertsHistory = ({ alerts }) => {
  const [alertsAux, setAlertsAux] = useState([]);

  useEffect(() => {
    setAlertsAux(alerts);
  }, [alerts]);

  return (
    <div className="AlertsHistory">
      <FilterAlerts alerts={alerts} setAlertsAux={setAlertsAux} />
      <Table headers={headersAlerts} name="TableAlerts">
        {
          alertsAux.map((alert) => (
            <Row
              key={alert._id}
              data={alert}
              RowType={AlertRow}
              expand>
              <AlertRowExpended data={alert} />
            </Row>
          ))
        }
      </Table>
    </div>
  );
};
```

## Descripción

- **Estado Local (`useState`):**
  - Se utiliza el estado local `alertsAux` para gestionar las alertas a mostrar. Se actualiza mediante `setAlertsAux` en la función `useEffect` cuando cambian las `alerts` propias.

- **Filtrado de Alertas (`FilterAlerts`):**
  - Se utiliza el componente `FilterAlerts` para permitir a los usuarios filtrar las alertas en base a diferentes criterios.

- **Tabla de Alertas (`Table`):**
  - Se utiliza el componente `Table` para mostrar las alertas en un formato tabular con columnas personalizadas definidas por `headersAlerts`.

- **Iteración de Alertas (`map`):**
  - Se itera sobre `alertsAux` utilizando `map` para crear filas de alertas representadas por el componente `Row`. Cada fila incluye un componente `AlertRow` y, si se expande, muestra detalles adicionales con `AlertRowExpended`.

## Vista del Componente

![tabla historico](/img/history.png)

Este componente permite a los usuarios explorar y filtrar el historial de alertas de manera eficiente.

