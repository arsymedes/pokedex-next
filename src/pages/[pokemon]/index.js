import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Nav from "../../components/nav/nav";
import CardSmall from "../../components/card/cardsmall";
import Info from "../../components/info/info";
import InfoList from "../../components/info/infolist";
import Pokeball from "../../components/pokeball/pokeball"

import client from "../../../apollo-client";
import { gql } from "@apollo/client";

export default function Page({ pokemon, loading }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`${router.query.pokemon} | Pokedex Arsy`}</title>
      </Head>
      <Nav />
      {loading ? (
        <div className="h-full grid place-items-center"><Pokeball /></div>
      ) : (
        <main className="grid grid-cols-[repeat(auto-fill,minmax(min(375px,100%),1fr))] gap-4 md:gap-12 p-4 md:p-12 relative">
          <div className="absolute px-6 py-3 text-gray-50 bg-gray-900 text-3xl rounded-br-3xl">
            {router.query.pokemon}
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="border-black border rounded-md p-4 md:p-12">
              <Image
                className="w-full h-full"
                width={300}
                height={300}
                alt={`${pokemon.name}`}
                src={pokemon.image}
              />
            </div>
            {pokemon.evolutions && (
              <div className="border border-gray-900">
                <div className=" text-gray-50 bg-gray-900 px-6 py-2 text-lg">
                  Evolutions
                </div>
                <ul className="flex gap-4 px-4 py-4">
                  {pokemon.evolutions.map((el) => (
                    <CardSmall key={el.name} image={el.image} name={el.name} />
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <Info title="Weight Rage">
              {`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}
            </Info>
            <Info title="Height Range">
              {`${pokemon.height.minimum} - ${pokemon.height.maximum}`}
            </Info>
            <Info title="Classification">{pokemon.classification}</Info>
            <Info title="Types">{pokemon.types.join(", ")}</Info>
            <InfoList title="Fast Attacks">
              {pokemon.attacks.fast.map((el) => `${el.name} (${el.type})`)}
            </InfoList>
            <InfoList title="Special Attacks">
              {pokemon.attacks.special.map((el) => `${el.name} (${el.type})`)}
            </InfoList>
            <InfoList title="Special Attacks">{pokemon.resistant}</InfoList>
            <InfoList title="Special Attacks">{pokemon.weaknesses}</InfoList>
          </div>
        </main>
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data, loading } = await client.query({
    query: gql`
      query Pokemon {
        pokemon(name: "${params.pokemon}") {
          name
          image
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
          classification
          types
          resistant
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
          weaknesses
          evolutions {
            name
            image
          }
        }
      }
    `,
  });

  return {
    props: {
      pokemon: data.pokemon,
      loading: loading,
    },
  };
}
