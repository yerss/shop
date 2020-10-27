<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card">
            <div class="card-header">
              <h5>Заказы</h5>
            </div>
            <div class="card-body">
              <div>
                <b-table :items="items" :fields="fields" responsive="sm" hover outlined bordered>
                  <template #cell(show_details)="row">
                    <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
                      Детали
                    </b-form-checkbox>
                  </template>

                  <template #row-details="row">
                    <b-card>
                      <b-table :fields="detail_fields" :items="row.item.products" bordered outlined hover small>
                      </b-table>

                      <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
                    </b-card>
                  </template>
                  <template v-slot:table-busy>
                    <div class="text-center text-danger my-2">
                      <b-spinner class="align-middle"></b-spinner>
                      <strong>Loading...</strong>
                    </div>
                  </template>
                </b-table>
                <b-pagination
                        v-model="currentPage"
                        :total-rows="pagination.total"
                        :per-page="pagination.per_page"
                        aria-controls="my-table"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import OrderForm from "./order-form";

export default {
  name: "order-table",
  components: {OrderForm},
  data() {
    return {
      currentPage: 1,
      isBusy: true,
      items: [],
      fields: [
        {
          key: "id",
          label: 'ID',
          sortable: true
        },
        {
          key: "user.email",
          label: 'Заказчик',
          sortable: true
        },
        {
          key: "address.address",
          label: 'Адрес доставки',
          sortable: true
        },
        {
          key: "status",
          label: 'Статус заказа',
          sortable: true
        },
        // {
        //     key: "actions",
        //     label: 'Действия',
        //     sortable: true
        // },
        {
          key: 'show_details'
        }
      ],
      detail_fields: [
        {
          key: "id",
          label: 'ID',
          sortable: true
        },
        {
          key: "alias",
          label: 'Наименование',
          sortable: true
        },
        {
          key: "pivot.pieces",
          label: 'Количество',
          sortable: true
        },
        {
          key: "pivot.price",
          label: 'Цена',
          sortable: true
        },
      ]
    }
  },
  watch: {
    orders(val) {
      this.items = val
      this.isBusy = false
    },
    currentPage(val){
      this.getOrders({
        page: val
      })
    }
  },
  created() {
    this.getOrders().finally(() => {
      this.items = this.orders
      this.isBusy = false
    })
  },
  computed: {
    ...mapGetters({
      orders: 'orders/orders',
      pagination: 'orders/pagination'
    })
  },
  methods: {
    ...mapActions({
      getOrders: 'orders/getOrders'
    })
  }
}
</script>

<style scoped>

</style>
