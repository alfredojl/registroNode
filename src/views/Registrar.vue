<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Paquete" class="">
          <b-form-input type="number" v-model="noPaquete"
        v-on:keyup.enter="save()"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Folio inicio" class="">
          <b-form-input type="number" v-model="folioInicio"
        v-on:keyup.enter="save()"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Folio fin" class="">
          <b-form-input type="number" v-model="folioFin"
        v-on:keyup.enter="save()"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Fecha de expediente" class="">
          <b-form-input type="date" v-model="fechaExpediente"
        v-on:keyup.enter="save()"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3"></div>
    <b-button-group>
      <b-button variant="success"
      @click="save()"
      >Añadir</b-button>
      <b-button variant="info"
      @click="limpiar()"
      >Limpiar</b-button>
    </b-button-group>
  </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '../config/config';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            noPaquete: null,
            paquete: null,
            folioInicio: null,
            folioFin: null,
            fechaExpediente: null,
            noFojas: null,
            fechaAlta: null,
            estado: null,
    };
    },
    created() {
    },
    methods: {
      limpiar(){
        this.noPaquete = null;
        this.folioInicio = null;
        this.folioFin = null;
        this.fechaExpediente = null;
      },
        save(){
          if(!this.noPaquete || !this.folioInicio || !this.folioFin || !this.fechaExpediente)
            return Swal.fire(`Complete todos los campos.`, ``, "info");
          let fechaAlta = Date.now();
          let data = {
            noPaquete: this.noPaquete,
            folioInicio: this.folioInicio,
            folioFin: this.folioFin,
            fechaExpediente: this.fechaExpediente,
            fechaAlta,
            registrado: localStorage.loggedIn
          };
          axios.post(`${config.api}/paquete`, {
            data
          })
          .then((res) => {
            this.paquete = res.data.paquete.noPaquete;
            Swal.fire(`¡Hecho!`, `Paquete ${this.paquete} agregado con éxito.`, "success");
            
          }).catch((err) => {
            Swal.fire(`Error!`, `No se pudo agregar el paquete ${this.paquete}`, "error");
            console.log(err);
          });
        }
    },
}
</script>

<style>
  input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>