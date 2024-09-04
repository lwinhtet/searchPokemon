export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttack {
  fast: Attack[];
  special: Attack[];
}

export interface PokemonEvolutionRequirement {
  name: string;
  amount: number;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  attacks: PokemonAttack;
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  evolutions: Pokemon[];
  evolutionRequirements: PokemonEvolutionRequirement;
}

// Define the interface for the query response
export interface GetPokemonByNameData {
  pokemon: Pokemon;
}

// Define the interface for the query variables
export interface GetPokemonByNameVars {
  name: string;
}
