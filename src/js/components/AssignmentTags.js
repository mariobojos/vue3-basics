export default {
    template: `
       <div class="flex gap-2 mb-5">
            <button
                @click="$emit('update:currentTag', tag)"
                class="border border-gray-400 rounded px-1 py text-xs" 
                :class="{
                    'bg-blue-700 text-blue-100': currentTag === tag,
                }"
                v-for="tag in tags" 
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    },
}
