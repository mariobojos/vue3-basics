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
            assignments: [
                { name: 'Make up bed', done: false, id: 1, tags: ['morning', 'evening'] },
                { name: 'Take a bath', done: false, id: 2, tags: ['morning'] },
                { name: 'Eat meal', done: false, id: 3, tags: ['morning', 'afternoon', 'evening'] },
                { name: 'Brush teeth', done: false, id: 4, tags: ['morning', 'evening'] },
            ],
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

    methods: {
        add(assignmentName) {
            this.assignments.push({
               name: assignmentName,
               done: false,
               id: this.assignments.length + 1,
               tags: ['afternoon'],
            });
        },
    }

}
