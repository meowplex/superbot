import fs from "fs";
import path from "path";
import { Locale } from "./locale.js";

export class Localization {
    /**
     *
     * @param {String} pathDir - path to the folder with json localization files
     */
    constructor(pathDir) {
        this.path = pathDir;
        this.files = [];
        this.locales = {};
        const files = fs.readdirSync(pathDir);

        for (let i = 0; i < files.length; i++) {
            let match = files[i].match(/^([a-zA-Z]+?)\.json$/);
            if (match) {
                this.files.push(match[1]);
                this.locales[match[1]] = new Locale(
                    path.join(pathDir, `${match[1]}.json`)
                );
            }
        }
    }
}
