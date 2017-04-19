import Vue from 'vue';
import slotTemplate from 'slotmachine/templates/slot.vue!text';

export default Vue.component( 'machine-slot', {

    props: [ 'member', 'revealed', 'spinning', 'first', 'last' ],

    template: slotTemplate
} );
