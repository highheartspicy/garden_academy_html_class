var chats = [
  { id: 1, receiver_id: 23, sender_id: 54, slug: "Johnson_J", message: "hi" },
  {
    id: 2,
    receiver_id: 21,
    sender_id: 84,
    slug: "Mercy_C",
    message: "How are you?",
  },
];

// function send_chat(data) {
//   // chats = chats.length > 0 ? chats : [];
//   setTimeout(function () {
//     chats.push(data);
//   }, 3000);
// }

// function get_chats() {
//   // chats = chats.length > 0 ? chats : [];
//   setTimeout(function () {
//     let response = "";
//     chats.forEach(function (chat) {
//       var slug = chat.slug !== undefined ? chat.slug : "";
//       var message = chat.message !== undefined ? chat.message : "";
//       response += `<li><strong>${slug}: </strong>${message}</li>`;
//     });
//     document.getElementById("chat_list").innerHTML = response;
//   }, 2000);
// }

// var chat = {
//   id: 3,
//   receiver_id: 23,
//   sender_id: 21,
//   slug: "Mercy_C",
//   message: "I got the package.",
// };
// send_chat(chat);
// get_chats();

function send_chat(data, callback) {
  // chats = chats.length > 0 ? chats : [];
  setTimeout(function () {
    chats.push(data);
    callback("chat sent...");
  }, 3000);
}

function get_chats(msg) {
  // chats = chats.length > 0 ? chats : [];
  console.log(msg);
  setTimeout(function () {
    let response = "";
    chats.forEach(function (chat) {
      var slug = chat.slug !== undefined ? chat.slug : "";
      var message = chat.message !== undefined ? chat.message : "";
      response += `<li><strong>${slug}: </strong>${message}</li>`;
    });
    document.getElementById("chat_list").innerHTML = response;
  }, 2000);
}

var chat = {
  id: 3,
  receiver_id: 23,
  sender_id: 21,
  slug: "Mercy_C",
  message: "I got the package.",
};
send_chat(chat, get_chats);
