<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Paquete" class="">
          <b-form-input type="number" v-model="paquete"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Folio inicio" class="">
          <b-form-input type="number" v-model="folioInicio"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Folio fin" class="">
          <b-form-input type="number" v-model="folioFin"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Fecha de expediente" class="">
          <b-form-input type="date" v-model="fechaExpediente"></b-form-input>
        </b-input-group>
      </div>
    </div>
    </div>
</template>

<script>
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
    methods: {
        
    },
}
</script>
