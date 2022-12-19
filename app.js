onload = () => {
  main();
};

const main = () => {
  // all reference here
  const searchInput = document.getElementById("searchInput");
  const table = document.getElementsByTagName("table")[0];

  // inputChange function here
  searchInput.addEventListener("keydown", (e) => {
    let value = e.target.value.toUpperCase();

    let tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];

      if (td) {
        let textContent = td.textContent || td.innerHTML;
        if (textContent.toUpperCase().indexOf(value) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });
};
