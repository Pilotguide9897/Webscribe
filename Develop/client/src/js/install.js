const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // perform actions such as displaying a custom installation prompt or modifying the default behavior of the installation process.
  event.preventDefault();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // call the necessary functions to initiate the installation process, such as showing the installation prompt obtained from the beforeinstallprompt event.
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // perform any necessary actions or provide feedback to the user after the installation process is complete.
  console.log("👍", "appinstalled", event);
});
