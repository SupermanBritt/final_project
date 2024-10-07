export async function getLoggedInUser(){
    const response = await fetch('/api/users/git/userName', {
        method: 'get'
    })
    console.log("fired")
    let pUser = document.getElementById("pUser")
    if(response.ok){
        pUser.innerText= "User: " + JSON.parse(await response.text())["userName"]
    }
    else{
        pUser.innerText= ""
    }
}

export async function logout(){
    const response = await fetch('/api/users/git/logout', {
        method: 'POST'
    })
    window.location.href="/testPages/testLogin.html"
}