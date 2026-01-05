import { NavItem, Project, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'PROYECTOS', href: '/projects' },
  { label: 'NOSOTROS', href: '/nosotros' },
  { label: 'FILOSOFIA', href: '/filosofia' },
  { label: 'CONTACTO', href: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'Feel-Pedraza',
    title: 'Feel Pedraza',
    location: 'Manuela Pedraza 3442, Cdad. Autónoma de Buenos Aires',
    category: 'Residencial',
    image: 'https://picsum.photos/800/1000?random=1',
    status: 'En Venta',
    amenities: 'Piscina, Jardín, Gimnasio',
    description: 'El Proyecto Urbano cuenta con espacios luminosos, rincones verdes, jardines aterrazados, espacios de co-working, distribución de redes de conexión wi-fi en lugares comunes, piscinas con solárium, automatizaciones y porteros visores en resguardo de seguridad, terrazas privadas con jardines colgantes, fachadas integrales e iluminación incorporada a la arquitectura y al realce del diseño. Las unidades se encuentran diseñadas y equipadas con un alto grado de detalle, calidad y vanguardia. El diseño de sus espacios y mobiliario, responden a una permanente búsqueda de innovación y flexibilidad, dando como resultado ambientes amplios, funcionales y luminosos. Los materiales elegidos son nobles y están pensados para que perduren inalterables a lo largo del tiempo.'
  },
  {
    id: 2,
    slug: 'Feel-Pedraza-2',
    title: 'Feel Pedraza 2',
    location: 'Manuela Pedraza 3861, Cdad. Autónoma de Buenos Aires',
    category: 'Residencial',
    image: 'https://picsum.photos/800/600?random=2',
    status: 'En Construcción',
    amenities: 'Piscina, Jardín, Gimnasio',
    description: 'El Proyecto Urbano cuenta con espacios luminosos, rincones verdes, jardines aterrazados, espacios de co-working, distribución de redes de conexión wi-fi en lugares comunes, piscinas con solárium, automatizaciones y porteros visores en resguardo de seguridad, terrazas privadas con jardines colgantes, fachadas integrales e iluminación incorporada a la arquitectura y al realce del diseño. Las unidades se encuentran diseñadas y equipadas con un alto grado de detalle, calidad y vanguardia. El diseño de sus espacios y mobiliario, responden a una permanente búsqueda de innovación y flexibilidad, dando como resultado ambientes amplios, funcionales y luminosos. Los materiales elegidos son nobles y están pensados para que perduren inalterables a lo largo del tiempo.'
  },
  {
    id: 3,
    slug: 'Fragata-Sarmiento',
    title: 'Fragata Sarmiento',
    location: 'Fragata Pres. Sarmiento 2101, Cdad. Autónoma de Buenos Aires',
    category: 'Residencial',
    image: 'https://picsum.photos/800/800?random=3',
    status: 'Finalizado',
    amenities: 'Piscina, Jardín, Gimnasio',
    description: 'El Proyecto Urbano cuenta con espacios verdes dónde la luz y el sol se asoma, y riega todos los ambientes de los departamentos diseñados. Ambientes amplios, luminosos, funcionales y factibles de ser divididos sin perder su ventilación y asolamiento.'
  },
];

export const STATS: StatItem[] = [
  { value: '25+', label: 'AÑOS DE LEGADO' },
  { value: '25', label: 'PROYECTOS TERMINADOS' },
  { value: '3', label: 'PROYECTOS EN CONSTRUCCIÓN' },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Lorena',
    role: 'Arquitecta',
    bio: 'Desde hace mas de 15 años nos especializamos en el desarrollo de negocios inmobiliarios. Transformamos espacios urbanos, sustentables y eficientes con una mirada distinta para que cada construcción sea única de verdad',
    image: '/assets/images/Lorena.png' // Placeholder image
  },
  {
    id: 2,
    name: 'German',
    role: 'Estudiante de Arquitectura',
    bio: 'Trabajar en un entorno de constante aprendizaje es un gran desafío. Grupo Trama esta en constante evolución y desarrollo, creando proyectos creativos e innovadores',
    image: '/assets/images/German.png' // Placeholder image
  },
  {
    id: 3,
    name: 'Mariano',
    role: 'Contador',
    bio: 'Contamos con un equipo de profesionales interdiciplinarios, arquitectos, ingenieros, abogados, contadores y especialistas en inversiones, que permiten llevar a cabo la realización de varios proyectos de manera simultánea, involucrándonos en cada uno de ellos',
    image: '/assets/images/Mariano.png' // Placeholder image
  },
  {
    id: 4,
    name: 'Alejandro',
    role: 'Contador',
    bio: 'El desarrollo financiero es hoy la clave para brindar a los clientes la posibilidad de cumplir el sueño de tener su casa, es una prioridad dentro de Grupo Trama trabajar en ello',
    image: '/assets/images/Alejandro.png' // Placeholder image
  }
];