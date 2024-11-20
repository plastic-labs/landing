import { HrefOriginIconMap } from './button-social.types'
import { IconDiscord } from './icon-discord'
import { IconGitHub } from './icon-github'
import { IconHuggingFace } from './icon-hugging-face'
import { IconTwitter } from './icon-twitter'

export const hrefOriginIconMap: HrefOriginIconMap = {
  'https://discord.gg': IconDiscord,
  'https://github.com': IconGitHub,
  'https://huggingface.co': IconHuggingFace,
  'https://twitter.com': IconTwitter,
  'https://x.com': IconTwitter,
}
