import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const readData = await readContacts();
    const initialData = JSON.parse(readData);
    const dataElement = createFakeContact();
    const dataToWrite = [...initialData, dataElement];
    await writeContacts(JSON.stringify(dataToWrite));
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
