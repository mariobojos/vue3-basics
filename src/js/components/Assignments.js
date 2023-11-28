import AssignmentList from "./AssignmentList.js";

export default {

    components: {
        AssignmentList
    },

    template: `
        <section class="space-y-7">
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments" />
            <assignment-list :assignments="filters.completed" title="Completed Assignments" />
            
            <form @submit.prevent="add">
                <div class="border border-gray-500 rounded text-black">
                    <input v-model="newAssignment" type="text" class="bg-white p-2" placeholder="New assignment..." />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
        
    `,

    data() {
        return {
            assignments: [
                { name: 'Make up bed', done: false, id: 1 },
                { name: 'Take a bath', done: false, id: 2 },
                { name: 'Eat breakfast', done: false, id: 3 },
                { name: 'Brush teeth', done: false, id: 4 },
            ],
            newAssignment: '',
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
        add() {
            this.assignments.push({
               name: this.newAssignment,
               done: false,
               id: this.assignments.length + 1
            });

            this.newAssignment = '';
        },
    }

}
