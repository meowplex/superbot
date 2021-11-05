import fs from "fs"

export class Locale {

    constructor(path){
        let rawdata = fs.readFileSync(path);
        this.data = JSON.parse(rawdata);
    }

    get(key, number){
        const lastDigit = number % 10;
        let numberStr = "one"
        if (lastDigit > 1 && lastDigit < 5)
            numberStr = "few"
        else if (lastDigit >= 5 || lastDigit == 0)
            numberStr = "many"

        let value = this.data[key];

        if (typeof value === 'string')
            return value;
        else
            return value[numberStr]

    }

}

