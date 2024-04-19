const fetchProducts = async () => {
  const promise = await fetch("https://northwind.vercel.app/api/products");
  const data = await promise.json();
  console.log(data);
  return data;
};
const tbody = document.querySelector("tbody");
fetchProducts().then((data) => {
  data.map((item) => {
    const tr = document.createElement("tr");
    const id = document.createElement("th");
    const name = document.createElement("td");
    const country = document.createElement("td");
    const price = document.createElement("td");
    const deleteel = document.createElement("td");
    const editel = document.createElement("td");
    const detailel = document.createElement("td");
    const deletebtn = document.createElement("button");
    const modal = document.querySelector(".modal");
    deletebtn.className = "btn btn-danger delete";
    deletebtn.innerText = "Delete";

    const editbtn = document.createElement("button");
    editbtn.className = "btn btn-warning edit";
    editbtn.innerText = "Edit";

    const detailbtn = document.createElement("button");
    detailbtn.className = "btn btn-primary detail";
    detailbtn.innerText = "Detail";

    deletebtn.setAttribute("data", item.id);
    editbtn.setAttribute("data", item.id);
    detailbtn.setAttribute("data", item.id);
    editbtn.setAttribute("data-bs-toggle", "modal");
    editbtn.setAttribute("data-bs-target", "#exampleModal");

    id.innerText = item.id;
    name.innerText = item.name;
    country.innerText = item.name;
    price.innerText = item.unitPrice;
    detailel.append(detailbtn);
    editel.append(editbtn);
    deleteel.append(deletebtn);
    tr.append(id, name, country, price, deleteel, editel, detailel);
    tbody.append(tr);

    deletebtn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();

      //   fetch(
      //     "https://northwind.vercel.app/api/products/" +
      //       e.target.getAttribute("data"),
      //     {
      //       method: "DELETE",
      //     }
      //   );
    });
    editbtn.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("data"));
      modal.innerText = "sal";
      //   alert(e.target.getAttribute("data"));
    });
    detailbtn.addEventListener("click", function (e) {
      //   console.log(e.target.getAttribute("data"));
      //   alert(e.target.getAttribute("data"));
    });
  });
});
