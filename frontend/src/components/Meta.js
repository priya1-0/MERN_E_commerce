import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to ShopOn',
  description: 'Your one stop destination for all your shopping needs',
  keywords: 'clothes,jewellery,dresses, cheap dresses, good dresses, party wear, gold, silver ',
}

export default Meta
