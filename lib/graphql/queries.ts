import { gql } from '@apollo/client';

export const QUERY_GET_POKEMON_BY_NAME = `
query pokemon($name: String){
  pokemon(name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      image
    }
    evolutionRequirements {
      name
      amount
    }
  }
}`;

export const GET_POKEMON_BY_NAME = gql`
  ${QUERY_GET_POKEMON_BY_NAME}
`;
