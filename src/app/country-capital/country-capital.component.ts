import { Component, Input, OnInit } from '@angular/core';

type Data = {
  [key: string]: string;
}

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.css']
})
export class CountryCapitalComponent implements OnInit {

  @Input() data: Data | undefined;
  arrayButtons: string[];
  arrayButtonsShuffle: string[];
  arrayPivot: string[];
  arrayElements: string[];
  arrayClass: string[];

  isError: boolean;

  constructor() {
    this.arrayButtons = [];
    this.arrayButtonsShuffle = [];
    this.arrayPivot = [];
    this.arrayElements = [];
    this.arrayClass = [];
    this.isError = false;
  }

  generateArray(): void {
    for (const key in this.data) {
      this.arrayButtons.push(key);
      this.arrayButtons.push(this.data[key]);
    }
    this.shuffle(this.arrayButtons);
  }

  shuffle(array: any) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    this.arrayButtonsShuffle = array;
  }

  selectOption(item: any, index: number): void {
    if (this.arrayClass.length === 2)
      this.arrayClass = [];

    document.getElementById("option-" + index)?.classList.add("button--selected");

    this.arrayClass.push("option-" + index);

    if (this.arrayPivot.length === 2)
      this.arrayPivot = [];

    if (this.arrayPivot.length < 2)
      this.arrayPivot.push(item);

    if (this.arrayPivot.length === 2) {
      for (const key in this.data) {

        if (key === this.arrayPivot[0] && this.data[key] === this.arrayPivot[1]) {
          this.deleteElements(this.arrayPivot[0]);
          this.deleteElements(this.arrayPivot[1]);
          this.arrayClass = [];
          this.isError = false;
        } else {
          this.isError = true;
          for (let index = 0; index < this.arrayClass.length; index++) {
            document.getElementById(this.arrayClass[index])?.classList.remove("button--selected");
            document.getElementById(this.arrayClass[index])?.classList.add("button--error");
          }
        }
      }
    }

    if (this.isError)
      this.removeCss();
  }

  deleteElements(element: string): void {
    for (let index = 0; index < this.arrayButtons.length; index++) {
      if (this.arrayButtons[index] === element) {
        this.arrayButtons.splice(index, 1);
      }
    }
    this.getElements();
  }

  removeCss(): void {
    setTimeout(() => {
      for (let index = 0; index < this.arrayClass.length; index++) {
        document.getElementById(this.arrayClass[index])?.classList.remove("button--error");
      }
    }, 500);
    this.isError = false;
  }

  getElements(): void {
    this.arrayElements = this.arrayButtonsShuffle;
  }

  ngOnInit(): void {
    this.generateArray();
    this.getElements();
  }

}
