function googleSearch() {
    const searchTerm = document.getElementById("search_input").value;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank");
    return false;
}
function search_message(){
    alert("검색을 수행합니다!");
}
document.getElementById("search_btn").addEventListener('click', search_message);