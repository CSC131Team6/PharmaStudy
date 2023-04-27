import React from "react";
import Auth from "../BavariaComponents/auth";
import Dashboard from "../BavariaComponents/dash";
import { useUserContext } from "../config/BavariaUserContext";

export default function Bavaria() {

    const { user, loading, error } = useUserContext();

    return (
        <div className="App">
          {error && <p className="error">{error}</p>}
          {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        </div>
      );
}
