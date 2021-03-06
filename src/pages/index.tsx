import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import RPSLS from '../../public/RPSLS.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title> โฐ๏ธ - ๐งป - โ๏ธ - ๐ฆ - ๐</title>
      </Head>

      <main>
        <div className="title">
          <h1>โฐ๏ธ ๐งป โ๏ธ ๐ฆ ๐</h1>
          <h1>Rock Paper Scissors Lizard Spock!</h1>

          <Link href="/game" passHref>
            <h2> Play!</h2>
          </Link>
          <Image src={RPSLS} alt="RPSLS Rules" />
        </div>
      </main>
    </div>
  );
}
