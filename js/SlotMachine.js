import Vue from 'vue';

import TeamSelect from 'slotmachine/js/TeamSelect.js';
import Machine from 'slotmachine/js/Machine.js';

import teamData from 'slotmachine/teams.json!'


var SlotMachine = Vue.extend({

    data: function () {
        return {
            selectedTeam: null,
            teams: teamData.teams
        };
    },

    mounted: function () {
        //test
        //this.selectedTeam = this.teams[ 0 ];
    },

    methods: {

        handleTeamSelect: function ( selectedTeam ) {

            // sorry
            this.selectedTeam = false;
            this.$nextTick( function () {

                this.selectedTeam = selectedTeam;

            }.bind( this ) );
        }
    }
});

export default SlotMachine;