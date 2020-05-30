export const CLEAR_ERROR = 'APP/CLEAR_ERROR'

export interface ClearErrorAction {
    type: typeof CLEAR_ERROR
    error: string
}

export type ActionsType = ClearErrorAction