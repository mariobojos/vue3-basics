export default {

    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold mt-2">{{ title }}</h2>
    
            <ul>
                <li
                        v-for="assignment in assignments"
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

    props: {
        assignments: Array,
        title: String,
    }
}