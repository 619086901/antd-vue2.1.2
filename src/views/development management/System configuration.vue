<template>
  <!--全选按钮-->
  <div style="margin-bottom: 16px">
    <a-button
      type="primary"
      :disabled="!hasSelected"
      :loading="loading"
      @click="start"
    >
      取消全选
    </a-button>
    <span style="margin-left: 8px">
      <template v-if="hasSelected">
        {{ `选中 ${selectedRowKeys.length} 项` }}
        <a-button
          type="primary"
          :disabled="!hasSelected"
          :loading="loading"
          @click="DeleteAll"
        >
          全部删除
        </a-button>
      </template>
    </span>
  </div>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    bordered
    :row-selection="{
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange
    }"
  >
    <!--筛选菜单-->
    <template
      #filterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
          "
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          搜索
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters)"
        >
          重置
        </a-button>
      </div>
    </template>
    <!--筛选图标-->
    <template #filterIcon="filtered">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template
      v-for="col in ['name', 'age', 'address', 'classification', 'remarks']"
      #[col]="{ text, record }"
      :key="col"
    >
      <div>
        <a-input
          v-if="editableData[record.key]"
          v-model:value="editableData[record.key][col]"
          style="margin: -5px 0"
        />
        <template v-else>
          <!--record:{ "key": "0", "name": "名称 0", "age": "0", "address": "参数值 0", "classification": "分类 0", "remarks": "备注 0" }-->
          {{ text }}
        </template>
      </div>
    </template>

    <!--操作区域-->
    <template #operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="editableData[record.key]">
          <a @click="save(record.key)">保存</a>
          <a-popconfirm title="确定要取消吗?" @confirm="cancel(record.key)">
            <a> 取消</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="edit(record.key)">编辑</a>
        </span>
        <a-popconfirm
          v-if="dataSource.length"
          title="确定要删除吗?"
          @confirm="onDelete(record.key)"
        >
          <a> 删除</a>
        </a-popconfirm>
      </div>
    </template>
  </a-table>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue'
import { cloneDeep } from 'lodash-es'
import { reactive, ref, toRefs, computed } from 'vue'

const data = []

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `名称 ${i}`,
    age: `${i}`,
    address: `参数值 ${i}`,
    classification: `分类 ${i}`,
    remarks: `备注 ${i}`
  })
}

export default {
  components: {
    SearchOutlined
  },
  setup() {
    const searchInput = ref() //筛选按钮

    const columns = [
      {
        title: '参数名称',
        dataIndex: 'name',
        width: '15%',
        slots: {
          customRender: 'name',
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon'
        },
        onFilter: (value, record) =>
          record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              console.log(searchInput.value)
              searchInput.value.focus()
            }, 0)
          }
        }
      },
      {
        title: '唯一编码',
        dataIndex: 'age',
        width: '20%',
        slots: {
          customRender: 'age',
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon'
        },
        sorter: (a, b) => a.age - b.age,
        onFilter: (value, record) =>
          record.age.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            })
          }
        }
      },
      {
        title: '参数值',
        dataIndex: 'address',
        width: '15%',
        slots: {
          customRender: 'address',
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon'
        },
        onFilter: (value, record) =>
          record.address.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            })
          }
        }
      },
      {
        title: '所属分类',
        dataIndex: 'classification',
        width: '15%',
        slots: {
          customRender: 'classification',
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon'
        },
        onFilter: (value, record) =>
          record.classification
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            })
          }
        }
      },
      {
        title: '备注',
        dataIndex: 'remarks',
        width: '15%',
        slots: {
          customRender: 'remarks',
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon'
        },
        onFilter: (value, record) =>
          record.remarks.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            })
          }
        }
      },
      {
        title: '操作',
        dataIndex: 'operation',
        slots: {
          customRender: 'operation'
        }
      }
    ]

    const dataSource = ref(data)
    const editableData = reactive({})

    const state = reactive({
      //取消全选state的data
      selectedRowKeys: [],
      // 选中此处可配置默认列
      loading: false,
      //筛选按钮
      searchText: '',
      searchedColumn: ''
    })
    const start = () => {
      state.loading = true // 完成后的ajax请求

      setTimeout(() => {
        state.loading = false
        state.selectedRowKeys = []
      }, 1000)
    }
    const onSelectChange = (selectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      state.selectedRowKeys = selectedRowKeys
    }
    //编辑
    const edit = (key) => {
      editableData[key] = cloneDeep(
        dataSource.value.filter((item) => key === item.key)[0]
      )
    }
    //保存
    const save = (key) => {
      Object.assign(
        dataSource.value.filter((item) => key === item.key)[0],
        editableData[key]
      )
      delete editableData[key]
    }
    //取消
    const cancel = (key) => {
      delete editableData[key]
    }

    //删除
    const onDelete = (key) => {
      dataSource.value = dataSource.value.filter((item) => item.key !== key)
      console.log(dataSource.value)
      console.log(key)
    }

    const hasSelected = computed(() => state.selectedRowKeys.length > 0)

    //全部删除
    const DeleteAll = () => {
      for (let key of state.selectedRowKeys) {
        dataSource.value = dataSource.value.filter((item) => item.key !== key)
      }
      state.loading = true // 完成后的ajax请求

      setTimeout(() => {
        state.loading = false
        state.selectedRowKeys = []
      }, 1000)
    }
    //筛选搜索
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm()
      state.searchText = selectedKeys[0]
      state.searchedColumn = dataIndex
    }

    //筛选重置
    const handleReset = (clearFilters) => {
      clearFilters()
      state.searchText = ''
    }

    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
      //删除
      onDelete,
      DeleteAll,
      //按钮
      hasSelected,
      start,
      onSelectChange,
      ...toRefs(state),

      handleSearch,
      handleReset,
      searchInput
    }
  }
}
</script>

<style lang="scss">
.ant-table-wrapper {
  min-width: 800px;
}
</style>
