<template>
  <a-button style="margin-left: 10px; margin-bottom: 20px" @click="addShow"
    >增加</a-button
  >

  <a-button style="margin-left: 10px; margin-bottom: 20px" @click="DelectShow"
    >删除</a-button
  >

  <a-button style="margin-left: 10px; margin-bottom: 20px" @click="UpdateShow"
    >更新</a-button
  >

  <a-table :columns="columns" :data-source="data" bordered></a-table>

  <div class="form_div" :style="{ display: Add }">
    <Add />
  </div>

  <div class="form_div" :style="{ display: Delect }">
    <Delect />
  </div>

  <div class="form_div" :style="{ display: Update }">
    <Update />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, provide } from 'vue'
import { message } from 'ant-design-vue'
import Add from './school/Add form.vue'
import Delect from './school/Delect form.vue'
import Update from './school/update form copy.vue'

const columns = [
  {
    title: 'user',
    dataIndex: 'user',
    key: 'user',
    width: '20%'
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    width: '20%'
  },
  {
    title: 'sex',
    dataIndex: 'sex',
    key: 'sex',
    width: '20%'
  },
  {
    title: 'class',
    dataIndex: 'class',
    key: 'class',
    width: '20%'
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
    width: '20%'
  }
]
export default defineComponent({
  components: {
    Add,
    Delect,
    Update
  },
  setup() {
    const data = reactive([])

    const Add = ref('none')

    const Delect = ref('none')

    const Update = ref('none')

    const fetchData = () => {
      fetch(`${process.env.VUE_APP_DATA_URL}/school`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          json.forEach((element, i) => {
            let item = Object.assign(element, { key: i })
            data.push(item)
          })
        })
        .catch((e) => message.error(e))
    }
    fetchData()

    const addShow = () => {
      if (Add.value === 'none') {
        Add.value = 'block'
      } else {
        Add.value = 'none'
      }
    }
    provide('Add', addShow)

    const DelectShow = () => {
      if (Delect.value === 'none') {
        Delect.value = 'block'
      } else {
        Delect.value = 'none'
      }
    }

    provide('Delect', DelectShow)

    const UpdateShow = () => {
      if (Update.value === 'none') {
        Update.value = 'block'
      } else {
        Update.value = 'none'
      }
    }

    provide('Update', UpdateShow)

    return {
      columns,
      data,
      addShow,
      Add,
      DelectShow,
      Delect,
      UpdateShow,
      Update
    }
  }
})
</script>

<style lang="scss">
.form_div {
  left: 30%;
  top: 20%;
  position: absolute;
  min-width: 600px;
  z-index: 999;
}
</style>
