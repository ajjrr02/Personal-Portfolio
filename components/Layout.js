import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Layout({ children, ...customMeta }) {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const meta = {
    title: "AnaSs Jrr. | MERN Developer",
    description:
      "I'm a Full Stack Developer and I love bringing few of my ideas to Life through my code. (WordPress, React, Express.js, Node.js, MongoDB, Next.js)",
    image: `public/images/og.png`,
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:type' content='website' />
        <meta name='og:title' property='og:title' content={meta.title} />
        <meta
          name='og:description'
          property='og:description'
          content={meta.description}
        />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:site' content='@anassjr4' />
        <meta name='twitter:creator' content='@anassjr4' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta
          name='theme-color'
          content={resolvedTheme === "light" ? "#FFFFFE" : "#16161A"}
        />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:image' content={meta.image} />
      </Head>
      <main className={`my-8`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
