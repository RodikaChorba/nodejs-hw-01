import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const readData = await readContacts();
    const initialData = JSON.parse(readData);
    initialData.pop();
    await writeContacts(JSON.stringify(initialData));
  } catch (error) {
    return error.message;
  }
};

removeLastContact();
