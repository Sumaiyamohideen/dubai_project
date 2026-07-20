/* src/assets/images/index.js
 *
 * Central Image Export Manifest.
 * All React components and data files must import images through this file.
 */

// Logo
import companyLogo from './logo/company-logo.png';

// Services - Cards
import airFiltrationCard from './services/air-filtration-card.png';
import airConditioningCard from './services/air-conditioning-card.png';
import aluminumGlassWorksCard from './services/aluminum-glass-works-card.png';
import carpentryServicesCard from './services/carpentry-services-card.png';
import electricalFittingsCard from './services/electrical-fittings-card.png';
import electromechanicalCard from './services/electromechanical-card.png';
import falseCeilingCard from './services/false-ceiling-card.png';
import fixturesRepairingCard from './services/fixtures-repairing-card.png';
import floorTilingCard from './services/floor-tiling-card.png';
import generalMaintenanceCard from './services/general-maintenance-card.png';
import interlockInstallationCard from './services/interlock-installation-card.png';
import lightPartitionsCard from './services/light-partitions-card.png';
import paintingServicesCard from './services/painting.png';
import plumbingInstallationCard from './services/plumbing-installation-card.png';
import roofWaterproofingCard from './services/roof-waterproofing-card.png';
import sanitaryInstallationCard from './services/sanitary-installation-card.png';
import ventilationsInstallationCard from './services/ventilations-installation-card.png';
import wallTilingCard from './services/wall-tiling-card.png';
import wallpaperFixingCard from './services/wallpaper-fixing-card.png';
import weldingServicesCard from './services/welding-services-card.png';
import woodFlooringCard from './services/wood-flooring-card.png';

// Services - Banners
import interlockInstallationBanner from './services/interlock-installation-banner.png';
import paintingServicesBanner from './services/painting-services-banner.png';
import roofWaterproofingBanner from './services/roof-waterproofing-banner.png';
import wallpaperFixingBanner from './services/wallpaper-fixing-banner.png';

// Projects - Cards
import project01Card from './projects/project-01-card.png';
import project02Card from './projects/project-02-card.png';
import project03Card from './projects/project-03-card.png';
import project04Card from './projects/project-04-card.png';
import project05Card from './projects/project-05-card.png';
import project06Card from './projects/project-06-card.png';
import project07Card from './projects/project-07-card.png';
import project08Card from './projects/project-08-card.png';
import project09Card from './projects/project-09-card.png';

// Projects - Exact Figma Card Images
import image71 from './projects/image 71.png';
import image72 from './projects/image 72.png';
import image73 from './projects/image 73.png';

// Projects - Masonry
import project01Masonry from './projects/project-01-masonry.png';
import project02Masonry from './projects/project-02-masonry.png';
import project04Masonry from './projects/project-04-masonry.png';
import project05Masonry from './projects/project-05-masonry.png';
import project06Masonry from './projects/project-06-masonry.png';

// Testimonials (unused but organized client images)
import client01 from './unused/client-01.png';
import client02 from './unused/client-02.png';
import client03 from './unused/client-03.png';
import client04 from './unused/client-04.png';
import client05 from './unused/client-05.png';
import client06 from './unused/client-06.png';

// Satisfied Client Avatars (Hero section)
import clientAvatar1 from './satisfied_clients/Ellipse 2.png';
import clientAvatar2 from './satisfied_clients/image 13.png';
import clientAvatar3 from './satisfied_clients/image 14.png';
import clientAvatar4 from './satisfied_clients/image 15.png';
import clientAvatar5 from './satisfied_clients/image 16.png';

// About Section
import storyImage from './about/story-image.png';

// Emirates Section
import uaeMapImage from './emirates/uae-map.png';

export const images = {
  logo: companyLogo,
  
  hero: {
    clientAvatars: [clientAvatar2, clientAvatar3, clientAvatar4, clientAvatar5],
    extraAvatar: clientAvatar1,
  },
  
  about: {
    story: storyImage,
  },

  emirates: {
    map: uaeMapImage,
  },
  
  services: {
    airFiltration: {
      card: airFiltrationCard,
      banner: null
    },
    airConditioning: {
      card: airConditioningCard,
      banner: null
    },
    aluminumGlassWorks: {
      card: aluminumGlassWorksCard,
      banner: null
    },
    carpentryServices: {
      card: carpentryServicesCard,
      banner: null
    },
    electricalFittings: {
      card: electricalFittingsCard,
      banner: null
    },
    electromechanical: {
      card: electromechanicalCard,
      banner: null
    },
    falseCeiling: {
      card: falseCeilingCard,
      banner: null
    },
    fixturesRepairing: {
      card: fixturesRepairingCard,
      banner: null
    },
    floorTiling: {
      card: floorTilingCard,
      banner: null
    },
    generalMaintenance: {
      card: generalMaintenanceCard,
      banner: null
    },
    interlockInstallation: {
      card: interlockInstallationCard,
      banner: interlockInstallationBanner
    },
    lightPartitions: {
      card: lightPartitionsCard,
      banner: null
    },
    paintingServices: {
      card: paintingServicesCard,
      banner: paintingServicesBanner
    },
    plumbingInstallation: {
      card: plumbingInstallationCard,
      banner: null
    },
    roofWaterproofing: {
      card: roofWaterproofingCard,
      banner: roofWaterproofingBanner
    },
    sanitaryInstallation: {
      card: sanitaryInstallationCard,
      banner: null
    },
    ventilationsInstallation: {
      card: ventilationsInstallationCard,
      banner: null
    },
    wallTiling: {
      card: wallTilingCard,
      banner: null
    },
    wallpaperFixing: {
      card: wallpaperFixingCard,
      banner: wallpaperFixingBanner
    },
    weldingServices: {
      card: weldingServicesCard,
      banner: null
    },
    woodFlooring: {
      card: woodFlooringCard,
      banner: null
    }
  },
  
  projects: {
    project01: project01Card,
    project01Masonry: project01Masonry,
    project02: image71,
    project02Card: project02Card,
    project02Masonry: project02Masonry,
    project03: image72,
    project03Card: project03Card,
    project04: image73,
    project04Card: project04Card,
    project04Masonry: project04Masonry,
    project05: project05Card,
    project05Masonry: project05Masonry,
    project06: project07Card,
    project06Card: project06Card,
    project06Masonry: project06Masonry,
    project07: project07Card,
    project08: project08Card,
    project09: project09Card,
    image71: image71,
    image72: image72,
    image73: image73,
  },
  
  testimonials: {
    client01: client01,
    client02: client02,
    client03: client03,
    client04: client04,
    client05: client05,
    client06: client06
  }
};
