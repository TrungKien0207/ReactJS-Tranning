import { Box, Chip, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import categoryAPI from '../../../../api/categoryAPI'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',

      padding: 0,
      margin: theme.spacing(2, 0),
      listStyleType: 'none',

      '& > li': {
         margin: 0,
         padding: theme.spacing(1),
      },
   },
}))

FilterViewer.propTypes = {
   filters: PropTypes.object,
   onChange: PropTypes.func,
}

function FilterViewer({ filters = {}, onChange = null }) {
   const classes = useStyles()

   const [categoryList, setCategoryList] = useState([])

   useEffect(() => {
      ;(async () => {
         try {
            const list = await categoryAPI.getAll()
            setCategoryList(
               list?.map((x) => ({
                  id: x.id,
                  name: x.name,
               }))
            )
         } catch (error) {
            console.log('Failed to fetch category list: ', error)
         }
      })()
   }, [])

   const FILTER_LIST = [
      {
         id: 1,
         getLabel: () => 'Giao hàng miễn phí',
         isActive: (filters) => filters.isFreeShip,
         isVisible: () => true,
         isRemovable: false,
         onRemove: () => {},
         onToggle: (filters) => {
            const newFilters = { ...filters }

            if (newFilters.isFreeShip) {
               delete newFilters.isFreeShip
            } else {
               newFilters.isFreeShip = true
            }

            return newFilters
         },
      },
      {
         id: 2,
         getLabel: () => 'Có khuyến mãi',
         isActive: () => true,
         isVisible: (filters) => filters.isPromotion,
         isRemovable: true,
         onRemove: (filters) => {
            const newFilters = { ...filters }

            delete newFilters.isPromotion
            return newFilters
         },
         onToggle: () => {},
      },
      {
         id: 3,
         getLabel: (filters) =>
            `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
         isActive: () => true,
         isVisible: (filters) =>
            Number(filters.salePrice_lte) !== null &&
            Number(filters.salePrice_gte) !== null &&
            Number(filters.salePrice_lte) > 0 &&
            Number(filters.salePrice_gte) > 0 &&
            Object.keys(filters).includes('salePrice_lte') &&
            Object.keys(filters).includes('salePrice_gte'),
         isRemovable: true,
         onRemove: (filters) => {
            const newFilters = { ...filters }

            delete newFilters.salePrice_lte
            delete newFilters.salePrice_gte
            return newFilters
         },
         onToggle: () => {},
      },
      {
         id: 4,
         getLabel: (filters) =>
            categoryList?.map(
               (x) => x.id === Number.parseInt(filters?.category) && `${x.name}`
            ),
         isActive: () => true,
         isVisible: (filters) => Object.keys(filters).includes('category'),
         isRemovable: true,
         onRemove: (filters) => {
            const newFilters = { ...filters }

            delete newFilters.category
            return newFilters
         },
         onToggle: () => {},
      },
   ]

   const visibleFilter = useMemo(() => {
      return FILTER_LIST.filter((x) => x.isVisible(filters))
   }, [filters])

   return (
      <Box component='ul' className={classes.root}>
         {visibleFilter.map((x) => (
            <li key={x.id}>
               <Chip
                  label={x.getLabel(filters)}
                  color={x.isActive(filters) ? 'primary' : 'default'}
                  clickable={!x.isRemovable}
                  onClick={
                     x.Removable
                        ? null
                        : () => {
                             if (!onChange) return

                             const newFilters = x.onToggle(filters)
                             onChange(newFilters)
                          }
                  }
                  onDelete={
                     x.isRemovable
                        ? () => {
                             if (!onChange) return

                             const newFilters = x.onRemove(filters)
                             onChange(newFilters)
                          }
                        : null
                  }
               />
            </li>
         ))}
      </Box>
   )
}

export default FilterViewer
