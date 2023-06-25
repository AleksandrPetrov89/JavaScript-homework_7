let dropdowns = document.getElementsByClassName("dropdown");
for (let dropdown of dropdowns) {
    dropdown.addEventListener("click", dropdownHandler);
};


function dropdownHandler (event) {
    // Делегированный обработчик событий.
    // При нажатии на выпадающий список отображает доступные варианты этого списка и
    // скрывает варианты всех других выпадающих списков.
    // При нажатии на один из вариантов списка устанавливает выбранное значение в основное поле и 
    // скрывает варианты всех выпадающих списков
    for (let dropdown of dropdowns) {
        dropdown.querySelector(".dropdown__list").className = "dropdown__list";
    };
    if (event.target.className === "dropdown__value") {
        let dropdownList = event.currentTarget.querySelector(".dropdown__list");
        dropdownList.className = "dropdown__list dropdown__list_active";
    } else if (event.target.className === "dropdown__link") {
        event.preventDefault();
        let dropdownValue = event.currentTarget.querySelector(".dropdown__value");
        dropdownValue.textContent = event.target.textContent;
    };
};
