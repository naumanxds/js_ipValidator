$('document').ready(function() {
	
	var startTd = "<td>";
	var endTd = "</td>";
	var deleteBtn = '<button class="delete_btn">Delete</button>';
	accessKey = '70257e500498f0352958779ca95ecccc';


	$('table').on('click', 'button.delete_btn',function() {
		$(this).parents('tr').remove();
	});

	$('#add_ip').click(function() {
		var ip = $('#entered_ip').val();
		var link = 'http://api.ipstack.com/' + ip + '?access_key=' + accessKey;

		$.ajax({
			url: link,
			datatype: 'json',
			success: function(received) {
				if(received.country_name == null)
					$('#error').slideDown().delay(1500).slideUp();
				else
					$("#ip_table").append("<tr class='dynamic_row'>" + startTd + deleteBtn + endTd + startTd + ip + endTd + startTd + received.country_name + endTd + "</tr>");
			}
		});
	});
});