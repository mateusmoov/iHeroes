export class CreateHeroDto {
  name: string;
  ranking: string;
  location: {
    lat: string;
    long: string;
  };
}
