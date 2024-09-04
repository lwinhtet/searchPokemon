import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Pokemon {
    id: String!
    number: String!
    name: String!
    weight: PokemonDimension
    height: PokemonDimension
    classification: String
    types: [String]
    resistant: [String]
    attacks: [PokemonAttack]
    weaknesses: [String]
    fleeRate: Int
    maxCP: Int
    maxHP: Int
    image: String
    evolutions: [Pokemon]
    evolutionRequirements: PokemonEvolutionRequirement
  }

  type PokemonDimension {
    minimum: String
    maximum: String
  }

  type PokemonAttack {
    fast: [Attack]
    special: [Attack]
  }

  type Attack {
    name: String
    type: String
    damage: Int
  }

  type PokemonEvolutionRequirement {
    name: String
    amount: Int
  }
`;
