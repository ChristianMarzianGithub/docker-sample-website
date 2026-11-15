const facts = [
  'Troll dolls are often called “good luck trolls.” Their lucky reputation is part of their playful appeal.',
  'Thomas Dam was a Danish woodcarver. The earliest doll he made for his daughter was carved from wood.',
  'Troll dolls have appeared as pencil toppers and key rings, as well as standalone toys.',
  'The colorful characters in DreamWorks’ Trolls films were inspired by the classic troll dolls.'
];
let factIndex = 0;
document.querySelector('#next-fact').addEventListener('click', () => {
  factIndex = (factIndex + 1) % facts.length;
  document.querySelector('#troll-fact').textContent = facts[factIndex];
});
