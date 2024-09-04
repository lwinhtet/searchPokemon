import { GET_POKEMON_BY_NAME } from '@/lib/graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  GetPokemonByNameData,
  GetPokemonByNameVars,
} from '@/interfaces/Pokemon';
import { replaceCurrentUrl } from '@/utils/helper';
import { useSearchParams } from 'next/navigation';

const useSearchPokemon = () => {
  const searchParams = useSearchParams();
  const pokemonNameQueryString = searchParams.get('name');
  const [name, setName] = useState(
    pokemonNameQueryString ? pokemonNameQueryString : ''
  );
  const [nameNotFound, setNameNotFound] = useState('');
  const [getPokemon, { loading, data, error }] = useLazyQuery<
    GetPokemonByNameData,
    GetPokemonByNameVars
  >(GET_POKEMON_BY_NAME);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (name !== pokemonNameQueryString && name !== '') {
      queryPokemon(name);
    }
  };

  const queryPokemon = (name: string) => {
    replaceCurrentUrl(name);
  };

  useEffect(() => {
    if (pokemonNameQueryString) {
      getPokemon({ variables: { name: pokemonNameQueryString } });
    }
  }, [pokemonNameQueryString]);

  useEffect(() => {
    if (data?.pokemon === null) {
      setNameNotFound(name);
    }
  }, [data]);

  return {
    name,
    setName,
    pokemonNameQueryString,
    nameNotFound,
    setNameNotFound,
    handleSearch,
    loading,
    error,
    data,
    queryPokemon,
  };
};

export type UseSearchPokemonType = ReturnType<typeof useSearchPokemon>;

export default useSearchPokemon;
