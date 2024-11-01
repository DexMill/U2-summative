document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const timelineEvents = document.querySelectorAll(".timeline-event");

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
      alert(`You clicked on event: ${eventId}`);
    });
  });
});
