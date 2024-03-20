/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Tania Évora Vargas Martínez -- alu0101219622
 * @since 19/03/2024
 * @file eje-coordenadas.ts
 * @description: Fichero que contiene la interfaz EjeCoordenadas, que representa un eje de coordenadas.
 */

import { AdministradorCanvas } from '../administrador-canvas.js';
import { Linea } from './linea.js';
import { Coordenada } from './coordenada.js';

/**
 * @class EjeCoordenadas
 * @description Clase que representa un eje de coordenadas.
 * @param {AdministradorCanvas} administradorCanvas El administrador de canvas.
 * @param {number} ancho El ancho del eje de coordenadas.
 * @param {number} alto El alto del eje de coordenadas.
 */
export class EjeCoordenadas {
  private canvas: AdministradorCanvas;
  private ancho: number;
  private alto: number;
  private readonly escala: number;

  constructor(canvas: AdministradorCanvas) {
    this.canvas = canvas;
    this.ancho = this.canvas.getAncho();
    this.alto = this.canvas.getAlto();
    this.escala = (this.ancho / 2) / 23;
  }

  /**
   * @description Dibuja el eje de coordenadas.
   */
  public dibujarEjeCoordenadas(): void {
    this.dibujarMallaEjeCoordenadas();
    this.dibujarNumeroEjeCoordenadas();
    this.dibujarLineasEjeCoordenadas();
  }

  /**
   * Devuelve la escala del eje de coordenadas.
   * @returns La escala del eje de coordenadas.
   */
  public getEscala(): number { return this.escala; }

  /**
   * @description Dibuja las líneas del eje de coordenadas.
   */
  private dibujarLineasEjeCoordenadas(): void {
    const COLOR: string = 'black';
    const TIPO: string = 'continua';
    // Linea horizontal del eje
    const MITAD_ANCHO = this.ancho / 2;
    this.dibujarLinea({ x: -MITAD_ANCHO, y: 0 }, { x: MITAD_ANCHO, y: 0 }, COLOR, TIPO);
    // Linea vertical del eje
    const MITAD_ALTO = this.alto / 2;
    this.dibujarLinea({ x: 0, y: -MITAD_ALTO }, { x: 0, y: MITAD_ALTO }, COLOR, TIPO);
  }

  /**
   * @description Dibuja una línea en el eje de coordenadas.
   * @param {Coordenada} inicio El punto de inicio de la línea.
   * @param {Coordenada} fin El punto de fin de la línea.
   * @param {string} color El color de la línea.
   * @param {string} tipo El tipo de línea.
   */
  private dibujarLinea(inicio: Coordenada, fin: Coordenada, color: string, tipo: string): void {
    const LINEA = new Linea(inicio, fin, color, tipo, this.canvas);
    LINEA.dibujarLinea();
  }

  /**
   * @description Dibuja el malla del eje de coordenadas.
   */
  private dibujarMallaEjeCoordenadas(): void {
    const COLOR: string = 'lightgrey';
    const TIPO: string = 'discontinua';
    const MITAD_ALTO = this.alto / 2;
    const MITAD_ANCHO = this.ancho / 2;

    // Dibujar líneas horizontales desde el centro
    for (let i = 0; i <= MITAD_ANCHO; i += this.escala) {
      this.dibujarLinea({ x: i, y: MITAD_ALTO }, { x: i, y: -MITAD_ALTO }, COLOR, TIPO);
      this.dibujarLinea({ x: -i, y: MITAD_ALTO }, { x: -i, y: -MITAD_ALTO }, COLOR, TIPO);
    }

    // Dibujar líneas verticales desde el centro
    for (let i = 0; i <= MITAD_ALTO; i += this.escala) {
      this.dibujarLinea({ x: MITAD_ANCHO, y: i }, { x: -MITAD_ANCHO, y: i }, COLOR, TIPO);
      this.dibujarLinea({ x: MITAD_ANCHO, y: -i }, { x: -MITAD_ANCHO, y: -i }, COLOR, TIPO);
    }
  }

  /**
   * @description Dibuja los números del eje de coordenadas.
   */
  private dibujarNumeroEjeCoordenadas(): void {
    this.canvas.getContext().save();
    this.canvas.getContext().scale(1, -1);

    // Dibujar el 0
    this.dibujarNumero(-15, 12, 0);
    for (let i = 1; i <= 22; i++) {
      if (i % 2 !== 0) continue;
      // Números de eje x
      this.dibujarNumero((i * this.escala), 12, i);
      this.dibujarNumero(-(i * this.escala), 12, -i); 
      // Números de eje y
      this.dibujarNumero(-15, -(i * this.escala), i);
      this.dibujarNumero(-16, (i * this.escala), -i);
    }
    this.canvas.getContext().restore();
  }

  /**
   * Dibuja un número en el canvas.
   * @param x Posición x del número.
   * @param y Posición y del número.
   * @param value Valor del número.
   */
  private dibujarNumero(x: number, y: number, value: number): void {
    this.canvas.getContext().fillText(value.toString(), x, y);
  }
}