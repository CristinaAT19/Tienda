import tienda from "../config/db.js";

export const obtenerCategoriasId = async (id) => {
  const [resultado] = await tienda.query("SELECT * FROM categoria WHERE id=?", [
    id,
  ]);
  return resultado;
};

export const obtenerCategoria = async () => {
  const [resultado] = await tienda.query("SELECT * FROM categoria");
  console.log(resultado);
  return resultado?.map((categoria) => ({
    nombre: categoria.nombre,
  }));
};
