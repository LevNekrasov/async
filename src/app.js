/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import GameSavingLoader from '../gameSavingLoader.js';

GameSavingLoader.load()
  .then((result) => console.log(result, typeof result))(async () => {
    try {
      const result = await GameSavingLoader.load();

      return JSON.parse(result);
    } catch (error) {
      console.error(error);
    }
  })();
