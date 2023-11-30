import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {

    components: {
        AssignmentCreate,
        AssignmentList
    },

    template: `
        <section class="space-y-7">
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments" />
            <assignment-list :assignments="filters.completed" title="Completed Assignments" />
            <assignment-create @add="add" />
        </section>
        
    `,

    data() {
        return {
            assignments: [],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.done),
                completed: this.assignments.filter(assignment => assignment.done),
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments') // I Promise to return something from that URL
            .then(response => response.json()) // When I get the data, I Promise to return a JSON object
            .then(assignments => {
                // When I have a JSON object, do something
                this.assignments = assignments;
                console.table(assignments);
            });
    },

    methods: {
        add(assignmentName) {
            this.assignments.push({
               name: assignmentName,
               done: false,
               id: this.assignments.length + 1,
               tags: ['afternoon'],
            });
        },
    },
}
