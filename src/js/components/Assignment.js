export default {
    template: `
        <li>
            <label>
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.done" />
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    },
}
