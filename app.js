// Function to summarize the web page using ChatGPT
function summarizePage() {
    const url = document.getElementById("url").value;

    if (url) {
        axios.post('/summarize', { url })
            .then(response => {
                const { summary, image_url } = response.data;
                document.getElementById("summary").innerHTML = `<h2>${summary}</h2><img src="${image_url}" alt="Summary Image">`;
                document.getElementById("summary").style.display = "block";
            })
            .catch(error => {
                alert("An error occurred while summarizing the page.");
            });
    } else {
        alert("Please enter a URL.");
    }
}
