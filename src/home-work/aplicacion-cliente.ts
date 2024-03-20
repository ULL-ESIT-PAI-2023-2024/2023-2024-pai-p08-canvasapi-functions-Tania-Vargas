/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Tania Évora Vargas Martínez -- alu0101219622
 * @since 19/03/2024
 * @file aplicacion-cliente.ts
 * @description: Fichero principal de la aplicación cliente, contiene el código que
 *  inicia la aplicación de representación de funciones.
 */

import { Funcion } from './funcion/funcion.js';
import { Vista } from './vista.js';

/**
 * @description Inicia la aplicación.
 */
export const iniciar = () => {
  const funcion1: Funcion = {
    funcion: (x: number) => (Math.sin(x))
  }
  const vista = new Vista([funcion1]);
  vista.visualizar();
}