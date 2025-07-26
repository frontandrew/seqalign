import type { Brakepoints } from '../../constants/brakepoint'

export type Brakepoint = (typeof Brakepoints)[keyof typeof Brakepoints]

export interface AppLayout {
    readonly breakPoint: Brakepoint | null
  }
