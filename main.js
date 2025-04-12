let inputTask = document.getElementById("inputTask");
let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", function () {
  if (inputTask.value === "") {
    alert("Please enter a task.");
  } else {
    let listTask = document.querySelector(".list-group"); // Mengambil elemen list tugas
    let listTaskHTML = listTask.innerHTML; // Mengambil isi list tugas
    listTaskHTML += `<li class="list-group-item d-flex justify-content-between">
                <div>
                <input
                  class="form-check-input me-1"
                  type="checkbox"/>
                <label>${inputTask.value}</label>
                </div>
                <button class="badge btn btn-danger border-0 btn-hapus">Delete</button>
              </li>`; // Menambahkan HTML untuk tugas baru
    listTask.innerHTML = listTaskHTML;
    console.log("Task added '", inputTask.value, "'"); // Tampilkan perubahan ke halaman
    inputTask.value = ""; // Mengosongkan input setelah submit tugas
    inputTask.focus(); // Mengembalikan fokus typing ke input tanpa klik
  }

  let checkboxes = document.querySelectorAll(".form-check-input");
  for (let i = 0; i < checkboxes.length; i++) {
    const input = checkboxes[i];
    input.addEventListener("change", function () {
      console.log("Checkbox changed");
      let taskSpan = input.nextElementSibling;
      taskSpan.classList.toggle("text-decoration-line-through");
    });
  }

  let deleteButtons = document.querySelectorAll(".btn-hapus"); // Mengambil semua tombol hapus
  for (let x = 0; x < deleteButtons.length; x++) {
    const deleteBut = deleteButtons[x];
    deleteBut.addEventListener("click", function () {
      this.parentElement.remove(); // Menghapus tugas saat tombol hapus diklik
    });
  }
});

inputTask.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTaskButton.click(); // seolah tombol diklik
  }
});
