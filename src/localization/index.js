import path, { dirname } from "path"
import { fileURLToPath } from 'url';
import { Localization } from "../../lib/localization/localization.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const localization = new Localization(path.join(__dirname, 'locales'))