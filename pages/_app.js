import { Rajdhani } from 'next/font/google';
import "../styles/globals.css";


// Configure the font properties
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    // Applying the class name here makes Rajdhani the default font across the entire site
    <main className={rajdhani.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
