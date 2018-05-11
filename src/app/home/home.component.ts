import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditGoalComponent } from '../edit-goal/edit-goal.component';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number ;
  btnText = 'Add an item';
  goalText = '';
  goals = [];

  constructor(public dialog: MatDialog, private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe((res) => {
      this.goals = res;
      this.itemCount = this.goals.length;
    });
    this._data.changeGoal(this.goals);
  }

  addItem() {
    if (this.goalText) {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    }
  }
  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  editItem(i): void {
    const dialogRef = this.dialog.open(EditGoalComponent, {
      height: '200px',
      width: '600px',
      panelClass: 'asdasd',
      data: {
        text: this.goals[i],
        index: i
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.goals[result.index] = result.text;
      }
    });
  }
}
