export default {
    template: `
         <div :class="{
            'p-4 border rounded-lg': true,
            'bg-gray-900 border-gray-800 text-white': theme == 'dark',
            'bg-white border-gray-300 text-black': theme == 'light',
            }">
          <h2 v-if="$slots.heading" class="font-bold mb-2">
            <slot name="heading" />
          </h2>
          
          <slot name="default" />
          
          <footer v-if="$slots.footer" class="text-xs border-t text-gray-400 mt-4 pt-4">
            <slot name="footer" />
          </footer>
        </div>
    `,

    props: {
        theme: {
            type: String,
            default: 'dark'
        }
    }
}