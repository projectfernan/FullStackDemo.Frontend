$(document).ready(function () {
    $("#accordionSidebar").on("click", '#sidebarToggle', function (e) {
        if ($("#accordionSidebar").hasClass("toggled")) {
            $("#page-top").removeClass("sidebar-toggled");
            $("#accordionSidebar").removeClass("toggled");
        }
        else {
            $("#page-top").addClass("sidebar-toggled");
            $("#accordionSidebar").addClass("toggled");
        }
    });
});