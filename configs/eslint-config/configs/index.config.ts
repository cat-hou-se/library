import type { Linter } from "eslint"

import base from "./base.config"
import react from "./react.config"

export default [...base, ...react] as Linter.Config[]
