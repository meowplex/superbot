import { DeclensionByCases } from "../../src/services/declension_by_cases_service.js";

test('DeclensionByCases', () => {
    expect('5 дней').toBe(DeclensionByCases.nounWithNumeral(5, 'день', 'дня', 'дней'));
    expect('3 ночи').toEqual(DeclensionByCases.nounWithNumeral(3, 'ночь', 'ночи', 'ночей'));
    expect('22222 пальто').toBe(DeclensionByCases.nounWithNumeral(22222, 'пальто', 'пальто', 'пальто'));

});