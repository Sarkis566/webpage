
function getStudents(){
    fetch('https://session7api.onrender.com')
      .then(response => response.json())
      .then(data => {
var select_users=document.getElementById('select_users')
data.array.forEach(st => {
  var opt =document.createElement('option')  ;
  opt.innerHTML= st.name;
  select_users.appendChild(opt);
});

      })
}

getStudents(); 