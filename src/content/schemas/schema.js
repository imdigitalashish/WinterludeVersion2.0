import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import event from './event'
import sponsors from './sponsors'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    event,
    post,
    sponsors,
    author,
    category,
    blockContent,
  ]),
})
