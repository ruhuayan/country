export interface Country {
  id: string;
  name: string;
  nativeName: string;
  population: number;
  capital: string;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  flag: string;
  borders: string[];
}
