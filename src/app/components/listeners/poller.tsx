"use client";

import { useEffect, useState } from "react";

export default function PollingComponent() {
  const [message, setMessage] = useState<string>(
    "Waiting for polling updates..."
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/polling");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Polling error:", error);
      }
    };

    // 🔄 Polling intervalli 5 sekunnin välein
    const interval = setInterval(fetchData, 5000);

    // 🚀 Suoritetaan heti kerran
    fetchData();

    return () => clearInterval(interval); // Puhdistetaan, kun komponentti unmountataan
  }, []);

  return <h2>Polling: {message}</h2>;
}
