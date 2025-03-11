import tienda from "../config/db.js";

export const obtenerProductos = async () => {
  const [resultado] = await tienda.query(
    "SELECT producto.id, producto.nombre,descripcion,precio,categoria.id as categoria_id,categoria.nombre as categoria_nombre  FROM producto INNER JOIN categoria ON producto.categoria_id = categoria.id"
  );

  console.log(resultado);
  return resultado?.map((producto) => ({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio,
    categoria: {
      id: producto.categoria_id,
      nombre: producto.categoria_nombre,
    },
  }));
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
