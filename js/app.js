console.log("Welcome to app.js");


nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const myLanguages = ['JavaScript','Python','Go','C++','Java','Ruby','Typescript','C#'];
function nextCV() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let name = (`${data.results[0].name.first} ${data.results[0].name.last}`);
            let city = (data.results[0].location.country);
            let avatar = (data.results[0].picture.large);
            let lang = (myLanguages[Math.floor(Math.random() * 6)]);
            let email = (data.results[0].email);
            let image = document.getElementById('image');
            let profile = document.getElementById('profile');
            if (data != undefined) {
                image.innerHTML = `<img src='${avatar}'>`;
                profile.innerHTML = `<ul class="list-group">
      <li class="list-group-item">Name : ${name}</li>
      <li class="list-group-item">Language: ${lang}</li>
      <li class="list-group-item">Country: ${city}</li>
      <li class="list-group-item">Email: ${email}</li>
    </ul>`;
            }
            else {
                alert('End of candidate applications');
                window.location.reload();
            }
        })
};