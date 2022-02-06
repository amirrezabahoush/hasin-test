const butInstall = document.getElementById('butInstall');

//we can add app.js in index.html instead of loading sw.js directly for manual installing
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' }).then(() => {
    console.log('service worker registered.!');
  })
}

butInstall.addEventListener('click', (event) => {
  if(window.deferredPrompt) {
    window.deferredPrompt.prompt();

    window.deferredPrompt.userChoise.then(result => {
      console.log(result.outcome);
      if(result.outcome === 'dismissed') {
        console.log('user cancelled installation');
      } else {
        console.log('user added to home screen.');
      }
    })
    window.deferredPrompt = null;
  }
})

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  // Clear the window.deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});