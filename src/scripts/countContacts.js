import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const readData = await readContacts();
    return JSON.parse(readData).length;
  } catch (error) {
    return error.message;
  }
};

console.log(await countContacts());
