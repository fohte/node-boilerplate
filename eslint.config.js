import { mainConfig, typescriptConfig } from '@fohte/eslint-config'

const config = [
  ...mainConfig,
  ...typescriptConfig,
  {
    ignores: ['node_modules/', 'dist/', 'coverage/', '*.log'],
  },
]

export default config
