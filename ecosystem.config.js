module.exports = {
  apps: [
    {
      name: 'FineVinum',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    },
  ],
  deploy : {
    production : {
      user: 'admin',
      host: ['45.67.57.171'],
      ref: 'origin/master',
      repo: 'git@github.com:mazaretto/finevinume.com-vue-nuxt.git',
      ssh_options: ['ForwardAgent=yes'],
      path: '/home/admin/web/finevinume.com/public_html',
      'post-deploy' : 'npm && npm build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
