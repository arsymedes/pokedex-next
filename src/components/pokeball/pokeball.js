import logo from "../../../public/logo.svg";
import Image from "next/image";
import styles from "./pokeball.module.css";

export default function pokeball() {
  return (
    <Image
      className={`${styles.rotating} ${styles.image}`}
      src={logo}
      alt="Pokeball Rotating"
    ></Image>
  );
}
