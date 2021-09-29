import { CreateSchemaCustomizationArgs } from "gatsby";

const createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  const typeDefs = `
    type SitePageContext implements Node {
      data: JSON
    }

    type StrapiAgeGroup implements Node {
      main_image: StrapiImage
      logo: StrapiImage
    }

    type StrapiActivityGroup implements Node {
      main_image: StrapiImage
      logo: StrapiImage
    }

    type StrapiActivity implements Node {
      images: [StrapiImage]
      logo: StrapiImage
    }

    type StrapiImage @dontInfer {
      id: Int
      name: String
      alternativeText: String
      caption: String
      width: Int
      height: Int
      formats: StrapiImageFormats
      hash: String
      ext: String
      mime: String
      size: Float
      url: String
      provider: String
      created_at(formatString: String, fromNow: Boolean, difference: String, locale: String): Date
      updated_at(formatString: String, fromNow: Boolean, difference: String, locale: String): Date
      localFile: File
    }

    type StrapiImageFormats @dontInfer {
      large: StrapiImageFormat
      small: StrapiImageFormat
      medium: StrapiImageFormat
      thumbnail: StrapiImageFormat
    }

    type StrapiImageFormat @dontInfer {
      ext: String
      url: String
      hash: String
      mime: String
      name: String
      size: Float
      width: Int
      height: Int
    }
  `;

  createTypes(typeDefs);
}

export default createSchemaCustomization;