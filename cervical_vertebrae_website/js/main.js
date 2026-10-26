// Main interaction for the Cervical Vertebrae project website.
document.addEventListener("DOMContentLoaded", () => {
  const enterProject = document.getElementById("enterProject");

  // The button navigates to project.html. Keep this handler lightweight
  // so the site works without any framework or server.
  if (enterProject) {
    enterProject.addEventListener("click", (event) => {
      // Use normal browser navigation to open the second page.
      // To open it in a new tab instead, uncomment the next line and
      // remove the default navigation with event.preventDefault().
      // window.open("project.html", "_blank", "noopener");
    });
  }
});
