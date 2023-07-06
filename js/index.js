///////////////// Global Variables////////////////////////////////////

const mainDiv = document.querySelector("#main");
const gitContainer = document.querySelector("#github-container");
const userList = document.querySelector("#user-list");
const reposList = document.querySelector("#repos-list");
const githubForm = document.querySelector("#github-form");
const searchText = document.getElementById("search");

////////////////////////////////////////////////////////////////////////


// 1. ADDED "defer" to the script tag in the html page



/*  The index.html file has a form with a search input. 
When the form is submitted, it should take the value of the input 
and search GitHub for user matches using the User Search Endpoint. */ 

githubForm.addEventListener('submit', (e) => {
e.preventDefault();
getGithubUser();
githubForm.reset()
})

function getGithubUser(){
   console.log(searchText.value)
}


