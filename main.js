let inputTask = document.getElementById("inputTask");
let addTaskButton = document.getElementById("addTaskButton");

// modal
let div1Modal = document.createElement("div");
div1Modal.className = "modal fade";
div1Modal.id = "exampleModal2";
div1Modal.tabIndex = "-1";
div1Modal.setAttribute("aria-labelledby", "exampleModalLabel");
div1Modal.setAttribute("aria-hidden", "true");
let div2Modal = document.createElement("div");
div2Modal.className = "modal-dialog modal-dialog-centered";
let div3Modal = document.createElement("div");
div3Modal.className = "modal-content";
let div4Modal = document.createElement("div");
div4Modal.className = "modal-header";
let h1Modal = document.createElement("h1");
h1Modal.className = "modal-title fs-5";
h1Modal.id = "exampleModalLabel";
h1Modal.textContent = "Delete";
let button1Close = document.createElement("button");
button1Close.type = "button";
button1Close.className = "btn-close";
button1Close.setAttribute("data-bs-dismiss", "modal");
button1Close.setAttribute("aria-label", "Close");

div4Modal.appendChild(h1Modal);
div4Modal.appendChild(button1Close);

let div5Modal = document.createElement("div");
div5Modal.className = "modal-body";
div5Modal.textContent = "Are you sure you want to delete this task?";

let div6Modal = document.createElement("div");
div6Modal.className = "modal-footer";
let button2Close = document.createElement("button");
button2Close.type = "button";
button2Close.className = "btn btn-secondary";
button2Close.setAttribute("data-bs-dismiss", "modal");
button2Close.textContent = "Cancel";
let button1Delete = document.createElement("button");
button1Delete.type = "button";
button1Delete.className = "btn btn-danger";
button1Delete.id = "deleteButton";
button1Delete.setAttribute("data-bs-dismiss", "modal");
button1Delete.textContent = "Delete";

div6Modal.appendChild(button2Close);
div6Modal.appendChild(button1Delete);

div3Modal.appendChild(div4Modal);
div3Modal.appendChild(div5Modal);
div3Modal.appendChild(div6Modal);

div2Modal.appendChild(div3Modal);

div1Modal.appendChild(div2Modal);

let modalDiv = document.getElementById("modalDiv");

modalDiv.appendChild(div1Modal);

addTaskButton.addEventListener("click", function () {
  let warningTask = document.querySelector(".task-warning");

  if (inputTask.value === "") {
    let warningTask = document.querySelector(".task-warning");
    warningTask.textContent = "Please enter your task!";
    inputTask.focus();
    inputTask.addEventListener("keydown", function () {
      warningTask.textContent = "";
      inputTask.focus();
    });
  } else {
    let btnGroup = document.querySelector(".btn-group");
    let btnGroupChild = btnGroup.querySelector(".active");

    if (btnGroupChild == null) {
      let warningTask = document.querySelector(".task-warning");
      warningTask.textContent = "Please select your task priority!";
      inputTask.focus();
    } else {
      const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const d = new Date();
      const dayName = day[d.getDay()];
      const tanggal = d.getDate();
      const bulan = month[d.getMonth()];
      const tahun = d.getFullYear();
      const jam = d.getHours().toString().padStart(2, "0");
      const menit = d.getMinutes().toString().padStart(2, "0");

      let listTask = document.querySelector(".list-group1");
      let listTask2 = document.querySelector(".list-group2");

      // Buat elemen list item baru
      let li = document.createElement("li");
      // Set class untuk list item
      li.className = "list-group-item d-flex justify-content-between";

      // Buat bagian kiri: checkbox + label
      let div = document.createElement("div");
      div.className = "d-flex flex-row";
      // checkbox
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-check-input me-1";
      // label
      let label = document.createElement("label");
      label.textContent = inputTask.value;
      label.className = "ms-1 text-wrap";
      label.style.width = "4px";

      let levelPriorityBadge = document.createElement("span");
      levelPriorityBadge.textContent = btnGroupChild.textContent;
      if (btnGroupChild.textContent === "Low") {
        levelPriorityBadge.className = "badge rounded-pill bg-success";
      } else if (btnGroupChild.textContent === "Medium") {
        levelPriorityBadge.className = "badge rounded-pill bg-warning";
      } else if (btnGroupChild.textContent === "High") {
        levelPriorityBadge.className = "badge rounded-pill bg-danger";
      }
      let divCheck = document.createElement("div");
      divCheck.className = "d-flex align-item-center align-self-center me-2";
      let divLabel = document.createElement("div");
      divLabel.className = "d-flex flex-column";
      let divSubLabel = document.createElement("div");
      divSubLabel.className =
        "d-flex flex-column flex-md-row gap-1 align-item-center align-self-center justify-content-center";

      let span = document.createElement("span");
      span.className = "fst-italic fw-light ms-1 fs-7";
      span.textContent = `Created : ${dayName}, ${tanggal}-${bulan}-${tahun} ${jam}:${menit}`;

      // Gabungkan checkbox dan label ke dalam div

      divCheck.appendChild(checkbox);
      divSubLabel.appendChild(levelPriorityBadge);
      divSubLabel.appendChild(span);
      divLabel.appendChild(label);
      divLabel.appendChild(divSubLabel);
      div.appendChild(divCheck);
      div.appendChild(divLabel);

      let divSc = document.createElement("div");
      divSc.className = "d-flex justify-content-center align-item-center";

      // Buat tombol delete
      let buttonDelete = document.createElement("button");

      buttonDelete.setAttribute("data-bs-toggle", "modal");
      buttonDelete.setAttribute("data-bs-target", "#exampleModal2");
      buttonDelete.className = "badge btn btn-danger border-0 btn-hapus ms-3";
      buttonDelete.textContent = "Delete";

      divSc.appendChild(buttonDelete);

      // Gabungkan div dan tombol ke dalam <li>
      li.appendChild(div);
      li.appendChild(divSc);

      // Tambahkan li ke list utama atau class "list-group"
      listTask.appendChild(li);

      // Reset input
      inputTask.value = "";
      inputTask.focus();
      const parent = document.querySelector(".btn-group");
      for (const child of parent.children) {
        child.classList.remove("active");
      }
      function countertask() {
        let counterDone = document.querySelectorAll(
          ".text-decoration-line-through"
        ).length;
        let counterAll = document.querySelectorAll(".form-check-input").length;
        let counter = document.querySelector(".counter");
        counter.textContent =
          "Done : " + counterDone + " / " + counterAll + " tasks";
      }

      countertask();

      // Event checkbox: coret teks
      checkbox.addEventListener("change", function () {
        const day2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const month2 = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const d2 = new Date();
        const dayName2 = day2[d2.getDay()];
        const tanggal2 = d2.getDate();
        const bulan2 = month2[d2.getMonth()];
        const tahun2 = d2.getFullYear();
        const jam2 = d2.getHours().toString().padStart(2, "0");
        const menit2 = d2.getMinutes().toString().padStart(2, "0");

        countertask();
        label.classList.add("text-decoration-line-through", "text-success");

        // Buat elemen list item baru
        let li2 = document.createElement("li");
        // Set class untuk list item
        li2.className = "list-group-item d-flex justify-content-between";

        // Buat bagian kiri: checkbox + label
        let div2 = document.createElement("div");
        div2.className = "d-flex flex-row";
        label.classList.add("opacity-75");
        let checkbox2 = document.createElement("input");
        checkbox2.type = "checkbox";
        checkbox2.className = "form-check-input me-1";
        checkbox2.checked = true;
        checkbox2.disabled = true;
        // label

        // let label = document.createElement("label");
        // label.textContent = inputTask.value;

        let levelPriorityBadge2 = document.createElement("span");
        levelPriorityBadge2.textContent = btnGroupChild.textContent;
        if (btnGroupChild.textContent === "Low") {
          levelPriorityBadge2.className =
            "badge rounded-pill bg-success opacity-75";
        } else if (btnGroupChild.textContent === "Medium") {
          levelPriorityBadge2.className =
            "badge rounded-pill bg-warning opacity-75";
        } else if (btnGroupChild.textContent === "High") {
          levelPriorityBadge2.className =
            "badge rounded-pill bg-danger opacity-75";
        }
        let divCheck2 = document.createElement("div");
        divCheck2.className = "d-flex align-item-center align-self-center me-2";
        let divLabel2 = document.createElement("div");
        divLabel2.className = "d-flex flex-column";
        let divSubLabel2 = document.createElement("div");
        divSubLabel2.className =
          "d-flex flex-column flex-md-row gap-1 align-item-center align-self-center justify-content-center";

        let span2 = document.createElement("span");
        span2.className = "fst-italic fw-light ms-1 fs-7 opacity-75";
        span2.textContent = `Created : ${dayName}, ${tanggal}-${bulan}-${tahun} ${jam}:${menit}`;

        let span3 = document.createElement("span");
        span3.className = "fst-italic fw-light ms-1 fs-7 opacity-75";
        span3.textContent = `Done : ${dayName2}, ${tanggal2}-${bulan2}-${tahun2} ${jam2}:${menit2}`;

        divCheck2.appendChild(checkbox2);
        divSubLabel2.appendChild(levelPriorityBadge2);
        divSubLabel2.appendChild(span2);
        divSubLabel2.appendChild(span3);
        divLabel2.appendChild(label);
        divLabel2.appendChild(divSubLabel2);
        div2.appendChild(divCheck2);
        div2.appendChild(divLabel2);

        let deleteButton2 = document.createElement("button");
        deleteButton2.className =
          "badge btn btn-danger border-0 btn-hapus ms-3";
        deleteButton2.textContent = "Delete";
        deleteButton2.disabled = true;

        // Gabungkan div dan tombol ke dalam <li>
        li2.appendChild(div2);
        li2.appendChild(deleteButton2);

        // Tambahkan li ke list utama atau class "list-group"
        listTask2.appendChild(li2);
        li.remove();
        countertask();
        console.log(
          "Task Done :",
          label.textContent,
          ". Priority: ",
          btnGroupChild.textContent
        );
      });

      // Event tombol delete

      buttonDelete.addEventListener("click", function () {
        button1Delete.taskToDelete = li;
        button1Delete.taskLabel = label.textContent;
        button1Delete.taskPriority = btnGroupChild.textContent;
      });

      button1Delete.addEventListener("click", function () {
        if (this.taskToDelete) {
          this.taskToDelete.remove();
          countertask();
          // console.log(
          //   "Task deleted :",
          //   label.textContent,
          //   ". Priority: ",
          //   btnGroupChild.textContent
          // );
        }
      });

      console.log(
        "Task added :",
        label.textContent,
        ". Priority: ",
        btnGroupChild.textContent
      );

      clearTask = document.getElementById("clearTaskButton");
      clearTask.addEventListener("click", function () {
        listTask.innerHTML = "";
        listTask2.innerHTML = "";

        countertask();
      });
    }
  }
});

let btnPrLow = document.getElementById("btn-prior-low");
btnPrLow.addEventListener("click", function () {
  const parent = document.querySelector(".btn-group");
  for (const child of parent.children) {
    child.classList.remove("active");
  }
  btnPrLow.className = "badge btn btn-primary active";
  let warningTask = document.querySelector(".task-warning");
  warningTask.textContent = "";
  inputTask.focus();
});

let btnPrMed = document.getElementById("btn-prior-med");
btnPrMed.addEventListener("click", function () {
  const parent = document.querySelector(".btn-group");
  for (const child of parent.children) {
    child.classList.remove("active");
  }
  btnPrMed.className = "badge btn btn-primary active";
  let warningTask = document.querySelector(".task-warning");
  warningTask.textContent = "";
  inputTask.focus();
});

let btnPrHig = document.getElementById("btn-prior-hig");
btnPrHig.addEventListener("click", function () {
  const parent = document.querySelector(".btn-group");
  for (const child of parent.children) {
    child.classList.remove("active");
  }
  btnPrHig.className = "badge btn btn-primary active";
  let warningTask = document.querySelector(".task-warning");
  warningTask.textContent = "";
  inputTask.focus();
});
