import Head from 'next/head';

export default function HeadComponent({ title = 'Cinema Buddy', description = 'Cinema reviews, cinema trending news, release dates, cinema bites', canonicalUrl = 'https://www.cinemabuddy.com' }) {
  return (
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='index,follow' />
        <link rel='canonical' href={canonicalUrl} />
        <meta name='viewport' content='width=initial-width, initial-scale=1' />
        <meta charset='utf-8' />
    </Head>
  );
}