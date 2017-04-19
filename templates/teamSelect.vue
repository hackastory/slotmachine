<div class="team-select">
    <div class="team-select__previous"
         v-on:click="handlePrevious">&lt;</div>
    <div class="team-select__selected">{{ selectedTeamName }}</div>
    <div class="team-select__next" v-on:click="handleNext">&gt;</div>
</div>