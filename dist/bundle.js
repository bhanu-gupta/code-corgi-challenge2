/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/repo.js":
/*!************************!*\
  !*** ./src/js/repo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Repo {\n\n    constructor(username) {\n        this.username = username;\n    }\n\n    displayReposInfo(responseJson) {\n        let reposHtml = document.getElementById(\"repos-data\");\n        let h2 = document.createElement(\"h2\");\n        h2.appendChild(document.createTextNode(\"Github Repositories\"));\n        reposHtml.appendChild(h2);\n        let reposBox = document.createElement(\"ul\");\n        reposBox.classList.add(\"all-repos\");\n        for(let i=0; i< responseJson.length; i++) {\n            let li = document.createElement(\"li\");\n            let repoName = document.createTextNode(responseJson[i].name);\n            let repoLink = document.createElement('a');\n            repoLink.href = responseJson[i].html_url;\n            repoLink.appendChild(repoName);\n            li.appendChild(repoLink);\n            if (responseJson[i].description) {\n                let p = document.createElement(\"p\");\n                let description = document.createTextNode(responseJson[i].description);\n                p.appendChild(description);\n                li.appendChild(p);\n            }\n            let p = document.createElement(\"p\");\n            let spanStar = document.createElement(\"span\");\n            spanStar.innerHTML = `<i class=\"fas fa-star\"></i><span>${responseJson[i].stargazers_count}</span>`;\n            p.appendChild(spanStar);\n            let spanFork = document.createElement(\"span\");\n            spanFork.innerHTML = `<i class=\"fas fa-code-branch\"></i><span>${responseJson[i].forks_count}</span>`;\n            p.appendChild(spanFork);\n            li.appendChild(p);\n            if (responseJson[i].language) {\n                let dot = document.createElement(\"i\");\n                dot.className = \"repo-lang\";\n                let p = document.createElement(\"p\");\n                let language = document.createTextNode(responseJson[i].language);\n                p.appendChild(dot);\n                p.appendChild(language);\n                li.appendChild(p);\n            }\n            reposBox.appendChild(li);\n        }\n        reposHtml.appendChild(reposBox);\n    }\n\n    displayUserInfo(responseJson) {\n        let userHtml = document.getElementById(\"user-info\");\n        let userBox = document.createElement(\"div\");\n        userBox.classList.add(\"user-info\");\n        let imgBox = document.createElement(\"div\");\n        imgBox.classList.add(\"img-box\");\n        let imgLink = document.createElement('a');\n        imgLink.href = responseJson.html_url;\n        let userImage = document.createElement(\"img\");\n        if (responseJson['avatar_url']) {\n            userImage.src = responseJson.avatar_url;\n        } else {\n            userImage.src = \"assets/images/demo-user.png\";\n        }\n        userImage.height = '100';\n        imgLink.appendChild(userImage);\n        imgBox.appendChild(imgLink);\n        userBox.appendChild(imgBox);\n        let infoBox = document.createElement(\"div\");\n        infoBox.classList.add(\"info-box\");\n        let h1 = document.createElement(\"h1\");\n        let username = document.createTextNode(responseJson.name);\n        h1.appendChild(username);\n        let nameLink = document.createElement('a');\n        nameLink.href = responseJson.html_url;\n        nameLink.appendChild(h1);\n        infoBox.appendChild(nameLink);\n        if (responseJson.company) {\n            let p = document.createElement(\"p\");\n            let company = document.createTextNode(`Organization: ${responseJson.company}`);\n            p.appendChild(company);\n            infoBox.appendChild(p);\n        }\n        if (responseJson.bio) {\n            let p = document.createElement(\"p\");\n            let bio = document.createTextNode(responseJson.bio);\n            p.appendChild(bio);\n            infoBox.appendChild(p);\n        }\n        userBox.appendChild(infoBox);\n        userHtml.append(userBox);\n    }\n\n    getSearchData() {\n        let reposHtml = document.getElementById(\"repos-data\");\n        let userHtml = document.getElementById(\"user-info\");\n        reposHtml.innerHTML = \"\";\n        userHtml.innerHTML = \"\";\n        this.getReposInfo();\n        this.getUserInfo();\n    }\n\n    createNewParaTag(eleName) {\n        let p = document.createElement(\"p\");\n        let ele = document.createTextNode(responseJson[eleName]);\n        p.appendChild(ele);\n        return p;\n    }\n\n    getUserInfo() {\n        fetch(`https://api.github.com/users/${this.username}`)\n            .then(function (response) {\n                return response.json();\n            })\n            .then(this.displayUserInfo);\n    }\n\n    getReposInfo() {\n        fetch(`https://api.github.com/users/${this.username}/repos`)\n            .then(function (response) {\n                return response.json();\n            })\n            .then(this.displayReposInfo);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVwby5qcz9kZGQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlDQUFpQztBQUN0RztBQUNBO0FBQ0EsNEVBQTRFLDRCQUE0QjtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHFCQUFxQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvanMvcmVwby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJlcG8ge1xuXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIH1cblxuICAgIGRpc3BsYXlSZXBvc0luZm8ocmVzcG9uc2VKc29uKSB7XG4gICAgICAgIGxldCByZXBvc0h0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcG9zLWRhdGFcIik7XG4gICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaDIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHaXRodWIgUmVwb3NpdG9yaWVzXCIpKTtcbiAgICAgICAgcmVwb3NIdG1sLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgbGV0IHJlcG9zQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICByZXBvc0JveC5jbGFzc0xpc3QuYWRkKFwiYWxsLXJlcG9zXCIpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTwgcmVzcG9uc2VKc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsZXQgcmVwb05hbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXNwb25zZUpzb25baV0ubmFtZSk7XG4gICAgICAgICAgICBsZXQgcmVwb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICByZXBvTGluay5ocmVmID0gcmVzcG9uc2VKc29uW2ldLmh0bWxfdXJsO1xuICAgICAgICAgICAgcmVwb0xpbmsuYXBwZW5kQ2hpbGQocmVwb05hbWUpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocmVwb0xpbmspO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlSnNvbltpXS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzcG9uc2VKc29uW2ldLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBsZXQgc3BhblN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW5TdGFyLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPjxzcGFuPiR7cmVzcG9uc2VKc29uW2ldLnN0YXJnYXplcnNfY291bnR9PC9zcGFuPmA7XG4gICAgICAgICAgICBwLmFwcGVuZENoaWxkKHNwYW5TdGFyKTtcbiAgICAgICAgICAgIGxldCBzcGFuRm9yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3BhbkZvcmsuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWNvZGUtYnJhbmNoXCI+PC9pPjxzcGFuPiR7cmVzcG9uc2VKc29uW2ldLmZvcmtzX2NvdW50fTwvc3Bhbj5gO1xuICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChzcGFuRm9yayk7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUpzb25baV0ubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgICAgICAgICAgZG90LmNsYXNzTmFtZSA9IFwicmVwby1sYW5nXCI7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFuZ3VhZ2UgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXNwb25zZUpzb25baV0ubGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICAgICAgICAgICAgICBwLmFwcGVuZENoaWxkKGxhbmd1YWdlKTtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcG9zQm94LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgICByZXBvc0h0bWwuYXBwZW5kQ2hpbGQocmVwb3NCb3gpO1xuICAgIH1cblxuICAgIGRpc3BsYXlVc2VySW5mbyhyZXNwb25zZUpzb24pIHtcbiAgICAgICAgbGV0IHVzZXJIdG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWluZm9cIik7XG4gICAgICAgIGxldCB1c2VyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdXNlckJveC5jbGFzc0xpc3QuYWRkKFwidXNlci1pbmZvXCIpO1xuICAgICAgICBsZXQgaW1nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1nQm94LmNsYXNzTGlzdC5hZGQoXCJpbWctYm94XCIpO1xuICAgICAgICBsZXQgaW1nTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgaW1nTGluay5ocmVmID0gcmVzcG9uc2VKc29uLmh0bWxfdXJsO1xuICAgICAgICBsZXQgdXNlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlSnNvblsnYXZhdGFyX3VybCddKSB7XG4gICAgICAgICAgICB1c2VySW1hZ2Uuc3JjID0gcmVzcG9uc2VKc29uLmF2YXRhcl91cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1c2VySW1hZ2Uuc3JjID0gXCJhc3NldHMvaW1hZ2VzL2RlbW8tdXNlci5wbmdcIjtcbiAgICAgICAgfVxuICAgICAgICB1c2VySW1hZ2UuaGVpZ2h0ID0gJzEwMCc7XG4gICAgICAgIGltZ0xpbmsuYXBwZW5kQ2hpbGQodXNlckltYWdlKTtcbiAgICAgICAgaW1nQm94LmFwcGVuZENoaWxkKGltZ0xpbmspO1xuICAgICAgICB1c2VyQm94LmFwcGVuZENoaWxkKGltZ0JveCk7XG4gICAgICAgIGxldCBpbmZvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0JveC5jbGFzc0xpc3QuYWRkKFwiaW5mby1ib3hcIik7XG4gICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzcG9uc2VKc29uLm5hbWUpO1xuICAgICAgICBoMS5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG4gICAgICAgIGxldCBuYW1lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbmFtZUxpbmsuaHJlZiA9IHJlc3BvbnNlSnNvbi5odG1sX3VybDtcbiAgICAgICAgbmFtZUxpbmsuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICBpbmZvQm94LmFwcGVuZENoaWxkKG5hbWVMaW5rKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlSnNvbi5jb21wYW55KSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbGV0IGNvbXBhbnkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgT3JnYW5pemF0aW9uOiAke3Jlc3BvbnNlSnNvbi5jb21wYW55fWApO1xuICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChjb21wYW55KTtcbiAgICAgICAgICAgIGluZm9Cb3guYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlSnNvbi5iaW8pIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBsZXQgYmlvID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzcG9uc2VKc29uLmJpbyk7XG4gICAgICAgICAgICBwLmFwcGVuZENoaWxkKGJpbyk7XG4gICAgICAgICAgICBpbmZvQm94LmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9XG4gICAgICAgIHVzZXJCb3guYXBwZW5kQ2hpbGQoaW5mb0JveCk7XG4gICAgICAgIHVzZXJIdG1sLmFwcGVuZCh1c2VyQm94KTtcbiAgICB9XG5cbiAgICBnZXRTZWFyY2hEYXRhKCkge1xuICAgICAgICBsZXQgcmVwb3NIdG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBvcy1kYXRhXCIpO1xuICAgICAgICBsZXQgdXNlckh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5mb1wiKTtcbiAgICAgICAgcmVwb3NIdG1sLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHVzZXJIdG1sLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuZ2V0UmVwb3NJbmZvKCk7XG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQYXJhVGFnKGVsZU5hbWUpIHtcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlc3BvbnNlSnNvbltlbGVOYW1lXSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dGhpcy51c2VybmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0aGlzLmRpc3BsYXlVc2VySW5mbyk7XG4gICAgfVxuXG4gICAgZ2V0UmVwb3NJbmZvKCkge1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3RoaXMudXNlcm5hbWV9L3JlcG9zYClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5kaXNwbGF5UmVwb3NJbmZvKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/repo.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/repo */ \"./src/js/repo.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const repoForm = document.getElementById(\"user-repos\");\n    let prevUsername = '';\n    repoForm.addEventListener(\"submit\", (e) => {\n        const username = document.getElementById(\"github-username\").value;\n        e.preventDefault();\n        if (username && prevUsername != username) {\n            const userRepo = new _js_repo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](username);\n            userRepo.getSearchData();\n            prevUsername = username;\n        }\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6Ii4vc3JjL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVwbyBmcm9tICcuL2pzL3JlcG8nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVwb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcmVwb3NcIik7XG4gICAgbGV0IHByZXZVc2VybmFtZSA9ICcnO1xuICAgIHJlcG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpdGh1Yi11c2VybmFtZVwiKS52YWx1ZTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodXNlcm5hbWUgJiYgcHJldlVzZXJuYW1lICE9IHVzZXJuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyUmVwbyA9IG5ldyBSZXBvKHVzZXJuYW1lKTtcbiAgICAgICAgICAgIHVzZXJSZXBvLmdldFNlYXJjaERhdGEoKTtcbiAgICAgICAgICAgIHByZXZVc2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });