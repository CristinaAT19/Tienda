import tienda from "../config/db.js";

export const obtenerVenta = async () => {
  const [resultado] = await tienda.query("SELECT * FROM venta");
  return resultado;
};
export const agregarVenta = async () => {
  const { cliente_id, total } = venta;
  const [resultado] = await tienda.query(
    "INSERT INTO venta (cliente_id, total) VALUES (?,?)",
    [cliente_id, total]
  );
  return resultado;
};

export const editarVenta = async (id) => {
  const { cliente_id, total } = venta;
  const [resultado] = await tienda.query(
    "UPDATE venta SET cliente_id = ?,total = ? WHERE id = ?",
    [cliente_id, total, id]
  );
  return resultado;
};
export const eliminarVenta = async (id) => {
  const [resultado] = await tienda.query("DELETE * FROM venta WHERE id = ?", [
    id,
  ]);
  return resultado;
};
