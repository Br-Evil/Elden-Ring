sidebarButton = document.getElementById("sidebar")
sidebar = document.querySelector(".sidebar-content")
sidebarButton.addEventListener("click", () => {
    sidebar.style = "width:250px"
})
content = document.querySelector(".main-content")
content.addEventListener("click", () =>{
    sidebar.style = "width:0px"
})