/**
 * Combined store representing the application layout state.
 * @type {Store<AppLayout>} A store containing the current breakpoint information
 * @property {Brakepoint | null} breakPoint - The current responsive breakpoint of the application
 */
import { combine, createEvent, createStore, sample } from 'effector'

import { calcBrakepoint } from './tools'
import type { AppLayout, Brakepoint } from './types'

const windowResize = createEvent()

const $window = createStore<Window | null>(window)
const $width = createStore<number | null>(null)
const $brakepoint = createStore<Brakepoint | null>(null)

/**
 * Represents a combined store for managing application layout state
 * @type {AppLayout} Combined store containing the current breakpoint value
 */
export const $appLayout = combine<AppLayout>({ breakPoint: $brakepoint })

/**
 * REDUSERS
 */

sample({
  clock: windowResize,
  filter: Boolean,
  fn: (window) => window?.visualViewport?.width ?? null,
  source: $window,
  target: $width
})

sample({
  filter: Boolean,
  fn: (width) => calcBrakepoint(width),
  source: $width,
  target: $brakepoint
})

/**
 * LISTENERS
 */

window.addEventListener('resize', () => windowResize())
window.addEventListener('load', () => windowResize())

window.removeEventListener('resize', ()=>{})
