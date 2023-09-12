<template>
  <div>
    <h1>浏览器 Modal 模态弹窗</h1>
    <p>原生alert级别的modal <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog">MDN The Dialog element</a></p>
    <div>
      <button
        class="btn"
        onclick="dog.showModal()"
      >
        showModal dialog
      </button>
      <button
        class="btn"
        onclick="dog.show()"
      >
        show dialog
      </button>
      <button
        class="btn"
        onclick="dog.close()"
      >
        Close dialog
      </button>
      <dialog id="dog">
        <div
          style="position: relative;"
          class="win"
        >
          <button
            style="position: absolute;top: 5px;right: 5px;"
            onclick="dog.close()"
          >
            <v-icon>mdi-close</v-icon>
          </button>
          <h1 style="align-items: start;">
            Modal
          </h1>
          <p>Modal content</p>
          <div>
            Input Text: <input
              type="text"
              style="border: 1px solid;"
            >
          </div>
          <div class="mt-1">
            Input Text: <input
              type="text"
              style="border: 1px solid;"
            >
          </div>
          <div class="my-2">
            <button
              class="sbtn"
              onclick="dog.close()"
            >
              Cancel dialog
            </button>
            <button
              class="sbtn"
              onclick="dog.close()"
            >
              Comfirm dialog
            </button>
          </div>
        </div>
      </dialog>
    </div>
    <div>showModal在body外面多了一个top layer，不是用的z-index 可以用于自己封装组件</div>
  </div>
</template>

<script>

export default {
  computed: {
  },
  created() {
  },

}
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  margin: 0 5px;
}

.sbtn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  margin: 0 5px;
}

#dog {
  border: 1px solid;
  border-radius: 5%;
  min-height: 20vh;
  min-width: 300px;
  text-align: center;
  /*居中*/
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*遮罩*/
#dog::backdrop {
  background: rgba(0, 0, 0, 0.6);
}

</style>