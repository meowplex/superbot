import { Resp } from "../../../../lib/core/index.js"
import quizs from "../utils/quizs.js";

export default function school_quiz_command(cctx, answerId, numberOfQuestion = null) {
    let res;
    let quiz = quizs.school
    
    if (answerId == null || isNaN(answerId)) {
        cache[cctx.info._id] = { numberOfQuestion: 0, answers: new Array(quiz.length) }
        let tempStr = `${quiz[0].question}\n\nВарианты ответов:`
        for (let i = 0; i < quiz[0].answers.length; i++) {
            tempStr += `\n\t${i + 1} - ${quiz[0].answers[i].text}`
        }
        res = new Resp(tempStr)
        cctx.reply(res);
        return;
    }
    if (numberOfQuestion == null) {
        numberOfQuestion = cache[cctx.info._id].numberOfQuestion
    }
    if (answerId < 1 || answerId > quiz[numberOfQuestion].answers.length) {
        res = new Resp("Некорректный вариант ответа")
        cctx.reply(res);
        return;
    }

    cache[cctx.info._id].answers[numberOfQuestion] = answerId - 1
    numberOfQuestion += 1
    cache[cctx.info._id].numberOfQuestion = numberOfQuestion

    if (numberOfQuestion == quiz.length) {
        let score = 0
        for (let i = 0; i < numberOfQuestion; i++) {
            let _answerId = cache[cctx.info._id].answers[i]
            score += quiz[i].answers[_answerId].score
        }
        if (score >= 9) {
            res = new Resp('Результат теста: Вы гений!')
            cctx.reply(res);
            return;
        }
        if (score >= 6) {
            res = new Resp('Результат теста: Вам стоит подтянуть ваши знания!')
            cctx.reply(res);
            return;
        }
        if (score >= 3) {
            res = new Resp('Результат теста: Вы мало что помните из школьной программы!')
            cctx.reply(res);
            return;
        }
        if (score >= 0) {
            res = new Resp('Результат теста: Вы полный ноль!')
            cctx.reply(res);
            return;
        }
    }
    let tempStr = `${quiz[numberOfQuestion].question}\n\nВарианты ответов:\n`
    for (let i = 0; i < quiz[numberOfQuestion].answers.length; i++) {
        tempStr += `\n\t${i + 1} - ${quiz[numberOfQuestion].answers[i].text}`
    }
    res = new Resp(tempStr)
    cctx.reply(res);
}

let cache = {}
