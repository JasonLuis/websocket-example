/* 
    // Aqui da para colocar a porta do server
    const socket = io("http://localhost:3000");
*/
const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("username");
const room = urlSearch.get("select_room");

console.log(username, room);