const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});




// const token = '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'
// const chat = document.getElementById('chatRes');
// fetch('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify({
//         "model": "gpt-3.5-turbo",
//         "messages": [{"role": "user", "content": "Hello world"}]
//     })
// }).then(res => {
//     return res.json()
// }).then(data => {
//     chat.textContant = data.choices[0].message.content
// })