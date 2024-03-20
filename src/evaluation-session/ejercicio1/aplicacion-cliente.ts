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

import { Funcion} from './funcion/funcion.js';
import { Vista } from './vista.js';

/**
 * @description Inicia la aplicación.
 */
export const iniciar = () => {
  const A_VALUE: number = 9;
  const B_VALUE: number = 8;
  const PHI_VALUE: number = 0;
  const FUNCION_EN_X: Funcion = { funcion: (t: number) => (Math.sin(A_VALUE * t + PHI_VALUE)) }
  const FUNCION_EN_Y: Funcion = { funcion: (t: number) => (Math.sin(B_VALUE * t)) }
  const vista = new Vista([FUNCION_EN_X, FUNCION_EN_Y]);
  vista.visualizar();
}