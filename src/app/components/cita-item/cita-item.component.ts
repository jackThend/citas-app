import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cita-item',
  templateUrl: './cita-item.component.html',
  styleUrls: ['./cita-item.component.scss'],
  standalone: false
})
export class CitaItemComponent {
  @Input() frase: string = '';
  @Input() autor: string = '';
  @Output() eliminar = new EventEmitter<void>();

  onEliminar() {
    this.eliminar.emit();
  }
}
