//注册表单的验证
function checkreg() {
	var myreg = /^[1]([3-9])[0-9]{9}$/;
}
//输入框失去焦点验证
window.onload = function(){
	// var name = document.getElementById("name");
	// var tish = document.getElementById("tish");
	// var password = document.getElementById("password");
	// var ts = document.getElementById("ts");
	// var Pwdagain = document.getElementById("Pwdagain");
	// var tishi = document.getElementById("tishi");
	var phone = document.getElementById("phone");
	var tss = document.getElementById("tss");
	// var city = document.getElementById("city");
	// var cities = document.getElementById("cities");
	// var code = document.getElementById("code");//验证码
	// var tsi = document.getElementById("tsi");
	var myreg = /^[1]([3-9])[0-9]{9}$/;
//	var name_reg = /^[u4e00-u9fa5]{2,}$/;
	// var name_reg = /^[a-zA-Z][a-zA-Z0-9]{7,12}$/;
	// var CityRegist = /^[u4e00-u9fa5]{2,}$/;
	//用户名验证
	// name.onblur = function(){
	// 	if(name.value.length==""){
	// 		tish.innerHTML="<font color='red'>请输入您的用户名!</font>";
	// 	}else if(name.value.length<8 || name.value.length>13){
	// 		tish.innerHTML="<font color='red'>用户名长度限制在8-13位!</font>";
	// 	}else if(!name_reg.test(name.value)){
	// 		tish.innerHTML="<font color='red'>用户名必须以字母开头!</font>";
	// 	}else{
	// 		tish.innerHTML="<font color='green'>正确</font>";
	// 	};		
	// }
	//密码验证
	// password.onblur = function(){
	// 	if(password.value.length==""){
	// 		ts.innerHTML="<font color='red'>请输入密码!</font>";
	// 	}else if(password.value.length<8 || password.value.length>13){
	// 		ts.innerHTML="<font color='red'>密码长度限制在8-13位!</font>";
	// 	}else if(!name_reg.test(password.value)){
	// 		ts.innerHTML="<font color='red'>密码必须以字母开头!</font>";
	// 	}else{
	// 		ts.innerHTML="<font color='green'>正确</font>";
	// 	};	
	// }
	//确认密码验证
	// Pwdagain.onblur = function(){
	// 	if(Pwdagain.value.length==""){
	// 		tishi.innerHTML="<font color='red'>请输入确认密码!</font>";
	// 	}else if(Pwdagain.value != password.value){
	// 		tishi.innerHTML="<font color='red'>两次密码不一致!</font>";
	// 	}else{
	// 		tishi.innerHTML="<font color='green'>正确</font>";
	// 	};	
	// }
	//手机号验证
	phone.onblur = function(){
		if(phone.value.length==""){
			tss.innerHTML="<font color='red'>请输入手机号!</font>";
		}else if(!myreg.test(phone.value)){
			tss.innerHTML="<font color='red'>请输入正确的手机号!</font>";
		}else{
			tss.innerHTML="<font color='green'>正确</font>";			
		};	
	}
}