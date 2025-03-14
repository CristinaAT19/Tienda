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

export const agregarCategoria = async (categoria) => {
  const { nombre } = categoria;
  const [resultado] = await tienda.query(
    "INSERT INTO categoria (nombre) VALUES (?)",
    [nombre]
  );
  return resultado;
};

export const editarCategoria = async (id, categoria) => {
  const { nombre } = categoria;
  const [resultado] = await tienda.query(
    "UPDATE categoria set nombre = ? WHERE id = ? ",
    [nombre, id]
  );
  return resultado;
};

export const eliminarCategoria = async (id) => {
  const [resultado] = await tienda.query("DELETE FROM categoria WHERE id=?", [
    id,
  ]);
  return resultado;
};
