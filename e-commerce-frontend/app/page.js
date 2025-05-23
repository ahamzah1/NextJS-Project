import Image from "next/image";
import styles from "./page.module.css";
import ExampleClient from "@/components/ExampleClient";
import ExampleServer from "@/components/ExampleServer";

export default function Home() {
  return (
    <main>
      <p> Hello World</p>

      <ExampleClient />
      <ExampleServer />
    </main>
  );
}
