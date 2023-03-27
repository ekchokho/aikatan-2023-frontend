import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetLineClamp from '@twind/preset-line-clamp'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  /* options */
  presets: [presetAutoprefix(), presetTailwind(), presetLineClamp()]
})
