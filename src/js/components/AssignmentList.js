import Assignment from "./Assignment.js";

export default {

    components: {
        Assignment
    },

    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold my-2">
            {{ title }}
            <span>({{ assignments.length }})</span>
            </h2>
    
            <ul class="border border-gray-400 rounded divide-y divide-gray-400">
                <assignment 
                    v-for="assignment in assignments" 
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
                    
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    }
}
