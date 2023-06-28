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
    if (event.target.className === "dropdown__value") {
        let dropdownList = event.currentTarget.querySelector(".dropdown__list");
        if (dropdownList.className.includes("dropdown__list_active")) {
            hideList(dropdowns);
        } else {
            hideList(dropdowns);
            dropdownList.className = "dropdown__list dropdown__list_active";
        };
    } else if (event.target.className === "dropdown__link") {
        event.preventDefault();
        hideList(dropdowns);
        let dropdownValue = event.currentTarget.querySelector(".dropdown__value");
        dropdownValue.textContent = event.target.textContent;
    };
};

function hideList (collection) {
    for (let dropdown of collection) {
        dropdown.querySelector(".dropdown__list").className = "dropdown__list";
    };
};