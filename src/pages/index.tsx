import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import RPSLS from '../../public/RPSLS.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title> ⛰️ - 🧻 - ✂️ - 🦎 - 🖖</title>
      </Head>

      <main>
        <div>
          <h1> ⛰️ 🧻 ✂️ 🦎 🖖</h1>
          <h1>Rock Paper Scissors Lizard Spock!</h1>

          <Link href="/game" passHref>
            Play!
          </Link>
        </div>
        <Image src={RPSLS} alt="RPSLS Rules" />
      </main>
    </div>
  );
}
