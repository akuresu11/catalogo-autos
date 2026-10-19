
const express = require("express");
const app = express();

app.use(express.json());

const autos = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2024,
    precio: 380000,
    color: "Blanco"
  },
  {
    id: 2,
    marca: "Nissan",
    modelo: "Versa",
    anio: 2025,
    precio: 320000,
    color: "Gris"
  },
  {
    id: 3,
    marca: "Kia",
    modelo: "K3",
    anio: 2025,
    precio: 350000,
    color: "Rojo"
  }
];

app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido al catálogo de autos",
    rutas: ["/autos", "/autos/1"]
  });
});

app.get("/autos", (req, res) => {
  res.json(autos);
});

app.get("/autos/:id", (req, res) => {
  const auto = autos.find(
    a => a.id === Number(req.params.id)
  );

  if (!auto) {
    return res.status(404).json({
      mensaje: "Auto no encontrado"
    });
  }

  res.json(auto);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
