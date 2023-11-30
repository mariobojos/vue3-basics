# vue3-basics

Started: Nov 25, 2023

My follow-along to the Laracast (https://laracasts.com/series/learn-vue-3-step-by-step) tutorial. 

The first three sections are in the main branch while succeeding topics are branched out.

Covered so far:
1. Introduction to Vue 3
2. Attribute Binding and Event Handling
    * v-bind:name or :bind
    * v-on:click or @click
3. List, Conditionals, and Computed Properties
4. First Custom Component
5. One Vue Custom Component per File (separate branch)
6. Component Props (separate branch)
7. Bringing it all together
8. Handle a Form Submission
9. Parent-Child State Communication
    * Use of $emit
10. Additional Functionalities
    * Add tags and use Set() to add unique tags
11. Component Responsibility
    * Separate each component to its own file
12. A Deeper Look at v-model
    * A v-model is the combination of props `:value="sample"` and `@input="sample = @event.target.value"`
13. Lifecycle Hooks, Fake APIs, and AJAX
    * Fake API
      - Run `npm install json-server --save-dev`
      - Create file `db.json` at project root directory
      - Start server `npx json-server db.json -p 3001`
      - NOTE: Restart server after editing `db.json` file
    * Common Vue Lifecycle hooks
      - created
      - mounted
      - unmounted
    * AJAX
      - Use  `fetch` 
14. More Flexible Components with Slots and Flags