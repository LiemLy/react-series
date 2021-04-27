import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CharacterModel, characterService } from "../services/characterService";
import { ACTION_TYPES, appContext } from "../states";

function Home() {
  const [state, dispatch]: any = useContext(appContext);

  useEffect(() => {
    characterService.getAll().then((result) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_CHARACTER,
        payload: result,
      });
    });
  }, []);

  const characters: Array<CharacterModel> = state.characters;

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
