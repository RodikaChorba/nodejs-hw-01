import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const readData = await readContacts();
    return JSON.parse(readData);
  } catch (error) {
    return error.message;
  }
};

console.log(await getAllContacts());
