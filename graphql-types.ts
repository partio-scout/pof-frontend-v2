export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  apiRoute: Scalars['String'];
  originalFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroup = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  minimum_age?: Maybe<Scalars['Int']>;
  maximum_age?: Maybe<Scalars['Int']>;
  wp_guid?: Maybe<Scalars['String']>;
  subactivitygroup_term?: Maybe<StrapiAgeGroupSubactivitygroup_Term>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  links?: Maybe<Array<Maybe<StrapiAgeGroupLinks>>>;
  main_image?: Maybe<StrapiAgeGroupMain_Image>;
  logo?: Maybe<StrapiAgeGroupLogo>;
  activity_groups?: Maybe<Array<Maybe<StrapiAgeGroupActivity_Groups>>>;
  localizations?: Maybe<Array<Maybe<StrapiAgeGroupLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiAgeGroupPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupSubactivitygroup_Term = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiAgeGroupSubactivitygroup_TermCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupSubactivitygroup_TermUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiAgeGroupMain_ImageFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiAgeGroupMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupMain_ImageFormats = {
  large?: Maybe<StrapiAgeGroupMain_ImageFormatsLarge>;
  small?: Maybe<StrapiAgeGroupMain_ImageFormatsSmall>;
  medium?: Maybe<StrapiAgeGroupMain_ImageFormatsMedium>;
  thumbnail?: Maybe<StrapiAgeGroupMain_ImageFormatsThumbnail>;
};

export type StrapiAgeGroupMain_ImageFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupMain_ImageFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupMain_ImageFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiAgeGroupLogoFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiAgeGroupLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupLogoFormats = {
  large?: Maybe<StrapiAgeGroupLogoFormatsLarge>;
  small?: Maybe<StrapiAgeGroupLogoFormatsSmall>;
  medium?: Maybe<StrapiAgeGroupLogoFormatsMedium>;
  thumbnail?: Maybe<StrapiAgeGroupLogoFormatsThumbnail>;
};

export type StrapiAgeGroupLogoFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupLogoFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupLogoFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupActivity_Groups = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  wp_guid?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  subactivity_term?: Maybe<Scalars['Int']>;
  subactivitygroup_term?: Maybe<Scalars['Int']>;
  activitygroup_term?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  age_group?: Maybe<Scalars['Int']>;
  main_image?: Maybe<StrapiAgeGroupActivity_GroupsMain_Image>;
  logo?: Maybe<StrapiAgeGroupActivity_GroupsLogo>;
};


export type StrapiAgeGroupActivity_GroupsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupActivity_GroupsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupActivity_GroupsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupActivity_GroupsMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiAgeGroupActivity_GroupsMain_ImageFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiAgeGroupActivity_GroupsMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupActivity_GroupsMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupActivity_GroupsMain_ImageFormats = {
  thumbnail?: Maybe<StrapiAgeGroupActivity_GroupsMain_ImageFormatsThumbnail>;
};

export type StrapiAgeGroupActivity_GroupsMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupActivity_GroupsLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiAgeGroupActivity_GroupsLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupActivity_GroupsLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormats = {
  thumbnail?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsThumbnail>;
  large?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsLarge>;
  small?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsSmall>;
  medium?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsMedium>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiAgeGroupLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
};


export type StrapiAgeGroupLocalizationsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivity = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  ingress?: Maybe<Scalars['String']>;
  wp_guid?: Maybe<Scalars['String']>;
  leader_tasks?: Maybe<Scalars['String']>;
  activity_term?: Maybe<StrapiActivityActivity_Term>;
  duration?: Maybe<StrapiActivityDuration>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  activity_group?: Maybe<StrapiActivityActivity_Group>;
  age_group?: Maybe<StrapiActivityAge_Group>;
  preparation_duration?: Maybe<StrapiActivityPreparation_Duration>;
  group_sizes?: Maybe<Array<Maybe<StrapiActivityGroup_Sizes>>>;
  skill_areas?: Maybe<Array<Maybe<StrapiActivitySkill_Areas>>>;
  educational_objectives?: Maybe<Array<Maybe<StrapiActivityEducational_Objectives>>>;
  leader_skills?: Maybe<Array<Maybe<StrapiActivityLeader_Skills>>>;
  suggestions?: Maybe<Array<Maybe<StrapiActivitySuggestions>>>;
  locations?: Maybe<Array<Maybe<StrapiActivityLocations>>>;
  localizations?: Maybe<Array<Maybe<StrapiActivityLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiActivityPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_Term = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityActivity_TermCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_TermUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityDuration = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityDurationCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityDurationUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_Group = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  wp_guid?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  subactivity_term?: Maybe<Scalars['Int']>;
  subactivitygroup_term?: Maybe<Scalars['Int']>;
  activitygroup_term?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  age_group?: Maybe<Scalars['Int']>;
  parent_activity_group?: Maybe<Scalars['Int']>;
  main_image?: Maybe<StrapiActivityActivity_GroupMain_Image>;
  logo?: Maybe<StrapiActivityActivity_GroupLogo>;
};


export type StrapiActivityActivity_GroupPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_GroupCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_GroupUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_GroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityActivity_GroupMain_ImageFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityActivity_GroupMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_GroupMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_GroupMain_ImageFormats = {
  thumbnail?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsThumbnail>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityActivity_GroupLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityActivity_GroupLogoFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityActivity_GroupLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_GroupLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_GroupLogoFormats = {
  thumbnail?: Maybe<StrapiActivityActivity_GroupLogoFormatsThumbnail>;
  small?: Maybe<StrapiActivityActivity_GroupLogoFormatsSmall>;
  large?: Maybe<StrapiActivityActivity_GroupLogoFormatsLarge>;
  medium?: Maybe<StrapiActivityActivity_GroupLogoFormatsMedium>;
};

export type StrapiActivityActivity_GroupLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityActivity_GroupLogoFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityActivity_GroupLogoFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityActivity_GroupLogoFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_Group = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  minimum_age?: Maybe<Scalars['Int']>;
  maximum_age?: Maybe<Scalars['Int']>;
  wp_guid?: Maybe<Scalars['String']>;
  subactivitygroup_term?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  links?: Maybe<Array<Maybe<StrapiActivityAge_GroupLinks>>>;
  main_image?: Maybe<StrapiActivityAge_GroupMain_Image>;
  logo?: Maybe<StrapiActivityAge_GroupLogo>;
};


export type StrapiActivityAge_GroupPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityAge_GroupCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityAge_GroupUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityAge_GroupMain_ImageFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityAge_GroupMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityAge_GroupMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupMain_ImageFormats = {
  large?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsLarge>;
  small?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsSmall>;
  medium?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsMedium>;
  thumbnail?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsThumbnail>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityAge_GroupLogoFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityAge_GroupLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityAge_GroupLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupLogoFormats = {
  large?: Maybe<StrapiActivityAge_GroupLogoFormatsLarge>;
  small?: Maybe<StrapiActivityAge_GroupLogoFormatsSmall>;
  medium?: Maybe<StrapiActivityAge_GroupLogoFormatsMedium>;
  thumbnail?: Maybe<StrapiActivityAge_GroupLogoFormatsThumbnail>;
};

export type StrapiActivityAge_GroupLogoFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupLogoFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupLogoFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityAge_GroupLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityPreparation_Duration = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityPreparation_DurationCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityPreparation_DurationUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroup_Sizes = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  icon?: Maybe<StrapiActivityGroup_SizesIcon>;
};


export type StrapiActivityGroup_SizesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroup_SizesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroup_SizesIcon = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityGroup_SizesIconCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroup_SizesIconUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivitySkill_Areas = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivitySkill_AreasCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivitySkill_AreasUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityEducational_Objectives = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityEducational_ObjectivesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityEducational_ObjectivesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityLeader_Skills = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityLeader_SkillsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityLeader_SkillsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivitySuggestions = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  activity?: Maybe<Scalars['Int']>;
  wp_guid?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  from_web?: Maybe<Scalars['Boolean']>;
  like_count?: Maybe<Scalars['Int']>;
};


export type StrapiActivitySuggestionsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivitySuggestionsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivitySuggestionsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityLocations = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityLocationsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityLocationsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityLocalizationsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  collectionTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  strapiAgeGroup?: Maybe<StrapiAgeGroup>;
  allStrapiAgeGroup: StrapiAgeGroupConnection;
  strapiActivity?: Maybe<StrapiActivity>;
  allStrapiActivity: StrapiActivityConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiAgeGroupArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  minimum_age?: Maybe<IntQueryOperatorInput>;
  maximum_age?: Maybe<IntQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  subactivitygroup_term?: Maybe<StrapiAgeGroupSubactivitygroup_TermFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  links?: Maybe<StrapiAgeGroupLinksFilterListInput>;
  main_image?: Maybe<StrapiAgeGroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiAgeGroupLogoFilterInput>;
  activity_groups?: Maybe<StrapiAgeGroupActivity_GroupsFilterListInput>;
  localizations?: Maybe<StrapiAgeGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiAgeGroupArgs = {
  filter?: Maybe<StrapiAgeGroupFilterInput>;
  sort?: Maybe<StrapiAgeGroupSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiActivityArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  leader_tasks?: Maybe<StringQueryOperatorInput>;
  activity_term?: Maybe<StrapiActivityActivity_TermFilterInput>;
  duration?: Maybe<StrapiActivityDurationFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  activity_group?: Maybe<StrapiActivityActivity_GroupFilterInput>;
  age_group?: Maybe<StrapiActivityAge_GroupFilterInput>;
  preparation_duration?: Maybe<StrapiActivityPreparation_DurationFilterInput>;
  group_sizes?: Maybe<StrapiActivityGroup_SizesFilterListInput>;
  skill_areas?: Maybe<StrapiActivitySkill_AreasFilterListInput>;
  educational_objectives?: Maybe<StrapiActivityEducational_ObjectivesFilterListInput>;
  leader_skills?: Maybe<StrapiActivityLeader_SkillsFilterListInput>;
  suggestions?: Maybe<StrapiActivitySuggestionsFilterListInput>;
  locations?: Maybe<StrapiActivityLocationsFilterListInput>;
  localizations?: Maybe<StrapiActivityLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiActivityArgs = {
  filter?: Maybe<StrapiActivityFilterInput>;
  sort?: Maybe<StrapiActivitySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  collectionTypes?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___collectionTypes'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiAgeGroupSubactivitygroup_TermFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiAgeGroupLinksFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupLinksFilterInput>;
};

export type StrapiAgeGroupLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiAgeGroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiAgeGroupMain_ImageFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiAgeGroupMain_ImageFormatsFilterInput = {
  large?: Maybe<StrapiAgeGroupMain_ImageFormatsLargeFilterInput>;
  small?: Maybe<StrapiAgeGroupMain_ImageFormatsSmallFilterInput>;
  medium?: Maybe<StrapiAgeGroupMain_ImageFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiAgeGroupMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiAgeGroupMain_ImageFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupMain_ImageFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupMain_ImageFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiAgeGroupLogoFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiAgeGroupLogoFormatsFilterInput = {
  large?: Maybe<StrapiAgeGroupLogoFormatsLargeFilterInput>;
  small?: Maybe<StrapiAgeGroupLogoFormatsSmallFilterInput>;
  medium?: Maybe<StrapiAgeGroupLogoFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiAgeGroupLogoFormatsThumbnailFilterInput>;
};

export type StrapiAgeGroupLogoFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupLogoFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupLogoFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupActivity_GroupsFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  subactivity_term?: Maybe<IntQueryOperatorInput>;
  subactivitygroup_term?: Maybe<IntQueryOperatorInput>;
  activitygroup_term?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  age_group?: Maybe<IntQueryOperatorInput>;
  main_image?: Maybe<StrapiAgeGroupActivity_GroupsMain_ImageFilterInput>;
  logo?: Maybe<StrapiAgeGroupActivity_GroupsLogoFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiAgeGroupActivity_GroupsMain_ImageFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsMain_ImageFormatsFilterInput = {
  thumbnail?: Maybe<StrapiAgeGroupActivity_GroupsMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsThumbnailFilterInput>;
  large?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsLargeFilterInput>;
  small?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsSmallFilterInput>;
  medium?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsMediumFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsLogoFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupLocalizationsFilterInput>;
};

export type StrapiAgeGroupLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiAgeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiAgeGroupEdge>;
  nodes: Array<StrapiAgeGroup>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiAgeGroupGroupConnection>;
};


export type StrapiAgeGroupConnectionDistinctArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupConnectionMaxArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupConnectionMinArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupConnectionSumArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiAgeGroupFieldsEnum;
};

export type StrapiAgeGroupEdge = {
  next?: Maybe<StrapiAgeGroup>;
  node: StrapiAgeGroup;
  previous?: Maybe<StrapiAgeGroup>;
};

export type StrapiAgeGroupFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'ingress'
  | 'content'
  | 'minimum_age'
  | 'maximum_age'
  | 'wp_guid'
  | 'subactivitygroup_term___id'
  | 'subactivitygroup_term___name'
  | 'subactivitygroup_term___singular'
  | 'subactivitygroup_term___plural'
  | 'subactivitygroup_term___locale'
  | 'subactivitygroup_term___created_at'
  | 'subactivitygroup_term___updated_at'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
  | 'links'
  | 'links___id'
  | 'links___description'
  | 'links___url'
  | 'main_image___id'
  | 'main_image___name'
  | 'main_image___width'
  | 'main_image___height'
  | 'main_image___formats___large___ext'
  | 'main_image___formats___large___url'
  | 'main_image___formats___large___hash'
  | 'main_image___formats___large___mime'
  | 'main_image___formats___large___name'
  | 'main_image___formats___large___size'
  | 'main_image___formats___large___width'
  | 'main_image___formats___large___height'
  | 'main_image___formats___small___ext'
  | 'main_image___formats___small___url'
  | 'main_image___formats___small___hash'
  | 'main_image___formats___small___mime'
  | 'main_image___formats___small___name'
  | 'main_image___formats___small___size'
  | 'main_image___formats___small___width'
  | 'main_image___formats___small___height'
  | 'main_image___formats___medium___ext'
  | 'main_image___formats___medium___url'
  | 'main_image___formats___medium___hash'
  | 'main_image___formats___medium___mime'
  | 'main_image___formats___medium___name'
  | 'main_image___formats___medium___size'
  | 'main_image___formats___medium___width'
  | 'main_image___formats___medium___height'
  | 'main_image___formats___thumbnail___ext'
  | 'main_image___formats___thumbnail___url'
  | 'main_image___formats___thumbnail___hash'
  | 'main_image___formats___thumbnail___mime'
  | 'main_image___formats___thumbnail___name'
  | 'main_image___formats___thumbnail___size'
  | 'main_image___formats___thumbnail___width'
  | 'main_image___formats___thumbnail___height'
  | 'main_image___hash'
  | 'main_image___ext'
  | 'main_image___mime'
  | 'main_image___size'
  | 'main_image___url'
  | 'main_image___provider'
  | 'main_image___created_at'
  | 'main_image___updated_at'
  | 'main_image___localFile___sourceInstanceName'
  | 'main_image___localFile___absolutePath'
  | 'main_image___localFile___relativePath'
  | 'main_image___localFile___extension'
  | 'main_image___localFile___size'
  | 'main_image___localFile___prettySize'
  | 'main_image___localFile___modifiedTime'
  | 'main_image___localFile___accessTime'
  | 'main_image___localFile___changeTime'
  | 'main_image___localFile___birthTime'
  | 'main_image___localFile___root'
  | 'main_image___localFile___dir'
  | 'main_image___localFile___base'
  | 'main_image___localFile___ext'
  | 'main_image___localFile___name'
  | 'main_image___localFile___relativeDirectory'
  | 'main_image___localFile___dev'
  | 'main_image___localFile___mode'
  | 'main_image___localFile___nlink'
  | 'main_image___localFile___uid'
  | 'main_image___localFile___gid'
  | 'main_image___localFile___rdev'
  | 'main_image___localFile___ino'
  | 'main_image___localFile___atimeMs'
  | 'main_image___localFile___mtimeMs'
  | 'main_image___localFile___ctimeMs'
  | 'main_image___localFile___atime'
  | 'main_image___localFile___mtime'
  | 'main_image___localFile___ctime'
  | 'main_image___localFile___birthtime'
  | 'main_image___localFile___birthtimeMs'
  | 'main_image___localFile___blksize'
  | 'main_image___localFile___blocks'
  | 'main_image___localFile___url'
  | 'main_image___localFile___publicURL'
  | 'main_image___localFile___childrenImageSharp'
  | 'main_image___localFile___childrenImageSharp___gatsbyImageData'
  | 'main_image___localFile___childrenImageSharp___id'
  | 'main_image___localFile___childrenImageSharp___children'
  | 'main_image___localFile___childImageSharp___gatsbyImageData'
  | 'main_image___localFile___childImageSharp___id'
  | 'main_image___localFile___childImageSharp___children'
  | 'main_image___localFile___id'
  | 'main_image___localFile___parent___id'
  | 'main_image___localFile___parent___children'
  | 'main_image___localFile___children'
  | 'main_image___localFile___children___id'
  | 'main_image___localFile___children___children'
  | 'main_image___localFile___internal___content'
  | 'main_image___localFile___internal___contentDigest'
  | 'main_image___localFile___internal___description'
  | 'main_image___localFile___internal___fieldOwners'
  | 'main_image___localFile___internal___ignoreType'
  | 'main_image___localFile___internal___mediaType'
  | 'main_image___localFile___internal___owner'
  | 'main_image___localFile___internal___type'
  | 'logo___id'
  | 'logo___name'
  | 'logo___width'
  | 'logo___height'
  | 'logo___formats___large___ext'
  | 'logo___formats___large___url'
  | 'logo___formats___large___hash'
  | 'logo___formats___large___mime'
  | 'logo___formats___large___name'
  | 'logo___formats___large___size'
  | 'logo___formats___large___width'
  | 'logo___formats___large___height'
  | 'logo___formats___small___ext'
  | 'logo___formats___small___url'
  | 'logo___formats___small___hash'
  | 'logo___formats___small___mime'
  | 'logo___formats___small___name'
  | 'logo___formats___small___size'
  | 'logo___formats___small___width'
  | 'logo___formats___small___height'
  | 'logo___formats___medium___ext'
  | 'logo___formats___medium___url'
  | 'logo___formats___medium___hash'
  | 'logo___formats___medium___mime'
  | 'logo___formats___medium___name'
  | 'logo___formats___medium___size'
  | 'logo___formats___medium___width'
  | 'logo___formats___medium___height'
  | 'logo___formats___thumbnail___ext'
  | 'logo___formats___thumbnail___url'
  | 'logo___formats___thumbnail___hash'
  | 'logo___formats___thumbnail___mime'
  | 'logo___formats___thumbnail___name'
  | 'logo___formats___thumbnail___size'
  | 'logo___formats___thumbnail___width'
  | 'logo___formats___thumbnail___height'
  | 'logo___hash'
  | 'logo___ext'
  | 'logo___mime'
  | 'logo___size'
  | 'logo___url'
  | 'logo___provider'
  | 'logo___created_at'
  | 'logo___updated_at'
  | 'logo___localFile___sourceInstanceName'
  | 'logo___localFile___absolutePath'
  | 'logo___localFile___relativePath'
  | 'logo___localFile___extension'
  | 'logo___localFile___size'
  | 'logo___localFile___prettySize'
  | 'logo___localFile___modifiedTime'
  | 'logo___localFile___accessTime'
  | 'logo___localFile___changeTime'
  | 'logo___localFile___birthTime'
  | 'logo___localFile___root'
  | 'logo___localFile___dir'
  | 'logo___localFile___base'
  | 'logo___localFile___ext'
  | 'logo___localFile___name'
  | 'logo___localFile___relativeDirectory'
  | 'logo___localFile___dev'
  | 'logo___localFile___mode'
  | 'logo___localFile___nlink'
  | 'logo___localFile___uid'
  | 'logo___localFile___gid'
  | 'logo___localFile___rdev'
  | 'logo___localFile___ino'
  | 'logo___localFile___atimeMs'
  | 'logo___localFile___mtimeMs'
  | 'logo___localFile___ctimeMs'
  | 'logo___localFile___atime'
  | 'logo___localFile___mtime'
  | 'logo___localFile___ctime'
  | 'logo___localFile___birthtime'
  | 'logo___localFile___birthtimeMs'
  | 'logo___localFile___blksize'
  | 'logo___localFile___blocks'
  | 'logo___localFile___url'
  | 'logo___localFile___publicURL'
  | 'logo___localFile___childrenImageSharp'
  | 'logo___localFile___childrenImageSharp___gatsbyImageData'
  | 'logo___localFile___childrenImageSharp___id'
  | 'logo___localFile___childrenImageSharp___children'
  | 'logo___localFile___childImageSharp___gatsbyImageData'
  | 'logo___localFile___childImageSharp___id'
  | 'logo___localFile___childImageSharp___children'
  | 'logo___localFile___id'
  | 'logo___localFile___parent___id'
  | 'logo___localFile___parent___children'
  | 'logo___localFile___children'
  | 'logo___localFile___children___id'
  | 'logo___localFile___children___children'
  | 'logo___localFile___internal___content'
  | 'logo___localFile___internal___contentDigest'
  | 'logo___localFile___internal___description'
  | 'logo___localFile___internal___fieldOwners'
  | 'logo___localFile___internal___ignoreType'
  | 'logo___localFile___internal___mediaType'
  | 'logo___localFile___internal___owner'
  | 'logo___localFile___internal___type'
  | 'activity_groups'
  | 'activity_groups___id'
  | 'activity_groups___title'
  | 'activity_groups___ingress'
  | 'activity_groups___content'
  | 'activity_groups___wp_guid'
  | 'activity_groups___mandatory'
  | 'activity_groups___subactivity_term'
  | 'activity_groups___subactivitygroup_term'
  | 'activity_groups___activitygroup_term'
  | 'activity_groups___locale'
  | 'activity_groups___published_at'
  | 'activity_groups___created_at'
  | 'activity_groups___updated_at'
  | 'activity_groups___age_group'
  | 'activity_groups___main_image___id'
  | 'activity_groups___main_image___name'
  | 'activity_groups___main_image___width'
  | 'activity_groups___main_image___height'
  | 'activity_groups___main_image___hash'
  | 'activity_groups___main_image___ext'
  | 'activity_groups___main_image___mime'
  | 'activity_groups___main_image___size'
  | 'activity_groups___main_image___url'
  | 'activity_groups___main_image___provider'
  | 'activity_groups___main_image___created_at'
  | 'activity_groups___main_image___updated_at'
  | 'activity_groups___main_image___localFile___sourceInstanceName'
  | 'activity_groups___main_image___localFile___absolutePath'
  | 'activity_groups___main_image___localFile___relativePath'
  | 'activity_groups___main_image___localFile___extension'
  | 'activity_groups___main_image___localFile___size'
  | 'activity_groups___main_image___localFile___prettySize'
  | 'activity_groups___main_image___localFile___modifiedTime'
  | 'activity_groups___main_image___localFile___accessTime'
  | 'activity_groups___main_image___localFile___changeTime'
  | 'activity_groups___main_image___localFile___birthTime'
  | 'activity_groups___main_image___localFile___root'
  | 'activity_groups___main_image___localFile___dir'
  | 'activity_groups___main_image___localFile___base'
  | 'activity_groups___main_image___localFile___ext'
  | 'activity_groups___main_image___localFile___name'
  | 'activity_groups___main_image___localFile___relativeDirectory'
  | 'activity_groups___main_image___localFile___dev'
  | 'activity_groups___main_image___localFile___mode'
  | 'activity_groups___main_image___localFile___nlink'
  | 'activity_groups___main_image___localFile___uid'
  | 'activity_groups___main_image___localFile___gid'
  | 'activity_groups___main_image___localFile___rdev'
  | 'activity_groups___main_image___localFile___ino'
  | 'activity_groups___main_image___localFile___atimeMs'
  | 'activity_groups___main_image___localFile___mtimeMs'
  | 'activity_groups___main_image___localFile___ctimeMs'
  | 'activity_groups___main_image___localFile___atime'
  | 'activity_groups___main_image___localFile___mtime'
  | 'activity_groups___main_image___localFile___ctime'
  | 'activity_groups___main_image___localFile___birthtime'
  | 'activity_groups___main_image___localFile___birthtimeMs'
  | 'activity_groups___main_image___localFile___blksize'
  | 'activity_groups___main_image___localFile___blocks'
  | 'activity_groups___main_image___localFile___url'
  | 'activity_groups___main_image___localFile___publicURL'
  | 'activity_groups___main_image___localFile___childrenImageSharp'
  | 'activity_groups___main_image___localFile___id'
  | 'activity_groups___main_image___localFile___children'
  | 'activity_groups___logo___id'
  | 'activity_groups___logo___name'
  | 'activity_groups___logo___width'
  | 'activity_groups___logo___height'
  | 'activity_groups___logo___hash'
  | 'activity_groups___logo___ext'
  | 'activity_groups___logo___mime'
  | 'activity_groups___logo___size'
  | 'activity_groups___logo___url'
  | 'activity_groups___logo___provider'
  | 'activity_groups___logo___created_at'
  | 'activity_groups___logo___updated_at'
  | 'activity_groups___logo___localFile___sourceInstanceName'
  | 'activity_groups___logo___localFile___absolutePath'
  | 'activity_groups___logo___localFile___relativePath'
  | 'activity_groups___logo___localFile___extension'
  | 'activity_groups___logo___localFile___size'
  | 'activity_groups___logo___localFile___prettySize'
  | 'activity_groups___logo___localFile___modifiedTime'
  | 'activity_groups___logo___localFile___accessTime'
  | 'activity_groups___logo___localFile___changeTime'
  | 'activity_groups___logo___localFile___birthTime'
  | 'activity_groups___logo___localFile___root'
  | 'activity_groups___logo___localFile___dir'
  | 'activity_groups___logo___localFile___base'
  | 'activity_groups___logo___localFile___ext'
  | 'activity_groups___logo___localFile___name'
  | 'activity_groups___logo___localFile___relativeDirectory'
  | 'activity_groups___logo___localFile___dev'
  | 'activity_groups___logo___localFile___mode'
  | 'activity_groups___logo___localFile___nlink'
  | 'activity_groups___logo___localFile___uid'
  | 'activity_groups___logo___localFile___gid'
  | 'activity_groups___logo___localFile___rdev'
  | 'activity_groups___logo___localFile___ino'
  | 'activity_groups___logo___localFile___atimeMs'
  | 'activity_groups___logo___localFile___mtimeMs'
  | 'activity_groups___logo___localFile___ctimeMs'
  | 'activity_groups___logo___localFile___atime'
  | 'activity_groups___logo___localFile___mtime'
  | 'activity_groups___logo___localFile___ctime'
  | 'activity_groups___logo___localFile___birthtime'
  | 'activity_groups___logo___localFile___birthtimeMs'
  | 'activity_groups___logo___localFile___blksize'
  | 'activity_groups___logo___localFile___blocks'
  | 'activity_groups___logo___localFile___url'
  | 'activity_groups___logo___localFile___publicURL'
  | 'activity_groups___logo___localFile___childrenImageSharp'
  | 'activity_groups___logo___localFile___id'
  | 'activity_groups___logo___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId';

export type StrapiAgeGroupGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiAgeGroupEdge>;
  nodes: Array<StrapiAgeGroup>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  minimum_age?: Maybe<IntQueryOperatorInput>;
  maximum_age?: Maybe<IntQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  subactivitygroup_term?: Maybe<StrapiAgeGroupSubactivitygroup_TermFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  links?: Maybe<StrapiAgeGroupLinksFilterListInput>;
  main_image?: Maybe<StrapiAgeGroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiAgeGroupLogoFilterInput>;
  activity_groups?: Maybe<StrapiAgeGroupActivity_GroupsFilterListInput>;
  localizations?: Maybe<StrapiAgeGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiAgeGroupSortInput = {
  fields?: Maybe<Array<Maybe<StrapiAgeGroupFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiActivityActivity_TermFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityDurationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  subactivity_term?: Maybe<IntQueryOperatorInput>;
  subactivitygroup_term?: Maybe<IntQueryOperatorInput>;
  activitygroup_term?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  age_group?: Maybe<IntQueryOperatorInput>;
  parent_activity_group?: Maybe<IntQueryOperatorInput>;
  main_image?: Maybe<StrapiActivityActivity_GroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityActivity_GroupLogoFilterInput>;
};

export type StrapiActivityActivity_GroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsFilterInput = {
  thumbnail?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityActivity_GroupLogoFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivityActivity_GroupLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiActivityActivity_GroupLogoFormatsThumbnailFilterInput>;
  small?: Maybe<StrapiActivityActivity_GroupLogoFormatsSmallFilterInput>;
  large?: Maybe<StrapiActivityActivity_GroupLogoFormatsLargeFilterInput>;
  medium?: Maybe<StrapiActivityActivity_GroupLogoFormatsMediumFilterInput>;
};

export type StrapiActivityActivity_GroupLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupLogoFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupLogoFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupLogoFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  minimum_age?: Maybe<IntQueryOperatorInput>;
  maximum_age?: Maybe<IntQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  subactivitygroup_term?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  links?: Maybe<StrapiActivityAge_GroupLinksFilterListInput>;
  main_image?: Maybe<StrapiActivityAge_GroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityAge_GroupLogoFilterInput>;
};

export type StrapiActivityAge_GroupLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityAge_GroupLinksFilterInput>;
};

export type StrapiActivityAge_GroupLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityAge_GroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsFilterInput = {
  large?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivityAge_GroupMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityAge_GroupLogoFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivityAge_GroupLogoFormatsFilterInput = {
  large?: Maybe<StrapiActivityAge_GroupLogoFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityAge_GroupLogoFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityAge_GroupLogoFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivityAge_GroupLogoFormatsThumbnailFilterInput>;
};

export type StrapiActivityAge_GroupLogoFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupLogoFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupLogoFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityAge_GroupLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityPreparation_DurationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroup_SizesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroup_SizesFilterInput>;
};

export type StrapiActivityGroup_SizesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  icon?: Maybe<StrapiActivityGroup_SizesIconFilterInput>;
};

export type StrapiActivityGroup_SizesIconFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivitySkill_AreasFilterListInput = {
  elemMatch?: Maybe<StrapiActivitySkill_AreasFilterInput>;
};

export type StrapiActivitySkill_AreasFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityEducational_ObjectivesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityEducational_ObjectivesFilterInput>;
};

export type StrapiActivityEducational_ObjectivesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityLeader_SkillsFilterListInput = {
  elemMatch?: Maybe<StrapiActivityLeader_SkillsFilterInput>;
};

export type StrapiActivityLeader_SkillsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivitySuggestionsFilterListInput = {
  elemMatch?: Maybe<StrapiActivitySuggestionsFilterInput>;
};

export type StrapiActivitySuggestionsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  activity?: Maybe<IntQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  from_web?: Maybe<BooleanQueryOperatorInput>;
  like_count?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityLocationsFilterListInput = {
  elemMatch?: Maybe<StrapiActivityLocationsFilterInput>;
};

export type StrapiActivityLocationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiActivityLocalizationsFilterInput>;
};

export type StrapiActivityLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiActivityEdge>;
  nodes: Array<StrapiActivity>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiActivityGroupConnection>;
};


export type StrapiActivityConnectionDistinctArgs = {
  field: StrapiActivityFieldsEnum;
};


export type StrapiActivityConnectionMaxArgs = {
  field: StrapiActivityFieldsEnum;
};


export type StrapiActivityConnectionMinArgs = {
  field: StrapiActivityFieldsEnum;
};


export type StrapiActivityConnectionSumArgs = {
  field: StrapiActivityFieldsEnum;
};


export type StrapiActivityConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiActivityFieldsEnum;
};

export type StrapiActivityEdge = {
  next?: Maybe<StrapiActivity>;
  node: StrapiActivity;
  previous?: Maybe<StrapiActivity>;
};

export type StrapiActivityFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'content'
  | 'mandatory'
  | 'ingress'
  | 'wp_guid'
  | 'leader_tasks'
  | 'activity_term___id'
  | 'activity_term___name'
  | 'activity_term___singular'
  | 'activity_term___plural'
  | 'activity_term___locale'
  | 'activity_term___created_at'
  | 'activity_term___updated_at'
  | 'duration___id'
  | 'duration___name'
  | 'duration___slug'
  | 'duration___locale'
  | 'duration___created_at'
  | 'duration___updated_at'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
  | 'activity_group___id'
  | 'activity_group___title'
  | 'activity_group___ingress'
  | 'activity_group___content'
  | 'activity_group___wp_guid'
  | 'activity_group___mandatory'
  | 'activity_group___subactivity_term'
  | 'activity_group___subactivitygroup_term'
  | 'activity_group___activitygroup_term'
  | 'activity_group___locale'
  | 'activity_group___published_at'
  | 'activity_group___created_at'
  | 'activity_group___updated_at'
  | 'activity_group___age_group'
  | 'activity_group___parent_activity_group'
  | 'activity_group___main_image___id'
  | 'activity_group___main_image___name'
  | 'activity_group___main_image___width'
  | 'activity_group___main_image___height'
  | 'activity_group___main_image___hash'
  | 'activity_group___main_image___ext'
  | 'activity_group___main_image___mime'
  | 'activity_group___main_image___size'
  | 'activity_group___main_image___url'
  | 'activity_group___main_image___provider'
  | 'activity_group___main_image___created_at'
  | 'activity_group___main_image___updated_at'
  | 'activity_group___main_image___localFile___sourceInstanceName'
  | 'activity_group___main_image___localFile___absolutePath'
  | 'activity_group___main_image___localFile___relativePath'
  | 'activity_group___main_image___localFile___extension'
  | 'activity_group___main_image___localFile___size'
  | 'activity_group___main_image___localFile___prettySize'
  | 'activity_group___main_image___localFile___modifiedTime'
  | 'activity_group___main_image___localFile___accessTime'
  | 'activity_group___main_image___localFile___changeTime'
  | 'activity_group___main_image___localFile___birthTime'
  | 'activity_group___main_image___localFile___root'
  | 'activity_group___main_image___localFile___dir'
  | 'activity_group___main_image___localFile___base'
  | 'activity_group___main_image___localFile___ext'
  | 'activity_group___main_image___localFile___name'
  | 'activity_group___main_image___localFile___relativeDirectory'
  | 'activity_group___main_image___localFile___dev'
  | 'activity_group___main_image___localFile___mode'
  | 'activity_group___main_image___localFile___nlink'
  | 'activity_group___main_image___localFile___uid'
  | 'activity_group___main_image___localFile___gid'
  | 'activity_group___main_image___localFile___rdev'
  | 'activity_group___main_image___localFile___ino'
  | 'activity_group___main_image___localFile___atimeMs'
  | 'activity_group___main_image___localFile___mtimeMs'
  | 'activity_group___main_image___localFile___ctimeMs'
  | 'activity_group___main_image___localFile___atime'
  | 'activity_group___main_image___localFile___mtime'
  | 'activity_group___main_image___localFile___ctime'
  | 'activity_group___main_image___localFile___birthtime'
  | 'activity_group___main_image___localFile___birthtimeMs'
  | 'activity_group___main_image___localFile___blksize'
  | 'activity_group___main_image___localFile___blocks'
  | 'activity_group___main_image___localFile___url'
  | 'activity_group___main_image___localFile___publicURL'
  | 'activity_group___main_image___localFile___childrenImageSharp'
  | 'activity_group___main_image___localFile___id'
  | 'activity_group___main_image___localFile___children'
  | 'activity_group___logo___id'
  | 'activity_group___logo___name'
  | 'activity_group___logo___width'
  | 'activity_group___logo___height'
  | 'activity_group___logo___hash'
  | 'activity_group___logo___ext'
  | 'activity_group___logo___mime'
  | 'activity_group___logo___size'
  | 'activity_group___logo___url'
  | 'activity_group___logo___provider'
  | 'activity_group___logo___created_at'
  | 'activity_group___logo___updated_at'
  | 'activity_group___logo___localFile___sourceInstanceName'
  | 'activity_group___logo___localFile___absolutePath'
  | 'activity_group___logo___localFile___relativePath'
  | 'activity_group___logo___localFile___extension'
  | 'activity_group___logo___localFile___size'
  | 'activity_group___logo___localFile___prettySize'
  | 'activity_group___logo___localFile___modifiedTime'
  | 'activity_group___logo___localFile___accessTime'
  | 'activity_group___logo___localFile___changeTime'
  | 'activity_group___logo___localFile___birthTime'
  | 'activity_group___logo___localFile___root'
  | 'activity_group___logo___localFile___dir'
  | 'activity_group___logo___localFile___base'
  | 'activity_group___logo___localFile___ext'
  | 'activity_group___logo___localFile___name'
  | 'activity_group___logo___localFile___relativeDirectory'
  | 'activity_group___logo___localFile___dev'
  | 'activity_group___logo___localFile___mode'
  | 'activity_group___logo___localFile___nlink'
  | 'activity_group___logo___localFile___uid'
  | 'activity_group___logo___localFile___gid'
  | 'activity_group___logo___localFile___rdev'
  | 'activity_group___logo___localFile___ino'
  | 'activity_group___logo___localFile___atimeMs'
  | 'activity_group___logo___localFile___mtimeMs'
  | 'activity_group___logo___localFile___ctimeMs'
  | 'activity_group___logo___localFile___atime'
  | 'activity_group___logo___localFile___mtime'
  | 'activity_group___logo___localFile___ctime'
  | 'activity_group___logo___localFile___birthtime'
  | 'activity_group___logo___localFile___birthtimeMs'
  | 'activity_group___logo___localFile___blksize'
  | 'activity_group___logo___localFile___blocks'
  | 'activity_group___logo___localFile___url'
  | 'activity_group___logo___localFile___publicURL'
  | 'activity_group___logo___localFile___childrenImageSharp'
  | 'activity_group___logo___localFile___id'
  | 'activity_group___logo___localFile___children'
  | 'age_group___id'
  | 'age_group___title'
  | 'age_group___ingress'
  | 'age_group___content'
  | 'age_group___minimum_age'
  | 'age_group___maximum_age'
  | 'age_group___wp_guid'
  | 'age_group___subactivitygroup_term'
  | 'age_group___locale'
  | 'age_group___published_at'
  | 'age_group___created_at'
  | 'age_group___updated_at'
  | 'age_group___links'
  | 'age_group___links___id'
  | 'age_group___links___description'
  | 'age_group___links___url'
  | 'age_group___main_image___id'
  | 'age_group___main_image___name'
  | 'age_group___main_image___width'
  | 'age_group___main_image___height'
  | 'age_group___main_image___hash'
  | 'age_group___main_image___ext'
  | 'age_group___main_image___mime'
  | 'age_group___main_image___size'
  | 'age_group___main_image___url'
  | 'age_group___main_image___provider'
  | 'age_group___main_image___created_at'
  | 'age_group___main_image___updated_at'
  | 'age_group___main_image___localFile___sourceInstanceName'
  | 'age_group___main_image___localFile___absolutePath'
  | 'age_group___main_image___localFile___relativePath'
  | 'age_group___main_image___localFile___extension'
  | 'age_group___main_image___localFile___size'
  | 'age_group___main_image___localFile___prettySize'
  | 'age_group___main_image___localFile___modifiedTime'
  | 'age_group___main_image___localFile___accessTime'
  | 'age_group___main_image___localFile___changeTime'
  | 'age_group___main_image___localFile___birthTime'
  | 'age_group___main_image___localFile___root'
  | 'age_group___main_image___localFile___dir'
  | 'age_group___main_image___localFile___base'
  | 'age_group___main_image___localFile___ext'
  | 'age_group___main_image___localFile___name'
  | 'age_group___main_image___localFile___relativeDirectory'
  | 'age_group___main_image___localFile___dev'
  | 'age_group___main_image___localFile___mode'
  | 'age_group___main_image___localFile___nlink'
  | 'age_group___main_image___localFile___uid'
  | 'age_group___main_image___localFile___gid'
  | 'age_group___main_image___localFile___rdev'
  | 'age_group___main_image___localFile___ino'
  | 'age_group___main_image___localFile___atimeMs'
  | 'age_group___main_image___localFile___mtimeMs'
  | 'age_group___main_image___localFile___ctimeMs'
  | 'age_group___main_image___localFile___atime'
  | 'age_group___main_image___localFile___mtime'
  | 'age_group___main_image___localFile___ctime'
  | 'age_group___main_image___localFile___birthtime'
  | 'age_group___main_image___localFile___birthtimeMs'
  | 'age_group___main_image___localFile___blksize'
  | 'age_group___main_image___localFile___blocks'
  | 'age_group___main_image___localFile___url'
  | 'age_group___main_image___localFile___publicURL'
  | 'age_group___main_image___localFile___childrenImageSharp'
  | 'age_group___main_image___localFile___id'
  | 'age_group___main_image___localFile___children'
  | 'age_group___logo___id'
  | 'age_group___logo___name'
  | 'age_group___logo___width'
  | 'age_group___logo___height'
  | 'age_group___logo___hash'
  | 'age_group___logo___ext'
  | 'age_group___logo___mime'
  | 'age_group___logo___size'
  | 'age_group___logo___url'
  | 'age_group___logo___provider'
  | 'age_group___logo___created_at'
  | 'age_group___logo___updated_at'
  | 'age_group___logo___localFile___sourceInstanceName'
  | 'age_group___logo___localFile___absolutePath'
  | 'age_group___logo___localFile___relativePath'
  | 'age_group___logo___localFile___extension'
  | 'age_group___logo___localFile___size'
  | 'age_group___logo___localFile___prettySize'
  | 'age_group___logo___localFile___modifiedTime'
  | 'age_group___logo___localFile___accessTime'
  | 'age_group___logo___localFile___changeTime'
  | 'age_group___logo___localFile___birthTime'
  | 'age_group___logo___localFile___root'
  | 'age_group___logo___localFile___dir'
  | 'age_group___logo___localFile___base'
  | 'age_group___logo___localFile___ext'
  | 'age_group___logo___localFile___name'
  | 'age_group___logo___localFile___relativeDirectory'
  | 'age_group___logo___localFile___dev'
  | 'age_group___logo___localFile___mode'
  | 'age_group___logo___localFile___nlink'
  | 'age_group___logo___localFile___uid'
  | 'age_group___logo___localFile___gid'
  | 'age_group___logo___localFile___rdev'
  | 'age_group___logo___localFile___ino'
  | 'age_group___logo___localFile___atimeMs'
  | 'age_group___logo___localFile___mtimeMs'
  | 'age_group___logo___localFile___ctimeMs'
  | 'age_group___logo___localFile___atime'
  | 'age_group___logo___localFile___mtime'
  | 'age_group___logo___localFile___ctime'
  | 'age_group___logo___localFile___birthtime'
  | 'age_group___logo___localFile___birthtimeMs'
  | 'age_group___logo___localFile___blksize'
  | 'age_group___logo___localFile___blocks'
  | 'age_group___logo___localFile___url'
  | 'age_group___logo___localFile___publicURL'
  | 'age_group___logo___localFile___childrenImageSharp'
  | 'age_group___logo___localFile___id'
  | 'age_group___logo___localFile___children'
  | 'preparation_duration___id'
  | 'preparation_duration___name'
  | 'preparation_duration___slug'
  | 'preparation_duration___locale'
  | 'preparation_duration___created_at'
  | 'preparation_duration___updated_at'
  | 'group_sizes'
  | 'group_sizes___id'
  | 'group_sizes___name'
  | 'group_sizes___slug'
  | 'group_sizes___locale'
  | 'group_sizes___created_at'
  | 'group_sizes___updated_at'
  | 'group_sizes___icon___id'
  | 'group_sizes___icon___name'
  | 'group_sizes___icon___width'
  | 'group_sizes___icon___height'
  | 'group_sizes___icon___hash'
  | 'group_sizes___icon___ext'
  | 'group_sizes___icon___mime'
  | 'group_sizes___icon___size'
  | 'group_sizes___icon___url'
  | 'group_sizes___icon___provider'
  | 'group_sizes___icon___created_at'
  | 'group_sizes___icon___updated_at'
  | 'group_sizes___icon___localFile___sourceInstanceName'
  | 'group_sizes___icon___localFile___absolutePath'
  | 'group_sizes___icon___localFile___relativePath'
  | 'group_sizes___icon___localFile___extension'
  | 'group_sizes___icon___localFile___size'
  | 'group_sizes___icon___localFile___prettySize'
  | 'group_sizes___icon___localFile___modifiedTime'
  | 'group_sizes___icon___localFile___accessTime'
  | 'group_sizes___icon___localFile___changeTime'
  | 'group_sizes___icon___localFile___birthTime'
  | 'group_sizes___icon___localFile___root'
  | 'group_sizes___icon___localFile___dir'
  | 'group_sizes___icon___localFile___base'
  | 'group_sizes___icon___localFile___ext'
  | 'group_sizes___icon___localFile___name'
  | 'group_sizes___icon___localFile___relativeDirectory'
  | 'group_sizes___icon___localFile___dev'
  | 'group_sizes___icon___localFile___mode'
  | 'group_sizes___icon___localFile___nlink'
  | 'group_sizes___icon___localFile___uid'
  | 'group_sizes___icon___localFile___gid'
  | 'group_sizes___icon___localFile___rdev'
  | 'group_sizes___icon___localFile___ino'
  | 'group_sizes___icon___localFile___atimeMs'
  | 'group_sizes___icon___localFile___mtimeMs'
  | 'group_sizes___icon___localFile___ctimeMs'
  | 'group_sizes___icon___localFile___atime'
  | 'group_sizes___icon___localFile___mtime'
  | 'group_sizes___icon___localFile___ctime'
  | 'group_sizes___icon___localFile___birthtime'
  | 'group_sizes___icon___localFile___birthtimeMs'
  | 'group_sizes___icon___localFile___blksize'
  | 'group_sizes___icon___localFile___blocks'
  | 'group_sizes___icon___localFile___url'
  | 'group_sizes___icon___localFile___publicURL'
  | 'group_sizes___icon___localFile___childrenImageSharp'
  | 'group_sizes___icon___localFile___id'
  | 'group_sizes___icon___localFile___children'
  | 'skill_areas'
  | 'skill_areas___id'
  | 'skill_areas___name'
  | 'skill_areas___slug'
  | 'skill_areas___locale'
  | 'skill_areas___created_at'
  | 'skill_areas___updated_at'
  | 'educational_objectives'
  | 'educational_objectives___id'
  | 'educational_objectives___name'
  | 'educational_objectives___slug'
  | 'educational_objectives___locale'
  | 'educational_objectives___created_at'
  | 'educational_objectives___updated_at'
  | 'leader_skills'
  | 'leader_skills___id'
  | 'leader_skills___name'
  | 'leader_skills___slug'
  | 'leader_skills___locale'
  | 'leader_skills___created_at'
  | 'leader_skills___updated_at'
  | 'suggestions'
  | 'suggestions___id'
  | 'suggestions___title'
  | 'suggestions___content'
  | 'suggestions___activity'
  | 'suggestions___wp_guid'
  | 'suggestions___author'
  | 'suggestions___locale'
  | 'suggestions___published_at'
  | 'suggestions___created_at'
  | 'suggestions___updated_at'
  | 'suggestions___from_web'
  | 'suggestions___like_count'
  | 'locations'
  | 'locations___id'
  | 'locations___name'
  | 'locations___slug'
  | 'locations___locale'
  | 'locations___created_at'
  | 'locations___updated_at'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId';

export type StrapiActivityGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiActivityEdge>;
  nodes: Array<StrapiActivity>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiActivityFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  leader_tasks?: Maybe<StringQueryOperatorInput>;
  activity_term?: Maybe<StrapiActivityActivity_TermFilterInput>;
  duration?: Maybe<StrapiActivityDurationFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  activity_group?: Maybe<StrapiActivityActivity_GroupFilterInput>;
  age_group?: Maybe<StrapiActivityAge_GroupFilterInput>;
  preparation_duration?: Maybe<StrapiActivityPreparation_DurationFilterInput>;
  group_sizes?: Maybe<StrapiActivityGroup_SizesFilterListInput>;
  skill_areas?: Maybe<StrapiActivitySkill_AreasFilterListInput>;
  educational_objectives?: Maybe<StrapiActivityEducational_ObjectivesFilterListInput>;
  leader_skills?: Maybe<StrapiActivityLeader_SkillsFilterListInput>;
  suggestions?: Maybe<StrapiActivitySuggestionsFilterListInput>;
  locations?: Maybe<StrapiActivityLocationsFilterListInput>;
  localizations?: Maybe<StrapiActivityLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivitySortInput = {
  fields?: Maybe<Array<Maybe<StrapiActivityFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___collectionTypes'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};
