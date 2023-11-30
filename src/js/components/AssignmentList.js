import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {

    components: {
        Assignment,
        AssignmentTags,
    },

    template: `
         <section v-show="show && assignments.length" class="w-72">
            <div class="flex justify-between item-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ filteredAssignments.length }})</span>
                </h2>
                
                <button v-show="canToggle" @click="show = false">&times;</button>    
            </div>
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tags).flat()"
                v-model:currentTag="currentTag"
            ></assignment-tags>
            
            <ul class="border border-gray-400 rounded divide-y divide-gray-400 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
            
            <slot></slot>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all',
            show: true
        };
    },

    computed: {
        filteredAssignments() {
            if ('all' === this.currentTag) {
                return this.assignments;
            }

            return this.assignments.filter(a => this.currentTag ? a.tags.includes(this.currentTag) : true);
        }
    }
}
