<template>
    <md-card class="card-panel">
        <md-card-header v-if="editMode">
            <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
            <div class="md-subhead">{{person.id}}</div>
        </md-card-header>
        <md-card-content>
            <img class="picture" :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'"/>
            <form @submit="submit">
                <md-input-container :class="{ 'md-input-invalid': $v.person.firstname.$error }">
                    <label>Firstname</label>
                    <md-input name="firstname" v-model="person.firstname" @input="$v.person.firstname.$touch()"></md-input>
                    <div class="md-error">
                      <span v-show="!$v.person.firstname.required">Champs obligatoire</span>
                      <span v-show="!$v.person.firstname.minLength">Le prénom doit contenir au moins 2 caractères</span>
                    </div>
                </md-input-container>
                <md-input-container :class="{ 'md-input-invalid': $v.person.lastname.$error }">
                    <label>Lastname</label>
                    <md-input name="lastname" v-model="person.lastname" @input="$v.person.lastname.$touch()"></md-input>
                    <div class="md-error">
                      <span v-show="!$v.person.lastname.required">Champs obligatoire</span>
                      <span v-show="!$v.person.lastname.minLength">Le nom doit contenir au moins 2 caractères</span>
                    </div>
                </md-input-container>
                <md-input-container :class="{ 'md-input-invalid': $v.person.email.$error }">
                    <label>Email</label>
                    <md-input name="email" v-model="person.email" @input="$v.person.email.$touch()"></md-input>
                    <div class="md-error">
                      <span v-show="!$v.person.email.required">Champs obligatoire</span>
                      <span v-show="!$v.person.email.email">Le format de l'email n'est pas correct</span>
                    </div>
                </md-input-container>
                <md-input-container>
                    <label>Phone</label>
                    <md-input name="phone" v-model="person.phone" @input="$v.person.phone.$touch()"></md-input>
                </md-input-container>
            </form>
        </md-card-content>
        <md-card-actions>
            <md-button @click="cancel">Cancel</md-button>
            <md-button @click="submit">Submit</md-button>
        </md-card-actions>
    </md-card>

</template>
<script>
  import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        props: {
            person:{
                type:Object,
                default:function(){
                    return {firstname:'',lastname:'',email:'',phone:''};
                }
            }
        },
        data() {
            return {

            }
        },
        computed: {
            editMode: function () {
                return this.person && this.person.id;
            }
        },
        methods: {
            submit: function () {
                this.$emit('save', this.person);
            },
            cancel: function () {
                this.$emit('cancel');
            }
        },
        validations: {
          person:{
            firstname: {
            required,
            minLength: minLength(2)
            },
            lastname: {
              required,
              minLength: minLength(2)
            },
            email: {
              required,
              email
            }
          }
        }
    }

</script>
<style scoped>
    .card-panel {
        padding: 10px;
        margin: 10px !important;
        min-width: 500px;
    }

    .card {
        margin: 0;
    }

    .picture {
        border-radius: 50%;
        width: 80px;
    }
</style>
