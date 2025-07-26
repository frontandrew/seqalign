import { Brakepoints } from '../../../constants';
import type { Brakepoint } from '../types';



/**
 * Calculates the breakpoint based on the given size, for instance vuewport width.
 * 
 * @param size - The size value to determine the breakpoint
 * @returns {Brakepoint} The corresponding breakpoint enum value:
 * - XL for sizes < 320
 * - SM for sizes between 320 and 719
 * - MD for sizes between 720 and 1079 
 * - LG for sizes between 1080 and 1919
 * - XS for sizes >= 1920
 * - MD as fallback
 */

export function calcBrakepoint(size: number): Brakepoint {
  if (size < 320) return Brakepoints.XS
  if (size >= 320 && size < 720) return Brakepoints.SM
  if (size >=  720 && size < 1080) return Brakepoints.MD
  if (size >= 1080 && size < 1920) return Brakepoints.LG
  if (size >= 1920) return Brakepoints.XL
  return Brakepoints.MD
}