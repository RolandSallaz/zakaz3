import os from "os";

function getLocalIp(interfaceName = "Ethernet") {
  const interfaces = os.networkInterfaces();

  if (interfaces[interfaceName]) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }

  return "localhost";
}

const dev = process.env.NODE_ENV !== "production";
const localIp = getLocalIp();  // Теперь функция выберет IP из интерфейса Ethernet

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    apiUrl: dev ? `http://${localIp}:1337` : `${process.env.NEXT_PUBLIC_DOMAIN}/api`,
  },
};


export default nextConfig;
