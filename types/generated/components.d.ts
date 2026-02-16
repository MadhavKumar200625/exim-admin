import type { Schema, Struct } from '@strapi/strapi';

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
  };
}

export interface CommonButtonWithImage extends Struct.ComponentSchema {
  collectionName: 'components_common_button_with_images';
  info: {
    displayName: 'button_with_image';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    image_url: Schema.Attribute.String;
  };
}

export interface CommonContinentBox extends Struct.ComponentSchema {
  collectionName: 'components_common_continent_boxes';
  info: {
    displayName: 'continent_box';
  };
  attributes: {
    button_with_image: Schema.Attribute.Component<
      'common.button-with-image',
      true
    >;
    Continent_name: Schema.Attribute.String;
  };
}

export interface CommonCountryImextable extends Struct.ComponentSchema {
  collectionName: 'components_common_country_imextables';
  info: {
    displayName: 'country_imextable';
  };
  attributes: {};
}

export interface CommonFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_sections';
  info: {
    displayName: 'faq_section';
  };
  attributes: {
    answer_text: Schema.Attribute.Text;
    question_text: Schema.Attribute.Text;
  };
}

export interface CommonImage extends Struct.ComponentSchema {
  collectionName: 'components_common_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image_text: Schema.Attribute.String;
    image_url: Schema.Attribute.String;
  };
}

export interface CommonImpExpDynamicFig extends Struct.ComponentSchema {
  collectionName: 'components_common_imp_exp_dynamic_figs';
  info: {
    displayName: 'imp_exp_dynamic_fig';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    imp_exp_dynamic_fig: Schema.Attribute.Integer;
    Title: Schema.Attribute.String;
  };
}

export interface CommonMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_common_meta_tags';
  info: {
    displayName: 'meta_tags';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.Text;
    meta_title: Schema.Attribute.Text;
  };
}

export interface CommonTableRow extends Struct.ComponentSchema {
  collectionName: 'components_common_table_rows';
  info: {
    displayName: 'table_row';
  };
  attributes: {
    label_1_text: Schema.Attribute.String;
    label_2__text: Schema.Attribute.String;
  };
}

export interface CommonTableWithValues extends Struct.ComponentSchema {
  collectionName: 'components_common_table_with_values';
  info: {
    displayName: 'table_with_values';
  };
  attributes: {
    label_1: Schema.Attribute.String;
    label_2: Schema.Attribute.String;
    table_row: Schema.Attribute.Component<'common.table-row', true>;
    Tittle: Schema.Attribute.String;
  };
}

export interface CommonTradeTab extends Struct.ComponentSchema {
  collectionName: 'components_common_trade_tabs';
  info: {
    displayName: 'trade_tab';
  };
  attributes: {
    tab_type: Schema.Attribute.String;
    table_with_values: Schema.Attribute.Component<
      'common.table-with-values',
      true
    >;
  };
}

export interface CountryCommonPageCountryCommonPage
  extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_country_common_pages';
  info: {
    displayName: 'section-1';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'common.image', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryCommonPageMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_meta_tags';
  info: {
    displayName: 'meta_tags';
  };
  attributes: {
    meta_tags: Schema.Attribute.Component<'common.meta-tags', true>;
  };
}

export interface CountryCommonPageSection2 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_2s';
  info: {
    displayName: 'section-2';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Continent_name: Schema.Attribute.Component<'common.continent-box', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryCommonPageSection3 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_3s';
  info: {
    displayName: 'section-3';
  };
  attributes: {
    imp_exp_dynamic_fig: Schema.Attribute.Component<
      'common.imp-exp-dynamic-fig',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface CountryCommonPageSection4 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_4s';
  info: {
    displayName: 'section-4';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    Heading_1: Schema.Attribute.String;
  };
}

export interface CountryCommonPageSection5 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_5s';
  info: {
    displayName: 'section-5';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    trade_tabs: Schema.Attribute.Component<'common.trade-tab', true>;
  };
}

export interface CountryCommonPageSection6 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_6s';
  info: {
    displayName: 'section-6';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CountryCommonPageSection7 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_7s';
  info: {
    displayName: 'section-7';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryCommonPageSection8 extends Struct.ComponentSchema {
  collectionName: 'components_country_common_page_section_8s';
  info: {
    displayName: 'section-8';
  };
  attributes: {
    faq_section: Schema.Attribute.Component<'common.faq-section', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_meta_tags';
  info: {
    displayName: 'meta-tags';
  };
  attributes: {
    meta_tags: Schema.Attribute.Component<
      'country-import-page.meta-tags',
      false
    >;
  };
}

export interface CountryExportPageSection1 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_1s';
  info: {
    displayName: 'section-1';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection10 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_10s';
  info: {
    displayName: 'section-10';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection11 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_11s';
  info: {
    displayName: 'section-11';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection2 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_2s';
  info: {
    displayName: 'section-2';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Continent_name: Schema.Attribute.Component<'common.continent-box', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection3 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_3s';
  info: {
    displayName: 'section-3';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    table: Schema.Attribute.Component<'common.table-with-values', false>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection4 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_4s';
  info: {
    displayName: 'section-4';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection6 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_6s';
  info: {
    displayName: 'section-5';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection7 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_7s';
  info: {
    displayName: 'section-7';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'common.image', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection8 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_8s';
  info: {
    displayName: 'section-8';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'common.image', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSection9 extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_9s';
  info: {
    displayName: 'section-9';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryExportPageSectionSix extends Struct.ComponentSchema {
  collectionName: 'components_country_export_page_section_sixes';
  info: {
    displayName: 'section_six';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    seller_1: Schema.Attribute.Text;
    seller_2: Schema.Attribute.Text;
    seller_3: Schema.Attribute.Text;
    seller_4: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_meta_tags';
  info: {
    displayName: 'meta-tags';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection1 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_1s';
  info: {
    displayName: 'section-1';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection10 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_10s';
  info: {
    displayName: 'section-10';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection11 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_11s';
  info: {
    displayName: 'section-11';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection2 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_2s';
  info: {
    displayName: 'section-2';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Continent_1: Schema.Attribute.Component<'common.continent-box', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection3 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_3s';
  info: {
    displayName: 'section-3';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    table: Schema.Attribute.Component<'common.table-with-values', false>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection4 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_4s';
  info: {
    displayName: 'section-4';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    view_sample_data: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface CountryImportPageSection5 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_5s';
  info: {
    displayName: 'section-5';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection6 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_6s';
  info: {
    displayName: 'section-6';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    buyer_1: Schema.Attribute.String;
    buyer_2: Schema.Attribute.String;
    buyer_3: Schema.Attribute.String;
    buyer_4: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection7 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_7s';
  info: {
    displayName: 'section-7';
  };
  attributes: {
    Description: Schema.Attribute.String;
    image: Schema.Attribute.Component<'common.image', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection8 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_8s';
  info: {
    displayName: 'section-8';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'common.image', false>;
    Title: Schema.Attribute.String;
  };
}

export interface CountryImportPageSection9 extends Struct.ComponentSchema {
  collectionName: 'components_country_import_page_section_9s';
  info: {
    displayName: 'section-9';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.button': CommonButton;
      'common.button-with-image': CommonButtonWithImage;
      'common.continent-box': CommonContinentBox;
      'common.country-imextable': CommonCountryImextable;
      'common.faq-section': CommonFaqSection;
      'common.image': CommonImage;
      'common.imp-exp-dynamic-fig': CommonImpExpDynamicFig;
      'common.meta-tags': CommonMetaTags;
      'common.table-row': CommonTableRow;
      'common.table-with-values': CommonTableWithValues;
      'common.trade-tab': CommonTradeTab;
      'country-common-page.country-common-page': CountryCommonPageCountryCommonPage;
      'country-common-page.meta-tags': CountryCommonPageMetaTags;
      'country-common-page.section-2': CountryCommonPageSection2;
      'country-common-page.section-3': CountryCommonPageSection3;
      'country-common-page.section-4': CountryCommonPageSection4;
      'country-common-page.section-5': CountryCommonPageSection5;
      'country-common-page.section-6': CountryCommonPageSection6;
      'country-common-page.section-7': CountryCommonPageSection7;
      'country-common-page.section-8': CountryCommonPageSection8;
      'country-export-page.meta-tags': CountryExportPageMetaTags;
      'country-export-page.section-1': CountryExportPageSection1;
      'country-export-page.section-10': CountryExportPageSection10;
      'country-export-page.section-11': CountryExportPageSection11;
      'country-export-page.section-2': CountryExportPageSection2;
      'country-export-page.section-3': CountryExportPageSection3;
      'country-export-page.section-4': CountryExportPageSection4;
      'country-export-page.section-6': CountryExportPageSection6;
      'country-export-page.section-7': CountryExportPageSection7;
      'country-export-page.section-8': CountryExportPageSection8;
      'country-export-page.section-9': CountryExportPageSection9;
      'country-export-page.section-six': CountryExportPageSectionSix;
      'country-import-page.meta-tags': CountryImportPageMetaTags;
      'country-import-page.section-1': CountryImportPageSection1;
      'country-import-page.section-10': CountryImportPageSection10;
      'country-import-page.section-11': CountryImportPageSection11;
      'country-import-page.section-2': CountryImportPageSection2;
      'country-import-page.section-3': CountryImportPageSection3;
      'country-import-page.section-4': CountryImportPageSection4;
      'country-import-page.section-5': CountryImportPageSection5;
      'country-import-page.section-6': CountryImportPageSection6;
      'country-import-page.section-7': CountryImportPageSection7;
      'country-import-page.section-8': CountryImportPageSection8;
      'country-import-page.section-9': CountryImportPageSection9;
    }
  }
}
