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
        <div className="title">
          <h1>⛰️ 🧻 ✂️ 🦎 🖖</h1>
          <h1 data-testid="home">Rock Paper Scissors Lizard Spock!</h1>

          <Link href="/game" passHref>
            <h2> Play!</h2>
          </Link>
          <Image src={RPSLS} alt="RPSLS Rules" />
        </div>
      </main>
    </div>
  );
}
