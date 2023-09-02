class calculator {
  constructor() {
    this.inputDisplay = document.getElementsByName("display")[0];
    this.inputs = document.querySelectorAll("input");
  }

  load() {
    this.add();
  }

  add() {
    this.inputs.forEach((input) => {
      input.addEventListener("click", (e) => {
        if(e.target.value == "=") {
          if(this.inputDisplay.value != "") {
            this.inputDisplay.value = eval(this.inputDisplay.value);
          } else {
            this.inputDisplay.value = "0";
          }
        } else {
          switch(input.value) {
            case "AC":
              this.inputDisplay.value = "0";
              break;
            case "DE":
              this.inputDisplay.value = this.inputDisplay.value.substring(0, this.inputDisplay.value.length - 1);
              break;
            case ".":
              // Check if there is already a decimal point
              if(this.inputDisplay.value.indexOf(".") == -1) {
                this.inputDisplay.value += input.value;
              }
              break;
            default:
              // Remove the 0 if it is the first number
              if(this.inputDisplay.value == "0") {
                this.inputDisplay.value = "";
              }
              this.inputDisplay.value += input.value;
              break;
          }
        }
      });
    });
  }
}

calculator = new calculator();
calculator.load();