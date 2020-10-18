<template>
    <!-- <div class="container mt-5">
        <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Folio inicio" class="">
            <b-form-input
              type="number"
            
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
            
              v-model="fechaAlta"
            ></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Estado" class="">
            <b-form-input type="text" v-model="estado"></b-form-input>
          </b-input-group>
        </div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 p-0 d-flex">
          <b-input-group prepend="Validador" class="">
            <b-form-input
              type="number"
            
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
            
              v-model="folioInicio"
            ></b-form-input>
          </b-input-group>
        </div>
        <div class="">
        <div class="row align-content-between">
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
    </div> -->
    <div class="container">
    <div class="row mt-5">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Paquete" class="mb-5">
          <b-form-input type="number" v-model="noPaquete"
          v-on:keyup.enter="search"></b-form-input>
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
        <b-input-group prepend="Fecha de registro" class="">
          <b-form-input type="date" v-model="fechaAlta" disabled></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Turno" class="">
          <!-- <b-form-input type="number" v-model="turno"></b-form-input> -->
          <b-form-select v-model="turno" :options="turnos" @change="getEmpleados(turno)"></b-form-select>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Verificador" class="">
          <!-- <b-form-input type="number" v-model="verificadores"></b-form-input> -->
          <b-form-select v-model="verificador" :options="verificadores"
          :disabled="!turno"
          ></b-form-select>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Preparador" class="">
          <!-- <b-form-input type="number" v-model="verificadores"></b-form-input> -->
          <b-form-select v-model="preparador" :options="preparadores"
          :disabled="!turno"></b-form-select>
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 p-0 d-flex">
        <b-input-group prepend="Estado" class="">
          <!-- <b-form-input type="text" v-model="estado"></b-form-input> -->
          <b-form-select v-model="estado" :options="estados"
          value-field="estado"
          text-field="estado"
          ></b-form-select>
        </b-input-group>
      </div>
    </div>
      <div class="">
        <div class="row align-content-between">
          <div class="col-3"></div>
          <div class="beetween">
            <b-button-group size="sm">
              <b-button
                @click="save()"
                class="col-auto mt-2"
                variant="success"
                >Asignar</b-button
              >
              <!-- <b-button class="col-auto mt-2" variant="outline-primary"
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
              > -->
            </b-button-group>
          </div>
        </div>
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
          folioInicio: null,
          folioFin: null,
          noFojas: null,
          fechaAlta: null,
          estado: null,
          estados: null,
          fechaExpediente: null,
          fechaAlta: null,
          turno: null,
          verificador: null,
          verificadores: null,
          preparador: null,
          preparadores: null,
          turnos: [
            "Matutino",
            "Vespertino"
          ],
        }
    },
    created() {
      this.getEstados();
    },
    methods: {
      getEmpleados(value){
      },
      getEstados(){
        axios.get(`${config.api}/estado`)
        .then(res => {
          this.estados = res.data.estados;
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
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
          if(!res.data.paquete)
          return Swal.fire(`No se encontró el paquete ${this.noPaquete}.`, "", "error");
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
    save(){
      if(!this.noPaquete)
        return Swal.fire("Ingrese un número de paquete.", "", "info");
      if(!this.preparador)
        return Swal.fire("Seleccione un preparador.", "", "info");
      Swal.fire({
        title: `¿Asignar a ${this.preparador}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Asignar`,
        denyButtonText: `No asignar`,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post();
          Swal.fire(`Asignado a ${this.preparador}.`, '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Paquete sin asignar.', '', 'info')
      }
})
    }
    },
}
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
