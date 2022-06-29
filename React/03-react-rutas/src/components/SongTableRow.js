import React from "react";

const SongTableRow = () => {
  return (
    <tr>
      <td>
        <img src="https://placeimg.com/40/40/animals" alt="" />
      </td>
      <td>Nombre artista</td>
      <td>Nombre canción</td>
      <td>
        <button>Ver</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
