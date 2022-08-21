import { Telegraf, Telegram } from "telegraf";
import startWeeklyPoll from "./startWeeklyPoll";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

export async function run() {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Bot token not defined properly!");
  }
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.command("start_weekly_poll", startWeeklyPoll);

  console.log({ PORT, URL });

  if (URL) {
    //Use webhook when on heroku
    bot.telegram.setWebhook(`${URL}/bot${process.env.BOT_TOKEN}`);
    //@ts-ignore
    bot.startWebhook(`/bot${process.env.BOT_TOKEN}`, null, PORT);
    console.log("Webhook registered!");
  } else {
    bot.launch();
    console.log("Polling started!");
  }
}

run();
