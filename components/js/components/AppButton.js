export default {

    template: `
        <button
            class="bg-green-800 text-yellow-100 hover:bg-green-600 disabled:bg-gray-400 rounded py-3 px-3"
            :disabled="processing"
        >
            <slot />
        </button>
        `,

    props: {
        type: String,
    },

    data() {
        return {
            processing: true
        }
    },

}
