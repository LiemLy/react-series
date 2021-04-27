import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ACTION_TYPES, appContext } from "../../states";

function Home() {
  const [state, dispatch]: any = useContext(appContext);

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <div className="mt-60">
          <p className="text-6xl font-bold">Welcome.</p>
          <p className="text-4xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
