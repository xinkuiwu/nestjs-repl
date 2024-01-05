import { repl } from "@nestjs/core";
import { AppModule } from "./app.module";

// 常用场景测试某个service
async function bootstrap() {
  // 记录命令历史
  const replServer  = await repl(AppModule)
  replServer.setupHistory('.nestjs_repl_history', err => {
    if(err) {
      console.error(err)
    }
  })
}

bootstrap()