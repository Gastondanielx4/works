<template>
  <h2>Coche - Options</h2>
  <p>Marca: {{ brand }}</p>
  <p>Modelo: {{ model }}</p>
  <p>Potencia {{ power }}</p>

  <button @click="upPower(10)">Aumentar</button>
  <button @click="downPower(10)">Disminuir</button>
</template>

<script>
export default {
  data() {
    return {
      brand: "Seat",
      model: "Leon",
      power: 50,
    };
  },
  methods: {
    upPower(newPower) {
      /* console.log("Aumentando potencia" + newPower); */
      this.power = this.power + newPower;
    },
    downPower(newPower) {
      /* console.log("Bajando potencia" + newPower); */
      this.power = this.power - newPower;
    },
  },
};
</script>

<style lang="scss" scoped></style>
