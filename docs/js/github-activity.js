document.addEventListener("DOMContentLoaded", function () {

    if (typeof GitHubCalendar !== "undefined") {

        GitHubCalendar(".calendar", "thinkbruno", {
            responsive: true,
            tooltips: true
        });

    } else {
        console.error("GitHubCalendar library not loaded.");
    }

});