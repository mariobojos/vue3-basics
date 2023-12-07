export default {
    template: `
         <div class="bg-gray-900 p-4 border border-gray-800 rounded-lg">
          <h2 class="font-bold">
            <slot name="heading" />
          </h2>
          
          <slot name="default" />
        </div>
    `,

    props: {
        heading: String
    }
}