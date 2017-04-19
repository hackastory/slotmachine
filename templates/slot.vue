<div class="machine__slot"
    v-bind:class="{
    'machine__slot--first': first,
    'machine__slot--last': last,
    'machine__slot--revealed': revealed,
    'machine__slot--spinning': spinning
    }">
    <div class="machine__slot__cover"></div>
    <div class="machine__slot__member">
        <div class="machine__slot__member-name">
            <h3 v-html="member.firstName" class="machine__slot__first-name"></h3>
            <h4 v-html="member.surname" class="machine__slot__surname"></h4>
        </div>
        <div class="machine__slot__member-cover"></div>
    </div>
</div>