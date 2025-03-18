import {
  agregarCliente,
  editarCliente,
  eliminarCliente,
  obtenerCliente,
  obtenerClientesId,
} from "../services/clienteService.js";

export const getClientes = async (req, res) => {
  try {
    const cliente = await obtenerCliente();
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Error al cargar cliente" }, error);
  }
};

export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await obtenerClientesId(id);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Error al cargar " }, error);
  }
};
export const postCliente = async (req, res) => {
  try {
    await agregarCliente(req.body);
    res.status(201).json({ message: "Cliente agregado" });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar cliente" });
  }
};

export const putCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await editarCliente(id, req.body);
    res.json({ message: "Cliente editado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrio un error al actualizar el cliente", error });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarCliente(id);
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrio un error al eliminar el cliente", error });
  }
};

// const Venta=  await agregarVenta(cliente,total)

// [1, 2, 3, 4].map((producto) => {
//     await agregarDetalleVenta(producto,Venta.id)
// });
