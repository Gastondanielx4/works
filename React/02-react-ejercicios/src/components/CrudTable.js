import React from 'react'

const CrudTable = () => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
          <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Constelacion</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              <td>Jon</td>
              <td>Geminis</td>
              <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
          </tbody>
      </table>
    </div>
  )
}

export default CrudTable
