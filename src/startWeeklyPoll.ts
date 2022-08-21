import { Telegraf, Telegram } from "telegraf";

const startWeeklyPoll: Parameters<Telegraf["command"]>[1] = (ctx) => {
  const chatID = ctx.chat.id;
  const telegram = new Telegram(process.env.BOT_TOKEN!);
  telegram.sendPoll(
    chatID,
    "Squash 6-11pm (Courts are occupied 8-10pm on Friday for training)",
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "🎉"],
    {
      is_anonymous: false,
    }
  );
};

export default startWeeklyPoll;
