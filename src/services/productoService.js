import tienda from "../config/db.js";

export const obtenerProductos = async () => {
  const [resultado] = await tienda.query("SELECT * FROM producto");
  return resultado;
};

export const agregarProducto = async (producto) => {
  const { nombre, descripcion, precio, stock, categoria_id } = producto;
  const [resultado] = await tienda.query(
    "INSERT INTO producto (nombre, descripcion, precio, stock, categoria_id) VALUES (?, ?, ?, ?, ?)",
    [nombre, descripcion, precio, stock, categoria_id]
  );
  return resultado;
};

export const editarProducto = async (id, producto) => {
  const { nombre, descripcion, precio, stock, categoria_id } = producto;
  const [resultado] = await tienda.query(
    "UPDATE producto set nombre = ?, descripcion = ?, precio = ?,  stock = ?, categoria_id = ? WHERE id = ? ",
    [nombre, descripcion, precio, stock, categoria_id, id]
  );
  return resultado;
};
