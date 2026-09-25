import { useEffect, useState } from "react";
import { fetchUser } from "./api";

export default function User() {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null,
    });

    useEffect(() => {
        fetchUser()?.then((data) => {
            setState({ loading: false, data, error: null });
        }).catch(() => {
            setState({ loading: false, data: null, error: "Error" });
        });
    }, []);

    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p>{state.error}</p>;

    return <p>{state.data}</p>;
}