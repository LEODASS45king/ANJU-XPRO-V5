//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tUU1JGVEwwQ296L2ViYWo5a2xmdG5JYUw4eUYvV0NDcGdCRFlmQ3JHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjRGRytidklRUlJLUmFXdkcxUFB4RUhiREc3eTBBYWIrb3F5UUNqU3p5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQTIvenlVTTUxMVNYZDk0djZkUG1OTGxZeVozRzRqMkR4bFgrUEVTUGxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzVDVGZENabnFkTW81VEFmM3g2ZmQ0RCtaM3hHTnNPaGxzd1l3QnI0UEhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FMWhvb1BsWUIzOExPRjh2UFNvdTBpRlR6RVNMWDVmbkxlTG8xdFZOV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktTaXd2emMxMWIvOVJGa3JPazQvaGxIMnQzU3ZLWW1SNmZKbzFkUlBaVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05NQXdzMGpSdW5UK1BaTEtjaTVHbEp2WEluV0N2QVUveklhRlZuTGVYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3Frc1BEY1JzR2Q3Lytrc0xTc1dPY0dvMjlUL1BSb3pqZGN3S1VOeGwxMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhrUm9GayszVE9RdnhUbjFuQjZDNWZ2RHFNdEVsdmsrK2xDNEp2L0dYMTdBdU9wZEJWbFBOQXdrZFgza1JUVHRaOHVQOXFVa1pnT09NMGlGdGg2T0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6Im5ucGgybGFOUTc4dGplOE9zVHVlak9mNlRFQ0tyMjg3YnhMSW5yT3FpQnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFla1ZpTHhJUm1pTTBkbUJnNGR5NmciLCJwaG9uZUlkIjoiNzUxNjMzYjEtZmFjNC00MzhiLWFlNjAtNjZkMDZlODEwZGEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJvUEhiNEkyMzkvTkV3M3hxQ2tZeEY0UC9kZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUW5TVytSYVlJM2tZWmU3MGJ3RkF1SEYxQWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSENHRTQzUlYiLCJtZSI6eyJpZCI6Ijk0NzA2NzQ4MTA0OjYxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzY5MTQ1NTk1NjYwMjc6NjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObXRyT2NERUkrc3NzUUdHQllnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2OFJMazBiTGU1cURFd2kwaTAwL200NXFsL2dXamNtMGl6MU1WQk52Y0R3PSIsImFjY291bnRTaWduYXR1cmUiOiJodCt3dWtUYTR1ektUUklmVW1tQWljSDA2U1RDWE5yRm5RVEdVQXJnSzZCQVE3c3B5Y0pJcXpBSG9sdHE4WGRXNW9MckJwMHZqOGdhRWdRZDkzMmdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGprTmZHRHVFWmswcGRoMUl6N052YXZwT2VtdDV4emU0cDdjUENlMkJJTnZTWUNGNjk3S2x6WVpyTmJtT2N0K0VVc2VsR3lsRHhKMFRORVVjNTFaRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNjc0ODEwNDo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJldkVTNU5HeTN1YWd4TUl0SXROUDV1T2FwZjRGbzNKdElzOVRGUVRiM0E4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQwNDM5MzIsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
