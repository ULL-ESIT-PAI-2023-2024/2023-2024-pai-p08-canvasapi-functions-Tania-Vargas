/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Tania Évora Vargas Martínez -- alu0101219622
 * @since 19/03/2024
 * @file administrador-canvas.ts
 * @description: Fichero que contiene la clase AdministradorCanvas, que representa un administrador de canvas.
 * 
 */

import { Coordenada } from "./eje-coordenadas/coordenada";

/**
 * @class AdministradorCanvas
 * @description Clase que representa un administrador de canvas.
 * @param {CanvasRenderingContext2D} canvas El contexto del canvas.
 * @param {HTMLCanvasElement} constexto El canvas.
 * @param {Coordenada} origen El origen del canvas.
 */
export class AdministradorCanvas {
  private canvas: HTMLCanvasElement;
  private contexto: CanvasRenderingContext2D;
  private origen: Coordenada;

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.contexto = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.origen = { x: 0, y: 0 } as Coordenada;
    this.ajustarEjeCoordenadas(); // Ajusta origen del canvas.
    this.invertirEjeY(); // Invierte eje Y (positivo hacia arriba).
  }

  /**
   * @description Devuelve el canvas.
   * @returns {HTMLCanvasElement} El canvas.
   */
  public getCanvas(): HTMLCanvasElement { return this.canvas; }

  /**
   * @description Devuelve el contexto del canvas.
   * @returns {CanvasRenderingContext2D} El contexto del canvas.
   */
  public getContext(): CanvasRenderingContext2D { return this.contexto; }

  /**
   * @description Devuelve el ancho del canvas.
   * @returns {number} El ancho del canvas.
   */
  public getAncho(): number { return this.canvas.width; }

  /**
   * @description Devuelve el alto del canvas.
   * @returns {number} El alto del canvas.
   */
  public getAlto(): number { return this.canvas.height; }

  /**
   * @description Ajusta el origen de coordenadas del canvas (0, 0) en el centro del canvas.
   */
  private ajustarEjeCoordenadas(): void {
    this.origen = { x: this.canvas.width / 2, y: this.canvas.height / 2 } as Coordenada;
    this.contexto.translate(this.origen.x, this.origen.y);
  }

  /**
   * @description Invierte el eje y para que el eje y positivo sea hacia arriba.
   */
  private invertirEjeY(): void { this.contexto.scale(1, -1); }
}