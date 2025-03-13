import {
  obtenerCategoria,
  obtenerCategoriasId,
} from "../services/categoriaService.js";

export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtenerCategoriasId(id);
    res.json(categoria);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al cargar la categoria por el id", error });
    console.log(error);
  }
};

export const getCategorias = async (req, res) => {
  try {
    const categoria = await obtenerCategoria();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la categoria" });
  }
};
