// Show / hide the mobile menu on burger click
function toggleMenu(id) {
   var e = document.getElementById(id);
   if (e.style.display == 'flex') {
      e.style.display = 'none';
      e.style.transition = 'all 0.3s ease';
   } else {
      e.style.display = 'flex';
      e.style.transition = 'all 0.3s ease';
   }
}

function fakeFormSubmission(id1, id2) {
   var id1 = document.getElementById(id1);
   var id2 = document.getElementById(id2);
   id1.style.display = 'block';
   id1.style.transition = 'all 0.3s ease';
   id2.style.display = 'none';
}