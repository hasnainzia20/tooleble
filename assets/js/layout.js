["navbar", "footer"].forEach((id) =>
  fetch(`/partials/${id}.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;

      if (id === "navbar") {
        const hamburger = document.getElementById("hamburger");
        const nav = document.getElementById("nav");

        if (hamburger && nav) {
          hamburger.addEventListener("click", () => {
            nav.classList.toggle("open");
          });
        }

        // Mobile dropdown toggle
        document.querySelectorAll("#nav .menu > li > a").forEach((link) => {
          link.addEventListener("click", (e) => {
            const dropdown = link.nextElementSibling;
            if (dropdown && dropdown.classList.contains("dropdown")) {
              e.preventDefault(); // Stop navigation
              dropdown.classList.toggle("open");

              // Optional: close other open dropdowns
              document.querySelectorAll(".dropdown").forEach((d) => {
                if (d !== dropdown) d.classList.remove("open");
              });
            } else {
              // It's a direct link — close nav menu (mobile case)
              if (nav.classList.contains("open")) {
                nav.classList.remove("open");
              }
            }
          });
        });
      }
    })
);
