<template>
  <div class="container">
    <div class="row">
      <b-spinner
        v-if="spinner"
        variant="dark"
        class="p-lg-5 m-auto"
        label="Spinning"
      ></b-spinner>
    </div>

    <div class="mt-5"></div>
    <div class="row mb-3" v-for="(dato, index) in folios" :key="dato.folio">
      <div class="col-2"></div>
      <div class="col-4 p-0 d-flex">
        <b-input-group v-bind:prepend="dato.folio.toString()" class="">
      <!-- <b-form-textarea
        id="textarea-small"
        size="sm"
        placeholder="Small textarea"
        class="col-6"
      ></b-form-textarea> -->
          <!-- <b-form-input type="text" disabled v-bind:value="dato."></b-form-input> -->
        </b-input-group>
      <b-form-radio-group
        :name="'radio-options'+(index+1)"
        :options="options"
        class="col-auto m-auto"
        v-model="selected[index]"
      >
      <!-- <pre>{{ selected }}</pre> -->
      </b-form-radio-group>
      <b-input-group prepend="Tomos" class="">
      </b-input-group>
      <b-form-input
        class="col-3"
        type="number"
        :name="'tomos'+(index+1)"
        v-model="tomos[index]"
      ></b-form-input>
      <b-input-group prepend="Oficio" class="ml-2" v-if="selected[index]=='Oficio'">
      </b-input-group>
      <b-form-input
        v-if="selected[index]=='Oficio'"
        class="col-3"
        type="number"
        :name="'referencias'+(index+1)"
        v-model="referencias[index]"
      ></b-form-input>
        <!-- <b-form-group label="Radios using options"> -->
    <!-- </b-form-group> -->
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Fecha de registro" class="">
          <b-form-input type="text" disabled v-model="folios.fechaAlta"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Estado" class="">
          <b-form-input type="text" disabled v-model="estado"></b-form-input>
        </b-input-group>
      </div>
    </div> -->
    <div class="">
      <div class="row align-content-between">
        <!-- <div class="col-1"></div> -->

          <b-button-group size="sm" class="m-auto">
            <b-button
              to="/validar"
              variant="outline-success"
              >Validar</b-button
            >
            <b-button class="" variant="outline-primary"
              >Asignar preparador</b-button
            >
            <b-button class="" variant="outline-primary"
              >Agregar observaciones</b-button
            >
            <b-button class="" variant="outline-primary" right
              >Asignar digitalizador</b-button
            >
            <b-button class="" variant="outline-danger" right
              >Eliminar</b-button
            >
          </b-button-group>
          <div class="mb-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from '../config/config'

export default {
    data() {
    return {
        spinner: null,
        folioInicio: null,
        folioFin: null,
        folios: [],
        tomos: [],
        referencias: [],
        selected: [],
        options: [
          { text: 'Completo', value: 'Completo', },
          { text: 'Faltante', value: 'Faltante'},
          { text: 'Oficio', value: 'Oficio'},
        ]
    }
    },
    created() {
        this.spinner = true;
        this.getFolios();
    },
    methods: {
    getFolios() {
        let params = { 
            folioInicio: localStorage.folioInicio,
            folioFin: localStorage.folioFin
            };
        axios
        .get(`${config.api}/folios`, {
            params,
        })
        .then((res) => {
            this.folios = res.data.folios;
            this.folios.forEach((el, index) => {
              if(el.referencias){
                this.referencias[index] = el.referencias;
                this.selected[index] = 'Oficio';
              }
              else
                this.selected[index] = 'Completo';
                this.spinner = false;
            });
        })
        .catch((error) => {
            if(error)
                console.log(error);
        });
    },
    },
};
</script>
