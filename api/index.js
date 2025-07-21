const express = require("express");
const trayeks = require("../trayeks");
const app = express();
const serverless = require("serverless-http");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Trayek Magelang - Vercel Version");
});

app.get("/api/trayeks", (req, res) => {
  const lokasi = req.query.lokasi;

  if (lokasi) {
    const filtered = trayeks.filter((trayek) =>
      trayek.rute.some((r) =>
        r.toLowerCase().includes(lokasi.trim().toLowerCase())
      )
    );
    return res.json(filtered);
  }

  res.json(trayeks);
});

app.get("/api/trayeks/:id", (req, res) => {
  const trayek = trayeks.find((t) => t.id === parseInt(req.params.id));
  if (!trayek) return res.status(404).json({ message: "Trayek tidak ditemukan" });
  res.json(trayek);
});

module.exports = app;
module.exports.handler = serverless(app);
