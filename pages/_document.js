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
            <link rel="shortcut icon" href={ico} />
            <meta name="description" content={description} />
          </Head>
        ))}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
