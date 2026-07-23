/* src/assets/images/index.js
 *
 * Central Image Export Manifest.
 * All React components and data files must import images through this file.
 */

// Logo
import companyLogo from './logo/company-logo.png';

// Services - Cards (used across Services page, Home section, and Related Services cards)
import airFiltrationCard from './services/airconditioningsystem.png';
import airConditioningImage from './services/Air-Conditioning.png';
import aluminumGlassWorksCard from './services/aluminum-glass-works-card.png';
import carpentryServicesCard from './services/carpentry-services-card.png';
import electricalFittingsCard from './services/electrical-fittings-card.png';
import electromechanicalCard from './services/electrochemicalinstallation.png';
import falseCeilingCard from './services/fallceiling.png';
import fixturesRepairingCard from './services/Fixtures-Repairing.png';
import floorTilingCard from './services/floor-tiling-card.png';
import generalMaintenanceCard from './services/general-maintenance-card.png';
import interlockInstallationCard from './services/interlock.png';
import lightPartitionsCard from './services/Light-Partitions-Installation.png';
import paintingServicesImage from './services/painting.png';
import plumbingInstallationCard from './services/plumbing-installation-card.png';
import roofWaterproofingCard from './services/roof-waterproofing-banner.png';
import sanitaryInstallationCard from './services/Sanitary-Installation.png';
import ventilationsInstallationCard from './services/Ventilations-Installation.png';
import wallTilingCard from './services/walltiling.png';
import wallpaperFixingCard from './services/wallpaper-fixing-installation.png';
import weldingServicesCard from './services/welding-services-card.png';
import woodFlooringCard from './services/wood-flooring-card.png';

// Services - High-Res Service Details Banners (from './service details/')
import airFiltrationBanner from './service details/Air Filtration Systems.png';
import airConditioningBanner from './service details/Air-Conditioning.png';
import aluminumGlassWorksBanner from './service details/Aluminum & Glass Works.png';
import carpentryServicesBanner from './service details/Carpentry Services.png';
import electricalFittingsBanner from './service details/Electrical Fittings.png';
import electromechanicalBanner from './service details/Electromechanical Installation.png';
import falseCeilingBanner from './service details/False Ceiling Installation.png';
import fixturesRepairingBanner from './service details/Fixtures Repairing.png';
import floorTilingBanner from './service details/Floor Tiling.png';
import generalMaintenanceBanner from './service details/General Maintenance.png';
import interlockInstallationBanner from './service details/Interlock Installation.png';
import lightPartitionsBanner from './service details/Light Partitions Installation.png';
import paintingServicesBanner from './service details/Painting Services.png';
import plumbingInstallationBanner from './service details/Plumbing Installation.png';
import roofWaterproofingBanner from './service details/Roof Waterproofing.png';
import sanitaryInstallationBanner from './service details/Sanitary Installation.png';
import ventilationsInstallationBanner from './service details/Ventilations Installation.png';
import wallTilingBanner from './service details/Wall Tiling.png';
import wallpaperFixingBanner from './service details/Wallpaper Fixing Installation.png';
import weldingServicesBanner from './service details/Welding Services.png';
import woodFlooringBanner from './service details/Wood Flooring.png';

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
import sharjahOfficeGlassPartitions from './projects/Sharjah-Office-Glass-Partitions.png';
import mirdifRoofWaterproofing from './services/Mirdif-Roof-Waterproofing.png';

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
import storyImage from './projects/project-02-card.png';
import advantageImage from './about/image 69.png';

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
    advantage: advantageImage,
  },

  emirates: {
    map: uaeMapImage,
  },
  
  services: {
    airFiltration: {
      card: airFiltrationCard,
      banner: airFiltrationBanner,
    },
    airConditioning: {
      card: airConditioningImage,
      banner: airConditioningBanner,
    },
    aluminumGlassWorks: {
      card: aluminumGlassWorksCard,
      banner: aluminumGlassWorksBanner,
    },
    carpentryServices: {
      card: carpentryServicesCard,
      banner: carpentryServicesBanner,
    },
    electricalFittings: {
      card: electricalFittingsCard,
      banner: electricalFittingsBanner,
    },
    electromechanical: {
      card: electromechanicalCard,
      banner: electromechanicalBanner,
    },
    falseCeiling: {
      card: falseCeilingCard,
      banner: falseCeilingBanner,
    },
    fixturesRepairing: {
      card: fixturesRepairingCard,
      banner: fixturesRepairingBanner,
    },
    floorTiling: {
      card: floorTilingCard,
      banner: floorTilingBanner,
    },
    generalMaintenance: {
      card: generalMaintenanceCard,
      banner: generalMaintenanceBanner,
    },
    interlockInstallation: {
      card: interlockInstallationCard,
      banner: interlockInstallationBanner,
    },
    lightPartitions: {
      card: lightPartitionsCard,
      banner: lightPartitionsBanner,
    },
    paintingServices: {
      card: paintingServicesImage,
      banner: paintingServicesBanner,
    },
    plumbingInstallation: {
      card: plumbingInstallationCard,
      banner: plumbingInstallationBanner,
    },
    roofWaterproofing: {
      card: roofWaterproofingCard,
      banner: roofWaterproofingBanner,
    },
    sanitaryInstallation: {
      card: sanitaryInstallationCard,
      banner: sanitaryInstallationBanner,
    },
    ventilationsInstallation: {
      card: ventilationsInstallationCard,
      banner: ventilationsInstallationBanner,
    },
    wallTiling: {
      card: wallTilingCard,
      banner: wallTilingBanner,
    },
    wallpaperFixing: {
      card: wallpaperFixingCard,
      banner: wallpaperFixingBanner,
    },
    weldingServices: {
      card: weldingServicesCard,
      banner: weldingServicesBanner,
    },
    woodFlooring: {
      card: woodFlooringCard,
      banner: woodFlooringBanner,
    },
  },
  
  projects: {
    project01: project01Card,
    project01Card: project01Card,
    project01Masonry: project01Masonry,
    project02: image71,
    project02Card: project02Card,
    project02Masonry: project02Masonry,
    project03: image72,
    project03Card: project03Card,
    sharjahOfficeGlassPartitions: sharjahOfficeGlassPartitions,
    image72: image72,
    project04: mirdifRoofWaterproofing,
    project04Card: project04Card,
    project04Masonry: project04Masonry,
    project05: project05Card,
    project05Card: project05Card,
    project05Masonry: project05Masonry,
    project06: project06Card,
    project06Card: project06Card,
    project06Masonry: project06Masonry,
    project07: project07Card,
    project07Card: project07Card,
    project08: project08Card,
    project08Card: project08Card,
    project09: project09Card,
    project09Card: project09Card,
    image73: mirdifRoofWaterproofing,
    mirdifRoofWaterproofing: mirdifRoofWaterproofing,
  },

  testimonials: {
    client01,
    client02,
    client03,
    client04,
    client05,
    client06,
  },
};

export default images;
