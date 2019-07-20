class Repo {

    constructor(username) {
        this.username = username;
    }

    displayReposInfo(responseJson) {
        let reposHtml = document.getElementById("repos-data");
        let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Github Repositories"));
        reposHtml.appendChild(h2);
        let reposBox = document.createElement("ul");
        reposBox.classList.add("all-repos");
        for(let i=0; i< responseJson.length; i++) {
            let li = document.createElement("li");
            let repoName = document.createTextNode(responseJson[i].name);
            let repoLink = document.createElement('a');
            repoLink.href = responseJson[i].html_url;
            repoLink.appendChild(repoName);
            li.appendChild(repoLink);
            if (responseJson[i].description) {
                let p = document.createElement("p");
                let description = document.createTextNode(responseJson[i].description);
                p.appendChild(description);
                li.appendChild(p);
            }
            let p = document.createElement("p");
            let spanStar = document.createElement("span");
            spanStar.innerHTML = `<i class="fas fa-star"></i><span>${responseJson[i].stargazers_count}</span>`;
            p.appendChild(spanStar);
            let spanFork = document.createElement("span");
            spanFork.innerHTML = `<i class="fas fa-code-branch"></i><span>${responseJson[i].forks_count}</span>`;
            p.appendChild(spanFork);
            li.appendChild(p);
            if (responseJson[i].language) {
                let dot = document.createElement("i");
                dot.className = "repo-lang";
                let p = document.createElement("p");
                let language = document.createTextNode(responseJson[i].language);
                p.appendChild(dot);
                p.appendChild(language);
                li.appendChild(p);
            }
            reposBox.appendChild(li);
        }
        reposHtml.appendChild(reposBox);
    }

    displayUserInfo(responseJson) {
        let userHtml = document.getElementById("user-info");
        let userBox = document.createElement("div");
        userBox.classList.add("user-info");
        let imgBox = document.createElement("div");
        imgBox.classList.add("img-box");
        let imgLink = document.createElement('a');
        imgLink.href = responseJson.html_url;
        let userImage = document.createElement("img");
        if (responseJson['avatar_url']) {
            userImage.src = responseJson.avatar_url;
        } else {
            userImage.src = "assets/images/demo-user.png";
        }
        userImage.height = '100';
        imgLink.appendChild(userImage);
        imgBox.appendChild(imgLink);
        userBox.appendChild(imgBox);
        let infoBox = document.createElement("div");
        infoBox.classList.add("info-box");
        let h1 = document.createElement("h1");
        let username = document.createTextNode(responseJson.name);
        h1.appendChild(username);
        let nameLink = document.createElement('a');
        nameLink.href = responseJson.html_url;
        nameLink.appendChild(h1);
        infoBox.appendChild(nameLink);
        if (responseJson.company) {
            let p = document.createElement("p");
            let company = document.createTextNode(`Organization: ${responseJson.company}`);
            p.appendChild(company);
            infoBox.appendChild(p);
        }
        if (responseJson.bio) {
            let p = document.createElement("p");
            let bio = document.createTextNode(responseJson.bio);
            p.appendChild(bio);
            infoBox.appendChild(p);
        }
        userBox.appendChild(infoBox);
        userHtml.append(userBox);
    }

    getSearchData() {
        let reposHtml = document.getElementById("repos-data");
        let userHtml = document.getElementById("user-info");
        reposHtml.innerHTML = "";
        userHtml.innerHTML = "";
        this.getReposInfo();
        this.getUserInfo();
    }

    createNewParaTag(eleName) {
        let p = document.createElement("p");
        let ele = document.createTextNode(responseJson[eleName]);
        p.appendChild(ele);
        return p;
    }

    getUserInfo() {
        fetch(`https://api.github.com/users/${this.username}`)
            .then(function (response) {
                return response.json();
            })
            .then(this.displayUserInfo);
    }

    getReposInfo() {
        fetch(`https://api.github.com/users/${this.username}/repos`)
            .then(function (response) {
                return response.json();
            })
            .then(this.displayReposInfo);
    }

}

export default Repo;