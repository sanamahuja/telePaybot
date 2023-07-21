const express = require("express")
const cors = require("cors")
const PORT = 4000
const SECRET_TOKEN = 'SanamPaybot'
const GENERAL_URL = "https://api.telegram.org/bot"
const BOT_TOKEN = "6147622164:AAHuo6mZxb0JFN81y8Xtr6wUbh7M4stBDxI"

const BOT_METHODS = {
    SEND_MESSAGE: "sendMessage"
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/", async (req, res) => {
    if (req.headers['x-telegram-bot-api-secret-token'] === SECRET_TOKEN) {
        try {
            await axios.post(`${GENERAL_URL}${BOT_TOKEN}/${BOT_METHODS.SEND_MESSAGE}`,
                {
                    chat_id: chatId,
                    text: `hello back 👋 ${req.body.chat.first_name}`
                })

        } catch (error) {
            console.log("send error")
        }
    }
    res.end()
})

app.listen(PORT, () => {
    console.log("service running on port", PORT)
})