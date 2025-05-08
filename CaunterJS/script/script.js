document.addEventListener("DOMContentLoaded", () =>{
  class updateView{
    constructor(counter){
      this.counter = counter;
      
    }
    increment(){
      this.counter++;
      this.updateDisplay();
    }
    decrement(){
      this.counter--;
      this.updateDisplay();
    }
    updateDisplay(){
      return display.innerText = this.counter;
    }

  }

  
  
  const container = document.querySelector('.view-text');
  const minButton = document.createElement('button');
  const plusButton = document.createElement('button');
  const display = document.createElement('span');
  const buttonView = document.createElement('div');

  buttonView.classList.add('js-view');
  plusButton.textContent = '+';
  plusButton.classList.add('js-button');
  minButton.textContent = '-';
  minButton.classList.add('js-button');
  display.textContent = '0';
  display.classList.add('js-display');

  container.appendChild(display);
  container.appendChild(buttonView);
  buttonView.appendChild(minButton);
  buttonView.appendChild(plusButton);


  let counter = 0;
  const view = new updateView(counter);

  plusButton.addEventListener('click', () => {
    view.increment(counter);
    view.updateDisplay();
  });

  minButton.addEventListener('click', () => {
    view.decrement(counter);
    view.updateDisplay();
  });

})