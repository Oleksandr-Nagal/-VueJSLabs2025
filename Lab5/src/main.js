import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// PrimeVue components global registration
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import Divider from 'primevue/divider'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Tag from 'primevue/tag'
import Chip from 'primevue/chip'
import Toast from 'primevue/toast'

// PrimeVue styles
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Custom plugin
import CopyToClipboardPlugin from './plugins/copyToClipboard'

const app = createApp(App)

app.use(PrimeVue)
app.use(ToastService)
app.use(CopyToClipboardPlugin)

// register common components
app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('InputNumber', InputNumber)
app.component('Dropdown', Dropdown)
app.component('Divider', Divider)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('Tag', Tag)
app.component('Chip', Chip)
app.component('Toast', Toast)

app.mount('#app')
