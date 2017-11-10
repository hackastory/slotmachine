import Vue from 'vue';

import TeamSelect from 'slotmachine/js/TeamSelect.js';
import Machine from 'slotmachine/js/Machine.js';

var SlotMachine = Vue.extend({

    data: function () {
        return {
            selectedTeam: null,
            teams: null
        };
    },

    mounted: function () {

        var dataURL = this.teamsURL || 'teams.json';
        var request = new XMLHttpRequest();

        request.open('GET', dataURL, true );
        request.setRequestHeader( 'Accept', 'application/json' );

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