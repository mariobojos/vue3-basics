export default {
    template: `
         <div class="bg-gray-900 p-4 border border-gray-800 rounded-lg">
          <h2 class="font-bold">{{ heading }}</h2>
        </div>
    `,

    props: {
        heading: String
    }
}