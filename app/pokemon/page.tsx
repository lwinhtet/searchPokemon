'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PokemonInfo from '@/components/ui/PokemonInfo';
import useSearchPokemon, {
  UseSearchPokemonType,
} from '@/hooks/useSearchPokemon';

export default function Home() {
  const {
    name,
    setName,
    pokemonNameQueryString,
    nameNotFound,
    handleSearch,
    loading,
    error,
    data,
    queryPokemon,
  }: UseSearchPokemonType = useSearchPokemon();

  const NotFoundPokemon = (name: string) => (
    <div className="flex flex-col items-center gap-4 mt-32 max-w-4xl mx-auto text-center">
      <p className="text-2xl font-semibold">{`Uh oh! We couldn’t find any Pokémon named "${nameNotFound}".`}</p>
      <p className="text-base text-gray-500">
        Try searching for a different Pokémon. You might discover a new
        favorite!
      </p>
    </div>
  );

  const WelcomeContent = (
    <div className="flex flex-col items-center gap-4 mt-32 max-w-4xl mx-auto text-center">
      <p className="text-2xl font-semibold">{`Welcome, Pokémon Trainer!`}</p>
      <p className="text-base text-gray-500">
        Ready to discover new Pokémon? Enter a name in the search box to find
        out more about your favorite Pokémon and explore their unique abilities
        and traits!
      </p>
    </div>
  );

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-row w-full p-10">
        <form
          onSubmit={handleSearch}
          className="flex flex-row gap-2 w-full justify-center"
        >
          <Input
            type="text"
            placeholder="Enter Pokémon name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-[600px] h-[65px] px-3 py-2"
          />
          <Button type="submit" className="h-[65px] px-8">
            Search
          </Button>
        </form>
      </div>

      {loading && (
        <p className="flex flex-col items-center gap-4 mt-32 text-2xl font-semibold max-w-4xl mx-auto text-center">
          Loading...
        </p>
      )}

      {error && (
        <p className="flex flex-col items-center gap-4 mt-32 text-2xl font-semibold max-w-4xl mx-auto text-center">
          Error: {error.message}
        </p>
      )}

      {!loading && !error && data && data.pokemon && (
        <PokemonInfo pokemon={data.pokemon} queryPokemon={queryPokemon} />
      )}

      {!loading && !error && data && !data.pokemon && NotFoundPokemon(name)}

      {!loading && !error && !data && !pokemonNameQueryString && WelcomeContent}
    </main>
  );
}
