import { Layout } from '@/components';
import '@/asset/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}
