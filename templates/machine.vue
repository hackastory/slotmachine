<div class="machine">

    <div class="machine__slots" v-if="teamMembers.length">

        <machine-slot
            v-if="teamMembers.length > 0"
            v-bind:member="teamMembers[ 0 ]"
            v-bind:first="true"
            v-bind:last="teamMembers.length == 1"
            v-bind:spinning="spinning1"
            v-bind:revealed="revealed1"
        ></machine-slot>

        <machine-slot
            v-if="teamMembers.length > 1"
            v-bind:member="teamMembers[ 1 ]"
            v-bind:last="teamMembers.length == 2"
            v-bind:spinning="spinning2"
            v-bind:revealed="revealed2"
        ></machine-slot>

        <machine-slot
            v-if="teamMembers.length > 2"
            v-bind:member="teamMembers[ 2 ]"
            v-bind:last="teamMembers.length == 3"
            v-bind:spinning="spinning3"
            v-bind:revealed="revealed3"
        ></machine-slot>

        <machine-slot
            v-if="teamMembers.length > 3"
            v-bind:member="teamMembers[ 3 ]"
            v-bind:last="teamMembers.length == 4"
            v-bind:spinning="spinning4"
            v-bind:revealed="revealed4"
        ></machine-slot>

        <machine-slot
            v-if="teamMembers.length > 4"
            v-bind:member="teamMembers[ 4 ]"
            v-bind:last="teamMembers.length == 5"
            v-bind:spinning="spinning5"
            v-bind:revealed="revealed5"
        ></machine-slot>


        <machine-slot
            v-if="teamMembers.length > 5"
            v-bind:member="teamMembers[ 5 ]"
            v-bind:last="teamMembers.length == 6"
            v-bind:spinning="spinning6"
            v-bind:revealed="revealed6"
        ></machine-slot>

        <div class="machine__arm"
            v-on:click="handleOneArm"></div>
        <div class="machine__shadow"></div>
    </div>
</div>