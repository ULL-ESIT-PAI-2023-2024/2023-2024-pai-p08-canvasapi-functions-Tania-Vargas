/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Tania Évora Vargas Martínez -- alu0101219622
 * @since 19/03/2024
 * @file trazo-funcion.ts
 * @description Fichero que contiene la clase TrazoFuncion, que representa como se 
 *  traza una función en el plano.
 */

import { AdministradorCanvas } from '../administrador-canvas.js';
import { Funcion } from './funcion.js';


export class TrazoFuncion {
  private canvas: AdministradorCanvas;
  private ancho: number;
  private alto: number;
  private funcion: Funcion;
  private color: string;
  private readonly escala: number;

  constructor(canvas: AdministradorCanvas, funcion: Funcion, color: string, escala: number) {
    this.canvas = canvas;
    this.ancho = this.canvas.getCanvas().width;
    this.alto = this.canvas.getCanvas().height;
    this.funcion = funcion;
    this.color = color;
    this.escala = escala;
  }

  /**
   * @description Dibuja la función.
   */
  public dibujarFuncion(): void { this.dibujarLineasFuncion(); }

  /**
   * @description Dibuja las líneas de la función en coordenadas x y.
   * @param funciony Función en y.
   */
  public dibujarFuncionXY(funciony: Funcion): void {
    const INCREMENTO: number = 1;
    // Dibuja un trazo de la función
    this.canvas.getContext().beginPath();
    this.canvas.getContext().strokeStyle = this.color;

    // Funcion Lissajous
    let t: number = -this.ancho / 2; // Inicio de t
    let x: number = this.funcion.funcion(t/this.escala) * this.escala;
    let y: number = funciony.funcion(t/this.escala) * this.escala;
    const FINAL_DE_EJE: number = this.ancho / 2;
    while (t <= FINAL_DE_EJE) {
      t += INCREMENTO;
      x = this.funcion.funcion(t/this.escala) * this.escala;
      y = funciony.funcion(t/this.escala) * this.escala;
      this.canvas.getContext().lineTo(x, y);
    }
    this.canvas.getContext().stroke();
  }

  /**
   * @description Dibuja las líneas de la función.
   */
  private dibujarLineasFuncion(): void {
    const INCREMENTO: number = 1;
    // Dibuja un trazo de la función
    this.canvas.getContext().beginPath();
    this.canvas.getContext().strokeStyle = this.color;

    let x: number = -this.ancho / 2;
    let y: number = this.funcion.funcion(x/this.escala) * this.escala;
    const FINAL_DE_EJE: number = this.ancho / 2;
    while (x <= FINAL_DE_EJE) {
      x += INCREMENTO;
      y = this.funcion.funcion(x/this.escala) * this.escala;
      this.canvas.getContext().lineTo(x, y);
    }
    this.canvas.getContext().stroke();
  }

}
