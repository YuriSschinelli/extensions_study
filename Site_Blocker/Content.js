const generateHTML = (pageName) => { //cria a pagina HTML que substituirá o site atual
    return `<body> <h1> ${pageName} is blocked. </h1> </body>`;
};

switch (window.location.hostname) { //varre a lista de sites a serem bloqueados pelo usuário e os bloqueia
    case "www.facebook.com":
        document.body.innerHTML = generateHTML("facebook")
        break;
    case "www.netflix.com":
        document.body.innerHTML = generateHTML("Netflix")
        break;
    case "www.instagram.com":
        document.body.innerHTML = generateHTML("Instagram")
        break;
}
