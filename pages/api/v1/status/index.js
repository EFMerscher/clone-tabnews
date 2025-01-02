function status(request, responde) {
  responde.status(200).json({ chave: "valor" });
}

export default status;
