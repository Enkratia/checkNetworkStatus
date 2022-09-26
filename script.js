const wrapper = document.querySelector(".wrapper"),
  toast = wrapper.querySelector(".toast"),
  wifiIcon = wrapper.querySelector(".icon"),
  title = wrapper.querySelector("span"),
  subtitle = wrapper.querySelector("p"),
  closeIcon = wrapper.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You`re online now";
        subtitle.innerText = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`;

        closeIcon.addEventListener("click", () => {
          wrapper.classList.add("hide");
        });

        setTimeout(() => {
          wrapper.classList.add("hide");
        }, 5000);

      } else {
        offline();
      }
    }
    xhr.onerror = () => {
      offline();
    }
    xhr.send();
  }

  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You`re offline now";
    subtitle.innerText = "Oops!";
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
  }

  setInterval(() => {
    ajax()
  }, 100);

  ajax();
}
