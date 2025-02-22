import type { Schema, Struct } from '@strapi/strapi';

export interface AllTags extends Struct.ComponentSchema {
  collectionName: 'components_all_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['USD', 'KZT', 'EUR', 'RUB', 'CNY', 'TRY', 'AED']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'all.tags': AllTags;
    }
  }
}
