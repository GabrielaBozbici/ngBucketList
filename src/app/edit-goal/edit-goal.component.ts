import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { DataService } from '../data.service';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.scss']
})


export class EditGoalComponent implements OnInit {

  goalTextEdited = {
    text: '',
    index: ''
  };
  submitBtn = 'Sumbit';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private _data: DataService,
    public dialogRef: MatDialogRef<EditGoalComponent>
  ) {}
  ngOnInit() {
    this.goalTextEdited.text = this.data.text;
    this.goalTextEdited.index = this.data.index;
    console.log('data: ', this.data);
    console.log('this.goalTextEdited la init: ', this.goalTextEdited);
  }

  submitItem(i) {
    console.log('index: ', this.data.index);
    console.log('goalTextEdited: ', this.goalTextEdited);
    this.dialogRef.close(this.goalTextEdited);
  }
}
