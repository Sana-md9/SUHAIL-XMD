const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==";
global.website=process.env.GURL || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "> `𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿`" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923174977136";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923288330026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923288330026,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_50_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJUaUdNYjBWRDNmQ2NXOWc1bU5qb28wOWx3Z1F1amxGbDdJN0xCZGl4c1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJxZ2Y2YUJ3VE1xU2hKMDNsMXlib3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDBmMGE3YzAtM2UyYi00MzMwLTkzMDQtOTYwNWE1ZTYzZmEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNjgsXG4gICAgICAxMixcbiAgICAgIDI0NSxcbiAgICAgIDE2OSxcbiAgICAgIDI0NixcbiAgICAgIDExNyxcbiAgICAgIDExOSxcbiAgICAgIDE4MCxcbiAgICAgIDU2LFxuICAgICAgMjM2LFxuICAgICAgMjM0LFxuICAgICAgMjMyLFxuICAgICAgMTU4LFxuICAgICAgMTcyLFxuICAgICAgMjI5LFxuICAgICAgNzcsXG4gICAgICAxNTEsXG4gICAgICAxNjYsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICA0NSxcbiAgICAgIDI1NCxcbiAgICAgIDg5LFxuICAgICAgNzIsXG4gICAgICAxNjAsXG4gICAgICAxNDQsXG4gICAgICAxNTUsXG4gICAgICA4OCxcbiAgICAgIDE5OSxcbiAgICAgIDM1LFxuICAgICAgMTM1LFxuICAgICAgOTEsXG4gICAgICAxMSxcbiAgICAgIDE3LFxuICAgICAgMTM3LFxuICAgICAgMTA1LFxuICAgICAgOTEsXG4gICAgICAxMTcsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0haWFBKUzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1NTU5MDE2NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA0MzI2NzEzNDk5OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJGbnRNREVNYlRqTGNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJva1d5NGt1SFhvTEwzTGVDa3V2QUJac1pjV3dzMi9VU2dlQXJOR25KeUdvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklMdG9ocVNySU9NVU9HUnJqUUYrb2xMY1hUa1IvY2tEbnMrU0FCemlHTHZuanBZeXBmYnRkUTIyUitONGFiWFpYRXRvSDFZZDFhdE9yaHhDN0I1dUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpwcFgrSGpDYlk2NE9jc29pMEZPM0dqZXRqdWM2VEpvSEhrZlU5K1JvSWV5NmtxWUxFa0M2RTg0MzA5eHE4S3UxMy9ZY05uaDYzR3RtUGV5b3dSQWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1NTU5MDE2NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYxNjM0MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMK01cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwrTS5qc29uIjogIntcImtleURhdGFcIjpcIldsN2E2djJYRmJRQXZGSDh2eUg5UFZXUmFWYnVLN0N1UnlicFlSbmZKTk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTc5ODcwMzk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjYwODA2MTU2ODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "> `𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿`" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🦄",
  packname: process.env.PACK_NAME || "𝒁𝒊𝙙𝒊𝒊-𝑫𝙚𝙘𝙚𝙣𝙩-𝕭𝐎𝐘",
  botname : process.env.BOT_NAME  || "`𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿`",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
