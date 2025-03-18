import tienda from "../config/db.js";

export const obtenerCliente = async () => {
  const [resultado] = await tienda.query("SELECT * FROM cliente");
  return resultado;
};

export const obtenerClientesId = async (id) => {
  const [resultado] = await tienda.query(
    "SELECT * FROM cliente WHERE ID=?",
    id
  );
  return resultado;
};

export const agregarCliente = async (cliente) => {
  const { nombre, email, telefono } = cliente;
  const [resultado] = await tienda.query(
    "INSERT INTO cliente (nombre, email, telefono) VALUES (?,?,?)",
    [nombre, email, telefono]
  );
  return resultado;
};

export const editarCliente = async (id, cliente) => {
  const { nombre, email, telefono } = cliente;
  const [resultado] = await tienda.query(
    "UPDATE cliente set nombre = ?, email = ?, telefono = ? WHERE id = ? ",
    [nombre, email, telefono, id]
  );
  return resultado;
};

export const eliminarCliente = async (id) => {
  const [resultado] = await tienda.query("DELETE FROM cliente WHERE id=?", [
    id,
  ]);
  return resultado;
};
