/* eslint-disable linebreak-style */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then(
        (data) => JSON.parse(data),
        (error) => new Error(error),
      );
  }
}
