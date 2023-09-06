<template>
  <div>
    <h1>aggrid</h1>
    <!-- npm install --save ag-grid-community ag-grid-vue vue-property-decorator@^8.0.0 -w @demo/haha -->
    <hr class="my-2">
    <ag-grid-vue style="height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
    <hr class="my-2">
  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "Aggrid",
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { field: "make" },
      { field: "model" },
      { field: "price" },
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ];
  },
};
</script>
<style lang="scss">
  @import "~ag-grid-community/styles/ag-grid.css";
  @import "~ag-grid-community/styles/ag-theme-alpine.css";
</style>