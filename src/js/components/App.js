import Assignments from "./Assignments.js";

export default {

    components: {
        Assignments
    },

    template: `
        <div class="grid gap-6">
            <assignments />
            <div class="bg-gray-900 p-4 border border-gray-800 rounded-lg">
              Hello, world!
            </div>
        </div>
    `,

};
