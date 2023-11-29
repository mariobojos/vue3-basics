import Assignment from "./Assignment.js";

export default {

    components: {
        Assignment
    },

    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold my-2">
            {{ title }}
            <span>({{ filteredAssignments.length }})</span>
            </h2>
            <div class="flex gap-2 mb-5">
                <button
                    @click="currentTag = tag"
                    class="border border-gray-400 rounded px-1 py text-xs" 
                    :class="{
                        'bg-gray-400 text-yellow': currentTag === tag,
                    }"
                    v-for="tag in tags" 
                    :key="tag.id"
                >
                    {{ tag }}
                </button>
            </div>    
            <ul class="border border-gray-400 rounded divide-y divide-gray-400">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'all',
        };
    },

    computed: {
        tags() {
            // return this.assignments.map(a => a.tags.map(t => t)).flat(); this gets all tags from assignment tag array
            return['all', ...new Set(this.assignments.map(a => a.tags.map(t => t)).flat())];
        },

        filteredAssignments() {
            if ('all' === this.currentTag) {
                return this.assignments;
            }

            return this.assignments.filter(a => this.currentTag ? a.tags.includes(this.currentTag) : true);
        }
    }
}
