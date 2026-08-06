/* src/pages/ServiceDetail.jsx */

import { useParams } from 'react-router-dom';
import ServiceDetailsPage from '@/components/pages/ServiceDetails';
import SEO from '@/components/common/SEO/SEO';

const serviceSEO = {
  'electrical-fittings': {
    title: 'Electrical Fittings Services in UAE',
    description:
      'Professional electrical fittings, installation, repair and maintenance services for residential and commercial properties across the UAE.',
  },

  'plumbing-installation': {
    title: 'Plumbing Installation Services in UAE',
    description:
      'Professional plumbing installation, repair and maintenance services for homes, offices and commercial properties across the UAE.',
  },

  'painting-services': {
    title: 'Painting Services in UAE',
    description:
      'Professional interior and exterior painting services for residential and commercial properties across the UAE.',
  },

  'wallpaper-fixing-installation': {
    title: 'Wallpaper Fixing & Installation in UAE',
    description:
      'Professional wallpaper fixing and installation services for homes, offices and commercial spaces across the UAE.',
  },

  'aluminum-glass-works': {
    title: 'Aluminium & Glass Works in UAE',
    description:
      'Professional aluminium and glass installation, repair and maintenance services across the UAE.',
  },

  'welding-services': {
    title: 'Welding Services in UAE',
    description:
      'Professional welding and metal fabrication services for residential, commercial and industrial projects across the UAE.',
  },

  'carpentry-services': {
    title: 'Carpentry Services in UAE',
    description:
      'Professional carpentry installation, repair and maintenance services for residential and commercial properties across the UAE.',
  },

  'floor-tiling': {
    title: 'Floor Tiling Services in UAE',
    description:
      'Professional floor tiling installation, repair and finishing services for residential and commercial properties across the UAE.',
  },

  'wood-flooring': {
    title: 'Wood Flooring Services in UAE',
    description:
      'Professional wood flooring installation, repair and maintenance services for homes, offices and commercial spaces across the UAE.',
  },

  'air-conditioning': {
    title: 'Air Conditioning Services in UAE',
    description:
      'Professional air conditioning installation, maintenance and repair services for residential and commercial properties across the UAE.',
  },

  'roof-waterproofing': {
    title: 'Roof Waterproofing Services in UAE',
    description:
      'Professional roof waterproofing and leakage protection services for residential and commercial buildings across the UAE.',
  },

  'general-maintenance': {
    title: 'General Maintenance Services in UAE',
    description:
      'Reliable general maintenance and property repair services for homes, offices and commercial properties across the UAE.',
  },

  'interlock-installation': {
    title: 'Interlock Installation Services in UAE',
    description:
      'Professional interlock paving and installation services for villas, commercial properties, pathways and outdoor areas across the UAE.',
  },

  'air-filtration-systems': {
    title: 'Air Filtration Systems in UAE',
    description:
      'Professional air filtration system installation and maintenance services for residential and commercial properties across the UAE.',
  },

  'false-ceiling-installation': {
    title: 'False Ceiling Installation in UAE',
    description:
      'Professional false ceiling installation and finishing services for homes, offices and commercial interiors across the UAE.',
  },

  'wall-tiling': {
    title: 'Wall Tiling Services in UAE',
    description:
      'Professional wall tiling installation and finishing services for residential and commercial properties across the UAE.',
  },

  'electromechanical-installation': {
    title: 'Electromechanical Installation Services in UAE',
    description:
      'Professional electromechanical installation, maintenance and technical services across the UAE.',
  },

  'fixtures-repairing': {
    title: 'Fixtures Repairing Services in UAE',
    description:
      'Professional fixture repair, replacement and maintenance services for residential and commercial properties across the UAE.',
  },

  'sanitary-installation': {
    title: 'Sanitary Installation Services in UAE',
    description:
      'Professional sanitary fixture installation, repair and maintenance services for residential and commercial properties across the UAE.',
  },

  'ventilations-installation': {
    title: 'Ventilation Installation Services in UAE',
    description:
      'Professional ventilation system installation and maintenance services for residential and commercial properties across the UAE.',
  },

  'light-partitions-installation': {
    title: 'Light Partition Installation in UAE',
    description:
      'Professional light partition installation services for offices, commercial spaces and residential interiors across the UAE.',
  },
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  const seo = serviceSlug ? serviceSEO[serviceSlug] : undefined;

  return (
    <>
      <SEO
        title={seo?.title || 'Technical Services in UAE'}
        description={
          seo?.description ||
          'Professional technical and maintenance services across the UAE by Chalachal Technical Services LLC.'
        }
        canonical={`${serviceSlug}`}
      />

      <ServiceDetailsPage slug={serviceSlug || ''} />
    </>
  );
}