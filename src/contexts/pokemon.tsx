import React, { useState, createContext } from "react";

export interface IPokemon {
  id: string;
  name: string;
  type: string;
  image: string;
}

export interface IPokemonContext {
  pokemons: IPokemon[],
  setPokemons: React.Dispatch<React.SetStateAction<IPokemonContext['pokemons']>>
}

export const PokemonContext = createContext<IPokemonContext | null>(null);

export const PokemonProvider = React.memo(({children}) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  

  return (
    <PokemonContext.Provider value={{pokemons, setPokemons}}>
      {children}
    </PokemonContext.Provider>
  )
})
