export interface IRandomUser {
  results: Result[];
  error: string;
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
}

export interface ID {
  name: string;
  value: string;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
