import { agregarDetalleVenta } from "../services/detalleVentaService.js";
import { agregarVenta } from "../services/ventaService.js";

export const postVenta = async (req, res) => {
  const productos = req.body.productos;
  const clienteId = req.body.clienteId;

  try {
    const ventaId = await agregarVenta({ cliente_id: clienteId, total: 120.0 });

    productos.forEach(async (producto) => {
      try {
        await agregarDetalleVenta({
          venta_id: ventaId,
          producto_id: producto.id,
          cantidad: producto.cantidad,
          precio: producto.precio * producto.cantidad,
        });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error al registrar un detalle venta" });
      }
    });

    res.status(201).json({ message: "Venta creada" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar venta", error });
  }
};
