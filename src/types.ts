export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}

interface Rating {
  average: number;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Self;
}

interface Self {
  href: string;
}
