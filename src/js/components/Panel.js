export default {
    template: `
         <div class="bg-gray-900 p-4 border border-gray-800 rounded-lg">
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
        heading: String
    }
}