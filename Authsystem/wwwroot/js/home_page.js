function navbar() {
    let navItem = document.getElementById("navigation");
    if (navItem.className === "section-header-navigation") {
        navItem.className += " responsive";
    } else {
        navItem.className = "section-header-navigation";
    }
}