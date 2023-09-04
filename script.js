class calculator {
  constructor() {
    this.inputDisplay = document.getElementsByName("display")[0];
    this.inputs = document.querySelectorAll("input");
  }

  load() {
    this.calculate();
  }

  calculate() {
    this.inputs.forEach((input) => {
      input.addEventListener("click", (e) => {
        if (e.target.value == "=") {
          if (this.inputDisplay.value != "") {
            this.inputDisplay.value = parseFloat(eval(this.inputDisplay.value).toFixed(2));
          } else {
            this.inputDisplay.value = "0";
          }
        } else {
          switch (input.value) {
            case "AC":
              this.inputDisplay.value = "0";
              break;
            case "DE":
              if (this.inputDisplay.value.length == 1) {
                this.inputDisplay.value = "0";
              } else {
                this.inputDisplay.value = this.inputDisplay.value.substring(0, this.inputDisplay.value.length - 1);
              }
              break;
            case ".":
              // Split the input by operators and check if the last number has a decimal
              let splitInput = this.inputDisplay.value.split(/[\+\-\*\/]/);
              if (splitInput[splitInput.length - 1].indexOf(".") == -1) {
                this.inputDisplay.value += input.value;
              }
              break;
            default:
              // Remove the 0 if it is the first number
              if (this.inputDisplay.value == "0") {
                this.inputDisplay.value = "";
              }
              // Add a space before and after the operator
              if (input.value.match(/[\+\-\*\/]/)) {
                this.inputDisplay.value += " " + input.value + " ";
              } else {
                this.inputDisplay.value += input.value;
              }
              break;
          }
        }
      });
    });
  }
}

calculator = new calculator();
calculator.load();