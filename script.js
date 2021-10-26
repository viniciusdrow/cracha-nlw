
const linksSocialMedia = {
  github: "viniciusdrow",
  youtube: "UC5Rt6P7Hwcg5BaBSabfhcdw",
  facebook: "vinicius.brito.505",
  instagram: "vinicius.britof",
  twitter: "maykibrito"
}

function changeSocialMediaLinks() {
 for(let li of socialLinks.children) {
   const social = li.getAttribute('class')

   li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

  
 }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.innerHTML = data.name
      // userBio.innerHTML = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.innerHTML = data.login
    })
}

getGitHubProfileInfos()