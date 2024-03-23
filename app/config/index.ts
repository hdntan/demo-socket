import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export function useSocket() {
  const [socket, setSocket] = useState<Socket | null>(null);

const token =
  "eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18yZHRGTlZWRTJRSU8yZEc3d0xWbU12Um9wUG0iLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJleHAiOjE3MTExNzE1NzcsImlhdCI6MTcxMTE3MTUxNywiaXNzIjoiaHR0cHM6Ly9ldGVybmFsLWJ1enphcmQtMjguY2xlcmsuYWNjb3VudHMuZGV2IiwibmJmIjoxNzExMTcxNTA3LCJzaWQiOiJzZXNzXzJlNGtZMjZQUnlEdVdqSWNveTlKdzhRTk5sQyIsInN1YiI6InVzZXJfMmR0ajB6UDZCcndVSndkVTRrU1kxRjBIUWdiIn0.NFUmN6FjqpwA587WKIJjP2It2ovE3ShGHqvZTOQzK1RbKfJgUbbBclGjGCIpEetJJEhxqilU75v-63OOsrL2VzKpDY1ZCYvtpxdScuT0_jgb6-hZHyPRBPo_lw6lzqatXsifcHJ3MLCrkhddU5BZ3slvRywVSYlPhCzGxDAaoN8WVJNiNqVYQNzRPuDhARoCketcd7mNVKyo_cFWdcVeUR8oyoYeed_uG244GSoSJJ44AUOTfIdv_ymTq_udP7qKF7goAMYmJHOscJLnFan3UaNnNKEioQ-FC4E7JXN2JX7hj-rbFwLxhKVRIIc0ItmK8-SkTUaEGlvqq5AlW-W2Jg";

  useEffect(() => {
    const connectSocket = async () => {

      console.log("🚀 ~ connectSocket ~ token:", `Bearer ${token}`)

      const socketIo = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}/sse`, {
        // path: "/ws/chat/3d3a-4dbd-f7b2e9e156f4/",
        transports: ["websocket","polling"],
        extraHeaders: {
          Authorization: "My Token",
          "client id": "My Client Id",
        },
      });
      console.log("🚀 ~ connectSocket ~ socketIo:", socketIo)

      setSocket(socketIo);
    };

    connectSocket();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return socket;
}