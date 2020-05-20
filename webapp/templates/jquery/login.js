
//登録⇒社員情報一覧ページへ遷移
function login(){
	let id = "admin";
	let ps = "admin";

	var uid1 = document.getElementById("id")
	var ups1 = document.getElementById("password")
	var id1 = uid1.value;
	var ps1 = ups1.value;

	if(id == id1 && ps == ps1){
		location.href ='../templates/MainScreen.html';
		}else{
			alert("誤り！もう一度やり直してください！");
		}
	}
