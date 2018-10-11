<template>
  <sfeir-form :person="person" @cancel="goBack"></sfeir-form>
</template>

<script>
    import peopleService from '../services/PeopleService.js';
    import Form from '../components/Form.vue'

    export default {
        components: {
            'sfeir-form': Form
        },
        data() {
            return {
                person: {}
            }
        },
        methods: {
          goBack: function() {
            this.$router.go(-1);
          }
        },
        beforeRouteEnter(route, redirect, next) {
            peopleService
                .fetchOne(route.params.id)
                .then(person => next(vm => {
                    vm.person = person;
                }))
                .catch(console.log.bind(console))
        },
    }
</script>

<style scoped>
</style>
