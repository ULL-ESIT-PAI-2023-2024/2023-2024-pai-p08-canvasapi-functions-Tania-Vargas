/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Tania Évora Vargas Martínez -- alu0101219622
 * @since 19/03/2024
 * @file vista.ts
 * @description: Fichero que contiene la clase Vista, que representa la vista de la aplicación.
 */

import { AdministradorCanvas } from './administrador-canvas.js';
import { EjeCoordenadas } from './eje-coordenadas/eje-coordenadas.js';
import { TrazoFuncion } from './funcion/trazo-funcion.js';
import { Funcion } from './funcion/funcion.js';

export class Vista {
  private axisas: EjeCoordenadas;
  private canvas: AdministradorCanvas;
  private funciones: Funcion[];

  constructor(funciones: Funcion[]) {
    this.canvas = new AdministradorCanvas();
    this.axisas = new EjeCoordenadas(this.canvas);
    this.funciones = funciones;
  }

  /**
   * @description Inicia la vista.
   */
  public visualizar(): void {
    this.axisas.dibujarEjeCoordenadas();
    this.dibujarFunciones();
  }

  /**
   * @description Dibuja las funciones.
   */
  private dibujarFunciones(): void {
    const escala = this.axisas.getEscala();
    const color = this.randomColor();
    const trazoFuncionX = new TrazoFuncion(this.canvas, this.funciones[0], color, escala);
    trazoFuncionX.dibujarFuncionXY(this.funciones[1]);
  }

  /**
   * Genera un color aleatorio.
   * @returns Un color aleatorio.
   */
  private randomColor(): string {
    const COLORES: string[] = [
      "red",
      "green",
      "blue",
      "magenta",
      "cyan",
      "orange",
      "purple",
      "teal",
      "pink",
      "brown",
      "darkgreen",
      "darkblue",
      "lightblue",
      "maroon",
      "springgreen"
    ];
    return COLORES[Math.floor(Math.random() * COLORES.length)];
  }
}