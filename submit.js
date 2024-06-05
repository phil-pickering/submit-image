const input = document.querySelector("input");

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    sessionStorage.setItem("image", reader.result);
  };
  reader.readAsDataURL(file);
});
