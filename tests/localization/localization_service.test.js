import { LocalizationService } from "../../src/localization/localization_service.js";

const ru = new LocalizationService('ru');
const en = new LocalizationService('en');

test(() => {
    expect('Привет').toEqual(ru.get('hello'))
    expect('Hello').toEqual(en.get('hello'))
})