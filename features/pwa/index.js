window.addEventListener('DOMContentLoaded', function() {
  // 执行注册
  navigator.serviceWorker.register('/features/pwa/sw.js').then(function(registration) {
    console.log(registration)
    console.log('service worker registed!');

  }).catch(function(err) {

  });
});

