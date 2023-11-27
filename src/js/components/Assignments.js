import AssignmentList from "./AssignmentList.js";

export default {

    components: {
        AssignmentList
    },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress Assignments" />
        
        <assignment-list :assignments="completedAssignments" title="Completed Assignments" />
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