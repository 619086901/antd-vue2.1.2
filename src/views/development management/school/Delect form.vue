<template>
  <a-form
    name="custom-validation"
    ref="formRef"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
    :style="{ display: formState.hidden }"
    class="form"
  >
    <div style="margin: 0px auto; width: 50px; padding-bottom: 35px">删除</div>
    <a-form-item has-feedback label="学号" name="user">
      <a-input
        v-model:value="formState.user"
        type="string"
        autocomplete="off"
      />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">确定</a-button>
      <a-button style="margin-left: 20%" @click="resetForm">重置</a-button>
      <a-button style="margin-left: 20%" @click="change_Hidden">返回</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
//message全局提示
import { message } from 'ant-design-vue'
import { ref, reactive, inject } from 'vue'

import { checkPhone as phone, checkAge } from '@/tool/regular'
export default {
  name: 'Delect form',

  setup() {
    const formRef = ref()
    const formState = reactive({
      user: ''
    })

    const change_Hidden = inject('Delect')

    let validateUser = async (rule, value) => {
      if (value === '') {
        return Promise.reject('请输入学号')
      } else {
        return Promise.resolve()
      }
    }

    const rules = {
      user: [
        {
          required: true,
          validator: validateUser,
          trigger: 'change'
        }
      ]
    }

    const layout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 14
      }
    }

    //提交表单且数据验证成功后回调事件
    const handleFinish = (values) => {
      let payload = JSON.stringify({
        user: values.user
      })
      fetch(`${process.env.VUE_APP_DATA_URL}/delectSchool`, {
        method: 'POST',
        body: payload,
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          switch (data.code) {
            case 200:
              message.success(data.message)
              message.success('刷新重试')
              break
            case 400:
              message.error(data.message)
              break
            case 403:
              message.error(data.message)
              break
          }
        })
        .catch((e) => message.error(e))
    }

    //提交表单且数据验证失败后回调事件
    const handleFinishFailed = (errors) => {
      console.log(errors)
    }

    const resetForm = () => {
      formRef.value.resetFields()
    }

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      change_Hidden
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  box-shadow: 0px 0px 37px 6px #69ff6f;
  background-color: aliceblue;
  height: 120%;
  padding-top: 40px;
}
</style>
