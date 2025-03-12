import { z } from "zod";
import {
  agregarProducto,
  editarProducto,
  eliminarProducto,
  obtenerProductos,
  obtenerProductosId,
} from "../services/productoService.js";
const schema = z.object({
  stock: z.number().gte(1, "El stock debe ser minimo 1"),
  precio: z.number().gte(0.1, "El precio debe ser mayor a 0.1 centimos"),
});

export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await obtenerProductosId(id);
    res.json(producto);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al cargar el producto por el id", error });
    console.log(error);
  }
};

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

export const putProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await editarProducto(id, req.body);
    res.json({ message: "Producto editado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrio un error al actualizar el producto", error });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarProducto(id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};
