import { Resp } from "../../../../lib/superbot/index.js";
import { createWorker } from "tesseract.js";

export default async function recognize_text_command(cctx, image) {
    if (image != null && image.match(/.jpg|.png|.bmp/) != null) {
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage("rus");
        await worker.initialize("rus");
        const {
            data: { text },
        } = await worker.recognize(image);
        worker.terminate();
        cctx.reply(new Resp(`Распознанный текст:\n${text}`));
    } else {
        cctx.reply(
            new Resp("Проверьте наличие прикреленной картинки к сообщению")
        );
    }
}
