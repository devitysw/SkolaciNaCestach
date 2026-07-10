export interface Trip {
  id: string;
  name: string;
  location: string;
  region: string;
  type: 'priroda' | 'lyziarske';
  pricePerDay: number;
  originalPrice?: number;
  image: string;
  description: string;
  dates: string;
  accommodationType: string;
  quote?: string;
  gallery: string[];
  mapUrl?: string;
  included: string[];
}

export const trips: Trip[] = [
  {
    id: 'vila-bela',
    name: 'Vila Bela',
    location: 'Banská Belá',
    region: 'Stredné Slovensko',
    type: 'priroda',
    pricePerDay: 135,
    originalPrice: 155,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    description: 'Objavte s nami čaro jedinečného miesta ako stvoreného pre menšie deti, zamerané na rozvoj tvorivosti a zručnosti detí. Každé dieťa sa u nás cíti príjemne a v bezpečí.',
    dates: 'máj - jún',
    accommodationType: 'Ubytovňa (niektoré s možnosťou prístelky)',
    quote: 'Učíme sa hrou, kto nežije, nevie.',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1562546885-3606bca60dfa?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1544160617-6f0308633ea9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Bansk%C3%A1+Bel%C3%A1,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Pedagogický dozor', 'Poistenie', 'Vecné darčeky']
  },
  {
    id: 'borova-sihot',
    name: 'Borová Sihoť',
    location: 'Liptovský hrádok',
    region: 'Vysoké Tatry',
    type: 'priroda',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=400&fit=crop',
    description: 'Nádherné prostredie v srdci lesov, priamo pod Tatrami. Ideálne miesto pre školy v prírode s bohatým programom aktivít v okolí.',
    dates: 'máj - jún',
    accommodationType: 'Chata',
    gallery: [
      'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Pedagogický dozor', 'Poistenie']
  },
  {
    id: 'chata-pod-ostrym-vrchom',
    name: 'Chata pod ostrým vrchom',
    location: 'Liptovský hrádok',
    region: 'Nízke Tatry',
    type: 'priroda',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1415895706556-d69e66d50910?w=600&h=400&fit=crop',
    description: 'Útulná horská chata obklopená prírodou Nízkych Tatier, ideálna pre aktívne školy v prírode plné výletov a hier.',
    dates: 'máj - jún',
    accommodationType: 'Chata',
    gallery: [
      'https://images.unsplash.com/photo-1415895706556-d69e66d50910?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1489375345405-edd50900baf0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Pedagogický dozor', 'Poistenie']
  },
  {
    id: 'penzion-guldiner',
    name: 'Penzión Guldiner',
    location: 'Liptovský hrádok',
    region: 'Stredné Slovensko',
    type: 'lyziarske',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1539713870563-08f40fcd0e95?w=600&h=400&fit=crop',
    description: 'Rodinný penzión priamo pod lyžiarskym svahom, vhodný pre lyžiarske kurzy všetkých úrovní.',
    dates: 'december - február',
    accommodationType: 'Penzión',
    gallery: [
      'https://images.unsplash.com/photo-1539713870563-08f40fcd0e95?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1542401886-65d27afda266?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Polpenzia', 'Skipas', 'Sprievodca']
  },
  {
    id: 'x-bionic-hotel',
    name: 'X-BIONIC Hotel',
    location: 'Liptovský hrádok',
    region: 'Vysoké Tatry',
    type: 'lyziarske',
    pricePerDay: 135,
    originalPrice: 155,
    image: 'https://images.unsplash.com/photo-1551632786-de41ec16a41d?w=600&h=400&fit=crop',
    description: 'Moderný hotelový komplex s wellness zázemím a vlastným lyžiarskym svahom priamo v areáli.',
    dates: 'december - február',
    accommodationType: 'Hotel',
    gallery: [
      'https://images.unsplash.com/photo-1551632786-de41ec16a41d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-169f6ba55303?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Plná penzia', 'Skipas', 'Sprievodca']
  },
  {
    id: 'hotel-lesana',
    name: 'Hotel Lesana',
    location: 'Liptovský hrádok',
    region: 'Nízke Tatry',
    type: 'lyziarske',
    pricePerDay: 135,
    originalPrice: 155,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop',
    description: 'Hotelový komplex uprostred prírody s výbornou dostupnosťou k lyžiarskym svahom aj turistickým trasám.',
    dates: 'apríl - september',
    accommodationType: 'Hotel',
    gallery: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1455619452474-d2be0d4e5f0a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Polpenzia', 'Pedagogický dozor', 'Poistenie']
  }
];

export interface ExtraProgram {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  link: string;
}

export const extraPrograms: ExtraProgram[] = [
  {
    id: 'animacny-program',
    name: 'Animačný program',
    shortDescription: 'Profesionálni animátori pre zábavu a vzdelanie',
    description: 'Svoje programy stavajú na profesionálnych animátoroch, kvalitnom obsahu a individuálnom, láskavom prístupe k deťom.',
    image: 'https://images.unsplash.com/photo-1427504494785-cdec0f72afa5?w=400&h=300&fit=crop',
    link: '/sluzby/animacny-program/'
  },
  {
    id: 'saso',
    name: 'Program so Šašom',
    shortDescription: 'Neopakovateľná show s naším úžasným Šašom',
    description: 'Fantastický detský zabávač, ktorý show zabaví naraz deti aj dospelých interaktívnou scénkou plnou zvieratiek.',
    image: 'https://images.unsplash.com/photo-1502811735393-a50f1220f5e5?w=400&h=300&fit=crop',
    link: '/sluzby/saso/'
  },
  {
    id: 'skolkariq',
    name: 'Spoločenské hry so Škôlkariqom',
    shortDescription: 'Nezabudnuteľný zážitok, ktorý zabaví aj rozvinie',
    description: 'Riadené hranie využívajúce potenciál spoločenských hier na podporu empatie, tvorivosti a kognitívneho rozvoja.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop',
    link: '/sluzby/skolkariq/'
  }
];
