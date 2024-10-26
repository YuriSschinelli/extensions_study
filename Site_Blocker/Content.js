const generateHTML = (pageName) => {
    return `<body> <h1> ${pageName} is blocked. </h1> </body>`;
};

switch (window.location.hostname) {
    case "www.facebook.com":
        document.body.innerHTML = generateHTML("facebook") 
}