import Nav from "../components/nav/nav";
import Head from "next/head";
import Image from "next/image";
import CardSmall from "../components/card/cardsmall";
import Info from "../components/info/info";
import InfoList from "../components/info/infolist";

export default function Page() {
  const pokemon = {
    name: "Bulbasaur",
    weight: {
      minimum: "6.04kg",
      maximum: "7.76kg",
    },
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    classification: "Seed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    evolutions: [
      {
        id: "UG9rZW1vbjowMDI=",
      },
      {
        id: "UG9rZW1vbjowMDM=",
      },
    ],
  };

  const ivysaur = {
    name: "Ivysaur",
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
  };

  const evolutions = [
    {
      name: "Ivysaur",
      image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    },
    {
      name: "Venusaur",
      image: "https://img.pokemondb.net/artwork/venusaur.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <Nav />
      <main className="grid grid-cols-[repeat(auto-fill,minmax(min(375px,100%),1fr))] gap-4 md:gap-12 p-4 md:p-12">
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
          <div className="border border-gray-900">
            <div className=" text-gray-50 bg-gray-900 px-6 py-2 text-lg">
              Evolutions
            </div>
            <ul className="flex gap-4 px-4 py-4">
              {evolutions.map((el) => (
                <CardSmall key={el.name} image={el.image} name={el.name} />
              ))}
            </ul>
          </div>
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
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Pokemon {
        pokemon(name: ) {
          name
          image
        }
      }
    `,
  });

  return {
    props: {
      pokemons: data.pokemons,
    }
  }
}