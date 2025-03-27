import {
  agregarCategoria,
  editarCategoria,
  eliminarCategoria,
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
    const categorias = await obtenerCategoria();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la categoria" });
  }
};

export const postCategoria = async (req, res) => {
  try {
    await agregarCategoria(req.body);
    res.status(201).json({ message: "Categoria agregado" });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar categoria" });
  }
};

export const putCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    await editarCategoria(id, req.body);
    res.json({ message: "Categoria editado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrio un error al actualizar la categoria", error });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarCategoria(id);
    res.json({ message: "Categoria eliminada" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrio un error al eliminar la categoria", error });
  }
};
