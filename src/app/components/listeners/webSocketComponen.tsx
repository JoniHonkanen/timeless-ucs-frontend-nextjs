"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";

// This implementation is a simple example of a WebSocket component.
// It connects to a WebSocket server and listens for updates.

interface BackendUpdate {
  message: string;
}

export default function WebSocketComponent() {
  const [message, setMessage] = useState<string>(
    "Waiting for WebSocket updates..."
  );

  useEffect(() => {
    const socket = io("http://localhost:3001", { path: "/socket/" });

    socket.on("backend-update", (data: BackendUpdate) => {
      console.log(data);
      setMessage(data.message);
    });

    return () => {
      socket.disconnect(); // Varmistetaan, ettei mitään palauteta
    };
  }, []);

  return <h2>WebSocket: {message}</h2>;
}
