const searchInput = document.getElementById("search");
const userCardsContainer = document.getElementById("user-cards");
const mailInput = document.getElementById("mail");
// const errorMessage = document.createElement("p");
//     errorMessage.textContent = "No users found";
//     errorMessage.style.display = "none";
//     errorMessage.classList.add("error-msg");
//     userCardsContainer.appendChild(errorMessage);


// Fetch users from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/users")
    // Process the response: parse response body as JSON
    .then(function(response) {
        return response.json();
    })
    // Handle the parsed JSON data (array of users)
    
   .then(function (users){
   display(users);
 
 searchInput.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredUsers=users.filter(function(users) {
        return users.name.toLowerCase().includes(searchTerm);
    });
    display(filteredUsers);


    // mailInput.addEventListener("input", function() {
    //     const searchTerm = this.value.toLowerCase();
    //     const filteredUsers=users.filter(function(users) {
    //         return users.email.toLowerCase().includes(searchTerm);
    //     });
    //     display(filteredUsers);
// submit.addEventListener("onsubmit",function(){
//     const searchTerm=this.ariaValueMax.toLowerCase();
//     const filteredUsers=users.filter(function(users){
//         return users.name.toLowerCase().includes(searchTerm);
//     });
// if (filteredUsers.length === 0) {
//     errorMessage.style.display = "block";
// } else {
//     errorMessage.style.display = "none";
//     display(filteredUsers);
// }
});

})



 function display(users) {
    userCardsContainer.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
<h2>${user.name}</h2>
<p>Email: ${user.email}</p>
<p>Phone: ${user.phone}</p>
<p>Website: ${user.website}</p>
        `;
        userCardsContainer.appendChild(userCard);
    });
}