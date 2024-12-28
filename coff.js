// js to make color-box enable or disable 
let colorIcons = document.querySelector(".color-icon"),
    icons = document.querySelector(".color-icon .icons");


icons.addEventListener("click", () => {
    colorIcons.classList.toggle("open");
})
// jss code to switch colors ( also day an night mode)
// getting all .btn elements

let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
    button.addEventListener("click", (e) => {

        let target = e.target;

        let open = document.querySelector(".open");
        if (open) open.classList.remove("open");

        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");

        //js code to switch colors ( also day and night mode)
        let root = document.querySelector(":root"),
            dataColor = target.getAttribute("data-color"), //getting data color of clicked value

            color = dataColor.split(" "); // spiliting each color form space and make them array

        root.style.setProperty("--white", color[0]);
        root.style.setProperty("--black", color[1]);
        root.style.setProperty("--nav-main", color[2]);
        root.style.setProperty("--switchers-main", color[3]);
        root.style.setProperty("--light-bg", color[4]);

        let iconName = target.className.split(" ")[2];
        colorText = document.querySelector(".home-content span");

        if (target.classList.contains("bxs-moon")) {
            target.classList.replace(iconName, "bxs-sun");
            colorIcons.style.display = "none";
            colorText.classList.add("darkMode");
        } else if (target.classList.contains("bxs-sun")) {
            target.classList.replace("bxs-sun", "bxs-moon");
            colorIcons.style.display = "block";
            colorText.classList.remove("darkMode");
            document.querySelector(".btn.blue").click();
        }

        console.log(iconName)
    })
}

//<i class='bx bx-sun'></i>