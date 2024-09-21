export type Country = {
  name: Name;
  topLevelDomain: string[];
  alpha2Code: string;
  cca3: string;
  ccn3: string;
  cca2: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies: Currency[];
  languages: { [key: string]: string };
  translations: Translations;
  flag: string;

  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
};

export type Name = {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
};

export type Flags = {
  svg: string;
  png: string;
};

export type Currency = {
  code: {
    name: string;
    symbol: string;
  };
  name: string;

  symbol: string;
};

export type Translations = {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
};

export type RegionalBloc = {
  acronym: string;
  name: string;
};
