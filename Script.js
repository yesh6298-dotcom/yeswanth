document.getElementById("outingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;
    let reason = document.getElementById("reason").value;
    let date = document.getElementById("date").value;

    let requestList = document.getElementById("requestList");

    let li = document.createElement("li");
    li.textContent = `${name} (Room ${room}) - ${reason} at ${date}`;

    requestList.appendChild(li);

    // Clear form
    document.getElementById("outingForm").reset();
});
