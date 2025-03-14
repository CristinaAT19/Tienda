import express from "express";
import {
  deleteProducto,
  getProductoById,
  getProductos,
  postProducto,
  putProducto,
} from "./controllers/productoController.js";
import {
  deleteCategoria,
  getCategoriaById,
  getCategorias,
  postCategoria,
  putCategoria,
} from "./controllers/categoriaController.js";

const app = express();

app.use(express.json());

app.get("/producto/:id", getProductoById);
app.get("/productos", getProductos);
app.post("/agregarProducto", postProducto);
app.put("/editarProducto/:id", putProducto);
app.delete("/eliminarProducto/:id", deleteProducto);

app.get("/categorias", getCategorias);
app.get("/categorias/:id", getCategoriaById);
app.post("/agregarCategoria", postCategoria);
app.put("/editarCategoria/:id", putCategoria);
app.delete("/eliminarCategoria/:id", deleteCategoria);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
