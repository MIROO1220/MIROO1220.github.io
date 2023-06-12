/* 이메일 창 */
const domainText = document.querySelector("#domainTxt");
const domainText2 = document.querySelector("#domainTxt2");
const domainList = document.querySelector("#domainList");

function changeEmail() {
    const idx = domainList.options.selectedIndex; // select 요소에서 선택된 옵션의 인덱스를 나타내는 속성
    const val = domainList.options[idx].value;
    
    domainText2.value = val;
}

const userId = document.querySelector("#userId");
const pwd = document.querySelector("#pwd");
const pwdCheck = document.querySelector("#pwdCheck");
const userName = document.querySelector("#userName");
const domainList2 = document.querySelector("#domainList2");
const domainList3 = document.querySelector("#domainList3");
const domainList4 = document.querySelector("#domainList4");

document.memberFrm.onsubmit = function() {

    /* 1. 아이디 검사 */
    // 숫자가 하나이상 포함
    // 첫글자는 반드시 영소문자로
    // 아이디 길이는 4~12글자 사이
    const regExp1 = /^[a-z][a-z\d]{3,11}$/;
    const regExp2 = /[0-9]/;
    if(!regExpTest(regExp1, userId, '아이디는 4~12글자입니다.'))
    return false;
    if(!regExpTest(regExp2, userId, '아이디는 숫자를 하나이상 포함해야합니다.'))
    return false;
    
    
    /* 2. 비밀번호 */
    // 숫자/문자/특수문자 포함 형태의 8~15자리 이내
    const regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\\!@#$%^&*()]/]
    for(let i=0; i<regExpArr.length; i++) {
        if(!regExpTest(regExpArr[i], pwd, '비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.'))
            return false;
    }
    // 비밀번호일치여부
    if(!isEqualPwd()) return false;

    /* isEqualPwd 비밀번호일치여부 */
    function isEqualPwd() {
        if(pwd.value === pwdCheck.value)
            return true;
        else {
            alert('비밀번호가 일치하지않습니다.');
            pwd.select();
            return false;
        }
    }

    /* 3. 이름 */
    // 한글 2글자 이상만 허용
    const regExp3 = /^[가-힣]{2,}$/;
    if(!regExpTest(regExp3, userName, '한글 2글자이상 입력하세요.'))
        return false;

    /* 4. 이메일 */
    const regExp4 = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const email = domainText.value + "@" + domainText2.value;
    if(!regExp4.test(email)) {
        alert('이메일 오류나용')
        return false;
    }

    /* 생일 합치기 */
    const birthday = domainList2.value + "년" + domainList3.value + "월" + domainList4.value + "일";
    console.log(birthday);

    /* regExp 정규식객체 */
    function regExpTest(regExp, el, msg) {
        if(regExp.test(el.value)) return true;
        alert(msg);
        el.value = "";
        el.focus();
        return false;
    }

class SaveUserInfo {
    constructor(userId, pwd, userName, email, birthday) {
        this.userId = userId;
        this.pwd = pwd;
        this.userName = userName;
        this.email = email
        this.birthday = birthday;
    }
}

const saveUserInfo = new SaveUserInfo(userId.value, pwd.value, userName.value, email, birthday);

const saveUserInfos = JSON.parse(localStorage.getItem('saveUserInfos')) || [];
saveUserInfos.push(saveUserInfo);
const jsonStr = JSON.stringify(saveUserInfos);
localStorage.setItem('saveUserInfos', jsonStr);

}

