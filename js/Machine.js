import Vue from 'vue';
import machineTemplate from 'slotmachine/templates/machine.vue!text';
import Slot from 'slotmachine/js/Slot.js';

import Sounds from 'slotmachine/js/Sounds.js'

var SND_WIN = 'sounds/slot-win.mp3';
var SND_MUSIC = 'sounds/slot-music.mp3';
var SND_BELL = 'sounds/slot-bell.mp3';

var allSounds = new Sounds( [
    SND_WIN,
    SND_BELL,
    SND_MUSIC
] );


export default Vue.component( 'machine', {

    data: function () {
        return {
            teamMembers: [],
            revealed1: false,
            revealed2: false,
            revealed3: false,
            revealed4: false,
            revealed5: false,
            revealed6: false,
            spinning1: false,
            spinning2: false,
            spinning3: false,
            spinning4: false,
            spinning5: false,
            spinning6: false,
        }
    },

    props: [ 'team' ],

    template: machineTemplate,

    created: function () {
        console.log('created');

        var timeout;

        this.handleKeyProxy = function ( e ) {

            var keyCode = e.keyCode;

            switch ( keyCode ) {

                case 13: // Enter bounce handler
                    if ( timeout ) {
                        clearTimeout( timeout );
                    }
                    timeout = setTimeout( function () {
                        this.handleOneArm();
                    }.bind( this ), 150 );
                    break;
            }
        }.bind( this );

        window.addEventListener( 'keyup', this.handleKeyProxy );

        if ( this.team ) {
            this.handleTeamChange();
        }
    },

    beforeDestroy: function () {
        window.removeEventListener( 'keyup', this.handleKeyProxy );
    },

    methods: {

        handleOneArm: function () {

            var timeoutSpin = 330;
            var timeoutDing = 500;
            var revealOffset = 4000;

            this.reset();

            allSounds.play( SND_MUSIC );

            this.team.members.forEach( function ( member, idx ) {

                setTimeout( function () {

                    this[ 'spinning'+ ( idx + 1 ) ] = true;

                    console.log('spinning' + ( idx + 1 ) );

                }.bind( this ), ( idx + 1 ) * timeoutSpin );


                setTimeout( function () {

                    console.log('revealing' + ( idx + 1 ) );

                    this[ 'revealed'+ ( idx + 1 ) ] = true;
                    this[ 'spinning'+ ( idx + 1 ) ] = false;

                    // play ding sound
                    allSounds.play( SND_BELL );


                    if ( idx === this.team.members.length - 1 ) {
                        setTimeout( function () {

                            // end tune
                            console.log('end');
                            allSounds.pause( SND_MUSIC );
                            allSounds.play( SND_WIN );

                        }.bind( this ), 500 );
                    }

                }.bind( this ), revealOffset + ( idx + 1 ) * timeoutDing );

            }.bind( this ));
        },

        handleTeamChange: function () {
            console.log( 'handleTeamChange' );

            this.reset();

            this.teamMembers = this.team.members;
        },

        reset: function () {
            this.revealed1 = false;
            this.revealed2 = false;
            this.revealed3 = false;
            this.revealed4 = false;
            this.revealed5 = false;
            this.revealed6 = false;
            this.spinning1 = false;
            this.spinning2 = false;
            this.spinning3 = false;
            this.spinning4 = false;
            this.spinning5 = false;
            this.spinning6 = false;

            allSounds.pause( SND_MUSIC );
            allSounds.get( SND_MUSIC ).currentTime = 0;
        }
    }
} );
