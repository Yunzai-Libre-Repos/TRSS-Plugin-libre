import fs from "fs"
import YAML from "yaml"
import _ from "lodash"

let path = `${process.cwd()}/plugins/TRSS-Plugin/`
let configFile = `${path}config.yaml`
let configData

let config = {
  tips: "",

  GenshinVoice: {
    publicApi: true,
    api: ""
  },

  RealESRGAN: {
    api: "",
    format: "jpg"
  },

  RemBG: {
    api: ""
  },

  miHoYoLogin: {
    help: true,
    cover: false
  }
}

if (fs.existsSync(configFile)) {
  try {
    configData = YAML.parse(fs.readFileSync(configFile, "utf-8"))
    _.merge(config, configData)
  } catch (err) {
    logger.error(`配置文件 读取失败：${logger.red(err)}`)
  }
}

config.tips = [
  "欢迎使用 TRSS Yunzai Plugin ! 作者：时雨🌌星空",
  "按 Ctrl+Q Y 保存退出",
  "参考：https://Yunzai.TRSS.me"
]

if (config != configData) {
  fs.writeFileSync(configFile, YAML.stringify(config), "utf-8")
}

export default config