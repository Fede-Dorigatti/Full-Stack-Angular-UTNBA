interface Test {
  id: string;
  [k: string]: string | number;
}
interface Attributes {
  id: string;
  name: string;
}
interface Picture {
  id: string;
  url: string;
}
export interface DepartamentDetails {
  id: string;
  title: string;
  price: number;
  thumbnail: string | number | boolean;
  accepts_mercadopago: boolean;
  stop_time: Date;
  seller?: {
    id: string;
    nickname: string;
  };
  attributes: Attributes[];
  pictures: Picture[];
}
export interface Departament {
  id: string;
  title: string;
  price: number;
  thumbnail: string | number | boolean;
  accepts_mercadopago: boolean;
  stop_time: Date;
  seller?: {
    id: string;
    nickname: string;
  };
  attributes: Attributes[];
}
export interface ResponseDepartaments {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  results: Departament[];
}
