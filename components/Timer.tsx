"use client";

import { useEffect, useState } from "react";
import Button from "./ui/Button";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [state, setState] = useState("running");

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        if (state === "paused") {
            clearInterval(interval);
        }
        return () => clearInterval(interval); // cleanup
    }, [state]);

    return (
        <><p>⏱️ Time: {seconds}s</p><Button color="green" onClick={() => setState("paused")}>pause</Button><Button color="red" onClick={() => setState("running")}>resume</Button></>
    );
}
