<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="formRef"
        @finish="handleFinish"
        :model="account_form"
        :rules="rules_form"
        validateTrigger
      >
        <a-form-item
          :wrapper-col="{ span: 22, offset: 1 }"
          label="手机号"
          name="username"
        >
          <a-input placeholder="手机号" v-model:value="account_form.username" />
        </a-form-item>

        <a-form-item
          :wrapper-col="{ span: 22, offset: 1 }"
          label="密码"
          name="password"
        >
          <a-input-password
            type="password"
            placeholder="密码"
            v-model:value="account_form.password"
          />
        </a-form-item>

        <a-form-item
          :wrapper-col="{ span: 22, offset: 1 }"
          label="确认密码"
          name="passwords"
        >
          <a-input-password
            type="password"
            placeholder="确认密码"
            v-model:value="account_form.passwords"
          />
        </a-form-item>

        <!-- <a-form-item
          label="验证码"
          :wrapper-col="{ span: 22, offset: 1 }"
          name="code"
        >
          <a-row :gutter="{ xs: 4, sm: 5, md: 5 }"> -->
        <!--响应式间隔-->
        <!-- <a-col :span="10">
              <a-input type="password" v-model:value="account_form.code">
              </a-input>
            </a-col>

            <a-col :span="14">
              <a-button
                type="primary"
                block
                :loading="iconLoading"
                @click="enterIconLoading"
                :disabled="button_disabled"
              >
                {{ button_text }}
              </a-button>
            </a-col>
          </a-row>
        </a-form-item> -->

        <a-form-item :wrapperCol="{ span: 5, offset: 9 }">
          <a-button type="primary" html-type="submit" class="fontsize12"
            >注册</a-button
          >
        </a-form-item>
      </a-form>
      <div class="text-align">
        <router-link to="/forget" class="fontsize12">忘记密码 </router-link>
        <router-link to="/" class="fontsize12">登录 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//message全局提示
import { message } from 'ant-design-vue'
import { reactive, toRefs, ref } from 'vue'
//手机号
//import * as check from '@/tool/regular'
//check.checkPhone()
import { checkPhone as phone, checkPassword, checkCode } from '@/tool/regular'

//路由
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Register',
  components: {},
  setup() {
    //用户名校验
    const account_formUsername = async (_rule, value, _callback) => {
      if (!value) {
        formconfig.button_disabled = true
        return Promise.reject('请输入手机号')
      } else if (!phone(value)) {
        formconfig.button_disabled = true
        return Promise.reject('请输入11位正确手机号')
      } else {
        formconfig.button_disabled = false
        return Promise.resolve()
      }
    }

    //密码校验
    const account_formPassword1 = async (_rule, value, _callback) => {
      if (value === '') {
        return Promise.reject('请输入密码')
      } else if (!checkPassword(value)) {
        return Promise.reject('密码以字母开头,长度为6-18')
      } else if (formconfig.account_form.passwords !== '') {
        //触发表单验证
        formRef.value.validateField('passwords')
      } else {
        return Promise.resolve()
      }
    }

    //确认密码校验
    const account_formPassword2 = async (_rule, value, _callback) => {
      if (value === '') {
        return Promise.reject('请重新输入密码')
      } else if (value !== formconfig.account_form.password) {
        return Promise.reject('两个输入不匹配！')
      } else {
        return Promise.resolve()
      }
    }

    //验证码校验
    const account_formCode = async (_rule, value, _callback) => {
      if (value === '') {
        return Promise.reject('请输入验证码')
      } else if (!checkCode(value)) {
        return Promise.reject('请输入6位验证码！')
      } else {
        return Promise.resolve()
      }
    }

    const formRef = ref()

    //验证码加载
    const enterIconLoading = () => {
      //倒计时开始时间
      formconfig.button_time = 5

      //计时器存在则清除再执行
      //存在则执行后面函数，不存在返回前面的结果
      formconfig.button_timer && clearInterval(formconfig.button_timer)

      //倒计时
      formconfig.button_timer = setInterval(() => {
        //按钮加载状态(防止重复单击)
        formconfig.iconLoading = true

        //倒计时文本
        formconfig.button_text = formconfig.button_time--

        if (formconfig.button_text <= 0) {
          //按钮文本
          formconfig.button_text = '重新获取'
          //按钮加载状态
          formconfig.iconLoading = false
          clearInterval(formconfig.button_timer)
        }
      }, 1000)
    }
    const formconfig = reactive({
      //表单数据
      account_form: {
        username: '',
        password: '',
        passwords: '',
        code: ''
      },
      //表单验证规则
      rules_form: {
        //手机号验证
        username: [
          {
            validator: account_formUsername,
            trigger: 'change',
            required: true
          }
        ],
        //密码验证
        password: [
          {
            validator: account_formPassword1,
            trigger: 'change',
            required: true
          }
        ],
        passwords: [
          {
            validator: account_formPassword2,
            trigger: 'change',
            required: true
          }
        ]
        //验证码验证
        // code: [
        //   {
        //     validator: account_formCode,
        //     trigger: 'change',
        //     required: true
        //   }
        // ]
      },
      //验证码
      button_text: '获取验证码',
      //按钮加载状态
      iconLoading: false,
      //按钮加载文本
      button_time: 5,
      //倒计时
      button_timer: null,
      //按钮可用状态
      button_disabled: true
      //
    })
    const route = useRoute()
    const router = useRouter()

    //提交表单且数据验证成功后回调事件
    const handleFinish = () => {
      let payload = JSON.stringify({
        user: formconfig.account_form.username,
        password: formconfig.account_form.password
      })
      fetch(`${process.env.VUE_APP_DATA_URL}/user`, {
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
          if (data.code === 200) {
            message.success(data.message)
            router.push('/') //跳转
          } else {
            message.error(data.message)
          }
        })
        .catch((e) => message.error(e))
      return false
    }

    //toRefs可以结构prop
    //对象类型转为普通类型
    const data = toRefs(formconfig)
    return {
      formconfig,
      ...data,
      handleFinish,
      formRef,
      enterIconLoading
    }
  }
}
</script>
<style lang="scss">
//scoped局部样式应用
//div 设置样式 然后里面嵌套样式
//防止全局污染
@import './style.scss';
</style>
