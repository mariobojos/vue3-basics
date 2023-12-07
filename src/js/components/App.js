import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {

    components: {
        Assignments,
        Panel
    },

    template: `
        <div class="grid gap-6">
            <assignments />
            <panel>
                <template v-slot:heading>
                    Heading entry slot
                    <p>Hello, World!</p>
                </template>
                <template v-slot:default>
                    Default entry slot
                </template>                
            </panel>
        </div>
    `,

};
