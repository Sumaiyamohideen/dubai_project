/* src/pages/ServiceDetail.jsx */

import { useParams } from 'react-router-dom';
import ServiceDetailsPage from '@/components/pages/ServiceDetails';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  return <ServiceDetailsPage slug={serviceSlug} />;
}
