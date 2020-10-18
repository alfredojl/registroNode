<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Paquete" class="mb-5">
          <b-form-input type="number" v-model="noPaquete"
          v-on:keyup.enter="search()"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Folio inicio" class="">
          <b-form-input type="number" v-model="folioInicio" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Folio fin" class="">
          <b-form-input type="number" v-model="folioFin" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Fecha de expediente" class="">
          <b-form-input type="date" v-model="fechaExpediente" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Número de fojas" class="">
          <b-form-input type="number" v-model="noFojas" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Fecha de registro" class="">
          <b-form-input type="date" v-model="fechaAlta" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Estado" class="">
          <b-form-input type="text" v-model="estado" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
      <div class="">
        <div class="row align-content-between">
          <div class="col-3"></div>
          <div class="beetween">
            <b-button-group size="sm">
              <b-button
                @click="goValidar()"
                class="col-auto mt-2"
                variant="outline-success"
                >Validar</b-button
              >
              <b-button class="col-auto mt-2" variant="outline-primary"
                >Asignar preparador</b-button
              >
              <b-button class="col-auto mt-2" variant="outline-primary"
                >Agregar observaciones</b-button
              >
              <b-button class="col-auto mt-2" variant="outline-primary" right
                >Asignar digitalizador</b-button
              >
              <b-button class="col-auto mt-2" variant="outline-danger" right
                >Eliminar</b-button
              >
            </b-button-group>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import config from "../config/config";

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
  created() {},
  methods: {
    goValidar() {
      localStorage.setItem("folioInicio", this.folioInicio);
      localStorage.setItem("folioFin", this.folioFin);
      localStorage.setItem("fechaExpediente", this.fechaExpediente);
      this.$router.push("/validar");
    },
    search() {
      if (!this.noPaquete)
        return Swal.fire("Ingresa un número de paquete", "", "info");
      axios
        .get(`${config.api}/paquete`, {
          params: {
            noPaquete: this.noPaquete,
          },
        })
        .then((res) => {
          this.folioInicio = res.data.paquete.folioInicio;
          this.folioFin = res.data.paquete.folioFin;
          this.noFojas = res.data.paquete.noFojas;
          this.fechaAlta = res.data.paquete.fechaAlta;
          this.estado = res.data.paquete.estado;
          this.fechaExpediente =  res.data.paquete.fechaExpediente ? new Date(res.data.paquete.fechaExpediente).toISOString().slice(0, 10) : null;
          this.fechaAlta = new Date(
            res.data.paquete.fechaAlta
          ).toISOString().slice(0, 10);
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
    },
  },
  // name: 'Home',
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.beetween {
  display: flex;
  justify-content: space-between !important;
}
</style>
