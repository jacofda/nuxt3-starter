module.exports = {
    apps: [
      {
        name: 'www-mow',
        port: '80',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  