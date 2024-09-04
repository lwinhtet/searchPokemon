import { Pokemon } from '@/interfaces/Pokemon';
import Image from 'next/image';
import React from 'react';

type PropType = {
  pokemon: Pokemon;
  queryPokemon: (name: string) => void;
};

const PokemonInfo = ({ pokemon, queryPokemon }: PropType) => {
  const {
    image,
    name,
    number,
    types,
    weight,
    height,
    classification,
    fleeRate,
    maxCP,
    maxHP,
    resistant,
    weaknesses,
    attacks,
    evolutions,
    evolutionRequirements: evoReq,
  } = pokemon;

  const handleClickEvo = (name: string) => {
    queryPokemon(name);
  };

  return (
    <>
      <div className="flex flex-col custom:flex-row justify-center gap-8 bg-white rounded-t-[60px] rounded-b-none ">
        <div className="flex flex-col p-6 pt-8">
          <div className="relative mb-5 flex justify-center ">
            <Image
              src={image}
              alt={name}
              width={360}
              height={366}
              style={{
                maxWidth: '360px',
                height: 'auto',
              }}
              priority
            />
          </div>

          <h1 className="text-xl font-bold text-gray-800">
            No. {number} - {name}
          </h1>

          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
            <li>
              <strong>Types:</strong>{' '}
              <span data-testid="pokemon-types">{types.join(', ')}</span>
            </li>
            <li>
              <strong>Classification:</strong> {classification}
            </li>
            <li>
              <strong>Resistant:</strong> {resistant.join(', ')}
            </li>
            <li>
              <strong>Weaknesses:</strong> {weaknesses.join(', ')}
            </li>
            <li>
              <strong>Flee Rate:</strong> {(fleeRate * 100).toFixed(2)}%
            </li>
            <li>
              <strong>Max CP:</strong> {maxCP.toLocaleString()}
            </li>
            <li>
              <strong>Max HP:</strong> {maxHP.toLocaleString()}
            </li>
            <li>
              <strong>Weight:</strong> {weight.minimum} ~ {weight.maximum}
            </li>
            <li>
              <strong>Height:</strong> {height.minimum} ~ {height.maximum}
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-6">
          <div className="mb-8">
            <h2 className="my-4 text-xl font-bold text-gray-800">
              Basic Attacks
            </h2>
            {attacks && attacks.fast && attacks.fast.length !== 0 ? (
              <table className="table-auto border-collapse w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Damage</th>
                  </tr>
                </thead>
                <tbody>
                  {attacks.fast.map((attack) => (
                    <tr key={attack.name}>
                      <td className="px-4 py-2 border">{attack.name}</td>
                      <td className="px-4 py-2 border">{attack.type}</td>
                      <td className="px-4 py-2 border">{attack.damage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>- No Basic Attack</p>
            )}
          </div>

          <div>
            <h2 className="my-4 text-xl font-bold text-gray-800 ">
              Special Attacks
            </h2>
            {attacks && attacks.special && attacks.special.length !== 0 ? (
              <table className="table-auto border-collapse w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Damage</th>
                  </tr>
                </thead>
                <tbody>
                  {attacks.special.map((attack) => (
                    <tr key={attack.name}>
                      <td className="px-4 py-2 border">{attack.name}</td>
                      <td className="px-4 py-2 border">{attack.type}</td>
                      <td className="px-4 py-2 border">{attack.damage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>- No Special Attacks</p>
            )}
          </div>
        </div>
        <div className="flex flex-col p-6">
          <div className="">
            <h2 className="my-4 text-xl font-bold text-gray-800">Evolutions</h2>

            <div className="flex custom:flex-col flex-row gap-x-20 justify-center">
              {evolutions && evolutions.length !== 0 ? (
                evolutions.map((evo) => (
                  <div
                    key={evo.id}
                    className="flex flex-col cursor-pointer"
                    onClick={() => handleClickEvo(evo.name)}
                  >
                    <p>- {evo.name}</p>
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={evo.image}
                        alt={evo.name}
                        width={120}
                        height={122}
                        style={{
                          maxWidth: '120px',
                          height: 'auto',
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>- No evolutions</p>
              )}
            </div>
          </div>

          <div className="">
            <h2 className="my-4 text-xl font-bold text-gray-800">
              Evolution Requirements
            </h2>

            {evoReq ? (
              <table className="table-auto border-collapse w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">{evoReq.name}</td>
                    <td className="px-4 py-2 border">{evoReq.amount}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>- No Evolution Requirements</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
