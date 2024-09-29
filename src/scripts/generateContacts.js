import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const readData = await readContacts();
    const initialData = JSON.parse(readData);
    let iterator = 1;
    const additionalData = [];
    while (number >= iterator) {
      iterator++;
      const dataElement = createFakeContact();
      additionalData.push(dataElement);
    }
    const dataToWrite = [...initialData, ...additionalData];
    await writeContacts(JSON.stringify(dataToWrite));
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(2);
