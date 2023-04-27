import React from "react"
import Auth from "../FDAComponents/auth";
import Dashboard from "../FDAComponents/dash";
import { useUserContext } from "../config/FDAUserContext";

export default function FDA() {

    const { user, loading, error } = useUserContext();

    return (
        <div className="App">
          {error && <p className="error">{error}</p>}
          {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        </div>
      );
    };