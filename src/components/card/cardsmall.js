import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css"

export default function card({ image, name }) {
  console.log(image);
  return (
    <Link href={`/${name}`} className="border-gray-900 border flex flex-col items-center rounded-t-md cursor-pointer hover:opacity-80 transition duration-200 ease-out box-border w-20 md:w-24">
      <div className="h-16 md:h-20 py-1 md:py-2 m-1 md:m-2 flex content-center">
        <Image className={styles.image} width={300} height={300} alt={`${name}`} src={image} />
      </div>
      <div className="text-md py-1 text-gray-50 text-center bg-gray-900 self-stretch">{name}</div>
    </Link>
  );
}
