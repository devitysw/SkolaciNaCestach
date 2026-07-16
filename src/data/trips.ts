import animacnyImg from '../assets/animacny.svg';
import sasoImg from '../assets/saso.svg';
import skolkariqImg from '../assets/skolkariq.svg';

export interface Term {
  dates: string;
  price: number;
  originalPrice?: number;
  status: 'available' | 'few-spots' | 'full';
}

export interface Trip {
  id: string;
  name: string;
  location: string;
  region: string;
  type: 'priroda' | 'lyziarske' | 'turisticky';
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
  terms: Term[];
  /** Position on the Slovakia map (SlovakiaMap.astro), in the 0-800 x / 0-412 y viewBox space. */
  mapPosition: { x: number; y: number };
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
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Bansk%C3%A1+Bel%C3%A1,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Pedagogický dozor', 'Poistenie', 'Vecné darčeky'],
    terms: [
      { dates: '12.5. – 16.5.2026', price: 135, originalPrice: 155, status: 'available' },
      { dates: '19.5. – 23.5.2026', price: 135, originalPrice: 155, status: 'few-spots' },
      { dates: '26.5. – 30.5.2026', price: 155, status: 'full' }
    ],
    mapPosition: { x: 266.2, y: 224.6 }
  },
  {
    id: 'borova-sihot',
    name: 'Borová Sihoť',
    location: 'Liptovský hrádok',
    region: 'Vysoké Tatry',
    type: 'priroda',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=400&fit=crop',
    description: 'Nádherné prostredie v srdci lesov, priamo pod Tatrami. Ideálne miesto pre školy v prírode s bohatým programom aktivít v okolí.',
    dates: 'máj - jún',
    accommodationType: 'Chata',
    gallery: [
      'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Pedagogický dozor', 'Poistenie'],
    terms: [
      { dates: '4.5. – 8.5.2026', price: 155, status: 'available' },
      { dates: '11.5. – 15.5.2026', price: 155, status: 'few-spots' },
      { dates: '18.5. – 22.5.2026', price: 155, status: 'full' }
    ],
    mapPosition: { x: 419.7, y: 117.9 }
  },
  {
    id: 'chata-pod-ostrym-vrchom',
    name: 'Chata pod ostrým vrchom',
    location: 'Liptovský hrádok',
    region: 'Nízke Tatry',
    type: 'priroda',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&h=400&fit=crop',
    description: 'Útulná horská chata obklopená prírodou Nízkych Tatier, ideálna pre aktívne školy v prírode plné výletov a hier.',
    dates: 'máj - jún',
    accommodationType: 'Chata',
    gallery: [
      'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Pedagogický dozor', 'Poistenie'],
    terms: [
      { dates: '4.5. – 8.5.2026', price: 155, status: 'few-spots' },
      { dates: '11.5. – 15.5.2026', price: 155, status: 'available' },
      { dates: '25.5. – 29.5.2026', price: 155, status: 'available' }
    ],
    mapPosition: { x: 375.1, y: 118.5 }
  },
  {
    id: 'penzion-guldiner',
    name: 'Penzión Guldiner',
    location: 'Liptovský hrádok',
    region: 'Stredné Slovensko',
    type: 'lyziarske',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=400&fit=crop',
    description: 'Rodinný penzión priamo pod lyžiarskym svahom, vhodný pre lyžiarske kurzy všetkých úrovní.',
    dates: 'december - február',
    accommodationType: 'Penzión',
    gallery: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Polpenzia', 'Skipas', 'Sprievodca'],
    terms: [
      { dates: '7.12. – 11.12.2026', price: 155, status: 'available' },
      { dates: '11.1. – 15.1.2027', price: 155, status: 'full' },
      { dates: '8.2. – 12.2.2027', price: 155, status: 'few-spots' }
    ],
    mapPosition: { x: 398.6, y: 173.2 }
  },
  {
    id: 'x-bionic-hotel',
    name: 'X-BIONIC Hotel',
    location: 'Liptovský hrádok',
    region: 'Vysoké Tatry',
    type: 'lyziarske',
    pricePerDay: 135,
    originalPrice: 155,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&h=400&fit=crop',
    description: 'Moderný hotelový komplex s wellness zázemím a vlastným lyžiarskym svahom priamo v areáli.',
    dates: 'december - február',
    accommodationType: 'Hotel',
    gallery: [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Plná penzia', 'Skipas', 'Sprievodca'],
    terms: [
      { dates: '14.12. – 18.12.2026', price: 135, originalPrice: 155, status: 'available' },
      { dates: '18.1. – 22.1.2027', price: 135, originalPrice: 155, status: 'few-spots' },
      { dates: '15.2. – 19.2.2027', price: 155, status: 'full' }
    ],
    mapPosition: { x: 434.3, y: 151.7 }
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
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=Liptovsk%C3%BD+Hr%C3%A1dok,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Polpenzia', 'Pedagogický dozor', 'Poistenie'],
    terms: [
      { dates: '6.4. – 10.4.2026', price: 135, originalPrice: 155, status: 'available' },
      { dates: '7.9. – 11.9.2026', price: 135, originalPrice: 155, status: 'few-spots' },
      { dates: '14.9. – 18.9.2026', price: 155, status: 'full' }
    ],
    mapPosition: { x: 362.0, y: 152.7 }
  },
  {
    id: 'sliezsky-dom',
    name: 'Sliezsky dom',
    location: 'Štrbské Pleso',
    region: 'Vysoké Tatry',
    type: 'turisticky',
    pricePerDay: 145,
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&h=400&fit=crop',
    description: 'Horská chata priamo na turistických chodníkoch Vysokých Tatier. Ideálne východisko pre turistický kurz s výstupmi na okolité štíty a plesá.',
    dates: 'máj - október',
    accommodationType: 'Horská chata',
    gallery: [
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop'
    ],
    mapUrl: 'https://maps.google.com/maps?q=%C5%A0trbsk%C3%A9+Pleso,+Slovensko&output=embed',
    included: ['Ubytovanie', 'Strava', 'Sprievodca', 'Poistenie'],
    terms: [
      { dates: '18.5. – 22.5.2026', price: 145, status: 'available' },
      { dates: '15.6. – 19.6.2026', price: 145, status: 'few-spots' },
      { dates: '5.10. – 9.10.2026', price: 145, status: 'available' }
    ],
    mapPosition: { x: 470, y: 100 }
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
    description: 'Vyberte si našich osvedčených animátorov s pestrým animačným programom.',
    image: animacnyImg.src,
    link: '/sluzby/animacny-program/'
  },
  {
    id: 'saso',
    name: 'Program so Šašom',
    shortDescription: 'Neopakovateľná show s naším úžasným Šašom',
    description: 'Je to fantastický detský zabávač, ktorý šašovaním zabaví naraz deti aj dospelých.',
    image: sasoImg.src,
    link: '/sluzby/saso/'
  },
  {
    id: 'skolkariq',
    name: 'Spoločenské hry so Škôlkariqom',
    shortDescription: 'Nezabudnuteľný zážitok, ktorý zabaví aj rozvinie',
    description: 'Nezabudnuteľný zážitok, ktorý deti nielen zabaví, ale aj rozvinie.',
    image: skolkariqImg.src,
    link: '/sluzby/skolkariq/'
  }
];
