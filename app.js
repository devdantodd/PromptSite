function summarizePage() {
	var url = document.getElementById("url").value;
	if (url) {
		fetch("https://api.smmry.com/?SM_API_KEY=5309BEE48E&SM_URL=" + url)
			.then(response => response.json())
			.then(data => {
				if (data.sm_api_error) {
					alert(data.sm_api_error);
				} else {
					document.getElementById("summary").innerHTML = "<h2>" + data.sm_api_title + "</h2>" + data.sm_api_content + "<img src='" + data.sm_api_image_url + "' alt='Summary Image'>";
					document.getElementById("summary").style.display = "block";
				}
			})
			.catch(error => alert("An error occurred while summarizing the page."));
	} else {
		alert("Please enter a URL.");
	}
}
