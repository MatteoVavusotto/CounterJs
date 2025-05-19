document.addEventListener("DOMContentLoaded", () => {
  class updateView {
    constructor(counter) {
      this.counter = counter;
    }
    increment() {
      this.counter++;
      this.updateDisplay();
    }
    decrement() {
      this.counter--;
      this.updateDisplay();
    }
    updateDisplay() {
      return (display.innerText = this.counter);
    }
  }

  const container = document.querySelector(".view-text");

  const createButton = (text, action) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.dataset.action = action;
    btn.classList.add("js-button");
    return btn;
  };

  const display = Object.assign(document.createElement("span"), {
    textContent: "0",
    className: "js-display",
  });

  const buttonView = Object.assign(document.createElement("div"), {
    className: "js-view",
  });

  const minButton = createButton("-", "decrement");
  const plusButton = createButton("+", "increment");

  buttonView.append(minButton, plusButton);
  container.append(display, buttonView);

  let counter = 0;
  const view = new updateView(counter);

  buttonView.addEventListener("click", (event) => {
    const btn = event.target.closest(".js-button");
    if (!btn) return;

    const action = btn.dataset.action;

    if (action === "increment") {
      view.increment(counter);
    } else if (action === "decrement") {
      view.decrement(counter);
    }
    view.updateDisplay();
  });
});
