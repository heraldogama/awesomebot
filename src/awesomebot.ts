import "reflect-metadata";
import { Telegraf } from "telegraf";
import "./config/env";
import "./database/connection";
import Awesome from "./entity/Awesome";
import { getRepository } from "typeorm";

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start(async (ctx) => {
  const awesomeRepository = getRepository(Awesome);
  const chat_id = ctx.from.id;
  const checkIfExists = await awesomeRepository.findOne({ where: { chat_id } });
  if (!checkIfExists) {
    ctx.reply(`Seja bem vindo ${ctx.from.first_name}! Me informe seu e-mail.`);
  } else {
    ctx.reply(`${ctx.from.first_name}, já temos o seu cadastro aqui.`);
  }
});

bot.on("text", async (ctx) => {
  const awesomeRepository = getRepository(Awesome);
  const chat_id = ctx.from.id;
  const checkIfExists = await awesomeRepository.findOne({ where: { chat_id } });
  const awesome = awesomeRepository.create();
  if (!checkIfExists) {
    awesome.chat_id = ctx.from.id;
    awesome.name = ctx.from.first_name;
    awesome.email = ctx.message.text;
    await awesomeRepository
      .save(awesome)
      .then(() => {
        ctx.reply(
          `${ctx.from.first_name}, agora você pode usufruir dos nossos serviços. Seja bem vindo!`
        );
      })
      .catch((error) => console.error(error));
  } else {
    ctx.reply(`${ctx.from.first_name}, tudo tranquilo por aqui.`);
  }
});

bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
