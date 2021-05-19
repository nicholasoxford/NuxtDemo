<template>
  <div>
    <label>test</label><input type="text" @keyup.enter="addCountry" v-model="test"></input><br/>

    <label>County Name </label>
    
    <app-input v-model="countryName"></app-input>
    <button @click="addCountry">Add  Country</button>
    <br/>
    <h3 v-if="countries.length > 1">Countries:</h3>
    <h3 v-else-if="countries.length === 1">Country</h3>
    <h3 v-else>Country list is empty</h3>
    <ol>
      <li v-for="country in countries" :key="country">{{country}} 
        <button @click="removeCountry(country)">x</button>
        </li>  
    </ol>


    <label>Countries</label> {{getCountries()}} <br/>
     <label>Countries computed</label> {{getComputedCountries}}
  </div>
</template>

<script>
import AppInput from '../components/AppInput'
export default {
  components: {
    AppInput
  },
  data() {
    return {
      countryName: 'USA',
      test: '',
      countries: []
    }
  },
  methods: {
    addCountry(){
      if(!this.countryName)
      {
        alert('country name is empty')
        return
      }
      else if(this.countries.find(x=>x === this.countryName))
      {
        alert('the country already exists')
        return;
      }
      this.countries.push(this.countryName)
      this.countryName = ''
    },
    getCountries() {
      console.log('method was called')
      return this.countries.join(',')
    },
    removeCountry(country) {
      
      this.countries = this.countries.filter(x=>x !== country)
    },
  },
  computed:{
    getComputedCountries(){
      console.log('computed was called')
      return this.countries.join(',')
    }
  }
}
</script>

<style scoped>

</style>