document.addEventListener("DOMContentLoaded", function () {
    const rows = 10; // Number of rows in the grid
    const cols = 10; // Number of columns in the grid
    const seatMap = document.querySelector(".seat-map");
    const selectedSeatsList = document.getElementById("selected-seats-list");

    // Generate seat grid dynamically
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            seat.dataset.row = i + 1;
            seat.dataset.col = j + 1;
            seat.addEventListener("click", toggleSeatSelection);
            seatMap.appendChild(seat);
        }
    }

    function toggleSeatSelection(event) {
        const seat = event.target;
        const row = seat.dataset.row;
        const col = seat.dataset.col;

        if (seat.classList.contains("selected")) {
            seat.classList.remove("selected");
            removeSeat(row, col);
        } else {
            seat.classList.add("selected");
            addSeat(row, col);
        }
    }

    function addSeat(row, col) {
        const seatItem = document.createElement("li");
        seatItem.textContent = `Row ${row}, Seat ${col}`;
        seatItem.dataset.row = row;
        seatItem.dataset.col = col;
        selectedSeatsList.appendChild(seatItem);
    }

    function removeSeat(row, col) {
        const seatItems = selectedSeatsList.querySelectorAll("li");
        seatItems.forEach(item => {
            if (item.dataset.row === row && item.dataset.col === col) {
                item.remove();
            }
        });
    }
});
