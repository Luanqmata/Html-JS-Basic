if (localStorage.getItem("token")) {
  var expirationTime = localStorage.getItem("tokenExpiration");

  if (new Date().getTime() > expirationTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  }
}
