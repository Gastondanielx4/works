import React from 'react'

const CrudTable = ({data}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
          <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Constelación</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td>Jon</td>
                <td>Geminis</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                    </td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default CrudTable
