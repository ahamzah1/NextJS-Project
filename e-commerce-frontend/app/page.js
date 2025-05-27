import Image from "next/image";
import styles from "./page.module.css";

import ProductsList from '@/components/ProductsList'

export default function Home() {
  return (
    <main>
      <h1>Our Products</h1>
      <ProductsList />
    </main>
  )
}
