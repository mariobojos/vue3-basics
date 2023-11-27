export default {
    template: `
        <section v-show="inProgressAssignments.length">
            <h2 class="font-bold mt-2">In-Progress Assignments</h2>
    
            <ul>
                <li
                        v-for="assignment in inProgressAssignments"
                        :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.done" />
                    </label>
                </li>
            </ul>
        </section>
    
        <section
                v-show="completedAssignments.length"
                class="my-7"
        >
            <h2 class="font-bold mt-2">Finished Assignments</h2>
    
            <ul>
                <li
                        v-for="assignment in completedAssignments"
                        :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.done" />
                    </label>
                </li>
            </ul>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Make up bed', done: false, id: 1 },
                { name: 'Take a bath', done: false, id: 2 },
                { name: 'Eat breakfast', done: false, id: 3 },
                { name: 'Brush teeth', done: false, id: 4 },
            ]
        }
    },

    computed: {
        completedAssignments: function() {
            return this.assignments.filter(assignment => assignment.done);
        },

        inProgressAssignments: function() {
            return this.assignments.filter(assignment => ! assignment.done);
        }
    }
}