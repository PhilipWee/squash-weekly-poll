import { Telegraf, Telegram } from "telegraf";
import startWeeklyPoll from "./startWeeklyPoll";
import dotenv from "dotenv";
dotenv.config();

export async function run() {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Bot token not defined properly!");
  }
  if (!process.env.SQUASH_GROUP_ID) {
    throw new Error("Squash group ID not defined properly");
  }
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.command("start_weekly_poll", startWeeklyPoll);

  bot.launch();
}

run();
