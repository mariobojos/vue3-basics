export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-500 rounded text-black flex">
                <input 
                    v-model="newAssignment" 
                    type="text" 
                    style="width: 13rem;"
                    class="bg-white p-2" 
                    placeholder="New assignment..." />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        };
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        },
    }
}
