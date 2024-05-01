import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="flex h-screen overflow-hidden">
        <section className="flex flex-1 justify-center items-center flex-col py-10 bg-n-1">
            {children}
        </section>

        <Image
            width={500}
            height={900}
            src="/assets/images/side-img.svg"
            alt=""
            className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
        />
    </div>
</>
  );
}
