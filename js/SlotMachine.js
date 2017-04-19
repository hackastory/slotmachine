import Vue from 'vue';

import TeamSelect from 'slotmachine/js/TeamSelect.js';
import Machine from 'slotmachine/js/Machine.js';

import teamData from 'slotmachine/teams.json!'


var SlotMachine = Vue.extend({

    data: function () {
        return {
            selectedTeam: null,
            teams: null
        };
    },

    mounted: function () {

        var request = new XMLHttpRequest();
        request.open('GET', 'teams.json', true );

        request.onload = function () {
            if ( request.status >= 200 && request.status < 400 ) {
                this.teams = JSON.parse( request.responseText ).teams;
            }

        }.bind( this );

        request.onerror = function () {

        }.bind( this );

        request.send();

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