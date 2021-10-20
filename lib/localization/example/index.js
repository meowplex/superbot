import { Localization } from "../localization.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const localizationService = new Localization(path.join(__dirname, "locales"));

const en = localizationService.locales["en"];

console.log(en.get("hello")); /// Hello

const ru = localizationService.locales["ru"];

console.log(ru.get("cat", 4)); /// кошки
