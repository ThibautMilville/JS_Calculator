class calculator {
  constructor() {
    this.inputDisplay = document.getElementsByName("display")[0];
    this.inputs = document.querySelectorAll("input");
  }

  load() {
    this.calculate();
  }

  // Functions
  // Add space between digits and operators
  addSpaceBetweenDigits() {
    if (this.inputDisplay.value.length > 3) {
      // Remove all spaces and add spaces every 3 digits
      this.inputDisplay.value = this.inputDisplay.value.replace(/\s/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
      // Add space between the operator and the number
      this.inputDisplay.value = this.inputDisplay.value.replace(/(\d)([\+\-\*\/])/g, "$1 $2 ");
      // Remove the space after an operator if it is the last character
      this.inputDisplay.value = this.inputDisplay.value.replace(/([\+\-\*\/])\s$/g, "$1");
    }
  }


  // Event listener
  // Calculate the input
  calculate() {
    this.inputs.forEach((input) => {
      input.addEventListener("click", (e) => {
        if (e.target.value == "=") {
          if (this.inputDisplay.value != "") {
            let expressionWithoutSpace = this.inputDisplay.value.replace(/\s+/g, '');
            this.inputDisplay.value = parseFloat(eval(expressionWithoutSpace).toFixed(2));
            this.addSpaceBetweenDigits();
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
              } else {
                this.inputDisplay.value += input.value;
                this.addSpaceBetweenDigits();
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