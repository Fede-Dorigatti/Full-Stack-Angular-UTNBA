export interface Users {
    name: string;
  email: string;
  password: string;
      
}
export interface ResponseUsers {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    results: Users[];
  }
  