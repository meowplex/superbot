export class DeclensionByCases {


    /**
     * 
     * @param {Number} numeral 
     * @param {String} one declension with "one"
     * @param {String} two declension with "two"
     * @param {String} five declension with "three"
     * @returns case phrase
     */
    static nounWithNumeral(numeral, one, two, five){
        let noun;
        let lastDigit = numeral % 10;

        if (lastDigit == 1)
            noun = one;
        else if (lastDigit == 0 || lastDigit > 5)
            noun = five;
        else if (lastDigit > 1 && lastDigit < 5)
            noun = two;
        return `${numeral} ${noun}`;
    }

}