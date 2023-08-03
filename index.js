const express = require("express")
const cors = require("cors")
const axios = require("axios")
const PORT = 4000
const SECRET_TOKEN = 'SanamPaybot'
const GENERAL_URL = "https://api.telegram.org/bot"
const BOT_TOKEN = "6147622164:AAHuo6mZxb0JFN81y8Xtr6wUbh7M4stBDxI"

const BOT_METHODS = {
    SEND_MESSAGE: "sendMessage"
}
const keyBoard = {
    "inline_keyboard": [
        [{
            "text": "Budget",
            'callback_data': 'budget'
        }],
        [{
            "text": "Total",
            'callback_data': 'total'
        }],
        [{
            "text": "Balance",
            'callback_data': 'balance'
        }],
        [{
            "text": "Expenses",
            'callback_data': 'expenses'
        }]
    ]
};

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/", async (req, res) => {
    const chat_Id = req.body?.message?.chat.id || ""
    console.log(req.headers.origin, "\n", req.body)
    try {
        await axios.post(`${GENERAL_URL}${BOT_TOKEN}/${BOT_METHODS.SEND_MESSAGE}`,
            {
                chat_id: chat_Id,
                text:"work from home",
                reply_markup: JSON.stringify(keyBoard)
            })
    }
    catch (err) {
        console.log(err)
    }
    res.send({ "ok": true })
})

app.listen(PORT, () => {
    console.log("service running on port", PORT)
})
