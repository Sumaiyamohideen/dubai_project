/* src/pages/NotFound.jsx */
import SEO from '@/components/common/SEO/SEO';

export default function NotFound() {
  return ( 
    <div data-testid="page-notfound" style={{ padding: '4rem', textAlign: 'center' }}>
      <SEO
  title="Page Not Found"
  description="The requested page could not be found."
  noindex={true}
/>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
