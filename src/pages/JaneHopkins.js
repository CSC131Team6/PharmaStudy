import React from "react";
import Auth from "../JaneHopkinsComponents/auth";
import Dashboard from "../JaneHopkinsComponents/dash";
import { useUserContext } from "../config/JHUserContext";

function JaneHopkins() {

    const { user, loading, error } = useUserContext();

    return (
        <div className="App">
          {error && <p className="error">{error}</p>}
          {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        </div>
      );
}

export default JaneHopkins;