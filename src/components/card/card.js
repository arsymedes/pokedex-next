import Image from "next/image";
import Link from "next/link";

export default function card({ image, name }) {
  console.log(image);
  return (
    <Link href={`/${name}`} className="border-black border flex flex-col items-center rounded-t-md cursor-pointer hover:opacity-80 transition duration-200 ease-out">
      <div className="h-52 m-10">
        <Image className="w-full h-full" width={300} height={300} alt={`${name}`} src={image} />
      </div>
      <div className="text-2xl font-semibold text-gray-50 text-center py-3 bg-gray-900 self-stretch">{name}</div>
    </Link>
  );
}
