import * as zod from 'zod'
import { newCycleFormValidationScheme } from './index'

export type INewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>
