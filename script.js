document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const timelineEvents = document.querySelectorAll(".timeline-event");

  function timelineEventPopUp(event) {
    const popup = document.getElementById("event-popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const eventId = event.getAttribute("data-event");

    // Define content for each event
    const eventContent = {
      event1: {
        title: "Printing Press (1440 AD)",
        description:
          "The printing press made books widely accessible to the general public. This changed Europe forever.",
      },
      event2: {
        title: "World War I (1914 AD)",
        description:
          "The First World War changed warfare a lot to keep up with the changing technology, including the introduction of tanks and chemical weapons.",
      },
      event3: {
        title: "Faraday Disk (1831 AD)",
        description:
          "The Faraday Disk was the first electrical generator. This was a big change towards the current electrical world.",
      },
      event4: {
        title: "Steam Engine (1712 AD)",
        description:
          "The steam engine was the first machine that used steam to do something. This evolved into combustion engines.",
      },
      event5: {
        title: "Trebuchet (1200 AD)",
        description:
          "The trebuchet was a type of catapult that used a counterweight to launch projectiles. Instead of using tension it used the counterweight to launch the projectile.",
      },
      event6: {
        title: "World War II (1939 AD)",
        description:
          "World War II changed warfare in many ways including the introduction of planes. And better tanks. WW2 also had dictatorship which is when someone has complete control over something. During WW2 hitler was a dictator.",
      },
      event7: {
        title: "Appeasement (1938)",
        description:
          "The Appeasement was an attempt to stop a war. By letting Hitler expand.",
      },
    };

    // Set content
    const content = eventContent[eventId] || {
      title: "Event",
      description: "Description not available",
    };
    popupTitle.textContent = content.title;
    popupDescription.textContent = content.description;

    // Show popup
    popup.style.display = "block";
  }

  // Close popup when clicking the close button
  document.querySelector(".close-button").addEventListener("click", () => {
    document.getElementById("event-popup").style.display = "none";
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked button
      button.classList.add("active");
      // Show the corresponding tab content
      document.getElementById(targetTab).classList.add("active");
    });
  });

  timelineEvents.forEach((event) => {
    event.addEventListener("click", () => {
      const eventId = event.getAttribute("data-event");
      // Perform an action based on the eventId
      // For example, you could display more information in a modal or navigate to a section
      timelineEventPopUp(event);
    });
  });
});
