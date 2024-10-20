import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEye,
  faEyeSlash,
  faComments,
} from '@fortawesome/free-regular-svg-icons'
import {
  faCode,
  faUserPlus,
  faPlus,
  faClone,
  faAnglesRight,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faEye,
  faEyeSlash,
  faCode,
  faUserPlus,
  faPlus,
  faClone,
  faAnglesRight,
  faComments,
  faPaperPlane
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
