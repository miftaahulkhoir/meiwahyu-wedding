//form	
$(document).ready(function () {

	$('#comment_form').on('submit', function (event) {
		event.preventDefault();
		var form_data = $(this).serialize();
		$.ajax({
			url: "add_comment.php",
			method: "POST",
			data: form_data,
			dataType: "JSON",
			success: function (data) {
				if (data.error != '') {
					$('#comment_form')[0].reset();
					$('#comment_message').html(data.error);
					load_comment();
				}
			}
		})
	});

	load_comment();
	function load_comment() {
		$.ajax({
			url: "fetch_comment.php",
			method: "POST",
			success: function (data) {
				$('#display_comment').html(data);
			}
		})
	}

});

//count form comment
function countComm(val) {
	var len = val.value.length;
	if (len >= 250) {
		val.value = val.value.substring(0, 250);
	} else {
		$('#charNum').text(250 - len);
	}
};

//count form nama
function countName(val) {
	var len = val.value.length;
	if (len >= 30) {
		val.value = val.value.substring(0, 30);
	} else {
		$('#charName').text(30 - len);
	}
};

//musik
document.getElementById('mute-sound').style.display = 'none';
document.getElementById('unmute-sound').addEventListener('click', function (event) {
	document.getElementById('unmute-sound').style.display = 'none';
	document.getElementById('mute-sound').style.display = 'inline-block';
	document.getElementById('song').pause();
});

document.getElementById('mute-sound').addEventListener('click', function (event) {
	document.getElementById('mute-sound').style.display = 'none';
	document.getElementById('unmute-sound').style.display = 'inline-block';
	document.getElementById('song').play();
});

$(document).ready(function () {
	var firstName = $('.firstName').text();
	var intials = $('.firstName').text().charAt(0);
	var profileImage = $('#profileImage').text(intials);
});

// show
function showDiv(divId, element)
{
    document.getElementById(divId).style.display = element.value == 'no' ? 'none' : 'block';
    document.getElementById("kosong").selected = "true";
}

// copypaste
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
  }
