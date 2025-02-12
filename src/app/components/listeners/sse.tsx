"use client"; // Varmista, että tämä on Client Component

import { useEffect, useState } from "react";

export default function SSEComponent() {
  const [message, setMessage] = useState<string>("Waiting for SSE updates...");

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001/sse");

    eventSource.onmessage = (event) => {
      console.log("Received SSE:", event.data);
      const data = JSON.parse(event.data);
      setMessage(data.message);
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return <h2>SSE: {message}</h2>;
}
