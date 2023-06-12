/* 조회 */
btn1.onclick = () => {
    const saveUserInfos = localStorage.getItem('saveUserInfos');
    const users = JSON.parse(saveUserInfos);
    const tbody = document.querySelector("#tbl-user>tbody");
    
    if(users == null) {
        alert('회원정보가 존재하지않습니다.');
        return false;
    }
    
    tbody.innerHTML = "";
    users.forEach((user, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${user.userName}</td>
            <td>${user.userId}</td>
            <td>${user.pwd}</td>
            <td>${user.email}</td>
            <td>${user.birthday}</td>
        </tr>`;
    })
    
    
};

/* 삭제 */
// btn2.onclick = () => {
//     const tbody = document.querySelector("#tbl-user>tbody");
//     const saveUserInfos = localStorage.getItem('saveUserInfos');
//     const users = JSON.parse(saveUserInfos);

//     const key = prompt('아이디를 입력하세요.');
//     const index = users.findIndex((user) => user.userId === key);

//     if (index === -1) {
//         alert("일치하는 아이디가 없습니다.");
//     } else {
//         const confirmDelete = confirm('정말로 삭제하시겠습니까?')
//         if(confirmDelete){
//             localStorage.removeItem('saveUserInfos');
//             alert('삭제되었습니다!')
//             tbody.innerHTML = "";
//         }
//     }
// };

