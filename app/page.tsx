'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useSocket } from "./config";

export default function Home() {
  // Start socket

  const socket = useSocket()
  useEffect(() => {
    if (socket) {
      socket
        .connect()
        .on("message", (data) => {
        console.log("🚀 ~ .on ~ data:", data)
    
        })
        .timeout(300000);

      socket
        .connect()
        .on("blog", (data) => {
          const parsedData = JSON.parse(data);

         
          
        })
        .timeout(300000);
      return () => {
        // socket.removeAllListeners();
        // socket.disconnect();
      };
    }
  }, [socket]);

  return (
    <div>
      <div>alo</div>
    </div>
  );
}
