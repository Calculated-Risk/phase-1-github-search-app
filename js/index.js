///////////////// Global Variables////////////////////////////////////

const mainDiv = document.querySelector("#main");
const gitContainer = document.querySelector("#github-container");
const githubForm = document.querySelector("#github-form");
const searchText = document.getElementById("search");
let userArray = [];
////////////////////////////////////////////////////////////////////////


// 1. ADDED "defer" to the script tag in the html page



/*  The index.html file has a form with a search input. 
When the form is submitted, it should take the value of the input 
and search GitHub for user matches using the User Search Endpoint. */ 

/*
Using the results of the search, display information about the users to the page. 
(You might include showing their username, avatar and a link to their profile.)
*/




githubForm.addEventListener('submit', (e) => {
e.preventDefault();
getGithubUser();
githubForm.reset()
})

function getGithubUser(){
   const searchInput = searchText.value
   fetch(`https://api.github.com/search/users?q=${searchInput}`, {
        headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
        }
    })
   .then ((response) => response.json())
   .then ((searchResults) => {
     const userList = document.querySelector("#user-list");
     searchResults.items.map(item => {
        const h2 = document.createElement("h2")
        h2.innerText = item.login
        h2.addEventListener("click", e => showUserRepos(item.login, e))
        
        const img = document.createElement("img")
        img.src = item.avatar_url
        
        const a = document.createElement("a")
        a.href = item.html_url
        a.innerText = "Github Profile"
        
        const list = document.createElement("li")
        
        list.append(h2, img, a)
        userList.append(list)    
    })
   })
}

function showUserRepos(userName, e){
    const reposList = document.querySelector("#repos-list");
    reposList.innerHTML = ""
    e.preventDefault()
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(response => response.map(repo => {
          const list = document.createElement("li")
          list.innerText = repo.name
          reposList.append(list)
    }))
}







