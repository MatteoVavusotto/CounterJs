document.addEventListener("DOMContentLoaded", () => {
  class updateView {
    constructor(counter) {
      this.counter = counter;
      this.display = document.querySelector(".js-display"); 
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
      this.display.innerText = this.counter;
    }
  }

  const elementsConfig = [
    {
      tag: "span",
      className: "js-display",
      textContent: "0",
    },
    {
      tag: "div",
      className: "js-view",
      children: [
        {
          tag: "button",
          className: "js-button",
          textContent: "+",
          dataAction: "increment",
        },
        {
          tag: "button",
          className: "js-button",
          textContent: "-",
          dataAction: "decrement",
        }
      ]
    }
  ];

const container = document.querySelector(".view-text");

const createView = (element) => {
  const tmp = document.createElement(element.tag);

  if (element.className) {
    tmp.className=element.className;
  }

  if (element.textContent) {
    tmp.textContent = element.textContent;
  }

  if (element.dataAction) {
    tmp.dataset.action = element.dataAction;
  }

  if (element.children) {
    element.children.forEach(child => {
      const childtmp = createView(child); 
      tmp.appendChild(childtmp);
    });
  }

  return tmp;
};

for (let element of elementsConfig) {
  const tmp = createView(element);
  container.appendChild(tmp);
}

  let counter = 0;
  const view = new updateView(counter);

  container.addEventListener("click", (event) => {
    const btn = event.target.closest(".js-button");
    console.log(btn);
    if (!btn) return;

    const action = btn.dataset.action;
    console.log(action);

    if (action === "increment") {
      view.increment(counter);
    } else if (action === "decrement") {
      view.decrement(counter);
    }
    view.updateDisplay();
  });
});
