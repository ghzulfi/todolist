let inputTask = document.getElementById("inputTask");
let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", function () {
  if (inputTask.value === "") {
    alert("Please enter a task.");
  } else {
    let listTask = document.querySelector(".list-group"); // Mengambil elemen list tugas
    let listTaskHTML = listTask.innerHTML; // Mengambil isi list tugas
    listTaskHTML += `<li class="list-group-item">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value=""
              id="thirdCheckboxStretched"
            />
            <label
              class="form-check-label stretched-link"
              >${inputTask.value}</label
            >
          </li>`; // Menambahkan HTML untuk tugas baru
    listTask.innerHTML = listTaskHTML; // Menambahkan tugas baru ke dalam list
    inputTask.value = ""; // Mengosongkan input setelah submit tugas
    inputTask.focus(); // Mengembalikan fokus typing ke input tanpa klik

    let checkboxes = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < checkboxes.length; i++) {}
  }
});
