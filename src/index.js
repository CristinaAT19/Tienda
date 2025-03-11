import express from "express";
import {
  getProductos,
  postProducto,
  putProducto,
} from "./controllers/productoController.js";

const app = express();

app.use(express.json());

app.get("/productos", getProductos);
app.post("/agregarProducto", postProducto);
app.put("/editarProducto/:id", putProducto);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
