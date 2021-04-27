import axios from "axios";

export interface CharacterModel {
  Species: string;
  Age: string;
  Planet: string;
  Profession: string;
  Status: string;
  FirstAppearance: string;
  PicUrl: string;
  Relatives: string;
  VoicedBy: string;
  Name: string;
}

class CharacterService {
  constructor() {}

  async getAll(): Promise<CharacterModel[]> {
    const result = await axios.get(
      `http://futuramaapi.herokuapp.com/api/v2/characters`
    );

    return result.data;
  }
}

const characterService = new CharacterService();

export { characterService };
