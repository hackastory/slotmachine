import Vue from 'vue';
import teamSelectTemplate from 'slotmachine/templates/teamSelect.vue!text';

export default Vue.component( 'teamSelect', {

    data: function () {
        return {
            selectedTeam: -1,
            selectedTeamName: '...'
        };
    },

    props: [ 'teams' ],

    template: teamSelectTemplate,

    created: function () {

        window.addEventListener( 'keyup', function ( e ) {

            var keyCode = e.keyCode;

            switch ( keyCode ) {

                case 37: // left arrow
                    this.handlePrevious();
                    break;

                case 39: // right arrow
                    this.handleNext();
                    break;
            }
        }.bind( this ) );
    },

    methods: {

        handleNext: function () {

            if ( this.selectedTeam === this.teams.length - 1 ) {
                this.selectedTeam = 0;
            } else {
                this.selectedTeam += 1;
            }

            this.selectedTeamName = this.teams[ this.selectedTeam ].name;
            this.$emit( 'select', this.teams[ this.selectedTeam ] );
        },

        handlePrevious: function () {

            if ( this.selectedTeam === 0 ) {
                this.selectedTeam = this.teams.length - 1;
            } else {
                this.selectedTeam -= 1;
            }


            this.selectedTeamName = this.teams[ this.selectedTeam ].name;
            this.$emit( 'select', this.teams[ this.selectedTeam ] );
        },
    }
} );
