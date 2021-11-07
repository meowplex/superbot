import { Resp } from "../../../../lib/core/index.js"

export default function school_quiz_command(cctx, answerId, numberOfQuestion = null) {
    let res;
    if (answerId == null || isNaN(answerId)) {
        cache[cctx.info._id] = { numberOfQuestion: 0, answers: new Array(schoolQuiz.length) }
        let tempStr = `${schoolQuiz[0].question}\n\nВарианты ответов:`
        for (let i = 0; i < schoolQuiz[0].answers.length; i++) {
            tempStr += `\n\t${i + 1} - ${schoolQuiz[0].answers[i].text}`
        }
        res = new Resp(tempStr)
        cctx.reply(res);
        return;
    }
    if (numberOfQuestion == null) {
        numberOfQuestion = cache[cctx.info._id].numberOfQuestion
    }
    if (answerId < 1 || answerId > schoolQuiz[numberOfQuestion].answers.length) {
        res = new Resp("Некорректный вариант ответа")
        cctx.reply(res);
        return;
    }

    cache[cctx.info._id].answers[numberOfQuestion] = answerId - 1
    numberOfQuestion += 1
    cache[cctx.info._id].numberOfQuestion = numberOfQuestion

    if (numberOfQuestion == schoolQuiz.length) {
        let score = 0
        for (let i = 0; i < numberOfQuestion; i++) {
            let _answerId = cache[cctx.info._id].answers[i]
            score += schoolQuiz[i].answers[_answerId].score
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
    let tempStr = `${schoolQuiz[numberOfQuestion].question}\n\nВарианты ответов:\n`
    for (let i = 0; i < schoolQuiz[numberOfQuestion].answers.length; i++) {
        tempStr += `\n\t${i + 1} - ${schoolQuiz[numberOfQuestion].answers[i].text}`
    }
    res = new Resp(tempStr)
    cctx.reply(res);
}

let cache = {}

const schoolQuiz =
    [
        {
            question: "Луч, исходящий из вершины угла и делящий его на два равных угла. называется…",
            answers: [
                {
                    text: "Гипотенуза",
                    score: 0
                },
                {
                    text: "Медиана",
                    score: 0
                },
                {
                    text: "Биссектриса",
                    score: 3
                },
            ]
        },
        {
            question: "Чтобы найти площадь прямоугольника нужно…",
            answers: [
                {
                    text: "К длине прибавить ширину",
                    score: 0
                },
                {
                    text: "Длинну умножить на ширину",
                    score: 3
                },
                {
                    text: "Длинну разделить на ширину",
                    score: 0
                },
            ]
        },
        {
            question: "Сколько материков существует на планете Земля?",
            answers: [
                {
                    text: "6",
                    score: 3
                },
                {
                    text: "5",
                    score: 0
                },
                {
                    text: "7",
                    score: 0
                },
            ]
        }
    ]