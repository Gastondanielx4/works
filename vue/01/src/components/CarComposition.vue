<template>
  <h2>Coche - Composition</h2>
  <p>Marca: {{ brand }}</p>
  <p>Modelo: {{ model }}</p>
  <p>
    Color:
    <!-- <span v-for="(color, index) in colors" :key="index"
      >{{ index }}: {{ color }} -
    </span> -->
  </p>
  <p>Power: {{ power }}</p>

  <button @click="upPower">Aumentar</button>

  <button @click="downPower(10)">Disminuir</button>

  <!-- <ul> 
    <li v-for="(color, index) in colors" :key="index">
      {{ index }}: {{ color }}
    </li>
  </ul>
  <p>Precio: {{ price }}</p>
  <p>Potencia: {{ power }} CV</p>
  {{ mensaje.text }} - {{ mensaje.title }}
  <p>Potencias Urbanas menor a 300 cv</p>
  <ul>
    <li v-for="(power, index) in powers" :key="index">
      <template v-if="power < 300">
        {{ power }}
      </template>
    </li>
    <br />
    <p>Potencias Urbanas mayor a 300 cv</p>
    <template v-for="(power, index) in powers" :key="index">
      <li v-if="power > 300">{{ power }}</li>
    </template>
    <p>Potencias</p>
    <template v-for="(power, index) in powers" :key="index">
      <li v-if="power < 280">Urbana: {{ power }}</li>
      <li v-else-if="power === 280">Hibrido: {{ power }}</li>
      <li v-else>Carrera: {{ power }}</li>
    </template>
  </ul> -->
</template>

<script>
import { ref } from "vue";
export default {
  /* data() {
    return {
      brand: "Audi",
      model: "A4",
      color: ["Azul", "Rojo", "Verde"],
      price: 38000,
      power: 180,
      mensaje: {
        title: "Hola mundo",
        text: "Adios",
      },
    };
  }, */
  setup() {
    const brand = "Audi";
    const model = "A4";
    /*   const colors = ["Azul", "Morado", "Marron", "Amarillo"];
    const price = 45000;
    const power = 240;
    const powers = [60, 80, 120, 160, 200, 280, 300, 390, 540, 500];
    const mensaje = {
      title: "Estoy bien",
      text: "Welcome",
    }; */
    let power = ref(40);
    const upPower = () => {
      /*   console.log("Aumentar potencia ...");
      console.log(power); */
      power.value++;
    };
    const downPower = (newPower) => {
      /*   console.log("Bajar potencia ..." + newPower); */
      power.value = power.value - newPower;
    };

    return {
      brand,
      model,
      /*   colors,
      price, */
      power,
      upPower,
      downPower,
      /* mensaje,
      powers, */
    };
  },
};
</script>

<style lang="scss" scoped></style>
