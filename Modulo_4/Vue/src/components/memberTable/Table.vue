<template>
  <div>
    <h2>Member Page</h2>
    <input type="text" v-model="organization" @change="setOrganization">
    <button @click="loadMembers">Load</button>
    <table :class="$style.table">
      <thead>
        <member-head/>
      </thead>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member"/>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    members: [] as Member[],
    organization: "lemoncode" as string
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.$data.organization).then(members => {
        this.members = members;
      });
    },

    setOrganization: function(event) {
      this.organization = event.target.value;
    }
  }
});
</script>

+ <style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
