import Document, { Html, Head, Main, NextScript } from "next/document";
import { publics } from "../profile";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {publics.map(({ ico, description }, i) => (
          <Head key={i}>
            <link
              href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
              rel="stylesheet"
            ></link>
            <link rel="shortcut icon" href={ico} />
            <meta name="description" content={description} />
          </Head>
        ))}
        <style jsx>{`
          font-family: "Ubuntu", sans-serif;
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
