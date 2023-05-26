function getOption() {
  const selectElement = [...document.querySelectorAll("#select1")];
  const operation = document.querySelector("#select2").value;

  var output;
  const valueArray = selectElement.map((e) => {
    if (e.value === "myArg") {
      throw Error(
        (document.querySelector(".output").textContent =
          "undefined:- Select true / false ")
      );
    }
    return e.value;
  });

  if (operation === "and") {
    output = valueArray.every((v) => {
      return v === "true";
    });

    return (document.querySelector(".output").textContent = output);
  } else if (operation === "or") {
    output = valueArray.includes("true");

    return (document.querySelector(".output").textContent = output);
  }
}

const addArg = () => {
  const newArg = prompt("Enter the new argument value:");

  if (newArg !== null) {
    document.getElementById("allArg").insertAdjacentHTML(
      "beforeend",
      `  <br />  <select id="select1">
      <option value="${newArg}">${newArg}</option>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>`
    );
  }
};

