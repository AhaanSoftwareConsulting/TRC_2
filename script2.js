const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all accordion items
      document.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      });

      // Open clicked item if it wasn't already open
      if (!isActive) {
        item.classList.add("active");
        header.querySelector(".icon").textContent = "×";
      }
    });
  });