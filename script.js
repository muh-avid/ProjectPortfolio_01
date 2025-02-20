const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');
const text = document.getElementById("text");
const button = document.getElementById("toggleButton");

toggleBtn.addEventListener('click', function(){
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});



        
        button.addEventListener("click", () => {
            if (text.classList.contains("line-clamp-3")) {
                text.classList.remove("line-clamp-3");
                button.textContent = "Read Less";
            } else {
                text.classList.add("line-clamp-3");
                button.textContent = "Read More";
            }
        });
