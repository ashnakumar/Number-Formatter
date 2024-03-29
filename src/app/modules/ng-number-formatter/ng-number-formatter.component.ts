import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-number-formatter',
  inputs: ['ngNumber'],
  templateUrl: './ng-number-formatter.component.html',
  styleUrls: ['./ng-number-formatter.component.css']
})
export class NgNumberFormatterComponent implements OnInit {
  ngNumber: string;

  constructor() { }

  ngOnInit() {
    var incomingNumber = this.ngNumber;
    this.ngNumber = this.nFormatter(Math.abs(parseInt(incomingNumber)), 1);
  }

  nFormatter(num, digits) {
    var si = [
      { value: 1E18, symbol: "E" },
      { value: 1E15, symbol: "P" },
      { value: 1E12, symbol: "T" },
      { value: 1E9, symbol: "B" },
      { value: 1E6, symbol: "M" },
      { value: 1E3, symbol: "K" }
    ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
    for (i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, "$1");
  }
}
