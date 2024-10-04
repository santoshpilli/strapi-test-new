import type { Struct, Schema } from '@strapi/strapi';

export interface Sections2WhyOptSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_why_opt_sections';
  info: {
    displayName: 'whyOptSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface Sections2ThreeimgSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_threeimg_sections';
  info: {
    displayName: 'threeimgSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
  };
}

export interface Sections2SliderSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_slider_sections';
  info: {
    displayName: 'sliderSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'components.slider-data', true>;
  };
}

export interface Sections2RoundImgSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_round_img_sections';
  info: {
    displayName: 'RoundImgSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
  };
}

export interface Sections2RightImgleftTextSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections2_right_imgleft_text_sections';
  info: {
    displayName: 'rightImgleftTextSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    items: Schema.Attribute.Component<'components.items', true>;
  };
}

export interface Sections2LeftimgRighttextSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections2_leftimg_righttext_sections';
  info: {
    displayName: 'leftimgRighttextSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'components.items', true>;
  };
}

export interface Sections2HeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface Sections2FourCardSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_four_card_sections';
  info: {
    displayName: 'fourCardSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
  };
}

export interface Sections2FeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_features_sections';
  info: {
    displayName: 'FeaturesSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
  };
}

export interface Sections2FeatureSectionRightText
  extends Struct.ComponentSchema {
  collectionName: 'components_sections2_feature_section_right_texts';
  info: {
    displayName: 'FeatureSectionRightText';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
  };
}

export interface Sections2FaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_faq_sections';
  info: {
    displayName: 'FaqSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.faq-items', true>;
  };
}

export interface Sections2DescriptionSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_description_sections';
  info: {
    displayName: 'DescriptionSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
  };
}

export interface Sections2ContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_contact_sections';
  info: {
    displayName: 'ContactSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    note: Schema.Attribute.Text;
    Link: Schema.Attribute.String;
    input: Schema.Attribute.Component<'components.inputfield', true>;
    button: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface Sections2CardMergeSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_card_merge_sections';
  info: {
    displayName: 'cardMergeSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.merge-cards', true>;
  };
}

export interface Sections2CardImgSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_card_img_sections';
  info: {
    displayName: 'CardImgSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.excellence-items', true>;
  };
}

export interface Sections2BgColorImageSection extends Struct.ComponentSchema {
  collectionName: 'components_sections2_bg_color_image_sections';
  info: {
    displayName: 'BgColorImageSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'components.items', true>;
  };
}

export interface SectionsTitle extends Struct.ComponentSchema {
  collectionName: 'components_sections_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.Component<'components.heading', false>;
    description: Schema.Attribute.Component<'components.description', false>;
  };
}

export interface SectionsPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_sections';
  info: {
    displayName: 'PricingSection';
  };
  attributes: {
    titles: Schema.Attribute.Component<'components.pricing', true>;
    buttoncta: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface SectionsPlatform extends Struct.ComponentSchema {
  collectionName: 'components_components_platform_sections';
  info: {
    displayName: 'PlatformSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'components.platform-items', true>;
  };
}

export interface SectionsOperationalSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_operational_sections';
  info: {
    displayName: 'OperationalSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'components.operational-iems', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_herosections';
  info: {
    displayName: 'HeroSection';
    description: 'A component for the hero section with title, description, background image, search bar, and button.';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    searchBarPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search...'>;
    buttoncta: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface SectionsElevateSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_elevate_sections';
  info: {
    displayName: 'ElevateSections';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'components.elevate-items', true>;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'ContactSection';
  };
  attributes: {
    contact: Schema.Attribute.Component<'components.contact', false>;
    buttoncta: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface SectionsAdaptingSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_adapting_sections';
  info: {
    displayName: 'AdaptingSections';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'components.operational-iems', true>;
  };
}

export interface ComponentsSliderData extends Struct.ComponentSchema {
  collectionName: 'components_components_slider_data';
  info: {
    displayName: 'SliderData';
  };
  attributes: {
    heading: Schema.Attribute.String;
    leftIconImage: Schema.Attribute.Media<'images'>;
    leftIconClasses: Schema.Attribute.Text;
    rightIconClasses: Schema.Attribute.Text;
    rightIcon: Schema.Attribute.Media<'images'>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentsPricing extends Struct.ComponentSchema {
  collectionName: 'components_components_pricings';
  info: {
    displayName: 'pricing';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface ComponentsPlatformSection extends Struct.ComponentSchema {
  collectionName: 'components_components_platform';
  info: {
    displayName: 'Platform';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
  };
}

export interface ComponentsPlatformItems extends Struct.ComponentSchema {
  collectionName: 'components_components_platform_items';
  info: {
    displayName: 'PlatformItems';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
  };
}

export interface ComponentsOperationalIems extends Struct.ComponentSchema {
  collectionName: 'components_components_operational_iems';
  info: {
    displayName: 'operationalIems';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    Description: Schema.Attribute.String;
  };
}

export interface ComponentsMergeCards extends Struct.ComponentSchema {
  collectionName: 'components_components_merge_cards';
  info: {
    displayName: 'mergeCards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    imageIcon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsItems extends Struct.ComponentSchema {
  collectionName: 'components_components_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ComponentsInputfield extends Struct.ComponentSchema {
  collectionName: 'components_components_inputfields';
  info: {
    displayName: 'inputfield';
    description: '';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsHerosection extends Struct.ComponentSchema {
  collectionName: 'components_components_hero';
  info: {
    displayName: 'Hero';
    description: 'A component for the hero section with title, description, background image, search bar, and button.';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    searchBarPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Search...'>;
    buttoncta: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface ComponentsHeading extends Struct.ComponentSchema {
  collectionName: 'components_components_heading_s';
  info: {
    displayName: 'heading ';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    style: Schema.Attribute.JSON;
  };
}

export interface ComponentsFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_items';
  info: {
    displayName: 'faqItems';
  };
  attributes: {
    questions: Schema.Attribute.Text;
    answer: Schema.Attribute.Text;
  };
}

export interface ComponentsExcellenceItems extends Struct.ComponentSchema {
  collectionName: 'components_components_excellence_items';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsElevateItems extends Struct.ComponentSchema {
  collectionName: 'components_components_elevate_items';
  info: {
    displayName: 'ElevateItems';
  };
  attributes: {
    title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    buttoncta: Schema.Attribute.Component<'components.button-cta', false>;
  };
}

export interface ComponentsDescription extends Struct.ComponentSchema {
  collectionName: 'components_components_descriptions';
  info: {
    displayName: 'description';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text;
    style: Schema.Attribute.JSON;
  };
}

export interface ComponentsContact extends Struct.ComponentSchema {
  collectionName: 'components_components_contacts';
  info: {
    displayName: 'Contact';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    note: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ComponentsButtonCta extends Struct.ComponentSchema {
  collectionName: 'components_components_button_ctas';
  info: {
    displayName: 'buttonCta';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections2.why-opt-section': Sections2WhyOptSection;
      'sections2.threeimg-section': Sections2ThreeimgSection;
      'sections2.slider-section': Sections2SliderSection;
      'sections2.round-img-section': Sections2RoundImgSection;
      'sections2.right-imgleft-text-section': Sections2RightImgleftTextSection;
      'sections2.leftimg-righttext-section': Sections2LeftimgRighttextSection;
      'sections2.hero-section': Sections2HeroSection;
      'sections2.four-card-section': Sections2FourCardSection;
      'sections2.features-section': Sections2FeaturesSection;
      'sections2.feature-section-right-text': Sections2FeatureSectionRightText;
      'sections2.faq-section': Sections2FaqSection;
      'sections2.description-section': Sections2DescriptionSection;
      'sections2.contact-section': Sections2ContactSection;
      'sections2.card-merge-section': Sections2CardMergeSection;
      'sections2.card-img-section': Sections2CardImgSection;
      'sections2.bg-color-image-section': Sections2BgColorImageSection;
      'sections.title': SectionsTitle;
      'sections.pricing-section': SectionsPricingSection;
      'sections.platform': SectionsPlatform;
      'sections.operational-section': SectionsOperationalSection;
      'sections.hero': SectionsHero;
      'sections.elevate-sections': SectionsElevateSections;
      'sections.contact-section': SectionsContactSection;
      'sections.adapting-sections': SectionsAdaptingSections;
      'components.slider-data': ComponentsSliderData;
      'components.pricing': ComponentsPricing;
      'components.platform-section': ComponentsPlatformSection;
      'components.platform-items': ComponentsPlatformItems;
      'components.operational-iems': ComponentsOperationalIems;
      'components.merge-cards': ComponentsMergeCards;
      'components.items': ComponentsItems;
      'components.inputfield': ComponentsInputfield;
      'components.herosection': ComponentsHerosection;
      'components.heading': ComponentsHeading;
      'components.faq-items': ComponentsFaqItems;
      'components.excellence-items': ComponentsExcellenceItems;
      'components.elevate-items': ComponentsElevateItems;
      'components.description': ComponentsDescription;
      'components.contact': ComponentsContact;
      'components.button-cta': ComponentsButtonCta;
    }
  }
}
