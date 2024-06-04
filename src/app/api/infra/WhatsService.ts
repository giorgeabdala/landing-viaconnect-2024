import axios from "axios";
const API_URL = process.env.WHATS_API_URI || "http://127.0.0.1:8083/message/sendText/polkadotBrasil";
const API_KEY = process.env.API_KEY;

export default class WhatsAppNotificationServiceCodeChat  {

    private readonly headers = {"apikey": API_KEY};
    private readonly requestBody = {
        number: "",
        options: {delay: 50},
        textMessage: {text: ""}
    };
    async send(phone: string, message: string) {
        this.requestBody.number = phone;
        this.requestBody.textMessage.text = message;
        const axiosResponse = await axios.post(API_URL, this.requestBody, {headers: this.headers});
        return new Response(axiosResponse.data);
    }
}
