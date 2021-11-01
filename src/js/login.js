// 나중에 사용할 예정

// import logins from '../json/login.json'

// $(function () {
//   function parseMenu(ul, login) {
//     for (var i = 0; i < login.length; i++) {
//       if (login.sub == null) {
//         login.sort(function (a, b) {
//           return a.id > b.id ? -1 : a.id > b.id ? 1 : 0;
//         });
//       }
//       var li = $(ul).append('<li><a href="' + login[i].link + '">' + login[i].name + '</a></li>');
//       if (login[i].sub != null) {
//         var subul = $('<ul id="sublogin' + login[i].link + '"></ul>');
//         $(li).append(subul);
//         parseMenu($(subul), login[i].sub);
//       }
//     }
//   }
//   var login = $('#login');
//   parseMenu(login, logins);
// });
