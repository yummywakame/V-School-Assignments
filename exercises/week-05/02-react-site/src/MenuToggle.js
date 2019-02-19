export function ToggleMenu(id) {
   var e = document.getElementById(id);
   if (e.style.display === 'flex') {
      e.style.display = 'none';
      e.style.transition = 'all 0.3s ease';
   } else {
      e.style.display = 'flex';
      e.style.transition = 'all 0.3s ease';
   }
}
