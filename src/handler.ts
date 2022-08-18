import { Telegraf } from "telegraf";

export function run() {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Bot token not defined properly!");
  }
  const bot = new Telegraf(process.env.BOT_TOKEN!);
}
