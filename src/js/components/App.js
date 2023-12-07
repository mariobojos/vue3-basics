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
            
            <panel theme="light">
                <template v-slot:heading>
                    Heading Slot used here.
                    <p>Hello, World!</p>
                </template>
                
                Default Slot entry still works.          
                
                <template #footer>
                    Footer Slot entry here.
                </template>                      
            </panel>
            
            <panel theme="dark">
                <strong>No Heading Slot used.</strong>                
                <p>Default Slot entry still works.</p>                                
            </panel>
            
            <panel>
                <template #heading>Heading Slot</template>                                
                <p>Default Slot entry still works.</p>    
                <template #footer>Footer here</template>                            
            </panel>
        </div>
    `,

};
