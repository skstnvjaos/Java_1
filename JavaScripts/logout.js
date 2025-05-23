import { session_set, session_set2, session_get, session_check, session_del} from './session.js'
import { delJWTToken } from './login.js'
window.logout = function() {
    session_del(); // 세션 삭제
    delJWTToken();
    location.href = '../index.html';
};
// const window_close = () => {
//     window.open('', '_self', '');
//     window.close();
// }
// document.getElementById("logout_btn").addEventListener('click', window_close);