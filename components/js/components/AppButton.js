export default {

    /*
    NOTE:
    :class binding can hold a String, Object
    In the example below, we are using an Object with the CSS classes as the name of the Object attribute with
        boolean value.
     */
    template: `
        <button
            :class="{
            'hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400 rounded py-3 px-3': true,
            'bg-blue-800 text-blue-100': type === 'primary',
            'bg-pink-800 text-pink-100': type === 'secondary',
            'bg-amber-800 text-amber-100': type === 'warning',
            'bg-gray-800 text-gray-100': type === 'muted',
            }"
            :disabled="processing"
        >
            <slot />
        </button>
        `,

    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },

    data() {
        return {
            processing: false
        }
    },

}
