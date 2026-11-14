const copyButton = document.querySelector('#copy');
const copyStatus = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.querySelector('#command').textContent);
    copyStatus.textContent = 'Command copied. Run it from the repository directory.';
  } catch {
    copyStatus.textContent = 'Select the command above and copy it manually.';
  }
});
