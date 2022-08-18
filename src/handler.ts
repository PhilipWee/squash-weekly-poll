import { Telegraf, Telegram } from "telegraf";
import fetch from "node-fetch";

export async function run() {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Bot token not defined properly!");
  }
  if (!process.env.SQUASH_GROUP_ID) {
    throw new Error("Squash group ID not defined properly");
  }
  const telegram = new Telegram(process.env.BOT_TOKEN);
  telegram.sendPoll(
    process.env.SQUASH_GROUP_ID,
    "Squash 6-11pm (Courts are occupied 8-10pm on Friday for training)",
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "🎉"],
    {
      is_anonymous: false,
    }
  );
}

export function pollForMeta() {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Bot token not defined properly!");
  }
  const bot = new Telegraf(process.env.BOT_TOKEN!);
  bot.start((ctx) => {
    console.dir(ctx, { depth: 69 });
    ctx.reply("Context Logged in Terminal");
  });
  console.log("Bot running, please run /start in group...");
  bot.launch();
}
