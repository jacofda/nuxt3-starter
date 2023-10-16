import antfu from '@antfu/eslint-config'

export default antfu({
  'vue/block-order': ['error', {
    order: ['template', 'script', 'style'],
  }],
  'rules': {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
})
