import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title> ⛰️ - 🧻 - ✂️ - 🦎 - 🖖</title>
      </Head>

      <main>
        <h1> ⛰️ - 🧻 - ✂️ - 🦎 - 🖖</h1>
        <Link href="/game" passHref>
          Play!
        </Link>
      </main>
    </div>
  );
}
