const tabs1 = document.getElementById("tabs1");
tabs1.addEventListener("click", tabManagement);


function tabManagement (event) {
    // Делегированный обработчик событий "click"
    // При нажатии на неактивную вкладку она и ее содержимое становятся активными, а
    // остальные вкладки скрываются
    if (event.target.className === "tab") {
        let tabList = Array.from(event.currentTarget.querySelectorAll(".tab"));
        for (tab of tabList) {
            tab.className = "tab";
        };
        event.target.className = "tab tab_active";
        let index = tabList.indexOf(event.target);

        let tabContentList = Array.from(event.currentTarget.querySelectorAll(".tab__content"));
        for (tabCont of tabContentList) {
            tabCont.className = "tab__content";
        };
        tabContentList[index].className = "tab__content tab__content_active";
    };
};