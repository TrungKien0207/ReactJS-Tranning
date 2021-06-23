import axiosClient from './axiosClient'

const productAPI = {
   async getAll(params) {
      const newParams = { ...params }
      newParams._start =
         !params._page || params._page <= 1
            ? 0
            : (params._page - 1) * (params._limit || 50)

      delete newParams._page

      const productList = await axiosClient.get('/products', {
         params: newParams,
      })
      const count = await axiosClient.get('/products/count', {
         params: newParams,
      })

      return {
         data: productList,
         pagination: {
            page: params._page,
            limit: params._limit,
            count: count,
         },
      }
   },

   get(id) {
      const url = `/products/${id}`
      return axiosClient.get(url)
   },

   add(data) {
      const url = '/products'
      return axiosClient.post(url, data)
   },

   update(data) {
      const url = `/products/${data.id}`
      return axiosClient.patch(url, data)
   },

   remove(id) {
      const url = `/products/${id}`
      return axiosClient.delete(url)
   },
}

export default productAPI
