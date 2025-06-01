import { session_set, session_set2, session_get, session_check, session_del} from './session.js'
function logout() {
    session_del(); // 세션 삭제
    delJWTToken();
    location.href = '../index.html';
}
function delJWTToken(){
    //jwtToken = null;
    localStorage.setItem('jwt_token', 0);
}
// const window_close = () => {
//     window.open('', '_self', '');
//     window.close();
// }
document.getElementById("logout_btn").addEventListener('click', logout);