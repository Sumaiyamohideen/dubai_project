/* src/constants/servicesData.js */
import { images } from '../assets/images';

export const SERVICES_DATA = [
  {
    id: 'electrical-repair',
    title: 'Electrical Repair & Installation',
    slug: 'electrical-repair-installation',
    image: images.services.electricalFittings.card,
    bannerImage: images.services.electricalFittings.banner,
    description: 'Professional electrical wiring, breaker troubleshooting, light fixtures installation, and comprehensive electrical safety inspections.',
    longDescription: 'Our certified team of electricians provides premium residential and commercial electrical maintenance. From resolving recurring power trips to full rewiring, breaker replacements, lighting design installations, and appliance setups, we ensure every circuit in your property is completely safe, reliable, and compliant with local UAE safety regulations.',
    benefits: [
      'Emergency troubleshooting and power-restoration support',
      'Breaker and distribution board repairs',
      'Wiring extensions and new fixture mountings',
      'Certified and experienced electricians'
    ]
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services & Leak Repairs',
    slug: 'plumbing-services-leak-repairs',
    image: images.services.plumbingInstallation.card,
    bannerImage: images.services.plumbingInstallation.banner,
    description: 'Expert diagnostics for water leaks, blockages, booster pump repairs, water heater installation, and sanitization fixtures alignment.',
    longDescription: 'Ensure the plumbing systems in your villa or apartment run seamlessly. We specialize in non-destructive pipe leak detection, water pump maintenance, water tank sanitization, water heater replacements, fixture retrofits, and sewage system blockages clearance.',
    benefits: [
      'Advanced ultrasonic leak-detection equipment',
      'Water heater installations (horizontal and vertical units)',
      'Pump repair, installation, and pressure-switch setups',
      'Emergency drainage and fixture unclogging'
    ]
  },
  {
    id: 'painting-services',
    title: 'Interior & Exterior Painting',
    slug: 'interior-exterior-painting',
    image: images.services.paintingServices.card,
    bannerImage: images.services.paintingServices.banner,
    description: 'High-end wall painting, texture finish, wooden doors varnishing, exterior weatherproof coatings, and decorative accent walls.',
    longDescription: 'Transform your space with our premium painting solutions. We use premium non-toxic, low-VOC paint formulas to deliver smooth, double-coated finishes. Our crew handles meticulous surface preparations, crack-patching, and masking to guarantee zero paint splashes on your furniture or floors.',
    benefits: [
      'Flawless double-coat applications with premium brands (Jotun/National)',
      'Drywall crack repair and drywall joint taping',
      'Meticulous masking and post-paint deep cleaning',
      'Weather-resistant exterior paint coatings'
    ]
  },
  {
    id: 'carpentry-work',
    title: 'Carpentry & Woodwork Restoration',
    slug: 'carpentry-woodwork-restoration',
    image: images.services.carpentryServices.card,
    bannerImage: images.services.carpentryServices.banner,
    description: 'Custom cabinetry, wooden door adjustments, parquet repair, furniture assembly, hinge replacements, and custom wooden partitions.',
    longDescription: 'From squeaking doors to bespoke wooden partition systems, our skilled carpenters provide precise craftsmanship. We install, repair, and restore custom cabinets, interior doors, trim work, locks, hinges, and parquet flooring panels to bring structural beauty to your property.',
    benefits: [
      'Wooden door trimming and sag adjustments',
      'Furniture assembly (including complex flat-pack items)',
      'Parquet floor installation and restoration',
      'High-grade lock, latch, and hardware replacements'
    ]
  },
  {
    id: 'waterproofing',
    title: 'Roof & Wet-Area Waterproofing',
    slug: 'roof-wet-area-waterproofing',
    image: images.services.roofWaterproofing.card,
    bannerImage: images.services.roofWaterproofing.banner,
    description: 'Premium liquid membrane systems, roof sheet waterproofing, toilet sealant injection, and foundation moisture barricading.',
    longDescription: 'Prevent structural dampness and mould infestation. We provide high-performance waterproofing systems for concrete roofs, terraces, bathrooms, kitchens, and basements. Using advanced liquid polyurethane and bituminous membrane systems, we create a seamless shield against water penetration.',
    benefits: [
      '10-year warranty options on major system setups',
      'Non-destructive wet-area thermal scans',
      'Polyurethane membrane and acrylic coating applications',
      'Joint sealer replacement for washrooms and sinks'
    ]
  },
  {
    id: 'floor-tiling',
    title: 'Floor Tile & Marble Installation',
    slug: 'floor-tile-marble-installation',
    image: images.services.floorTiling.card,
    bannerImage: images.services.floorTiling.banner,
    description: 'Precision laying of ceramic tiles, porcelain tiles, heavy marble slabs, grouting restorations, and tile removal services.',
    longDescription: 'Create stunning, flat, and durable floors. Our tiling team handles layout planning, sub-floor leveling, tiling calculations, precise cuts, spacing, and cementitious or epoxy grouting. We specialize in porcelain, ceramic, terrazzo, and heavy marble tiles installation.',
    benefits: [
      'Perfect laser alignment and leveling clips system',
      'Moisture-resistant epoxy grouting application',
      'Sub-floor concrete leveling and priming',
      'Old tile removal and debris disposal'
    ]
  },
  {
    id: 'wall-tiling',
    title: 'Wall Tiling & Backsplash Fixing',
    slug: 'wall-tiling-backsplash-fixing',
    image: images.services.wallTiling.card,
    bannerImage: images.services.wallTiling.banner,
    description: 'Decorative kitchen backsplashes, floor-to-ceiling bathroom wall tiles installation, and masonry wall leveling.',
    longDescription: 'Elevate your kitchen and bathrooms with beautiful, level wall tiling. We prepare uneven walls, apply high-tack tile adhesives, and lay tiles in complex patterns (metro, herringbone, block) with perfect spacing and clean grout lines.',
    benefits: [
      'Kitchen backsplash tiling with precision cuts around power sockets',
      'Bathroom wet-wall moisture barrier installation',
      'Laser-aligned vertical layout setups',
      'Wide choice of grout finishes and sealants'
    ]
  },
  {
    id: 'aluminum-glass',
    title: 'Aluminum & Glass Work',
    slug: 'aluminum-glass-work',
    image: images.services.aluminumGlassWorks.card,
    bannerImage: images.services.aluminumGlassWorks.banner,
    description: 'Frameless glass shower enclosures, aluminum windows, sliding glass door track repairs, and glass partitioning.',
    longDescription: 'Sleek, modern glass and aluminum fabrications. We custom-build frameless glass bathroom screens, office partitions, double-glazed windows, and sliding doors. We also handle minor repairs like replacing rollers, locks, rubber seals, and weatherproofing window tracks.',
    benefits: [
      'Premium tempered glass options (8mm, 10mm, 12mm)',
      'High-grade sliding door track and roller mechanism repair',
      'Double-glazed window installations for sound and thermal insulation',
      'Silicone weather-sealing for exterior frames'
    ]
  },
  {
    id: 'welding-fabrication',
    title: 'Structural Welding & Fabrications',
    slug: 'structural-welding-fabrication',
    image: images.services.weldingServices.card,
    bannerImage: images.services.weldingServices.banner,
    description: 'Custom steel gates repair, handrails welding, safety grilles fabrication, and on-site emergency metal structure repairs.',
    longDescription: 'Strong and durable metal works. Our certified on-site welders handle arc, MIG, and TIG welding for structural repair or custom designs. We fabricate and install window safety grilles, metal gates, stair handrails, security fence spikes, and structural brackets.',
    benefits: [
      'Mobile on-site welding equipment for instant repairs',
      'Rust-proof powder coated and galvanized finishes',
      'Structural safety compliance and heavy-duty anchoring',
      'Custom gates, handrails, and bracket designs'
    ]
  },
  {
    id: 'wallpaper-installation',
    title: 'Wallpaper & Sticker Installation',
    slug: 'wallpaper-sticker-installation',
    image: images.services.wallpaperFixing.card,
    bannerImage: images.services.wallpaperFixing.banner,
    description: 'Seamless wall-coverings, custom mural hanging, wallpaper stripping, and large-format wall graphic sticker applications.',
    longDescription: 'Create gorgeous accent walls with our seamless wallpapering service. We specialize in hanging non-woven, vinyl, textile, and paper-backed wallpapers. Our master installers ensure pattern matching, smooth out air bubbles, align seams invisibly, and trim edges with surgical precision.',
    benefits: [
      'Seamless pattern matching and bubble-free installations',
      'Clean stripping of old wallpaper and primer application',
      'Large-format decal and vinyl graphic sticker setups',
      'Precision edge trimming along baseboards and crown molding'
    ]
  },
  {
    id: 'ac-maintenance',
    title: 'AC & HVAC Maintenance',
    slug: 'ac-hvac-maintenance',
    image: images.services.airConditioning.card,
    bannerImage: images.services.airConditioning.banner,
    description: 'AC deep cleaning, chemical wash, coil cleaning, refrigerant gas top-up, fan motor repairs, and thermostat replacement.',
    longDescription: 'Keep cool in the UAE heat. Our AC specialists provide deep cleaning of indoor evaporator units and outdoor condenser units, clean filter panels, unblock drain lines, top up R410A/R22 gas, replace faulty thermostats, and repair fan motors.',
    benefits: [
      'Anti-bacterial coil sanitization',
      'Drain line flushing to prevent indoor leaks',
      'Gas pressure tests and leak-patching',
      'Digital smart thermostat conversions'
    ]
  },
  {
    id: 'ceiling-gypsum',
    title: 'Gypsum & False Ceiling Work',
    slug: 'gypsum-false-ceiling-work',
    image: images.services.lightPartitions.card,
    bannerImage: images.services.lightPartitions.banner,
    description: 'Gypsum partition walls, modern suspended ceilings, cove lighting plasterboard design, and ceiling cracks repair.',
    longDescription: 'Modern structural plaster works. We construct drywall partition rooms, false ceilings with built-in LED lighting coves, gypsum board moldings, and plaster ornaments. We also patch up collapsed or water-damaged ceiling structures.',
    benefits: [
      'Sanded, paint-ready smooth drywall finishing',
      'Sound and thermal insulation options inside partitions',
      'Sturdy galvanized metal frame structures',
      'Water-resistant plasterboard usage for wet areas'
    ]
  },
  {
    id: 'deep-cleaning',
    title: 'Building Cleaning & Sanitization',
    slug: 'building-cleaning-sanitization',
    image: images.services.airFiltration.card,
    bannerImage: images.services.airFiltration.banner,
    description: 'Post-renovation deep clean, villa window washing, exterior pressure wash, and residential/commercial indoor sanitization.',
    longDescription: 'Restore shine to your property. We provide deep cleaning services using industrial-grade scrubbers, steam cleaners, and pressure wash units. Ideal for newly constructed projects, end-of-tenancy properties, and seasonal deep cleans.',
    benefits: [
      'High-pressure wash for exterior pavers and boundary walls',
      'Steam sanitation for grout joints and tiles',
      'Comprehensive paint-splatter removal and detailed window cleaning',
      'Eco-friendly non-toxic cleaning chemicals'
    ]
  },
  {
    id: 'home-renovation',
    title: 'Home Renovation & Fit-outs',
    slug: 'home-renovation-fitouts',
    image: images.services.electromechanical.card,
    bannerImage: images.services.electromechanical.banner,
    description: 'Turnkey interior villa refurbishments, bathroom remodeling, kitchen updates, and structural partition layouts.',
    longDescription: 'Complete property transformation. We manage renovations from design planning to execution. We handle masonry, plumbing, electrical, tiling, partitions, paint, joinery, and glass installation under a single unified management contract.',
    benefits: [
      'Turnkey contracting - single point of contact',
      'Premium material sourcing and structural engineering compliance',
      'On-time delivery schedules and quality finishes',
      'Detailed site planning and utility alterations'
    ]
  },
  {
    id: 'masonry-repair',
    title: 'Masonry & Concrete Repair',
    slug: 'masonry-concrete-repair',
    image: images.services.interlockInstallation.card,
    bannerImage: images.services.interlockInstallation.banner,
    description: 'Brickwork laying, plaster repair, foundation crack patching, blockwork building, and boundary wall restoration.',
    longDescription: 'Solid concrete and plastering works. We patch cracked walls, repair damaged render, build brick or blockwork partition walls, restore eroded concrete surfaces, and fix masonry structures to maintain solid support throughout your building.',
    benefits: [
      'Precise wall rendering and smooth plaster finishes',
      'Foundation concrete patch repairs and structural anchoring',
      'Quality aggregate mixes tailored to load requirements',
      'Block and stone boundary wall construction'
    ]
  },
  {
    id: 'door-locksmith',
    title: 'Locks & Door Hardware Fixing',
    slug: 'locks-door-hardware-fixing',
    image: images.services.fixturesRepairing.card,
    bannerImage: images.services.fixturesRepairing.banner,
    description: 'Smart lock installation, door closer adjustments, security lock upgrades, and door handle hardware replacements.',
    longDescription: 'Secure your entrances with premium door hardware. We install smart digital door locks, high-security deadbolts, master key cylinders, hydraulic door closer units, sliding door latches, and architectural door handles.',
    benefits: [
      'Compatible installation of major smart lock brands (Yale, August, Nuki)',
      'Hydraulic door closer calibration to prevent slamming doors',
      'Faulty key cylinder extraction and replacement',
      'Multipoint lock alignments for balcony doors'
    ]
  },
  {
    id: 'kitchen-cabinet',
    title: 'Kitchen Cabinet Refurbishment',
    slug: 'kitchen-cabinet-refurbishment',
    image: images.services.falseCeiling.card,
    bannerImage: images.services.falseCeiling.banner,
    description: 'Cabinet door hinge adjustments, drawer track repairs, kitchen cabinet painting, and modular shelf updates.',
    longDescription: 'Breathe new life into your kitchen without full replacement. We replace worn door hinges with soft-close mechanisms, replace jammed drawer runners, replace handles, repair cabinet shelves, and provide vinyl wrapping or spray painting for cabinet panels.',
    benefits: [
      'Installation of heavy-duty soft-close hinges',
      'Repair and alignment of sagging wooden cabinets',
      'Full cabinet wrap or paint refinishing options',
      'Slide-out drawer and pull-out rack additions'
    ]
  },
  {
    id: 'garden-maintenance',
    title: 'Garden & Landscape Maintenance',
    slug: 'garden-landscape-maintenance',
    image: images.services.generalMaintenance.card,
    bannerImage: images.services.generalMaintenance.banner,
    description: 'Irrigation pipe leak repairs, lawn grass laying, tree pruning, soil fertilization, and garden lighting installations.',
    longDescription: 'Keep your exterior green and healthy. We design, fix, and maintain landscape irrigation systems, prune trees, manage lawns, treat garden soil, and install decorative low-voltage landscape lighting cables.',
    benefits: [
      'Automatic irrigation timer calibration and nozzle repair',
      'Precise tree and shrub pruning to encourage growth',
      'Soil nutrient enrichment and lawn maintenance',
      'IP67 weatherproof LED garden light wire routing'
    ]
  },
  {
    id: 'window-glass',
    title: 'Window Glass Replacement',
    slug: 'window-glass-replacement',
    image: images.services.ventilationsInstallation.card,
    bannerImage: images.services.ventilationsInstallation.banner,
    description: 'Replacing cracked window panels, double-glazed glass repair, office glass replacements, and window silicone sealing.',
    longDescription: 'Fast, secure glass repair. We measure and replace cracked, broken, or fogged double-glazed and single-glazed window panels. We use premium structural silicones to seal the frames completely, preventing cool air escapes and dust intrusion.',
    benefits: [
      'Precise on-site measuring and custom glass fabrication',
      'Fogged double-glazed unit replacement (vacuum seal repair)',
      'High-grade window silicone bead sealing',
      'Heavy-duty safety glass and laminated glass choices'
    ]
  },
  {
    id: 'handyman-tasks',
    title: 'Handyman General Tasks',
    slug: 'handyman-general-tasks',
    image: images.services.woodFlooring.card,
    bannerImage: images.services.woodFlooring.banner,
    description: 'TV wall mounting, curtain rod hanging, picture frames mounting, light shelves installation, and flat-pack assemblies.',
    longDescription: 'Your ultimate to-do list solvers. Our skilled handymen mount flatscreen TVs safely on concrete or drywall, hang heavy curtain tracks, align photo frames, install shelving, assemble furniture, and handle minor technical adjustments.',
    benefits: [
      'TV mounting on heavy-duty tilt/swivel brackets with cable management',
      'Heavy curtain rod and blind track anchors on concrete walls',
      'Precise laser leveling for photo frames and floating shelves',
      'Equipped with specialized drilling and anchoring tools'
    ]
  },
  {
    id: 'bathroom-fittings',
    title: 'Bathroom Fittings Renovation',
    slug: 'bathroom-fittings-renovation',
    image: images.services.sanitaryInstallation.card,
    bannerImage: images.services.sanitaryInstallation.banner,
    description: 'Upgrading wash basins, shower mixers installation, toilet bowl replacements, and bathroom vanity cabinet installations.',
    longDescription: 'Upgrade your bathroom to a spa-like retreat. We install modern vanity cabinets, replace leaky shower mixers, install rain showerheads, fit bidets, mount LED touch mirrors, and replace complete sanitary ware layouts.',
    benefits: [
      'Modern toilet commode and bidet replacements',
      'High-end shower mixers and thermostatic controls setup',
      'Sleek bathroom vanity cabinets mounting and water sealing',
      'LED touch mirrors installation and wiring'
    ]
  }
];
