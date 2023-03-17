import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css"

export default function card({ image, name }) {
  return (
    <Link href={`/${name}`} className={styles.container}>
      <div className={styles.imageContainer} >
        <Image className={styles.image} width={300} height={300} alt={`${name}`} src={image} />
      </div>
      <div className={styles.title}>{name}</div>
    </Link>
  );
}
