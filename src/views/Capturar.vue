<template>
    <div class="container mt-5">
        <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Folio inicio" class="">
            <b-form-input
              type="number"
              disabled
              v-model="folioInicio"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Folio fin" class="">
            <b-form-input
              type="number"
              disabled
              v-model="folioFin"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Fecha de expediente" class="">
            <b-form-input
              type="date"
              disabled
              v-model="fechaExpediente"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Número de fojas" class="">
            <b-form-input
              type="number"
              disabled
              v-model="noFojas"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Fecha de registro" class="">
            <b-form-input
              type="text"
              disabled
              v-model="fechaAlta"
            ></b-form-input>
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
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Validador" class="">
            <b-form-input
              type="number"
              disabled
              v-model="folioInicio"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Verificador" class="">
            <b-form-input
              type="number"
              disabled
              v-model="folioInicio"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Preparador" class="">
            <b-form-input
              type="number"
              disabled
              v-model="folioInicio"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Digitalizador" class="">
            <b-form-input
              type="number"
              disabled
              v-model="folioInicio"
            ></b-form-input>
          </b-input-group>
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
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
}
</script>

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
