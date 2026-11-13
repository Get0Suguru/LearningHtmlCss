sessionStorage.setItem("name", "lalaji");

localStorage.setItem("name", "lalaji");

sessionStorage.removeItem("name");
console.log(localStorage.getItem("name"));

document.cookie = 'name=kakaji; expires=' + new Date(2027, 0, 1).toUTCString();
document.cookie = 'lastName=lalaji; expires=' + new Date(2027, 2, 1).toUTCString();

console.log(document.cookie);

console.log(indexedDB);