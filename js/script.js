let inputs = Array.from(document.getElementsByTagName("input"));
let error;

$("#submitBtn").bind("click", function (e) {
	e.preventDefault();
	console.log((checkError()));

	if(error != ""){

	}
	else{
		
	}
});

function checkError() {
	// Tất cả input cần được điền hoặc chọn
	$('input[id!="country"][id!="note"]').each((index,input) => {
		console.log("haha");	
		if ($(input).val() === "") {
			error = "Vui lòng điền đầy đủ thông tin";	
			return error;
		}
	});

	// Họ tên chỉ có thể chứa chữ
	let name = $('input[id="name"]').val();
	if (name != "" && name.match(/\d/)) {
		error = "Tên chỉ được chứa chữ cái";
		return error;
	}
	// Địa chỉ không chứa kí tự đặc biệt
	if (
		!$('input[id="address"]')
			.val()
			.match(/^[a-zA-Z0-9,.]{0,100}$/)
	) {
		error = "Địa chỉ không chứa kí tự đặc biệt";
		return error;
	}

	// Số điện thoại chỉ có thể chứa chữ số
	if (
		!$('input[id="phone"]')
			.val()
			.match(/^09[0-9]{8}$/)
	) {
		error = "Không phải số điện thoại hợp lệ";
		return error;
	}

	return ""
}



$('#resetBtn').bind('click',function(){
	$('input').val() = "";
})