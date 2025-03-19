import tienda from "../config/db.js";

export const obtenerDetalleVenta = async () => {
  const [resultado] = await tienda.query("SELECT * FROM detalle_venta");
  return resultado;
};
export const agregarDetalleVenta = async (detalleVenta) => {
  const { venta_id, producto_id, cantidad, precio } = detalleVenta;
  const [resultado] = await tienda.query(
    "INSERT INTO detalle_venta (venta_id,producto_id, cantidad, precio) values (?,?,?,?)",
    [venta_id, producto_id, cantidad, precio]
  );
  return resultado;
};
export const editarDetalleVenta = async (id, detalleVenta) => {
  const { venta_id, producto_id, cantidad, precio } = detalleVenta;
  const [resultado] = await tienda.query(
    "UPDATE detalle_venta SET venta_id=?,  producto_id = ?, cantidad = ?, precio = ? WHERE id=?",
    [venta_id, producto_id, cantidad, precio, id]
  );
  return resultado;
};
export const eliminarDetalleVenta = async (id) => {
  const [resultado] = await tienda.query(
    "DELETE * FROM detalle_venta WHERE id = ?",
    [id]
  );
  return resultado;
};
