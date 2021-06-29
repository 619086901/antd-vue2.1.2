<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="formRef"
        @submit="onSubmit"
        :model="account_form"
        :rules="rules_form"
        validateTrigger
      >
        <a-form-item
          :wrapper-col="{ span: 22, offset: 1 }"
          label="手机号"
          name="username"
        >
          <a-input
            autocomplete="off"
            placeholder="手机号"
            v-model:value="account_form.username"
            :disabled="account_disabled"
          />
        </a-form-item>
        <a-form-item
          :wrapper-col="{ span: 22, offset: 1 }"
          label="密码"
          name="password"
        >
          <a-input-password
            type="password"
            autocomplete="off"
            placeholder="密码"
            v-model:value="account_form.password"
          />
        </a-form-item>
        <!-- <a-form-item>
          <Verification />
        </a-form-item> -->
        <a-form-item :wrapperCol="{ span: 5, offset: 9 }">
          <a-button type="primary" html-type="submit" class="fontsize12">
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-align">
        <router-link to="/forget" class="fontsize12">忘记密码 </router-link>
        <router-link to="/register" class="fontsize12">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//message全局提示
import { message } from 'ant-design-vue'
import { reactive, toRefs, watch, getCurrentInstance } from 'vue'
//局部组件(导入) 之后注册 名称随意
// import Verification from '@/components/Intelligent verification'
//手机号
//import * as check from '@/tool/regular'
//check.checkPhone()
//正则表达式
import { checkPhone as phone, checkPassword } from '@/tool/regular'
//fetchjson
//export default的话不需要花括号引入
import { getJSON } from '@/ajax/fetchjson'
//路由
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'Login',
  components: {
    //智能验证
    //Verification
  },
  // props: {
  //   title: String
  // },
  setup() {
    //用户名校验
    const account_formUsername = async (_rule, value, _callback) => {
      if (!value) {
        return Promise.reject('请输入手机号')
      } else if (!phone(value)) {
        return Promise.reject('请输入11位正确手机号')
      } else {
        checkUsername()
        return Promise.resolve()
      }
    }

    //密码校验
    const account_formPassword1 = async (_rule, value, _callback) => {
      if (value === '') {
        return Promise.reject('请输入密码')
      } else if (!checkPassword(value)) {
        return Promise.reject('密码以字母开头,长度为6-18')
      } else {
        return Promise.resolve()
      }
    }

    //reactive响应式副本3.0
    const formconfig = reactive({
      //表单数据
      account_form: {
        username: '',
        password: ''
      },
      //手机号是否禁用状态
      account_disabled: false,
      rules_form: {
        //手机号验证
        username: [
          {
            validator: account_formUsername,
            trigger: 'change',
            required: true,
            max: 11
          }
        ],
        //密码验证
        password: [
          {
            validator: account_formPassword1,
            trigger: 'change',
            required: true
          }
        ]
      }
    })

    //检查用户名是否存在
    const checkUsername = () => {
      //文本框禁用
      formconfig.account_disabled = true
      getJSON(
        'https://cdn.jsdelivr.net/gh/619086901/619086901.github.io/json/json.json'
      )
        .then((data) => {
          formconfig.account_disabled = false
          for (let [key, value] of data.entries()) {
            if (formconfig.account_form.username === value.username) {
              message.success('手机号可用')
              break
            } else if (data.length === key + 1) {
              message.error('手机号不存在')
            }
          }
        })
        .catch(() => (formconfig.account_disabled = false))
    }

    // const { options } = useRouter()
    // const routers = options.routes
    const route = useRoute()
    const router = useRouter()
    // console.log(router)
    // console.log(route)

    const onSubmit = () => {
      getJSON(
        'https://cdn.jsdelivr.net/gh/619086901/619086901.github.io/json/json.json'
      )
        .then((data) => {
          for (let [key, value] of data.entries()) {
            //迭代
            if (
              formconfig.account_form.username === value.username &&
              formconfig.account_form.password === value.password
            ) {
              //验证手机号和密码
              message.success('登录成功')
              sessionStorage.setItem('token', key)
              localStorage.setItem('selectedKeys', '/index')
              router.push('/shouye') //跳转
              break
            } else if (data.length === key + 1) {
              //前面都错了，并且是最后一组密码，则输出登录失败
              console.log(Verification)
              message.error('登录失败')
            }
          }
        })
        .catch((error) => console.log(error))
    }
    const { appContext } = getCurrentInstance()
    const globalProperties = appContext.config.globalProperties
    // console.log(getCurrentInstance())
    // console.log(globalProperties)

    //toRefs可以结构prop
    //对象类型转为普通类型
    const data = toRefs(formconfig)
    console.log('当前环境变量', process.env.NODE_ENV)
    console.log('当前环境路径publicPath：' + process.env.BASE_URL)
    console.log('--------', process.env.VUE_APP_DATA)

    return {
      formconfig,
      ...data,
      onSubmit,
      route,
      router
    }
  },

  watch: {
    $route() {
      //hash模式下不跳转
      // let currentPath = window.location.hash.slice(1) //获取输入地址
      // if (this.$route.path !== currentPath) {
      //   this.$router.push(currentPath) // 主动更改路由界面
      // }
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
