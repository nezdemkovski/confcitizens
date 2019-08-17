export const generateLocation = (city: string | null, country: string | null) =>
  `${city ? city + ', ' : ''}${country}`;
