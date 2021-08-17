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
  siteUrl?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  data?: Maybe<SitePageContextData>;
  type?: Maybe<Scalars['String']>;
};

export type SitePageContextData = {
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<SitePageContextDataLocalizations>>>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  strapiId?: Maybe<Scalars['Int']>;
  ingress?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<SitePageContextDataLinks>>>;
  logo?: Maybe<SitePageContextDataLogo>;
  maximum_age?: Maybe<Scalars['Int']>;
  minimum_age?: Maybe<Scalars['Int']>;
  subactivitygroup_term?: Maybe<SitePageContextDataSubactivitygroup_Term>;
  main_image?: Maybe<SitePageContextDataMain_Image>;
  activity_groups?: Maybe<Array<Maybe<SitePageContextDataActivity_Groups>>>;
  mandatory?: Maybe<Scalars['Boolean']>;
  activities?: Maybe<Array<Maybe<SitePageContextDataActivities>>>;
  activity_group_category?: Maybe<SitePageContextDataActivity_Group_Category>;
  activitygroup_term?: Maybe<SitePageContextDataActivitygroup_Term>;
  subactivity_term?: Maybe<SitePageContextDataSubactivity_Term>;
  duration?: Maybe<SitePageContextDataDuration>;
  educational_objectives?: Maybe<Array<Maybe<SitePageContextDataEducational_Objectives>>>;
  files?: Maybe<Array<Maybe<SitePageContextDataFiles>>>;
  group_sizes?: Maybe<Array<Maybe<SitePageContextDataGroup_Sizes>>>;
  images?: Maybe<Array<Maybe<SitePageContextDataImages>>>;
  leader_skills?: Maybe<Array<Maybe<SitePageContextDataLeader_Skills>>>;
  leader_tasks?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<SitePageContextDataLocations>>>;
  preparation_duration?: Maybe<SitePageContextDataPreparation_Duration>;
  skill_areas?: Maybe<Array<Maybe<SitePageContextDataSkill_Areas>>>;
  suggestions?: Maybe<Array<Maybe<SitePageContextDataSuggestions>>>;
  main_text?: Maybe<Scalars['String']>;
};

export type SitePageContextDataLocalizations = {
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataLinks = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type SitePageContextDataLogo = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<SitePageContextDataLogoFormats>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataLogoFormats = {
  large?: Maybe<SitePageContextDataLogoFormatsLarge>;
  medium?: Maybe<SitePageContextDataLogoFormatsMedium>;
  small?: Maybe<SitePageContextDataLogoFormatsSmall>;
  thumbnail?: Maybe<SitePageContextDataLogoFormatsThumbnail>;
};

export type SitePageContextDataLogoFormatsLarge = {
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataLogoFormatsMedium = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataLogoFormatsSmall = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataLogoFormatsThumbnail = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataSubactivitygroup_Term = {
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
};

export type SitePageContextDataMain_Image = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<SitePageContextDataMain_ImageFormats>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataMain_ImageFormats = {
  large?: Maybe<SitePageContextDataMain_ImageFormatsLarge>;
  medium?: Maybe<SitePageContextDataMain_ImageFormatsMedium>;
  small?: Maybe<SitePageContextDataMain_ImageFormatsSmall>;
  thumbnail?: Maybe<SitePageContextDataMain_ImageFormatsThumbnail>;
};

export type SitePageContextDataMain_ImageFormatsLarge = {
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataMain_ImageFormatsMedium = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataMain_ImageFormatsSmall = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataMain_ImageFormatsThumbnail = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataActivity_Groups = {
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataActivities = {
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataActivity_Group_Category = {
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextDataActivitygroup_Term = {
  name?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
};

export type SitePageContextDataSubactivity_Term = {
  name?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
};

export type SitePageContextDataDuration = {
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataEducational_Objectives = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextDataFiles = {
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataGroup_Sizes = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataImages = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<SitePageContextDataImagesFormats>;
};

export type SitePageContextDataImagesFormats = {
  large?: Maybe<SitePageContextDataImagesFormatsLarge>;
  medium?: Maybe<SitePageContextDataImagesFormatsMedium>;
  small?: Maybe<SitePageContextDataImagesFormatsSmall>;
  thumbnail?: Maybe<SitePageContextDataImagesFormatsThumbnail>;
};

export type SitePageContextDataImagesFormatsLarge = {
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataImagesFormatsMedium = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataImagesFormatsSmall = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataImagesFormatsThumbnail = {
  width?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataLeader_Skills = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextDataLocations = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataPreparation_Duration = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataSkill_Areas = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextDataSuggestions = {
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  from_web?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  links?: Maybe<Array<Maybe<SitePageContextDataSuggestionsLinks>>>;
  files?: Maybe<Array<Maybe<SitePageContextDataSuggestionsFiles>>>;
};

export type SitePageContextDataSuggestionsLinks = {
  url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextDataSuggestionsFiles = {
  url?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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

export type StrapiContentpage = Node & {
  content?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  main_text?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localizations?: Maybe<Array<Maybe<StrapiContentpageLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type StrapiContentpagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiContentpageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiContentpageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiContentpageLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
};


export type StrapiContentpageLocalizationsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Navigation = Node & {
  items?: Maybe<Array<Maybe<NavigationItems>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NavigationItems = {
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  subitems?: Maybe<Array<Maybe<NavigationItemsSubitems>>>;
};

export type NavigationItemsSubitems = {
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type StrapiFrontPage = Node & {
  title?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  navigation?: Maybe<Array<Maybe<StrapiFrontPageNavigation>>>;
  localizations?: Maybe<Array<Maybe<StrapiFrontPageLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type StrapiFrontPagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageNavigation = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  page?: Maybe<StrapiFrontPageNavigationPage>;
  subnavigation?: Maybe<Array<Maybe<StrapiFrontPageNavigationSubnavigation>>>;
};

export type StrapiFrontPageNavigationPage = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  main_text?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiFrontPageNavigationPagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationPageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageNavigationSubnavigation = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  page?: Maybe<StrapiFrontPageNavigationSubnavigationPage>;
};

export type StrapiFrontPageNavigationSubnavigationPage = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  main_text?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiFrontPageNavigationSubnavigationPagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationSubnavigationPageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationSubnavigationPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
};


export type StrapiFrontPageLocalizationsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroup = Node & {
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  wp_guid?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  subactivity_term?: Maybe<StrapiActivityGroupSubactivity_Term>;
  subactivitygroup_term?: Maybe<StrapiActivityGroupSubactivitygroup_Term>;
  activitygroup_term?: Maybe<StrapiActivityGroupActivitygroup_Term>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  age_group?: Maybe<StrapiActivityGroupAge_Group>;
  parent_activity_group?: Maybe<Scalars['Int']>;
  activity_group_category?: Maybe<StrapiActivityGroupActivity_Group_Category>;
  main_image?: Maybe<StrapiActivityGroupMain_Image>;
  logo?: Maybe<StrapiActivityGroupLogo>;
  files?: Maybe<Array<Maybe<StrapiActivityGroupFiles>>>;
  activities?: Maybe<Array<Maybe<StrapiActivityGroupActivities>>>;
  localizations?: Maybe<Array<Maybe<StrapiActivityGroupLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type StrapiActivityGroupPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupSubactivity_Term = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityGroupSubactivity_TermCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupSubactivity_TermUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupSubactivitygroup_Term = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityGroupSubactivitygroup_TermCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupSubactivitygroup_TermUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivitygroup_Term = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  singular?: Maybe<Scalars['String']>;
  plural?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityGroupActivitygroup_TermCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivitygroup_TermUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_Group = {
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
  links?: Maybe<Array<Maybe<StrapiActivityGroupAge_GroupLinks>>>;
  main_image?: Maybe<StrapiActivityGroupAge_GroupMain_Image>;
  logo?: Maybe<StrapiActivityGroupAge_GroupLogo>;
};


export type StrapiActivityGroupAge_GroupPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupAge_GroupCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupAge_GroupUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormats>;
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


export type StrapiActivityGroupAge_GroupMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupAge_GroupMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormats = {
  large?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsLarge>;
  small?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsSmall>;
  medium?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsMedium>;
  thumbnail?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsThumbnail>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityGroupAge_GroupLogoFormats>;
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


export type StrapiActivityGroupAge_GroupLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupAge_GroupLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupLogoFormats = {
  large?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsLarge>;
  small?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsSmall>;
  medium?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsMedium>;
  thumbnail?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsThumbnail>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupActivity_Group_Category = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  wp_guid?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivity_Group_CategoryCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivity_Group_CategoryUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityGroupMain_ImageFormats>;
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


export type StrapiActivityGroupMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupMain_ImageFormats = {
  thumbnail?: Maybe<StrapiActivityGroupMain_ImageFormatsThumbnail>;
};

export type StrapiActivityGroupMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityGroupLogoFormats>;
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


export type StrapiActivityGroupLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupLogoFormats = {
  thumbnail?: Maybe<StrapiActivityGroupLogoFormatsThumbnail>;
  small?: Maybe<StrapiActivityGroupLogoFormatsSmall>;
  medium?: Maybe<StrapiActivityGroupLogoFormatsMedium>;
  large?: Maybe<StrapiActivityGroupLogoFormatsLarge>;
};

export type StrapiActivityGroupLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupLogoFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupLogoFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupLogoFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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


export type StrapiActivityGroupFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivities = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  ingress?: Maybe<Scalars['String']>;
  wp_guid?: Maybe<Scalars['String']>;
  leader_tasks?: Maybe<Scalars['String']>;
  activity_term?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  activity_group?: Maybe<Scalars['Int']>;
  age_group?: Maybe<Scalars['Int']>;
  preparation_duration?: Maybe<Scalars['Int']>;
  logo?: Maybe<StrapiActivityGroupActivitiesLogo>;
  files?: Maybe<Array<Maybe<StrapiActivityGroupActivitiesFiles>>>;
  images?: Maybe<Array<Maybe<StrapiActivityGroupActivitiesImages>>>;
};


export type StrapiActivityGroupActivitiesPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivitiesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivitiesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivitiesLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityGroupActivitiesLogoFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityGroupActivitiesLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivitiesLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivitiesLogoFormats = {
  thumbnail?: Maybe<StrapiActivityGroupActivitiesLogoFormatsThumbnail>;
};

export type StrapiActivityGroupActivitiesLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupActivitiesFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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


export type StrapiActivityGroupActivitiesFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivitiesFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivitiesImages = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityGroupActivitiesImagesFormats>;
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


export type StrapiActivityGroupActivitiesImagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupActivitiesImagesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivitiesImagesFormats = {
  large?: Maybe<StrapiActivityGroupActivitiesImagesFormatsLarge>;
  small?: Maybe<StrapiActivityGroupActivitiesImagesFormatsSmall>;
  medium?: Maybe<StrapiActivityGroupActivitiesImagesFormatsMedium>;
  thumbnail?: Maybe<StrapiActivityGroupActivitiesImagesFormatsThumbnail>;
};

export type StrapiActivityGroupActivitiesImagesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupActivitiesImagesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupActivitiesImagesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupActivitiesImagesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityGroupLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityGroupLocalizationsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroup = Node & {
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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
  parent_activity_group?: Maybe<Scalars['Int']>;
  activity_group_category?: Maybe<Scalars['Int']>;
  main_image?: Maybe<StrapiAgeGroupActivity_GroupsMain_Image>;
  logo?: Maybe<StrapiAgeGroupActivity_GroupsLogo>;
  files?: Maybe<Array<Maybe<StrapiAgeGroupActivity_GroupsFiles>>>;
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
  small?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsSmall>;
  medium?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsMedium>;
  large?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsLarge>;
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

export type StrapiAgeGroupActivity_GroupsFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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


export type StrapiAgeGroupActivity_GroupsFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupActivity_GroupsFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  logo?: Maybe<StrapiActivityLogo>;
  files?: Maybe<Array<Maybe<StrapiActivityFiles>>>;
  images?: Maybe<Array<Maybe<StrapiActivityImages>>>;
  group_sizes?: Maybe<Array<Maybe<StrapiActivityGroup_Sizes>>>;
  skill_areas?: Maybe<Array<Maybe<StrapiActivitySkill_Areas>>>;
  educational_objectives?: Maybe<Array<Maybe<StrapiActivityEducational_Objectives>>>;
  leader_skills?: Maybe<Array<Maybe<StrapiActivityLeader_Skills>>>;
  suggestions?: Maybe<Array<Maybe<StrapiActivitySuggestions>>>;
  locations?: Maybe<Array<Maybe<StrapiActivityLocations>>>;
  localizations?: Maybe<Array<Maybe<StrapiActivityLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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
  activity_group_category?: Maybe<Scalars['Int']>;
  main_image?: Maybe<StrapiActivityActivity_GroupMain_Image>;
  logo?: Maybe<StrapiActivityActivity_GroupLogo>;
  files?: Maybe<Array<Maybe<StrapiActivityActivity_GroupFiles>>>;
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
  small?: Maybe<StrapiActivityActivity_GroupLogoFormatsSmall>;
  thumbnail?: Maybe<StrapiActivityActivity_GroupLogoFormatsThumbnail>;
  medium?: Maybe<StrapiActivityActivity_GroupLogoFormatsMedium>;
  large?: Maybe<StrapiActivityActivity_GroupLogoFormatsLarge>;
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

export type StrapiActivityActivity_GroupFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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


export type StrapiActivityActivity_GroupFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_GroupFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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

export type StrapiActivityLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityLogoFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
};


export type StrapiActivityLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityLogoFormats = {
  thumbnail?: Maybe<StrapiActivityLogoFormatsThumbnail>;
};

export type StrapiActivityLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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


export type StrapiActivityFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityImages = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivityImagesFormats>;
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


export type StrapiActivityImagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityImagesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityImagesFormats = {
  large?: Maybe<StrapiActivityImagesFormatsLarge>;
  small?: Maybe<StrapiActivityImagesFormatsSmall>;
  medium?: Maybe<StrapiActivityImagesFormatsMedium>;
  thumbnail?: Maybe<StrapiActivityImagesFormatsThumbnail>;
};

export type StrapiActivityImagesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityImagesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityImagesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityImagesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
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
  links?: Maybe<Array<Maybe<StrapiActivitySuggestionsLinks>>>;
  files?: Maybe<Array<Maybe<StrapiActivitySuggestionsFiles>>>;
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

export type StrapiActivitySuggestionsLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiActivitySuggestionsFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiActivitySuggestionsFilesFormats>;
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


export type StrapiActivitySuggestionsFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivitySuggestionsFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivitySuggestionsFilesFormats = {
  large?: Maybe<StrapiActivitySuggestionsFilesFormatsLarge>;
  small?: Maybe<StrapiActivitySuggestionsFilesFormatsSmall>;
  medium?: Maybe<StrapiActivitySuggestionsFilesFormatsMedium>;
  thumbnail?: Maybe<StrapiActivitySuggestionsFilesFormatsThumbnail>;
};

export type StrapiActivitySuggestionsFilesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivitySuggestionsFilesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivitySuggestionsFilesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivitySuggestionsFilesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
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
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  apiURL?: Maybe<Scalars['String']>;
  collectionTypes?: Maybe<Array<Maybe<SitePluginPluginOptionsCollectionTypes>>>;
  singleTypes?: Maybe<Array<Maybe<SitePluginPluginOptionsSingleTypes>>>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  configDir?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  exclude?: Maybe<SitePluginPluginOptionsExclude>;
};

export type SitePluginPluginOptionsCollectionTypes = {
  name?: Maybe<Scalars['String']>;
  api?: Maybe<SitePluginPluginOptionsCollectionTypesApi>;
  endpoint?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsCollectionTypesApi = {
  qs?: Maybe<SitePluginPluginOptionsCollectionTypesApiQs>;
};

export type SitePluginPluginOptionsCollectionTypesApiQs = {
  _limit?: Maybe<Scalars['Int']>;
  _locale?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSingleTypes = {
  name?: Maybe<Scalars['String']>;
  api?: Maybe<SitePluginPluginOptionsSingleTypesApi>;
};

export type SitePluginPluginOptionsSingleTypesApi = {
  qs?: Maybe<SitePluginPluginOptionsSingleTypesApiQs>;
};

export type SitePluginPluginOptionsSingleTypesApiQs = {
  _locale?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsExclude = {
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  strapiContentpage?: Maybe<StrapiContentpage>;
  allStrapiContentpage: StrapiContentpageConnection;
  navigation?: Maybe<Navigation>;
  allNavigation: NavigationConnection;
  strapiFrontPage?: Maybe<StrapiFrontPage>;
  allStrapiFrontPage: StrapiFrontPageConnection;
  strapiActivityGroup?: Maybe<StrapiActivityGroup>;
  allStrapiActivityGroup: StrapiActivityGroupConnection;
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
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


export type QueryStrapiContentpageArgs = {
  content?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localizations?: Maybe<StrapiContentpageLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllStrapiContentpageArgs = {
  filter?: Maybe<StrapiContentpageFilterInput>;
  sort?: Maybe<StrapiContentpageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryNavigationArgs = {
  items?: Maybe<NavigationItemsFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllNavigationArgs = {
  filter?: Maybe<NavigationFilterInput>;
  sort?: Maybe<NavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiFrontPageArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  navigation?: Maybe<StrapiFrontPageNavigationFilterListInput>;
  localizations?: Maybe<StrapiFrontPageLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllStrapiFrontPageArgs = {
  filter?: Maybe<StrapiFrontPageFilterInput>;
  sort?: Maybe<StrapiFrontPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiActivityGroupArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  subactivity_term?: Maybe<StrapiActivityGroupSubactivity_TermFilterInput>;
  subactivitygroup_term?: Maybe<StrapiActivityGroupSubactivitygroup_TermFilterInput>;
  activitygroup_term?: Maybe<StrapiActivityGroupActivitygroup_TermFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  age_group?: Maybe<StrapiActivityGroupAge_GroupFilterInput>;
  parent_activity_group?: Maybe<IntQueryOperatorInput>;
  activity_group_category?: Maybe<StrapiActivityGroupActivity_Group_CategoryFilterInput>;
  main_image?: Maybe<StrapiActivityGroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityGroupLogoFilterInput>;
  files?: Maybe<StrapiActivityGroupFilesFilterListInput>;
  activities?: Maybe<StrapiActivityGroupActivitiesFilterListInput>;
  localizations?: Maybe<StrapiActivityGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllStrapiActivityGroupArgs = {
  filter?: Maybe<StrapiActivityGroupFilterInput>;
  sort?: Maybe<StrapiActivityGroupSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiAgeGroupArgs = {
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllStrapiAgeGroupArgs = {
  filter?: Maybe<StrapiAgeGroupFilterInput>;
  sort?: Maybe<StrapiAgeGroupSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiActivityArgs = {
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
  logo?: Maybe<StrapiActivityLogoFilterInput>;
  files?: Maybe<StrapiActivityFilesFilterListInput>;
  images?: Maybe<StrapiActivityImagesFilterListInput>;
  group_sizes?: Maybe<StrapiActivityGroup_SizesFilterListInput>;
  skill_areas?: Maybe<StrapiActivitySkill_AreasFilterListInput>;
  educational_objectives?: Maybe<StrapiActivityEducational_ObjectivesFilterListInput>;
  leader_skills?: Maybe<StrapiActivityLeader_SkillsFilterListInput>;
  suggestions?: Maybe<StrapiActivitySuggestionsFilterListInput>;
  locations?: Maybe<StrapiActivityLocationsFilterListInput>;
  localizations?: Maybe<StrapiActivityLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  siteUrl?: Maybe<StringQueryOperatorInput>;
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
  | 'siteMetadata___siteUrl'
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

export type SitePageContextFilterInput = {
  data?: Maybe<SitePageContextDataFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  localizations?: Maybe<SitePageContextDataLocalizationsFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<SitePageContextDataLinksFilterListInput>;
  logo?: Maybe<SitePageContextDataLogoFilterInput>;
  maximum_age?: Maybe<IntQueryOperatorInput>;
  minimum_age?: Maybe<IntQueryOperatorInput>;
  subactivitygroup_term?: Maybe<SitePageContextDataSubactivitygroup_TermFilterInput>;
  main_image?: Maybe<SitePageContextDataMain_ImageFilterInput>;
  activity_groups?: Maybe<SitePageContextDataActivity_GroupsFilterListInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  activities?: Maybe<SitePageContextDataActivitiesFilterListInput>;
  activity_group_category?: Maybe<SitePageContextDataActivity_Group_CategoryFilterInput>;
  activitygroup_term?: Maybe<SitePageContextDataActivitygroup_TermFilterInput>;
  subactivity_term?: Maybe<SitePageContextDataSubactivity_TermFilterInput>;
  duration?: Maybe<SitePageContextDataDurationFilterInput>;
  educational_objectives?: Maybe<SitePageContextDataEducational_ObjectivesFilterListInput>;
  files?: Maybe<SitePageContextDataFilesFilterListInput>;
  group_sizes?: Maybe<SitePageContextDataGroup_SizesFilterListInput>;
  images?: Maybe<SitePageContextDataImagesFilterListInput>;
  leader_skills?: Maybe<SitePageContextDataLeader_SkillsFilterListInput>;
  leader_tasks?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<SitePageContextDataLocationsFilterListInput>;
  preparation_duration?: Maybe<SitePageContextDataPreparation_DurationFilterInput>;
  skill_areas?: Maybe<SitePageContextDataSkill_AreasFilterListInput>;
  suggestions?: Maybe<SitePageContextDataSuggestionsFilterListInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataLocalizationsFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataLocalizationsFilterInput>;
};

export type SitePageContextDataLocalizationsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataLinksFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataLinksFilterInput>;
};

export type SitePageContextDataLinksFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataLogoFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<SitePageContextDataLogoFormatsFilterInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataLogoFormatsFilterInput = {
  large?: Maybe<SitePageContextDataLogoFormatsLargeFilterInput>;
  medium?: Maybe<SitePageContextDataLogoFormatsMediumFilterInput>;
  small?: Maybe<SitePageContextDataLogoFormatsSmallFilterInput>;
  thumbnail?: Maybe<SitePageContextDataLogoFormatsThumbnailFilterInput>;
};

export type SitePageContextDataLogoFormatsLargeFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataLogoFormatsMediumFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataLogoFormatsSmallFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataLogoFormatsThumbnailFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataSubactivitygroup_TermFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataMain_ImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<SitePageContextDataMain_ImageFormatsFilterInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataMain_ImageFormatsFilterInput = {
  large?: Maybe<SitePageContextDataMain_ImageFormatsLargeFilterInput>;
  medium?: Maybe<SitePageContextDataMain_ImageFormatsMediumFilterInput>;
  small?: Maybe<SitePageContextDataMain_ImageFormatsSmallFilterInput>;
  thumbnail?: Maybe<SitePageContextDataMain_ImageFormatsThumbnailFilterInput>;
};

export type SitePageContextDataMain_ImageFormatsLargeFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataMain_ImageFormatsMediumFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataMain_ImageFormatsSmallFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataMain_ImageFormatsThumbnailFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataActivity_GroupsFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataActivity_GroupsFilterInput>;
};

export type SitePageContextDataActivity_GroupsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataActivitiesFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataActivitiesFilterInput>;
};

export type SitePageContextDataActivitiesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataActivity_Group_CategoryFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataActivitygroup_TermFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataSubactivity_TermFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataDurationFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataEducational_ObjectivesFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataEducational_ObjectivesFilterInput>;
};

export type SitePageContextDataEducational_ObjectivesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataFilesFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataFilesFilterInput>;
};

export type SitePageContextDataFilesFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataGroup_SizesFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataGroup_SizesFilterInput>;
};

export type SitePageContextDataGroup_SizesFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataImagesFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataImagesFilterInput>;
};

export type SitePageContextDataImagesFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<SitePageContextDataImagesFormatsFilterInput>;
};

export type SitePageContextDataImagesFormatsFilterInput = {
  large?: Maybe<SitePageContextDataImagesFormatsLargeFilterInput>;
  medium?: Maybe<SitePageContextDataImagesFormatsMediumFilterInput>;
  small?: Maybe<SitePageContextDataImagesFormatsSmallFilterInput>;
  thumbnail?: Maybe<SitePageContextDataImagesFormatsThumbnailFilterInput>;
};

export type SitePageContextDataImagesFormatsLargeFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataImagesFormatsMediumFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataImagesFormatsSmallFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataImagesFormatsThumbnailFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataLeader_SkillsFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataLeader_SkillsFilterInput>;
};

export type SitePageContextDataLeader_SkillsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataLocationsFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataLocationsFilterInput>;
};

export type SitePageContextDataLocationsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataPreparation_DurationFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataSkill_AreasFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataSkill_AreasFilterInput>;
};

export type SitePageContextDataSkill_AreasFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextDataSuggestionsFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataSuggestionsFilterInput>;
};

export type SitePageContextDataSuggestionsFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  from_web?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  like_count?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  links?: Maybe<SitePageContextDataSuggestionsLinksFilterListInput>;
  files?: Maybe<SitePageContextDataSuggestionsFilesFilterListInput>;
};

export type SitePageContextDataSuggestionsLinksFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataSuggestionsLinksFilterInput>;
};

export type SitePageContextDataSuggestionsLinksFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextDataSuggestionsFilesFilterListInput = {
  elemMatch?: Maybe<SitePageContextDataSuggestionsFilesFilterInput>;
};

export type SitePageContextDataSuggestionsFilesFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
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
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  apiURL?: Maybe<StringQueryOperatorInput>;
  collectionTypes?: Maybe<SitePluginPluginOptionsCollectionTypesFilterListInput>;
  singleTypes?: Maybe<SitePluginPluginOptionsSingleTypesFilterListInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  exclude?: Maybe<SitePluginPluginOptionsExcludeFilterInput>;
};

export type SitePluginPluginOptionsCollectionTypesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsCollectionTypesFilterInput>;
};

export type SitePluginPluginOptionsCollectionTypesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  api?: Maybe<SitePluginPluginOptionsCollectionTypesApiFilterInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsCollectionTypesApiFilterInput = {
  qs?: Maybe<SitePluginPluginOptionsCollectionTypesApiQsFilterInput>;
};

export type SitePluginPluginOptionsCollectionTypesApiQsFilterInput = {
  _limit?: Maybe<IntQueryOperatorInput>;
  _locale?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSingleTypesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsSingleTypesFilterInput>;
};

export type SitePluginPluginOptionsSingleTypesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  api?: Maybe<SitePluginPluginOptionsSingleTypesApiFilterInput>;
};

export type SitePluginPluginOptionsSingleTypesApiFilterInput = {
  qs?: Maybe<SitePluginPluginOptionsSingleTypesApiQsFilterInput>;
};

export type SitePluginPluginOptionsSingleTypesApiQsFilterInput = {
  _locale?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsExcludeFilterInput = {
  types?: Maybe<StringQueryOperatorInput>;
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
  | 'isCreatedByStatefulCreatePages'
  | 'context___data___locale'
  | 'context___data___localizations'
  | 'context___data___localizations___locale'
  | 'context___data___localizations___id'
  | 'context___data___title'
  | 'context___data___updated_at'
  | 'context___data___created_at'
  | 'context___data___published_at'
  | 'context___data___id'
  | 'context___data___strapiId'
  | 'context___data___ingress'
  | 'context___data___links'
  | 'context___data___links___description'
  | 'context___data___links___id'
  | 'context___data___links___url'
  | 'context___data___logo___width'
  | 'context___data___logo___url'
  | 'context___data___logo___size'
  | 'context___data___logo___name'
  | 'context___data___logo___mime'
  | 'context___data___logo___height'
  | 'context___data___logo___id'
  | 'context___data___maximum_age'
  | 'context___data___minimum_age'
  | 'context___data___subactivitygroup_term___locale'
  | 'context___data___subactivitygroup_term___name'
  | 'context___data___subactivitygroup_term___plural'
  | 'context___data___subactivitygroup_term___singular'
  | 'context___data___main_image___width'
  | 'context___data___main_image___url'
  | 'context___data___main_image___size'
  | 'context___data___main_image___name'
  | 'context___data___main_image___mime'
  | 'context___data___main_image___height'
  | 'context___data___main_image___id'
  | 'context___data___activity_groups'
  | 'context___data___activity_groups___id'
  | 'context___data___mandatory'
  | 'context___data___activities'
  | 'context___data___activities___id'
  | 'context___data___activity_group_category___name'
  | 'context___data___activitygroup_term___name'
  | 'context___data___activitygroup_term___plural'
  | 'context___data___activitygroup_term___singular'
  | 'context___data___subactivity_term___name'
  | 'context___data___subactivity_term___plural'
  | 'context___data___subactivity_term___singular'
  | 'context___data___duration___locale'
  | 'context___data___duration___name'
  | 'context___data___duration___slug'
  | 'context___data___duration___id'
  | 'context___data___educational_objectives'
  | 'context___data___educational_objectives___id'
  | 'context___data___educational_objectives___locale'
  | 'context___data___educational_objectives___name'
  | 'context___data___educational_objectives___slug'
  | 'context___data___files'
  | 'context___data___files___url'
  | 'context___data___files___size'
  | 'context___data___files___name'
  | 'context___data___files___mime'
  | 'context___data___files___id'
  | 'context___data___group_sizes'
  | 'context___data___group_sizes___slug'
  | 'context___data___group_sizes___name'
  | 'context___data___group_sizes___locale'
  | 'context___data___group_sizes___id'
  | 'context___data___images'
  | 'context___data___images___width'
  | 'context___data___images___url'
  | 'context___data___images___size'
  | 'context___data___images___name'
  | 'context___data___images___mime'
  | 'context___data___images___height'
  | 'context___data___leader_skills'
  | 'context___data___leader_skills___id'
  | 'context___data___leader_skills___locale'
  | 'context___data___leader_skills___name'
  | 'context___data___leader_skills___slug'
  | 'context___data___leader_tasks'
  | 'context___data___locations'
  | 'context___data___locations___slug'
  | 'context___data___locations___name'
  | 'context___data___locations___locale'
  | 'context___data___locations___id'
  | 'context___data___preparation_duration___slug'
  | 'context___data___preparation_duration___name'
  | 'context___data___preparation_duration___locale'
  | 'context___data___preparation_duration___id'
  | 'context___data___skill_areas'
  | 'context___data___skill_areas___slug'
  | 'context___data___skill_areas___name'
  | 'context___data___skill_areas___locale'
  | 'context___data___skill_areas___id'
  | 'context___data___suggestions'
  | 'context___data___suggestions___author'
  | 'context___data___suggestions___content'
  | 'context___data___suggestions___from_web'
  | 'context___data___suggestions___id'
  | 'context___data___suggestions___like_count'
  | 'context___data___suggestions___locale'
  | 'context___data___suggestions___title'
  | 'context___data___suggestions___published_at'
  | 'context___data___suggestions___links'
  | 'context___data___suggestions___files'
  | 'context___data___main_text'
  | 'context___type'
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
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___apiURL'
  | 'pluginCreator___pluginOptions___collectionTypes'
  | 'pluginCreator___pluginOptions___collectionTypes___name'
  | 'pluginCreator___pluginOptions___collectionTypes___endpoint'
  | 'pluginCreator___pluginOptions___singleTypes'
  | 'pluginCreator___pluginOptions___singleTypes___name'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___configDir'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___exclude___types'
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
  | 'componentPath';

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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
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

export type StrapiContentpageLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiContentpageLocalizationsFilterInput>;
};

export type StrapiContentpageLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiContentpageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiContentpageEdge>;
  nodes: Array<StrapiContentpage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiContentpageGroupConnection>;
};


export type StrapiContentpageConnectionDistinctArgs = {
  field: StrapiContentpageFieldsEnum;
};


export type StrapiContentpageConnectionMaxArgs = {
  field: StrapiContentpageFieldsEnum;
};


export type StrapiContentpageConnectionMinArgs = {
  field: StrapiContentpageFieldsEnum;
};


export type StrapiContentpageConnectionSumArgs = {
  field: StrapiContentpageFieldsEnum;
};


export type StrapiContentpageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiContentpageFieldsEnum;
};

export type StrapiContentpageEdge = {
  next?: Maybe<StrapiContentpage>;
  node: StrapiContentpage;
  previous?: Maybe<StrapiContentpage>;
};

export type StrapiContentpageFieldsEnum =
  | 'content'
  | 'title'
  | 'ingress'
  | 'main_text'
  | 'meta_description'
  | 'meta_title'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
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

export type StrapiContentpageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiContentpageEdge>;
  nodes: Array<StrapiContentpage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiContentpageFilterInput = {
  content?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localizations?: Maybe<StrapiContentpageLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiContentpageSortInput = {
  fields?: Maybe<Array<Maybe<StrapiContentpageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type NavigationItemsFilterListInput = {
  elemMatch?: Maybe<NavigationItemsFilterInput>;
};

export type NavigationItemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  subitems?: Maybe<NavigationItemsSubitemsFilterListInput>;
};

export type NavigationItemsSubitemsFilterListInput = {
  elemMatch?: Maybe<NavigationItemsSubitemsFilterInput>;
};

export type NavigationItemsSubitemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type NavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<NavigationEdge>;
  nodes: Array<Navigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<NavigationGroupConnection>;
};


export type NavigationConnectionDistinctArgs = {
  field: NavigationFieldsEnum;
};


export type NavigationConnectionMaxArgs = {
  field: NavigationFieldsEnum;
};


export type NavigationConnectionMinArgs = {
  field: NavigationFieldsEnum;
};


export type NavigationConnectionSumArgs = {
  field: NavigationFieldsEnum;
};


export type NavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: NavigationFieldsEnum;
};

export type NavigationEdge = {
  next?: Maybe<Navigation>;
  node: Navigation;
  previous?: Maybe<Navigation>;
};

export type NavigationFieldsEnum =
  | 'items'
  | 'items___title'
  | 'items___path'
  | 'items___subitems'
  | 'items___subitems___title'
  | 'items___subitems___path'
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

export type NavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<NavigationEdge>;
  nodes: Array<Navigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type NavigationFilterInput = {
  items?: Maybe<NavigationItemsFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NavigationSortInput = {
  fields?: Maybe<Array<Maybe<NavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiFrontPageNavigationFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageNavigationFilterInput>;
};

export type StrapiFrontPageNavigationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<StrapiFrontPageNavigationPageFilterInput>;
  subnavigation?: Maybe<StrapiFrontPageNavigationSubnavigationFilterListInput>;
};

export type StrapiFrontPageNavigationPageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiFrontPageNavigationSubnavigationFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageNavigationSubnavigationFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<StrapiFrontPageNavigationSubnavigationPageFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationPageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiFrontPageLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageLocalizationsFilterInput>;
};

export type StrapiFrontPageLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiFrontPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiFrontPageEdge>;
  nodes: Array<StrapiFrontPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiFrontPageGroupConnection>;
};


export type StrapiFrontPageConnectionDistinctArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageConnectionMaxArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageConnectionMinArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageConnectionSumArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiFrontPageFieldsEnum;
};

export type StrapiFrontPageEdge = {
  next?: Maybe<StrapiFrontPage>;
  node: StrapiFrontPage;
  previous?: Maybe<StrapiFrontPage>;
};

export type StrapiFrontPageFieldsEnum =
  | 'title'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
  | 'navigation'
  | 'navigation___id'
  | 'navigation___title'
  | 'navigation___page___id'
  | 'navigation___page___title'
  | 'navigation___page___ingress'
  | 'navigation___page___main_text'
  | 'navigation___page___meta_description'
  | 'navigation___page___meta_title'
  | 'navigation___page___locale'
  | 'navigation___page___published_at'
  | 'navigation___page___created_at'
  | 'navigation___page___updated_at'
  | 'navigation___subnavigation'
  | 'navigation___subnavigation___id'
  | 'navigation___subnavigation___title'
  | 'navigation___subnavigation___page___id'
  | 'navigation___subnavigation___page___title'
  | 'navigation___subnavigation___page___main_text'
  | 'navigation___subnavigation___page___locale'
  | 'navigation___subnavigation___page___published_at'
  | 'navigation___subnavigation___page___created_at'
  | 'navigation___subnavigation___page___updated_at'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
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

export type StrapiFrontPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiFrontPageEdge>;
  nodes: Array<StrapiFrontPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  navigation?: Maybe<StrapiFrontPageNavigationFilterListInput>;
  localizations?: Maybe<StrapiFrontPageLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiFrontPageSortInput = {
  fields?: Maybe<Array<Maybe<StrapiFrontPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiActivityGroupSubactivity_TermFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupSubactivitygroup_TermFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupActivitygroup_TermFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  singular?: Maybe<StringQueryOperatorInput>;
  plural?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupFilterInput = {
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
  links?: Maybe<StrapiActivityGroupAge_GroupLinksFilterListInput>;
  main_image?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityGroupAge_GroupLogoFilterInput>;
};

export type StrapiActivityGroupAge_GroupLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupAge_GroupLinksFilterInput>;
};

export type StrapiActivityGroupAge_GroupLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsFilterInput>;
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

export type StrapiActivityGroupAge_GroupMain_ImageFormatsFilterInput = {
  large?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivityGroupAge_GroupMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsFilterInput>;
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

export type StrapiActivityGroupAge_GroupLogoFormatsFilterInput = {
  large?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivityGroupAge_GroupLogoFormatsThumbnailFilterInput>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupActivity_Group_CategoryFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityGroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityGroupMain_ImageFormatsFilterInput>;
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

export type StrapiActivityGroupMain_ImageFormatsFilterInput = {
  thumbnail?: Maybe<StrapiActivityGroupMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiActivityGroupMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityGroupLogoFormatsFilterInput>;
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

export type StrapiActivityGroupLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiActivityGroupLogoFormatsThumbnailFilterInput>;
  small?: Maybe<StrapiActivityGroupLogoFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityGroupLogoFormatsMediumFilterInput>;
  large?: Maybe<StrapiActivityGroupLogoFormatsLargeFilterInput>;
};

export type StrapiActivityGroupLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupLogoFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupLogoFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupLogoFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupFilesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupFilesFilterInput>;
};

export type StrapiActivityGroupFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
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

export type StrapiActivityGroupActivitiesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupActivitiesFilterInput>;
};

export type StrapiActivityGroupActivitiesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  leader_tasks?: Maybe<StringQueryOperatorInput>;
  activity_term?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  activity_group?: Maybe<IntQueryOperatorInput>;
  age_group?: Maybe<IntQueryOperatorInput>;
  preparation_duration?: Maybe<IntQueryOperatorInput>;
  logo?: Maybe<StrapiActivityGroupActivitiesLogoFilterInput>;
  files?: Maybe<StrapiActivityGroupActivitiesFilesFilterListInput>;
  images?: Maybe<StrapiActivityGroupActivitiesImagesFilterListInput>;
};

export type StrapiActivityGroupActivitiesLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityGroupActivitiesLogoFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivityGroupActivitiesLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiActivityGroupActivitiesLogoFormatsThumbnailFilterInput>;
};

export type StrapiActivityGroupActivitiesLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupActivitiesFilesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupActivitiesFilesFilterInput>;
};

export type StrapiActivityGroupActivitiesFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
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

export type StrapiActivityGroupActivitiesImagesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupActivitiesImagesFilterInput>;
};

export type StrapiActivityGroupActivitiesImagesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityGroupActivitiesImagesFormatsFilterInput>;
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

export type StrapiActivityGroupActivitiesImagesFormatsFilterInput = {
  large?: Maybe<StrapiActivityGroupActivitiesImagesFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityGroupActivitiesImagesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityGroupActivitiesImagesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivityGroupActivitiesImagesFormatsThumbnailFilterInput>;
};

export type StrapiActivityGroupActivitiesImagesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupActivitiesImagesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupActivitiesImagesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupActivitiesImagesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupLocalizationsFilterInput>;
};

export type StrapiActivityGroupLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiActivityGroupEdge>;
  nodes: Array<StrapiActivityGroup>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiActivityGroupGroupConnection>;
};


export type StrapiActivityGroupConnectionDistinctArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupConnectionMaxArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupConnectionMinArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupConnectionSumArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiActivityGroupFieldsEnum;
};

export type StrapiActivityGroupEdge = {
  next?: Maybe<StrapiActivityGroup>;
  node: StrapiActivityGroup;
  previous?: Maybe<StrapiActivityGroup>;
};

export type StrapiActivityGroupFieldsEnum =
  | 'title'
  | 'ingress'
  | 'content'
  | 'wp_guid'
  | 'mandatory'
  | 'subactivity_term___id'
  | 'subactivity_term___name'
  | 'subactivity_term___singular'
  | 'subactivity_term___plural'
  | 'subactivity_term___locale'
  | 'subactivity_term___created_at'
  | 'subactivity_term___updated_at'
  | 'subactivitygroup_term___id'
  | 'subactivitygroup_term___name'
  | 'subactivitygroup_term___singular'
  | 'subactivitygroup_term___plural'
  | 'subactivitygroup_term___locale'
  | 'subactivitygroup_term___created_at'
  | 'subactivitygroup_term___updated_at'
  | 'activitygroup_term___id'
  | 'activitygroup_term___name'
  | 'activitygroup_term___singular'
  | 'activitygroup_term___plural'
  | 'activitygroup_term___locale'
  | 'activitygroup_term___created_at'
  | 'activitygroup_term___updated_at'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
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
  | 'parent_activity_group'
  | 'activity_group_category___id'
  | 'activity_group_category___name'
  | 'activity_group_category___locale'
  | 'activity_group_category___created_at'
  | 'activity_group_category___updated_at'
  | 'activity_group_category___wp_guid'
  | 'main_image___id'
  | 'main_image___name'
  | 'main_image___width'
  | 'main_image___height'
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
  | 'logo___formats___thumbnail___ext'
  | 'logo___formats___thumbnail___url'
  | 'logo___formats___thumbnail___hash'
  | 'logo___formats___thumbnail___mime'
  | 'logo___formats___thumbnail___name'
  | 'logo___formats___thumbnail___size'
  | 'logo___formats___thumbnail___width'
  | 'logo___formats___thumbnail___height'
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
  | 'logo___formats___large___ext'
  | 'logo___formats___large___url'
  | 'logo___formats___large___hash'
  | 'logo___formats___large___mime'
  | 'logo___formats___large___name'
  | 'logo___formats___large___size'
  | 'logo___formats___large___width'
  | 'logo___formats___large___height'
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
  | 'files'
  | 'files___id'
  | 'files___name'
  | 'files___hash'
  | 'files___ext'
  | 'files___mime'
  | 'files___size'
  | 'files___url'
  | 'files___provider'
  | 'files___created_at'
  | 'files___updated_at'
  | 'files___localFile___sourceInstanceName'
  | 'files___localFile___absolutePath'
  | 'files___localFile___relativePath'
  | 'files___localFile___extension'
  | 'files___localFile___size'
  | 'files___localFile___prettySize'
  | 'files___localFile___modifiedTime'
  | 'files___localFile___accessTime'
  | 'files___localFile___changeTime'
  | 'files___localFile___birthTime'
  | 'files___localFile___root'
  | 'files___localFile___dir'
  | 'files___localFile___base'
  | 'files___localFile___ext'
  | 'files___localFile___name'
  | 'files___localFile___relativeDirectory'
  | 'files___localFile___dev'
  | 'files___localFile___mode'
  | 'files___localFile___nlink'
  | 'files___localFile___uid'
  | 'files___localFile___gid'
  | 'files___localFile___rdev'
  | 'files___localFile___ino'
  | 'files___localFile___atimeMs'
  | 'files___localFile___mtimeMs'
  | 'files___localFile___ctimeMs'
  | 'files___localFile___atime'
  | 'files___localFile___mtime'
  | 'files___localFile___ctime'
  | 'files___localFile___birthtime'
  | 'files___localFile___birthtimeMs'
  | 'files___localFile___blksize'
  | 'files___localFile___blocks'
  | 'files___localFile___url'
  | 'files___localFile___publicURL'
  | 'files___localFile___childrenImageSharp'
  | 'files___localFile___childrenImageSharp___gatsbyImageData'
  | 'files___localFile___childrenImageSharp___id'
  | 'files___localFile___childrenImageSharp___children'
  | 'files___localFile___childImageSharp___gatsbyImageData'
  | 'files___localFile___childImageSharp___id'
  | 'files___localFile___childImageSharp___children'
  | 'files___localFile___id'
  | 'files___localFile___parent___id'
  | 'files___localFile___parent___children'
  | 'files___localFile___children'
  | 'files___localFile___children___id'
  | 'files___localFile___children___children'
  | 'files___localFile___internal___content'
  | 'files___localFile___internal___contentDigest'
  | 'files___localFile___internal___description'
  | 'files___localFile___internal___fieldOwners'
  | 'files___localFile___internal___ignoreType'
  | 'files___localFile___internal___mediaType'
  | 'files___localFile___internal___owner'
  | 'files___localFile___internal___type'
  | 'activities'
  | 'activities___id'
  | 'activities___title'
  | 'activities___content'
  | 'activities___mandatory'
  | 'activities___ingress'
  | 'activities___wp_guid'
  | 'activities___leader_tasks'
  | 'activities___activity_term'
  | 'activities___duration'
  | 'activities___locale'
  | 'activities___published_at'
  | 'activities___created_at'
  | 'activities___updated_at'
  | 'activities___activity_group'
  | 'activities___age_group'
  | 'activities___preparation_duration'
  | 'activities___logo___id'
  | 'activities___logo___name'
  | 'activities___logo___width'
  | 'activities___logo___height'
  | 'activities___logo___hash'
  | 'activities___logo___ext'
  | 'activities___logo___mime'
  | 'activities___logo___size'
  | 'activities___logo___url'
  | 'activities___logo___provider'
  | 'activities___logo___created_at'
  | 'activities___logo___updated_at'
  | 'activities___logo___localFile___sourceInstanceName'
  | 'activities___logo___localFile___absolutePath'
  | 'activities___logo___localFile___relativePath'
  | 'activities___logo___localFile___extension'
  | 'activities___logo___localFile___size'
  | 'activities___logo___localFile___prettySize'
  | 'activities___logo___localFile___modifiedTime'
  | 'activities___logo___localFile___accessTime'
  | 'activities___logo___localFile___changeTime'
  | 'activities___logo___localFile___birthTime'
  | 'activities___logo___localFile___root'
  | 'activities___logo___localFile___dir'
  | 'activities___logo___localFile___base'
  | 'activities___logo___localFile___ext'
  | 'activities___logo___localFile___name'
  | 'activities___logo___localFile___relativeDirectory'
  | 'activities___logo___localFile___dev'
  | 'activities___logo___localFile___mode'
  | 'activities___logo___localFile___nlink'
  | 'activities___logo___localFile___uid'
  | 'activities___logo___localFile___gid'
  | 'activities___logo___localFile___rdev'
  | 'activities___logo___localFile___ino'
  | 'activities___logo___localFile___atimeMs'
  | 'activities___logo___localFile___mtimeMs'
  | 'activities___logo___localFile___ctimeMs'
  | 'activities___logo___localFile___atime'
  | 'activities___logo___localFile___mtime'
  | 'activities___logo___localFile___ctime'
  | 'activities___logo___localFile___birthtime'
  | 'activities___logo___localFile___birthtimeMs'
  | 'activities___logo___localFile___blksize'
  | 'activities___logo___localFile___blocks'
  | 'activities___logo___localFile___url'
  | 'activities___logo___localFile___publicURL'
  | 'activities___logo___localFile___childrenImageSharp'
  | 'activities___logo___localFile___id'
  | 'activities___logo___localFile___children'
  | 'activities___files'
  | 'activities___files___id'
  | 'activities___files___name'
  | 'activities___files___hash'
  | 'activities___files___ext'
  | 'activities___files___mime'
  | 'activities___files___size'
  | 'activities___files___url'
  | 'activities___files___provider'
  | 'activities___files___created_at'
  | 'activities___files___updated_at'
  | 'activities___files___localFile___sourceInstanceName'
  | 'activities___files___localFile___absolutePath'
  | 'activities___files___localFile___relativePath'
  | 'activities___files___localFile___extension'
  | 'activities___files___localFile___size'
  | 'activities___files___localFile___prettySize'
  | 'activities___files___localFile___modifiedTime'
  | 'activities___files___localFile___accessTime'
  | 'activities___files___localFile___changeTime'
  | 'activities___files___localFile___birthTime'
  | 'activities___files___localFile___root'
  | 'activities___files___localFile___dir'
  | 'activities___files___localFile___base'
  | 'activities___files___localFile___ext'
  | 'activities___files___localFile___name'
  | 'activities___files___localFile___relativeDirectory'
  | 'activities___files___localFile___dev'
  | 'activities___files___localFile___mode'
  | 'activities___files___localFile___nlink'
  | 'activities___files___localFile___uid'
  | 'activities___files___localFile___gid'
  | 'activities___files___localFile___rdev'
  | 'activities___files___localFile___ino'
  | 'activities___files___localFile___atimeMs'
  | 'activities___files___localFile___mtimeMs'
  | 'activities___files___localFile___ctimeMs'
  | 'activities___files___localFile___atime'
  | 'activities___files___localFile___mtime'
  | 'activities___files___localFile___ctime'
  | 'activities___files___localFile___birthtime'
  | 'activities___files___localFile___birthtimeMs'
  | 'activities___files___localFile___blksize'
  | 'activities___files___localFile___blocks'
  | 'activities___files___localFile___url'
  | 'activities___files___localFile___publicURL'
  | 'activities___files___localFile___childrenImageSharp'
  | 'activities___files___localFile___id'
  | 'activities___files___localFile___children'
  | 'activities___images'
  | 'activities___images___id'
  | 'activities___images___name'
  | 'activities___images___width'
  | 'activities___images___height'
  | 'activities___images___hash'
  | 'activities___images___ext'
  | 'activities___images___mime'
  | 'activities___images___size'
  | 'activities___images___url'
  | 'activities___images___provider'
  | 'activities___images___created_at'
  | 'activities___images___updated_at'
  | 'activities___images___localFile___sourceInstanceName'
  | 'activities___images___localFile___absolutePath'
  | 'activities___images___localFile___relativePath'
  | 'activities___images___localFile___extension'
  | 'activities___images___localFile___size'
  | 'activities___images___localFile___prettySize'
  | 'activities___images___localFile___modifiedTime'
  | 'activities___images___localFile___accessTime'
  | 'activities___images___localFile___changeTime'
  | 'activities___images___localFile___birthTime'
  | 'activities___images___localFile___root'
  | 'activities___images___localFile___dir'
  | 'activities___images___localFile___base'
  | 'activities___images___localFile___ext'
  | 'activities___images___localFile___name'
  | 'activities___images___localFile___relativeDirectory'
  | 'activities___images___localFile___dev'
  | 'activities___images___localFile___mode'
  | 'activities___images___localFile___nlink'
  | 'activities___images___localFile___uid'
  | 'activities___images___localFile___gid'
  | 'activities___images___localFile___rdev'
  | 'activities___images___localFile___ino'
  | 'activities___images___localFile___atimeMs'
  | 'activities___images___localFile___mtimeMs'
  | 'activities___images___localFile___ctimeMs'
  | 'activities___images___localFile___atime'
  | 'activities___images___localFile___mtime'
  | 'activities___images___localFile___ctime'
  | 'activities___images___localFile___birthtime'
  | 'activities___images___localFile___birthtimeMs'
  | 'activities___images___localFile___blksize'
  | 'activities___images___localFile___blocks'
  | 'activities___images___localFile___url'
  | 'activities___images___localFile___publicURL'
  | 'activities___images___localFile___childrenImageSharp'
  | 'activities___images___localFile___id'
  | 'activities___images___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
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

export type StrapiActivityGroupGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiActivityGroupEdge>;
  nodes: Array<StrapiActivityGroup>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  mandatory?: Maybe<BooleanQueryOperatorInput>;
  subactivity_term?: Maybe<StrapiActivityGroupSubactivity_TermFilterInput>;
  subactivitygroup_term?: Maybe<StrapiActivityGroupSubactivitygroup_TermFilterInput>;
  activitygroup_term?: Maybe<StrapiActivityGroupActivitygroup_TermFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  age_group?: Maybe<StrapiActivityGroupAge_GroupFilterInput>;
  parent_activity_group?: Maybe<IntQueryOperatorInput>;
  activity_group_category?: Maybe<StrapiActivityGroupActivity_Group_CategoryFilterInput>;
  main_image?: Maybe<StrapiActivityGroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityGroupLogoFilterInput>;
  files?: Maybe<StrapiActivityGroupFilesFilterListInput>;
  activities?: Maybe<StrapiActivityGroupActivitiesFilterListInput>;
  localizations?: Maybe<StrapiActivityGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiActivityGroupSortInput = {
  fields?: Maybe<Array<Maybe<StrapiActivityGroupFieldsEnum>>>;
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
  parent_activity_group?: Maybe<IntQueryOperatorInput>;
  activity_group_category?: Maybe<IntQueryOperatorInput>;
  main_image?: Maybe<StrapiAgeGroupActivity_GroupsMain_ImageFilterInput>;
  logo?: Maybe<StrapiAgeGroupActivity_GroupsLogoFilterInput>;
  files?: Maybe<StrapiAgeGroupActivity_GroupsFilesFilterListInput>;
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
  small?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsSmallFilterInput>;
  medium?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsMediumFilterInput>;
  large?: Maybe<StrapiAgeGroupActivity_GroupsLogoFormatsLargeFilterInput>;
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

export type StrapiAgeGroupActivity_GroupsFilesFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupActivity_GroupsFilesFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
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
  | 'activity_groups___parent_activity_group'
  | 'activity_groups___activity_group_category'
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
  | 'activity_groups___files'
  | 'activity_groups___files___id'
  | 'activity_groups___files___name'
  | 'activity_groups___files___hash'
  | 'activity_groups___files___ext'
  | 'activity_groups___files___mime'
  | 'activity_groups___files___size'
  | 'activity_groups___files___url'
  | 'activity_groups___files___provider'
  | 'activity_groups___files___created_at'
  | 'activity_groups___files___updated_at'
  | 'activity_groups___files___localFile___sourceInstanceName'
  | 'activity_groups___files___localFile___absolutePath'
  | 'activity_groups___files___localFile___relativePath'
  | 'activity_groups___files___localFile___extension'
  | 'activity_groups___files___localFile___size'
  | 'activity_groups___files___localFile___prettySize'
  | 'activity_groups___files___localFile___modifiedTime'
  | 'activity_groups___files___localFile___accessTime'
  | 'activity_groups___files___localFile___changeTime'
  | 'activity_groups___files___localFile___birthTime'
  | 'activity_groups___files___localFile___root'
  | 'activity_groups___files___localFile___dir'
  | 'activity_groups___files___localFile___base'
  | 'activity_groups___files___localFile___ext'
  | 'activity_groups___files___localFile___name'
  | 'activity_groups___files___localFile___relativeDirectory'
  | 'activity_groups___files___localFile___dev'
  | 'activity_groups___files___localFile___mode'
  | 'activity_groups___files___localFile___nlink'
  | 'activity_groups___files___localFile___uid'
  | 'activity_groups___files___localFile___gid'
  | 'activity_groups___files___localFile___rdev'
  | 'activity_groups___files___localFile___ino'
  | 'activity_groups___files___localFile___atimeMs'
  | 'activity_groups___files___localFile___mtimeMs'
  | 'activity_groups___files___localFile___ctimeMs'
  | 'activity_groups___files___localFile___atime'
  | 'activity_groups___files___localFile___mtime'
  | 'activity_groups___files___localFile___ctime'
  | 'activity_groups___files___localFile___birthtime'
  | 'activity_groups___files___localFile___birthtimeMs'
  | 'activity_groups___files___localFile___blksize'
  | 'activity_groups___files___localFile___blocks'
  | 'activity_groups___files___localFile___url'
  | 'activity_groups___files___localFile___publicURL'
  | 'activity_groups___files___localFile___childrenImageSharp'
  | 'activity_groups___files___localFile___id'
  | 'activity_groups___files___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
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

export type StrapiAgeGroupGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiAgeGroupEdge>;
  nodes: Array<StrapiAgeGroup>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupFilterInput = {
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  activity_group_category?: Maybe<IntQueryOperatorInput>;
  main_image?: Maybe<StrapiActivityActivity_GroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityActivity_GroupLogoFilterInput>;
  files?: Maybe<StrapiActivityActivity_GroupFilesFilterListInput>;
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
  small?: Maybe<StrapiActivityActivity_GroupLogoFormatsSmallFilterInput>;
  thumbnail?: Maybe<StrapiActivityActivity_GroupLogoFormatsThumbnailFilterInput>;
  medium?: Maybe<StrapiActivityActivity_GroupLogoFormatsMediumFilterInput>;
  large?: Maybe<StrapiActivityActivity_GroupLogoFormatsLargeFilterInput>;
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

export type StrapiActivityActivity_GroupFilesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityActivity_GroupFilesFilterInput>;
};

export type StrapiActivityActivity_GroupFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
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

export type StrapiActivityLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityLogoFormatsFilterInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type StrapiActivityLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiActivityLogoFormatsThumbnailFilterInput>;
};

export type StrapiActivityLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityFilesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityFilesFilterInput>;
};

export type StrapiActivityFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
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

export type StrapiActivityImagesFilterListInput = {
  elemMatch?: Maybe<StrapiActivityImagesFilterInput>;
};

export type StrapiActivityImagesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivityImagesFormatsFilterInput>;
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

export type StrapiActivityImagesFormatsFilterInput = {
  large?: Maybe<StrapiActivityImagesFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityImagesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityImagesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivityImagesFormatsThumbnailFilterInput>;
};

export type StrapiActivityImagesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityImagesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityImagesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityImagesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
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
  links?: Maybe<StrapiActivitySuggestionsLinksFilterListInput>;
  files?: Maybe<StrapiActivitySuggestionsFilesFilterListInput>;
};

export type StrapiActivitySuggestionsLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivitySuggestionsLinksFilterInput>;
};

export type StrapiActivitySuggestionsLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivitySuggestionsFilesFilterListInput = {
  elemMatch?: Maybe<StrapiActivitySuggestionsFilesFilterInput>;
};

export type StrapiActivitySuggestionsFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiActivitySuggestionsFilesFormatsFilterInput>;
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

export type StrapiActivitySuggestionsFilesFormatsFilterInput = {
  large?: Maybe<StrapiActivitySuggestionsFilesFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivitySuggestionsFilesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivitySuggestionsFilesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiActivitySuggestionsFilesFormatsThumbnailFilterInput>;
};

export type StrapiActivitySuggestionsFilesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivitySuggestionsFilesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivitySuggestionsFilesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivitySuggestionsFilesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
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
  | 'activity_group___activity_group_category'
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
  | 'activity_group___files'
  | 'activity_group___files___id'
  | 'activity_group___files___name'
  | 'activity_group___files___hash'
  | 'activity_group___files___ext'
  | 'activity_group___files___mime'
  | 'activity_group___files___size'
  | 'activity_group___files___url'
  | 'activity_group___files___provider'
  | 'activity_group___files___created_at'
  | 'activity_group___files___updated_at'
  | 'activity_group___files___localFile___sourceInstanceName'
  | 'activity_group___files___localFile___absolutePath'
  | 'activity_group___files___localFile___relativePath'
  | 'activity_group___files___localFile___extension'
  | 'activity_group___files___localFile___size'
  | 'activity_group___files___localFile___prettySize'
  | 'activity_group___files___localFile___modifiedTime'
  | 'activity_group___files___localFile___accessTime'
  | 'activity_group___files___localFile___changeTime'
  | 'activity_group___files___localFile___birthTime'
  | 'activity_group___files___localFile___root'
  | 'activity_group___files___localFile___dir'
  | 'activity_group___files___localFile___base'
  | 'activity_group___files___localFile___ext'
  | 'activity_group___files___localFile___name'
  | 'activity_group___files___localFile___relativeDirectory'
  | 'activity_group___files___localFile___dev'
  | 'activity_group___files___localFile___mode'
  | 'activity_group___files___localFile___nlink'
  | 'activity_group___files___localFile___uid'
  | 'activity_group___files___localFile___gid'
  | 'activity_group___files___localFile___rdev'
  | 'activity_group___files___localFile___ino'
  | 'activity_group___files___localFile___atimeMs'
  | 'activity_group___files___localFile___mtimeMs'
  | 'activity_group___files___localFile___ctimeMs'
  | 'activity_group___files___localFile___atime'
  | 'activity_group___files___localFile___mtime'
  | 'activity_group___files___localFile___ctime'
  | 'activity_group___files___localFile___birthtime'
  | 'activity_group___files___localFile___birthtimeMs'
  | 'activity_group___files___localFile___blksize'
  | 'activity_group___files___localFile___blocks'
  | 'activity_group___files___localFile___url'
  | 'activity_group___files___localFile___publicURL'
  | 'activity_group___files___localFile___childrenImageSharp'
  | 'activity_group___files___localFile___id'
  | 'activity_group___files___localFile___children'
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
  | 'logo___id'
  | 'logo___name'
  | 'logo___width'
  | 'logo___height'
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
  | 'files'
  | 'files___id'
  | 'files___name'
  | 'files___hash'
  | 'files___ext'
  | 'files___mime'
  | 'files___size'
  | 'files___url'
  | 'files___provider'
  | 'files___created_at'
  | 'files___updated_at'
  | 'files___localFile___sourceInstanceName'
  | 'files___localFile___absolutePath'
  | 'files___localFile___relativePath'
  | 'files___localFile___extension'
  | 'files___localFile___size'
  | 'files___localFile___prettySize'
  | 'files___localFile___modifiedTime'
  | 'files___localFile___accessTime'
  | 'files___localFile___changeTime'
  | 'files___localFile___birthTime'
  | 'files___localFile___root'
  | 'files___localFile___dir'
  | 'files___localFile___base'
  | 'files___localFile___ext'
  | 'files___localFile___name'
  | 'files___localFile___relativeDirectory'
  | 'files___localFile___dev'
  | 'files___localFile___mode'
  | 'files___localFile___nlink'
  | 'files___localFile___uid'
  | 'files___localFile___gid'
  | 'files___localFile___rdev'
  | 'files___localFile___ino'
  | 'files___localFile___atimeMs'
  | 'files___localFile___mtimeMs'
  | 'files___localFile___ctimeMs'
  | 'files___localFile___atime'
  | 'files___localFile___mtime'
  | 'files___localFile___ctime'
  | 'files___localFile___birthtime'
  | 'files___localFile___birthtimeMs'
  | 'files___localFile___blksize'
  | 'files___localFile___blocks'
  | 'files___localFile___url'
  | 'files___localFile___publicURL'
  | 'files___localFile___childrenImageSharp'
  | 'files___localFile___childrenImageSharp___gatsbyImageData'
  | 'files___localFile___childrenImageSharp___id'
  | 'files___localFile___childrenImageSharp___children'
  | 'files___localFile___childImageSharp___gatsbyImageData'
  | 'files___localFile___childImageSharp___id'
  | 'files___localFile___childImageSharp___children'
  | 'files___localFile___id'
  | 'files___localFile___parent___id'
  | 'files___localFile___parent___children'
  | 'files___localFile___children'
  | 'files___localFile___children___id'
  | 'files___localFile___children___children'
  | 'files___localFile___internal___content'
  | 'files___localFile___internal___contentDigest'
  | 'files___localFile___internal___description'
  | 'files___localFile___internal___fieldOwners'
  | 'files___localFile___internal___ignoreType'
  | 'files___localFile___internal___mediaType'
  | 'files___localFile___internal___owner'
  | 'files___localFile___internal___type'
  | 'images'
  | 'images___id'
  | 'images___name'
  | 'images___width'
  | 'images___height'
  | 'images___formats___large___ext'
  | 'images___formats___large___url'
  | 'images___formats___large___hash'
  | 'images___formats___large___mime'
  | 'images___formats___large___name'
  | 'images___formats___large___size'
  | 'images___formats___large___width'
  | 'images___formats___large___height'
  | 'images___formats___small___ext'
  | 'images___formats___small___url'
  | 'images___formats___small___hash'
  | 'images___formats___small___mime'
  | 'images___formats___small___name'
  | 'images___formats___small___size'
  | 'images___formats___small___width'
  | 'images___formats___small___height'
  | 'images___formats___medium___ext'
  | 'images___formats___medium___url'
  | 'images___formats___medium___hash'
  | 'images___formats___medium___mime'
  | 'images___formats___medium___name'
  | 'images___formats___medium___size'
  | 'images___formats___medium___width'
  | 'images___formats___medium___height'
  | 'images___formats___thumbnail___ext'
  | 'images___formats___thumbnail___url'
  | 'images___formats___thumbnail___hash'
  | 'images___formats___thumbnail___mime'
  | 'images___formats___thumbnail___name'
  | 'images___formats___thumbnail___size'
  | 'images___formats___thumbnail___width'
  | 'images___formats___thumbnail___height'
  | 'images___hash'
  | 'images___ext'
  | 'images___mime'
  | 'images___size'
  | 'images___url'
  | 'images___provider'
  | 'images___created_at'
  | 'images___updated_at'
  | 'images___localFile___sourceInstanceName'
  | 'images___localFile___absolutePath'
  | 'images___localFile___relativePath'
  | 'images___localFile___extension'
  | 'images___localFile___size'
  | 'images___localFile___prettySize'
  | 'images___localFile___modifiedTime'
  | 'images___localFile___accessTime'
  | 'images___localFile___changeTime'
  | 'images___localFile___birthTime'
  | 'images___localFile___root'
  | 'images___localFile___dir'
  | 'images___localFile___base'
  | 'images___localFile___ext'
  | 'images___localFile___name'
  | 'images___localFile___relativeDirectory'
  | 'images___localFile___dev'
  | 'images___localFile___mode'
  | 'images___localFile___nlink'
  | 'images___localFile___uid'
  | 'images___localFile___gid'
  | 'images___localFile___rdev'
  | 'images___localFile___ino'
  | 'images___localFile___atimeMs'
  | 'images___localFile___mtimeMs'
  | 'images___localFile___ctimeMs'
  | 'images___localFile___atime'
  | 'images___localFile___mtime'
  | 'images___localFile___ctime'
  | 'images___localFile___birthtime'
  | 'images___localFile___birthtimeMs'
  | 'images___localFile___blksize'
  | 'images___localFile___blocks'
  | 'images___localFile___url'
  | 'images___localFile___publicURL'
  | 'images___localFile___childrenImageSharp'
  | 'images___localFile___childrenImageSharp___gatsbyImageData'
  | 'images___localFile___childrenImageSharp___id'
  | 'images___localFile___childrenImageSharp___children'
  | 'images___localFile___childImageSharp___gatsbyImageData'
  | 'images___localFile___childImageSharp___id'
  | 'images___localFile___childImageSharp___children'
  | 'images___localFile___id'
  | 'images___localFile___parent___id'
  | 'images___localFile___parent___children'
  | 'images___localFile___children'
  | 'images___localFile___children___id'
  | 'images___localFile___children___children'
  | 'images___localFile___internal___content'
  | 'images___localFile___internal___contentDigest'
  | 'images___localFile___internal___description'
  | 'images___localFile___internal___fieldOwners'
  | 'images___localFile___internal___ignoreType'
  | 'images___localFile___internal___mediaType'
  | 'images___localFile___internal___owner'
  | 'images___localFile___internal___type'
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
  | 'suggestions___links'
  | 'suggestions___links___id'
  | 'suggestions___links___description'
  | 'suggestions___links___url'
  | 'suggestions___files'
  | 'suggestions___files___id'
  | 'suggestions___files___name'
  | 'suggestions___files___width'
  | 'suggestions___files___height'
  | 'suggestions___files___hash'
  | 'suggestions___files___ext'
  | 'suggestions___files___mime'
  | 'suggestions___files___size'
  | 'suggestions___files___url'
  | 'suggestions___files___provider'
  | 'suggestions___files___created_at'
  | 'suggestions___files___updated_at'
  | 'suggestions___files___localFile___sourceInstanceName'
  | 'suggestions___files___localFile___absolutePath'
  | 'suggestions___files___localFile___relativePath'
  | 'suggestions___files___localFile___extension'
  | 'suggestions___files___localFile___size'
  | 'suggestions___files___localFile___prettySize'
  | 'suggestions___files___localFile___modifiedTime'
  | 'suggestions___files___localFile___accessTime'
  | 'suggestions___files___localFile___changeTime'
  | 'suggestions___files___localFile___birthTime'
  | 'suggestions___files___localFile___root'
  | 'suggestions___files___localFile___dir'
  | 'suggestions___files___localFile___base'
  | 'suggestions___files___localFile___ext'
  | 'suggestions___files___localFile___name'
  | 'suggestions___files___localFile___relativeDirectory'
  | 'suggestions___files___localFile___dev'
  | 'suggestions___files___localFile___mode'
  | 'suggestions___files___localFile___nlink'
  | 'suggestions___files___localFile___uid'
  | 'suggestions___files___localFile___gid'
  | 'suggestions___files___localFile___rdev'
  | 'suggestions___files___localFile___ino'
  | 'suggestions___files___localFile___atimeMs'
  | 'suggestions___files___localFile___mtimeMs'
  | 'suggestions___files___localFile___ctimeMs'
  | 'suggestions___files___localFile___atime'
  | 'suggestions___files___localFile___mtime'
  | 'suggestions___files___localFile___ctime'
  | 'suggestions___files___localFile___birthtime'
  | 'suggestions___files___localFile___birthtimeMs'
  | 'suggestions___files___localFile___blksize'
  | 'suggestions___files___localFile___blocks'
  | 'suggestions___files___localFile___url'
  | 'suggestions___files___localFile___publicURL'
  | 'suggestions___files___localFile___childrenImageSharp'
  | 'suggestions___files___localFile___id'
  | 'suggestions___files___localFile___children'
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
  | 'strapiId'
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

export type StrapiActivityFilterInput = {
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
  logo?: Maybe<StrapiActivityLogoFilterInput>;
  files?: Maybe<StrapiActivityFilesFilterListInput>;
  images?: Maybe<StrapiActivityImagesFilterListInput>;
  group_sizes?: Maybe<StrapiActivityGroup_SizesFilterListInput>;
  skill_areas?: Maybe<StrapiActivitySkill_AreasFilterListInput>;
  educational_objectives?: Maybe<StrapiActivityEducational_ObjectivesFilterListInput>;
  leader_skills?: Maybe<StrapiActivityLeader_SkillsFilterListInput>;
  suggestions?: Maybe<StrapiActivitySuggestionsFilterListInput>;
  locations?: Maybe<StrapiActivityLocationsFilterListInput>;
  localizations?: Maybe<StrapiActivityLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___apiURL'
  | 'pluginOptions___collectionTypes'
  | 'pluginOptions___collectionTypes___name'
  | 'pluginOptions___collectionTypes___endpoint'
  | 'pluginOptions___singleTypes'
  | 'pluginOptions___singleTypes___name'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___configDir'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___exclude___types'
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

export type NavigationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationsQuery = { allNavigation: { nodes: Array<(
      Pick<Navigation, 'id'>
      & { items?: Maybe<Array<Maybe<(
        Pick<NavigationItems, 'path' | 'title'>
        & { subitems?: Maybe<Array<Maybe<Pick<NavigationItemsSubitems, 'path' | 'title'>>>> }
      )>>> }
    )> }, allSitePage: { nodes: Array<(
      Pick<SitePage, 'path'>
      & { context?: Maybe<(
        Pick<SitePageContext, 'type'>
        & { data?: Maybe<Pick<SitePageContextData, 'title' | 'locale' | 'minimum_age' | 'maximum_age'>> }
      )> }
    )> } };
