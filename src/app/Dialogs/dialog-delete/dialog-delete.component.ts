import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Empleado } from 'src/app/interfaces/empleado';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    private dialogReferencia:MatDialogRef<DialogDeleteComponent>,
    @Inject (MAT_DIALOG_DATA) public dataEmpleado: Empleado)
  {
  }

  ngOnInit(): void {
    
  }

  confirmarEliminar(){
    if(this.dataEmpleado){
      this.dialogReferencia.close("eliminar")
    }
  }


}
