import { Rajdhani } from 'next/font/google';
import "../styles/globals.css";


// Configure the font properties
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani', // This creates a global CSS custom property
});

function MyApp({ Component, pageProps }) {
  return (
    // Applying the class name here makes Rajdhani the default font across the entire site
    <main className={rajdhani.variable}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
