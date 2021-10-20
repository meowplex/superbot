import { Resp } from "../../../../lib/superbot/index.js";
import { createWorker } from "tesseract.js"

export default async function recognize_text_command(cctx, image) {
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('rus')
    await worker.initialize('rus')
    const { data: { text } } = await worker.recognize(image)
    worker.terminate()
    let res = new Resp(`Распознанный текст:\n${text}`)
    cctx.reply(res);
}