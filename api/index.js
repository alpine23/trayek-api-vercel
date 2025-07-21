const express = require("express");
const trayeks = require("../trayeks");
const cors = require("cors"); // Import CORS middleware
const app = express();
const serverless = require("serverless-http");

// Gunakan CORS agar API dapat diakses dari domain berbeda
app.use(cors());

// Middleware untuk parse JSON
app.use(express.json());

// Endpoint root
app.get("/", (req, res) => {
  res.send("API Trayek Magelang - Vercel Version");
});

// Endpoint untuk mengambil trayek berdasarkan lokasi
app.get("/api/trayeks", (req, res) => {
  const lokasi = req.query.lokasi;

  if (lokasi) {
    // Filter trayek berdasarkan lokasi yang dipilih
    const filtered = trayeks.filter((trayek) =>
      trayek.rute.some((r) =>
        r.toLowerCase().includes(lokasi.trim().toLowerCase())
      )
    );
    return res.json(filtered); // Kirim hasil filter
  }

  res.json(trayeks); // Kirim semua trayek jika tidak ada lokasi
});

// Endpoint untuk mengambil trayek berdasarkan ID
app.get("/api/trayeks/:id", (req, res) => {
  const trayek = trayeks.find((t) => t.id === parseInt(req.params.id));
  if (!trayek) {
    return res.status(404).json({ message: "Trayek tidak ditemukan" });
  }
  res.json(trayek); // Kirim trayek yang ditemukan berdasarkan ID
});

// Ekspor aplikasi untuk serverless function
module.exports = app;
module.exports.handler = serverless(app);