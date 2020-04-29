const items = document.querySelectorAll(".sidebar ul li");
const wrapper = document.querySelector(".wrapper");
const hamburguerIcon = document.querySelector(".hamburguer");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        if(wrapper.classList.contains("click-collapse")){
            return;
        }

        wrapper.classList.toggle("hover-collapse");
    });

    item.addEventListener("mouseleave", () => {
        if(wrapper.classList.contains("click-collapse")){
            return;
        }

        wrapper.classList.toggle("hover-collapse");
    });
});

hamburguerIcon.addEventListener("click", () => {
    hamburguerIcon.closest(".wrapper").classList.toggle("click-collapse");
    hamburguerIcon.closest(".wrapper").classList.toggle("hover-collapse");
});