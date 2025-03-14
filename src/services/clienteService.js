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
