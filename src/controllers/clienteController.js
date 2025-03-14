import {
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
