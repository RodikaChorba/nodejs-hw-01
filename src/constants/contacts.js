import path from 'node:path';

const pathToDir = path.join(process.cwd());

export const PATH_DB = path.join(pathToDir, 'src', 'db', 'db.json');
