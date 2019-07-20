import Repo from './js/repo';

document.addEventListener("DOMContentLoaded", function () {
    const repoForm = document.getElementById("user-repos");
    let prevUsername = '';
    repoForm.addEventListener("submit", (e) => {
        const username = document.getElementById("github-username").value;
        e.preventDefault();
        if (username && prevUsername != username) {
            const userRepo = new Repo(username);
            userRepo.getSearchData();
            prevUsername = username;
        }
    });
});