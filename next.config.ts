/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  // Esto permite que el WebSocket funcione aunque accedas por IP
  typescript: { ignoreBuildErrors: true }, // Opcional si solo quieres ver el gráfico
};

module.exports = nextConfig;