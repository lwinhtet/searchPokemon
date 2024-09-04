import PokemonInfo from '@/components/ui/PokemonInfo';
import { Pokemon } from '@/interfaces/Pokemon';
import { GET_POKEMON_BY_NAME } from '@/lib/graphql/queries';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import {
  BulbasaurMockObj,
  SquirtleMockObj,
  CharmanderMockObj,
} from '../__mocks__/pokemonMocks';

describe('Pokemon Type Tests', () => {
  test('should display Bulbasaur as Grass type', async () => {
    const mocks = [
      {
        request: {
          query: GET_POKEMON_BY_NAME,
          variables: { name: 'Bulbasaur' },
        },
        result: {
          data: BulbasaurMockObj,
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonInfo
          pokemon={BulbasaurMockObj as Pokemon}
          queryPokemon={(name: string) => {}}
        />
      </MockedProvider>
    );

    const typesContainer = screen.getByTestId('pokemon-types');
    expect(typesContainer).toHaveTextContent('Grass');
  });

  test('should display Charmander as Fire type', async () => {
    const mocks = [
      {
        request: {
          query: GET_POKEMON_BY_NAME,
          variables: { name: 'Charmander' },
        },
        result: {
          data: {
            pokemon: {
              name: 'Charmander',
              type: 'Fire',
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonInfo
          pokemon={CharmanderMockObj as Pokemon}
          queryPokemon={(name: string) => {}}
        />
      </MockedProvider>
    );

    const typesContainer = screen.getByTestId('pokemon-types');
    expect(typesContainer).toHaveTextContent('Fire');
  });

  test('should display Squirtle as Water type', async () => {
    const mocks = [
      {
        request: {
          query: GET_POKEMON_BY_NAME,
          variables: { name: 'Squirtle' },
        },
        result: {
          data: {
            pokemon: {
              name: 'Squirtle',
              type: 'Water',
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonInfo
          pokemon={SquirtleMockObj as Pokemon}
          queryPokemon={(name: string) => {}}
        />
      </MockedProvider>
    );

    const typesContainer = screen.getByTestId('pokemon-types');
    expect(typesContainer).toHaveTextContent('Water');
  });
});
