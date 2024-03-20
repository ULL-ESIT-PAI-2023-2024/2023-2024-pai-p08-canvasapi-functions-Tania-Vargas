/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Tania Évora Vargas Martínez -- alu0101219622
 * @since 19/03/2024
 * @file linea.ts
 * @description: Fichero que contiene la clase Linea, que representa una línea en el plano.
 */

import { AdministradorCanvas } from '../administrador-canvas.js';
import { Coordenada } from './coordenada.js';

export class Linea {
  private inicio: Coordenada;
  private fin: Coordenada;
  private color: string;
  private tipo: string;
  private contexto: AdministradorCanvas;

  constructor(inicio: Coordenada, fin: Coordenada, color: string, tipo: string, contexto: AdministradorCanvas) {
    this.inicio = inicio;
    this.fin = fin;
    this.color = color;
    this.tipo = tipo;
    this.contexto = contexto;
  }

  /**
   * @description Dibuja la línea.
   */
  public dibujarLinea(): void {
    this.contexto.getContext().save();
    // Establezco el estilo
    this.contexto.getContext().strokeStyle = this.color;
    // Linea continua o discontinua
    if (this.tipo === 'discontinua') { this.lineaDiscontinua(); }
    // Dibujo la línea
    this.contexto.getContext().beginPath();
    this.contexto.getContext().moveTo(this.inicio.x, this.inicio.y);
    this.contexto.getContext().lineTo(this.fin.x, this.fin.y);
    this.contexto.getContext().stroke();
    this.contexto.getContext().restore();
  }

  /**
   * @description Establece el tipo de línea como discontinua.
   */
  private lineaDiscontinua(): void {
    const LONGITUD = 5;
    const SEPARACION = 3;
    this.contexto.getContext().setLineDash([LONGITUD, SEPARACION]);
  }
}