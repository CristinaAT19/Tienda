import { z } from "zod";
import { agregarProducto, obtenerProductos } from "../services/productoService.js";
const schema = z.object({
  stock: z.number().gte(1, "El stock debe ser minimo 1"),
});

export const getProductos = async (req, res) => {
  try {
    const productos = await obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

export const postProducto = async (req, res) => {
  const resultado = schema.safeParse(req.body);
  if (!resultado.success) {
    return res.status(400).json({ errors: resultado.error.errors });
  }
  try {
    await agregarProducto(req.body);
    res.status(201).json({ message: "Producto agregado" });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar producto" });
  }
};
