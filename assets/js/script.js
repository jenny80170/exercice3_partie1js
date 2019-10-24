var surname = prompt ('Ecrire son prenom');
if(surname == '') {
  alert('Veuillez entrer votre prenom')
  var surname = prompt ('Ecrire son prenom');
}
else{
  alert('Bonjour ' + surname);
}
