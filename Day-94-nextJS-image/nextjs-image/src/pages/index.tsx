import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import FancyButton from "@/components/FancyButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Button />
      <FancyButton />
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        alt="DOG"
        width={500}
        height={500}
      />
    </div>
  );
}
