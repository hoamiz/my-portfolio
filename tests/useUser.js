import { useEffect, useState } from "react";
import { fetchUser } from "./api";

export function useUser() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUser().then(setName);
  }, []);

  return name;
}