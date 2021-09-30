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
  flags?: Maybe<SiteFlags>;
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

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
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
};

export type SitePageContext = {
  type?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ageGroupId?: Maybe<Scalars['Int']>;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginPluginOptions = {
  apiURL?: Maybe<Scalars['String']>;
  queryLimit?: Maybe<Scalars['Int']>;
  collectionTypes?: Maybe<Array<Maybe<SitePluginPluginOptionsCollectionTypes>>>;
  singleTypes?: Maybe<Array<Maybe<SitePluginPluginOptionsSingleTypes>>>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  trackingIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfig>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsCollectionTypes = {
  name?: Maybe<Scalars['String']>;
  api?: Maybe<SitePluginPluginOptionsCollectionTypesApi>;
};

export type SitePluginPluginOptionsCollectionTypesApi = {
  qs?: Maybe<SitePluginPluginOptionsCollectionTypesApiQs>;
};

export type SitePluginPluginOptionsCollectionTypesApiQs = {
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

export type SitePluginPluginOptionsPluginConfig = {
  head?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
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

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroup = Node & {
  upper_content_area?: Maybe<Scalars['JSON']>;
  lower_content_area?: Maybe<Scalars['JSON']>;
  main_image?: Maybe<StrapiImage>;
  logo?: Maybe<StrapiImage>;
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
  color?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<StrapiAgeGroupLinks>>>;
  activity_groups?: Maybe<Array<Maybe<StrapiAgeGroupActivity_Groups>>>;
  localizations?: Maybe<Array<Maybe<StrapiAgeGroupLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  fields?: Maybe<StrapiAgeGroupFields>;
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


export type StrapiActivityGroup = Node & {
  content_area?: Maybe<Scalars['JSON']>;
  main_image?: Maybe<StrapiImage>;
  logo?: Maybe<StrapiImage>;
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
  activity_group_category?: Maybe<StrapiActivityGroupActivity_Group_Category>;
  sort_order?: Maybe<Scalars['Int']>;
  mandatory_activities_title?: Maybe<Scalars['String']>;
  mandatory_activities_description?: Maybe<Scalars['String']>;
  optional_activities_title?: Maybe<Scalars['String']>;
  optional_activities_description?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<StrapiActivityGroupLinks>>>;
  files?: Maybe<Array<Maybe<StrapiActivityGroupFiles>>>;
  activities?: Maybe<Array<Maybe<StrapiActivityGroupActivities>>>;
  localizations?: Maybe<Array<Maybe<StrapiActivityGroupLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  fields?: Maybe<StrapiActivityGroupFields>;
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

export type StrapiContentPage = Node & {
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
  main_image?: Maybe<StrapiImage>;
  localizations?: Maybe<Array<Maybe<StrapiContentPageLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type StrapiContentPagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiContentPageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiContentPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPage = Node & {
  content?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  navigation?: Maybe<Array<Maybe<StrapiFrontPageNavigation>>>;
  footer_sections?: Maybe<Array<Maybe<StrapiFrontPageFooter_Sections>>>;
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
  activity_group_category?: Maybe<Scalars['Int']>;
  sort_order?: Maybe<Scalars['Int']>;
  mandatory_activities_title?: Maybe<Scalars['String']>;
  mandatory_activities_description?: Maybe<Scalars['String']>;
  optional_activities_title?: Maybe<Scalars['String']>;
  optional_activities_description?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<StrapiAgeGroupActivity_GroupsLinks>>>;
  content_area?: Maybe<Array<Maybe<StrapiAgeGroupActivity_GroupsContent_Area>>>;
  main_image?: Maybe<StrapiImage>;
  logo?: Maybe<StrapiImage>;
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

export type StrapiAgeGroupActivity_GroupsLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupActivity_GroupsContent_Area = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  block_width?: Maybe<StrapiAgeGroupActivity_GroupsContent_AreaBlock_Width>;
  number_of_columns?: Maybe<Scalars['Int']>;
  strapi_component?: Maybe<Scalars['String']>;
};

export type StrapiAgeGroupActivity_GroupsContent_AreaBlock_Width = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiAgeGroupActivity_GroupsContent_AreaBlock_WidthCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupActivity_GroupsContent_AreaBlock_WidthUpdated_AtArgs = {
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

export type StrapiAgeGroupFields = {
  path?: Maybe<Scalars['String']>;
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
  color?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<StrapiActivityGroupAge_GroupLinks>>>;
  upper_content_area?: Maybe<Array<Maybe<StrapiActivityGroupAge_GroupUpper_Content_Area>>>;
  lower_content_area?: Maybe<Array<Maybe<StrapiActivityGroupAge_GroupLower_Content_Area>>>;
  main_image?: Maybe<StrapiImage>;
  logo?: Maybe<StrapiImage>;
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

export type StrapiActivityGroupAge_GroupUpper_Content_Area = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  block_width?: Maybe<StrapiActivityGroupAge_GroupUpper_Content_AreaBlock_Width>;
  number_of_columns?: Maybe<Scalars['Int']>;
  strapi_component?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupUpper_Content_AreaBlock_Width = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityGroupAge_GroupUpper_Content_AreaBlock_WidthCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupAge_GroupUpper_Content_AreaBlock_WidthUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupLower_Content_Area = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  block_width?: Maybe<StrapiActivityGroupAge_GroupLower_Content_AreaBlock_Width>;
  number_of_columns?: Maybe<Scalars['Int']>;
  strapi_component?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupAge_GroupLower_Content_AreaBlock_Width = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityGroupAge_GroupLower_Content_AreaBlock_WidthCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupAge_GroupLower_Content_AreaBlock_WidthUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityGroupActivity_Group_Category = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  wp_guid?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
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

export type StrapiActivityGroupLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  links?: Maybe<Array<Maybe<StrapiActivityGroupActivitiesLinks>>>;
  logo?: Maybe<StrapiImage>;
  files?: Maybe<Array<Maybe<StrapiActivityGroupActivitiesFiles>>>;
  images?: Maybe<Array<Maybe<StrapiImage>>>;
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

export type StrapiActivityGroupActivitiesLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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

export type StrapiActivityGroupFields = {
  path?: Maybe<Scalars['String']>;
};

export type StrapiContentPageLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
};


export type StrapiContentPageLocalizationsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageNavigation = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  subnavigation?: Maybe<Array<Maybe<StrapiFrontPageNavigationSubnavigation>>>;
};

export type StrapiFrontPageNavigationSubnavigation = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  page?: Maybe<StrapiFrontPageNavigationSubnavigationPage>;
  subnavigation?: Maybe<Array<Maybe<StrapiFrontPageNavigationSubnavigationSubnavigation>>>;
};

export type StrapiFrontPageNavigationSubnavigationPage = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  ingress?: Maybe<Scalars['String']>;
  main_text?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  main_image?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_Image>;
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

export type StrapiFrontPageNavigationSubnavigationPageMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFormats>;
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


export type StrapiFrontPageNavigationSubnavigationPageMain_ImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationSubnavigationPageMain_ImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFormats = {
  small?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsSmall>;
  thumbnail?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsThumbnail>;
};

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiFrontPageNavigationSubnavigationSubnavigation = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  page?: Maybe<StrapiFrontPageNavigationSubnavigationSubnavigationPage>;
};

export type StrapiFrontPageNavigationSubnavigationSubnavigationPage = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  main_text?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiFrontPageNavigationSubnavigationSubnavigationPagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationSubnavigationSubnavigationPageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageNavigationSubnavigationSubnavigationPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageFooter_Sections = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  link_groups?: Maybe<Array<Maybe<StrapiFrontPageFooter_SectionsLink_Groups>>>;
};

export type StrapiFrontPageFooter_SectionsLink_Groups = {
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<Array<Maybe<StrapiFrontPageFooter_SectionsLink_GroupsLinks>>>;
  some_links?: Maybe<StrapiFrontPageFooter_SectionsLink_GroupsSome_Links>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsSome_Links = {
  id?: Maybe<Scalars['Int']>;
  facebook_url?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
  instagram_url?: Maybe<Scalars['String']>;
  youtube_url?: Maybe<Scalars['String']>;
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

export type StrapiActivity = Node & {
  images?: Maybe<Array<Maybe<StrapiImage>>>;
  logo?: Maybe<StrapiImage>;
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
  links?: Maybe<Array<Maybe<StrapiActivityLinks>>>;
  files?: Maybe<Array<Maybe<StrapiActivityFiles>>>;
  group_sizes?: Maybe<Array<Maybe<StrapiActivityGroup_Sizes>>>;
  skill_areas?: Maybe<Array<Maybe<StrapiActivitySkill_Areas>>>;
  educational_objectives?: Maybe<Array<Maybe<StrapiActivityEducational_Objectives>>>;
  leader_skills?: Maybe<Array<Maybe<StrapiActivityLeader_Skills>>>;
  suggestions?: Maybe<Array<Maybe<StrapiActivitySuggestions>>>;
  locations?: Maybe<Array<Maybe<StrapiActivityLocations>>>;
  localizations?: Maybe<Array<Maybe<StrapiActivityLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
  fields?: Maybe<StrapiActivityFields>;
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
  activity_group_category?: Maybe<Scalars['Int']>;
  sort_order?: Maybe<Scalars['Int']>;
  mandatory_activities_title?: Maybe<Scalars['String']>;
  mandatory_activities_description?: Maybe<Scalars['String']>;
  optional_activities_title?: Maybe<Scalars['String']>;
  optional_activities_description?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<StrapiActivityActivity_GroupLinks>>>;
  content_area?: Maybe<Array<Maybe<StrapiActivityActivity_GroupContent_Area>>>;
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

export type StrapiActivityActivity_GroupLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_GroupContent_Area = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  block_width?: Maybe<StrapiActivityActivity_GroupContent_AreaBlock_Width>;
  number_of_columns?: Maybe<Scalars['Int']>;
  strapi_component?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_GroupContent_AreaBlock_Width = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityActivity_GroupContent_AreaBlock_WidthCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityActivity_GroupContent_AreaBlock_WidthUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityActivity_GroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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
  large?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsLarge>;
  small?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsSmall>;
  medium?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsMedium>;
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

export type StrapiActivityActivity_GroupMain_ImageFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsMedium = {
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
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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
  medium?: Maybe<StrapiActivityActivity_GroupLogoFormatsMedium>;
  large?: Maybe<StrapiActivityActivity_GroupLogoFormatsLarge>;
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
  color?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<StrapiActivityAge_GroupLinks>>>;
  upper_content_area?: Maybe<Array<Maybe<StrapiActivityAge_GroupUpper_Content_Area>>>;
  lower_content_area?: Maybe<Array<Maybe<StrapiActivityAge_GroupLower_Content_Area>>>;
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

export type StrapiActivityAge_GroupUpper_Content_Area = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  block_width?: Maybe<StrapiActivityAge_GroupUpper_Content_AreaBlock_Width>;
  number_of_columns?: Maybe<Scalars['Int']>;
  strapi_component?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupUpper_Content_AreaBlock_Width = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityAge_GroupUpper_Content_AreaBlock_WidthCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityAge_GroupUpper_Content_AreaBlock_WidthUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupLower_Content_Area = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  block_width?: Maybe<StrapiActivityAge_GroupLower_Content_AreaBlock_Width>;
  number_of_columns?: Maybe<Scalars['Int']>;
  strapi_component?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupLower_Content_AreaBlock_Width = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiActivityAge_GroupLower_Content_AreaBlock_WidthCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityAge_GroupLower_Content_AreaBlock_WidthUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiActivityAge_GroupMain_Image = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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

export type StrapiActivityLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  pinned?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<Scalars['Int']>;
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
  icon?: Maybe<StrapiActivityLocationsIcon>;
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

export type StrapiActivityLocationsIcon = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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


export type StrapiActivityLocationsIconCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiActivityLocationsIconUpdated_AtArgs = {
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

export type StrapiActivityFields = {
  path?: Maybe<Scalars['String']>;
};

export type StrapiImage = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiImageFormats>;
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


export type StrapiImageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiImageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiImageFormats = {
  large?: Maybe<StrapiImageFormat>;
  small?: Maybe<StrapiImageFormat>;
  medium?: Maybe<StrapiImageFormat>;
  thumbnail?: Maybe<StrapiImageFormat>;
};

export type StrapiImageFormat = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestion = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  activity?: Maybe<StrapiSuggestionActivity>;
  wp_guid?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  from_web?: Maybe<Scalars['Boolean']>;
  like_count?: Maybe<Scalars['Int']>;
  pinned?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<StrapiSuggestionDuration>;
  links?: Maybe<Array<Maybe<StrapiSuggestionLinks>>>;
  files?: Maybe<Array<Maybe<StrapiSuggestionFiles>>>;
  comments?: Maybe<Array<Maybe<StrapiSuggestionComments>>>;
  locations?: Maybe<Array<Maybe<StrapiSuggestionLocations>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiSuggestionPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionActivity = {
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
  links?: Maybe<Array<Maybe<StrapiSuggestionActivityLinks>>>;
  logo?: Maybe<StrapiSuggestionActivityLogo>;
  images?: Maybe<Array<Maybe<StrapiSuggestionActivityImages>>>;
};


export type StrapiSuggestionActivityPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionActivityCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionActivityUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionActivityLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionActivityLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiSuggestionActivityLogoFormats>;
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


export type StrapiSuggestionActivityLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionActivityLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionActivityLogoFormats = {
  thumbnail?: Maybe<StrapiSuggestionActivityLogoFormatsThumbnail>;
};

export type StrapiSuggestionActivityLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionActivityImages = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiSuggestionActivityImagesFormats>;
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


export type StrapiSuggestionActivityImagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionActivityImagesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionActivityImagesFormats = {
  large?: Maybe<StrapiSuggestionActivityImagesFormatsLarge>;
  small?: Maybe<StrapiSuggestionActivityImagesFormatsSmall>;
  medium?: Maybe<StrapiSuggestionActivityImagesFormatsMedium>;
  thumbnail?: Maybe<StrapiSuggestionActivityImagesFormatsThumbnail>;
};

export type StrapiSuggestionActivityImagesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionActivityImagesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionActivityImagesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionActivityImagesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionDuration = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiSuggestionDurationCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionDurationUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionFiles = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiSuggestionFilesFormats>;
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


export type StrapiSuggestionFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionFilesFormats = {
  large?: Maybe<StrapiSuggestionFilesFormatsLarge>;
  small?: Maybe<StrapiSuggestionFilesFormatsSmall>;
  medium?: Maybe<StrapiSuggestionFilesFormatsMedium>;
  thumbnail?: Maybe<StrapiSuggestionFilesFormatsThumbnail>;
};

export type StrapiSuggestionFilesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionFilesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionFilesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionFilesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiSuggestionComments = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  suggestion?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiSuggestionCommentsPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionCommentsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionCommentsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionLocations = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  icon?: Maybe<StrapiSuggestionLocationsIcon>;
};


export type StrapiSuggestionLocationsCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionLocationsUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSuggestionLocationsIcon = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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


export type StrapiSuggestionLocationsIconCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionLocationsIconUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  icon?: Maybe<StrapiLocationIcon>;
  activities?: Maybe<Array<Maybe<StrapiLocationActivities>>>;
  localizations?: Maybe<Array<Maybe<StrapiLocationLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiLocationCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocationIcon = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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


export type StrapiLocationIconCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationIconUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocationActivities = {
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
  links?: Maybe<Array<Maybe<StrapiLocationActivitiesLinks>>>;
  logo?: Maybe<StrapiLocationActivitiesLogo>;
  files?: Maybe<Array<Maybe<StrapiLocationActivitiesFiles>>>;
  images?: Maybe<Array<Maybe<StrapiLocationActivitiesImages>>>;
};


export type StrapiLocationActivitiesPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationActivitiesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationActivitiesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocationActivitiesLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiLocationActivitiesLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiLocationActivitiesLogoFormats>;
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


export type StrapiLocationActivitiesLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationActivitiesLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocationActivitiesLogoFormats = {
  thumbnail?: Maybe<StrapiLocationActivitiesLogoFormatsThumbnail>;
};

export type StrapiLocationActivitiesLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiLocationActivitiesFiles = {
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


export type StrapiLocationActivitiesFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationActivitiesFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocationActivitiesImages = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiLocationActivitiesImagesFormats>;
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


export type StrapiLocationActivitiesImagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiLocationActivitiesImagesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiLocationActivitiesImagesFormats = {
  large?: Maybe<StrapiLocationActivitiesImagesFormatsLarge>;
  small?: Maybe<StrapiLocationActivitiesImagesFormatsSmall>;
  medium?: Maybe<StrapiLocationActivitiesImagesFormatsMedium>;
  thumbnail?: Maybe<StrapiLocationActivitiesImagesFormatsThumbnail>;
};

export type StrapiLocationActivitiesImagesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiLocationActivitiesImagesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiLocationActivitiesImagesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiLocationActivitiesImagesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiLocationLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDuration = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  activities?: Maybe<Array<Maybe<StrapiDurationActivities>>>;
  preparation_activities?: Maybe<Array<Maybe<StrapiDurationPreparation_Activities>>>;
  localizations?: Maybe<Array<Maybe<StrapiDurationLocalizations>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiDurationCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationActivities = {
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
  links?: Maybe<Array<Maybe<StrapiDurationActivitiesLinks>>>;
  logo?: Maybe<StrapiDurationActivitiesLogo>;
  files?: Maybe<Array<Maybe<StrapiDurationActivitiesFiles>>>;
  images?: Maybe<Array<Maybe<StrapiDurationActivitiesImages>>>;
};


export type StrapiDurationActivitiesPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationActivitiesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationActivitiesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationActivitiesLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiDurationActivitiesLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiDurationActivitiesLogoFormats>;
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


export type StrapiDurationActivitiesLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationActivitiesLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationActivitiesLogoFormats = {
  thumbnail?: Maybe<StrapiDurationActivitiesLogoFormatsThumbnail>;
};

export type StrapiDurationActivitiesLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationActivitiesFiles = {
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


export type StrapiDurationActivitiesFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationActivitiesFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationActivitiesImages = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiDurationActivitiesImagesFormats>;
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


export type StrapiDurationActivitiesImagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationActivitiesImagesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationActivitiesImagesFormats = {
  large?: Maybe<StrapiDurationActivitiesImagesFormatsLarge>;
  small?: Maybe<StrapiDurationActivitiesImagesFormatsSmall>;
  medium?: Maybe<StrapiDurationActivitiesImagesFormatsMedium>;
  thumbnail?: Maybe<StrapiDurationActivitiesImagesFormatsThumbnail>;
};

export type StrapiDurationActivitiesImagesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationActivitiesImagesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationActivitiesImagesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationActivitiesImagesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationPreparation_Activities = {
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
  links?: Maybe<Array<Maybe<StrapiDurationPreparation_ActivitiesLinks>>>;
  logo?: Maybe<StrapiDurationPreparation_ActivitiesLogo>;
  files?: Maybe<Array<Maybe<StrapiDurationPreparation_ActivitiesFiles>>>;
  images?: Maybe<Array<Maybe<StrapiDurationPreparation_ActivitiesImages>>>;
};


export type StrapiDurationPreparation_ActivitiesPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationPreparation_ActivitiesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationPreparation_ActivitiesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationPreparation_ActivitiesLinks = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StrapiDurationPreparation_ActivitiesLogo = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiDurationPreparation_ActivitiesLogoFormats>;
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


export type StrapiDurationPreparation_ActivitiesLogoCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationPreparation_ActivitiesLogoUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationPreparation_ActivitiesLogoFormats = {
  thumbnail?: Maybe<StrapiDurationPreparation_ActivitiesLogoFormatsThumbnail>;
};

export type StrapiDurationPreparation_ActivitiesLogoFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationPreparation_ActivitiesFiles = {
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


export type StrapiDurationPreparation_ActivitiesFilesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationPreparation_ActivitiesFilesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationPreparation_ActivitiesImages = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormats>;
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


export type StrapiDurationPreparation_ActivitiesImagesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiDurationPreparation_ActivitiesImagesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormats = {
  large?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsLarge>;
  small?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsSmall>;
  medium?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsMedium>;
  thumbnail?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsThumbnail>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type StrapiDurationLocalizations = {
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
};

export type Program_Navigation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  items?: Maybe<Array<Maybe<Program_NavigationItems>>>;
};

export type Program_NavigationItems = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  subitems?: Maybe<Array<Maybe<Program_NavigationItemsSubitems>>>;
  minimum_age?: Maybe<Scalars['Int']>;
  maximum_age?: Maybe<Scalars['Int']>;
};

export type Program_NavigationItemsSubitems = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  subitems?: Maybe<Array<Maybe<Program_NavigationItemsSubitemsSubitems>>>;
};

export type Program_NavigationItemsSubitemsSubitems = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type Content_Navigation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  items?: Maybe<Array<Maybe<Content_NavigationItems>>>;
};

export type Content_NavigationItems = {
  title?: Maybe<Scalars['String']>;
  subitems?: Maybe<Array<Maybe<Content_NavigationItemsSubitems>>>;
};

export type Content_NavigationItemsSubitems = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  subitems?: Maybe<Array<Maybe<Content_NavigationItemsSubitemsSubitems>>>;
};

export type Content_NavigationItemsSubitemsSubitems = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type Activity_Logo = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  logo?: Maybe<Scalars['String']>;
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
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  strapiAgeGroup?: Maybe<StrapiAgeGroup>;
  allStrapiAgeGroup: StrapiAgeGroupConnection;
  strapiActivityGroup?: Maybe<StrapiActivityGroup>;
  allStrapiActivityGroup: StrapiActivityGroupConnection;
  strapiContentPage?: Maybe<StrapiContentPage>;
  allStrapiContentPage: StrapiContentPageConnection;
  strapiFrontPage?: Maybe<StrapiFrontPage>;
  allStrapiFrontPage: StrapiFrontPageConnection;
  strapiActivity?: Maybe<StrapiActivity>;
  allStrapiActivity: StrapiActivityConnection;
  strapiSuggestion?: Maybe<StrapiSuggestion>;
  allStrapiSuggestion: StrapiSuggestionConnection;
  strapiLocation?: Maybe<StrapiLocation>;
  allStrapiLocation: StrapiLocationConnection;
  strapiDuration?: Maybe<StrapiDuration>;
  allStrapiDuration: StrapiDurationConnection;
  programNavigation?: Maybe<Program_Navigation>;
  allProgramNavigation: Program_NavigationConnection;
  contentNavigation?: Maybe<Content_Navigation>;
  allContentNavigation: Content_NavigationConnection;
  activityLogo?: Maybe<Activity_Logo>;
  allActivityLogo: Activity_LogoConnection;
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
  flags?: Maybe<SiteFlagsFilterInput>;
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
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
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
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiAgeGroupArgs = {
  upper_content_area?: Maybe<JsonQueryOperatorInput>;
  lower_content_area?: Maybe<JsonQueryOperatorInput>;
  main_image?: Maybe<StrapiImageFilterInput>;
  logo?: Maybe<StrapiImageFilterInput>;
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
  color?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiAgeGroupLinksFilterListInput>;
  activity_groups?: Maybe<StrapiAgeGroupActivity_GroupsFilterListInput>;
  localizations?: Maybe<StrapiAgeGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StrapiAgeGroupFieldsFilterInput>;
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


export type QueryStrapiActivityGroupArgs = {
  content_area?: Maybe<JsonQueryOperatorInput>;
  main_image?: Maybe<StrapiImageFilterInput>;
  logo?: Maybe<StrapiImageFilterInput>;
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
  activity_group_category?: Maybe<StrapiActivityGroupActivity_Group_CategoryFilterInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  mandatory_activities_title?: Maybe<StringQueryOperatorInput>;
  mandatory_activities_description?: Maybe<StringQueryOperatorInput>;
  optional_activities_title?: Maybe<StringQueryOperatorInput>;
  optional_activities_description?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiActivityGroupLinksFilterListInput>;
  files?: Maybe<StrapiActivityGroupFilesFilterListInput>;
  activities?: Maybe<StrapiActivityGroupActivitiesFilterListInput>;
  localizations?: Maybe<StrapiActivityGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StrapiActivityGroupFieldsFilterInput>;
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


export type QueryStrapiContentPageArgs = {
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
  main_image?: Maybe<StrapiImageFilterInput>;
  localizations?: Maybe<StrapiContentPageLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllStrapiContentPageArgs = {
  filter?: Maybe<StrapiContentPageFilterInput>;
  sort?: Maybe<StrapiContentPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiFrontPageArgs = {
  content?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  navigation?: Maybe<StrapiFrontPageNavigationFilterListInput>;
  footer_sections?: Maybe<StrapiFrontPageFooter_SectionsFilterListInput>;
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


export type QueryStrapiActivityArgs = {
  images?: Maybe<StrapiImageFilterListInput>;
  logo?: Maybe<StrapiImageFilterInput>;
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
  links?: Maybe<StrapiActivityLinksFilterListInput>;
  files?: Maybe<StrapiActivityFilesFilterListInput>;
  group_sizes?: Maybe<StrapiActivityGroup_SizesFilterListInput>;
  skill_areas?: Maybe<StrapiActivitySkill_AreasFilterListInput>;
  educational_objectives?: Maybe<StrapiActivityEducational_ObjectivesFilterListInput>;
  leader_skills?: Maybe<StrapiActivityLeader_SkillsFilterListInput>;
  suggestions?: Maybe<StrapiActivitySuggestionsFilterListInput>;
  locations?: Maybe<StrapiActivityLocationsFilterListInput>;
  localizations?: Maybe<StrapiActivityLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StrapiActivityFieldsFilterInput>;
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


export type QueryStrapiSuggestionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  activity?: Maybe<StrapiSuggestionActivityFilterInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  from_web?: Maybe<BooleanQueryOperatorInput>;
  like_count?: Maybe<IntQueryOperatorInput>;
  pinned?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<StrapiSuggestionDurationFilterInput>;
  links?: Maybe<StrapiSuggestionLinksFilterListInput>;
  files?: Maybe<StrapiSuggestionFilesFilterListInput>;
  comments?: Maybe<StrapiSuggestionCommentsFilterListInput>;
  locations?: Maybe<StrapiSuggestionLocationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiSuggestionArgs = {
  filter?: Maybe<StrapiSuggestionFilterInput>;
  sort?: Maybe<StrapiSuggestionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiLocationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  icon?: Maybe<StrapiLocationIconFilterInput>;
  activities?: Maybe<StrapiLocationActivitiesFilterListInput>;
  localizations?: Maybe<StrapiLocationLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiLocationArgs = {
  filter?: Maybe<StrapiLocationFilterInput>;
  sort?: Maybe<StrapiLocationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiDurationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  activities?: Maybe<StrapiDurationActivitiesFilterListInput>;
  preparation_activities?: Maybe<StrapiDurationPreparation_ActivitiesFilterListInput>;
  localizations?: Maybe<StrapiDurationLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiDurationArgs = {
  filter?: Maybe<StrapiDurationFilterInput>;
  sort?: Maybe<StrapiDurationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProgramNavigationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  items?: Maybe<Program_NavigationItemsFilterListInput>;
};


export type QueryAllProgramNavigationArgs = {
  filter?: Maybe<Program_NavigationFilterInput>;
  sort?: Maybe<Program_NavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentNavigationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  items?: Maybe<Content_NavigationItemsFilterListInput>;
};


export type QueryAllContentNavigationArgs = {
  filter?: Maybe<Content_NavigationFilterInput>;
  sort?: Maybe<Content_NavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryActivityLogoArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  logo?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllActivityLogoArgs = {
  filter?: Maybe<Activity_LogoFilterInput>;
  sort?: Maybe<Activity_LogoSortInput>;
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
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

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>;
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
  | 'flags___PRESERVE_WEBPACK_CACHE'
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
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
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
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
  type?: Maybe<StringQueryOperatorInput>;
  localizations?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  ageGroupId?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  apiURL?: Maybe<StringQueryOperatorInput>;
  queryLimit?: Maybe<IntQueryOperatorInput>;
  collectionTypes?: Maybe<SitePluginPluginOptionsCollectionTypesFilterListInput>;
  singleTypes?: Maybe<SitePluginPluginOptionsSingleTypesFilterListInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  trackingIds?: Maybe<StringQueryOperatorInput>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsCollectionTypesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsCollectionTypesFilterInput>;
};

export type SitePluginPluginOptionsCollectionTypesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  api?: Maybe<SitePluginPluginOptionsCollectionTypesApiFilterInput>;
};

export type SitePluginPluginOptionsCollectionTypesApiFilterInput = {
  qs?: Maybe<SitePluginPluginOptionsCollectionTypesApiQsFilterInput>;
};

export type SitePluginPluginOptionsCollectionTypesApiQsFilterInput = {
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

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  head?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
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
  | 'context___type'
  | 'context___localizations'
  | 'context___locale'
  | 'context___id'
  | 'context___ageGroupId'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions___apiURL'
  | 'pluginCreator___pluginOptions___queryLimit'
  | 'pluginCreator___pluginOptions___collectionTypes'
  | 'pluginCreator___pluginOptions___collectionTypes___name'
  | 'pluginCreator___pluginOptions___singleTypes'
  | 'pluginCreator___pluginOptions___singleTypes___name'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___trackingIds'
  | 'pluginCreator___pluginOptions___pluginConfig___head'
  | 'pluginCreator___pluginOptions___pluginConfig___respectDNT'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
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
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
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
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
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
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions___apiURL'
  | 'pluginOptions___queryLimit'
  | 'pluginOptions___collectionTypes'
  | 'pluginOptions___collectionTypes___name'
  | 'pluginOptions___singleTypes'
  | 'pluginOptions___singleTypes___name'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___trackingIds'
  | 'pluginOptions___pluginConfig___head'
  | 'pluginOptions___pluginConfig___respectDNT'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
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
  | 'packageJson___keywords'
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

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
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
  | 'buildTime'
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

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type StrapiImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiImageFormatsFilterInput>;
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

export type StrapiImageFormatsFilterInput = {
  large?: Maybe<StrapiImageFormatFilterInput>;
  small?: Maybe<StrapiImageFormatFilterInput>;
  medium?: Maybe<StrapiImageFormatFilterInput>;
  thumbnail?: Maybe<StrapiImageFormatFilterInput>;
};

export type StrapiImageFormatFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
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
  activity_group_category?: Maybe<IntQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  mandatory_activities_title?: Maybe<StringQueryOperatorInput>;
  mandatory_activities_description?: Maybe<StringQueryOperatorInput>;
  optional_activities_title?: Maybe<StringQueryOperatorInput>;
  optional_activities_description?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiAgeGroupActivity_GroupsLinksFilterListInput>;
  content_area?: Maybe<StrapiAgeGroupActivity_GroupsContent_AreaFilterListInput>;
  main_image?: Maybe<StrapiImageFilterInput>;
  logo?: Maybe<StrapiImageFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsLinksFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupActivity_GroupsLinksFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsContent_AreaFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupActivity_GroupsContent_AreaFilterInput>;
};

export type StrapiAgeGroupActivity_GroupsContent_AreaFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  block_width?: Maybe<StrapiAgeGroupActivity_GroupsContent_AreaBlock_WidthFilterInput>;
  number_of_columns?: Maybe<IntQueryOperatorInput>;
  strapi_component?: Maybe<StringQueryOperatorInput>;
};

export type StrapiAgeGroupActivity_GroupsContent_AreaBlock_WidthFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiAgeGroupLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiAgeGroupLocalizationsFilterInput>;
};

export type StrapiAgeGroupLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiAgeGroupFieldsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
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
  | 'upper_content_area'
  | 'lower_content_area'
  | 'main_image___id'
  | 'main_image___name'
  | 'main_image___alternativeText'
  | 'main_image___caption'
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
  | 'logo___alternativeText'
  | 'logo___caption'
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
  | 'color'
  | 'links'
  | 'links___id'
  | 'links___description'
  | 'links___url'
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
  | 'activity_groups___activity_group_category'
  | 'activity_groups___sort_order'
  | 'activity_groups___mandatory_activities_title'
  | 'activity_groups___mandatory_activities_description'
  | 'activity_groups___optional_activities_title'
  | 'activity_groups___optional_activities_description'
  | 'activity_groups___links'
  | 'activity_groups___links___id'
  | 'activity_groups___links___description'
  | 'activity_groups___links___url'
  | 'activity_groups___content_area'
  | 'activity_groups___content_area___id'
  | 'activity_groups___content_area___title'
  | 'activity_groups___content_area___text'
  | 'activity_groups___content_area___block_width___id'
  | 'activity_groups___content_area___block_width___name'
  | 'activity_groups___content_area___block_width___created_at'
  | 'activity_groups___content_area___block_width___updated_at'
  | 'activity_groups___content_area___number_of_columns'
  | 'activity_groups___content_area___strapi_component'
  | 'activity_groups___main_image___id'
  | 'activity_groups___main_image___name'
  | 'activity_groups___main_image___alternativeText'
  | 'activity_groups___main_image___caption'
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
  | 'activity_groups___main_image___localFile___id'
  | 'activity_groups___main_image___localFile___children'
  | 'activity_groups___logo___id'
  | 'activity_groups___logo___name'
  | 'activity_groups___logo___alternativeText'
  | 'activity_groups___logo___caption'
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
  | 'activity_groups___logo___localFile___id'
  | 'activity_groups___logo___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
  | 'fields___path'
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiAgeGroupGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiAgeGroupGroupConnectionDistinctArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupGroupConnectionMaxArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupGroupConnectionMinArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupGroupConnectionSumArgs = {
  field: StrapiAgeGroupFieldsEnum;
};


export type StrapiAgeGroupGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiAgeGroupFieldsEnum;
};

export type StrapiAgeGroupFilterInput = {
  upper_content_area?: Maybe<JsonQueryOperatorInput>;
  lower_content_area?: Maybe<JsonQueryOperatorInput>;
  main_image?: Maybe<StrapiImageFilterInput>;
  logo?: Maybe<StrapiImageFilterInput>;
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
  color?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiAgeGroupLinksFilterListInput>;
  activity_groups?: Maybe<StrapiAgeGroupActivity_GroupsFilterListInput>;
  localizations?: Maybe<StrapiAgeGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StrapiAgeGroupFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiAgeGroupSortInput = {
  fields?: Maybe<Array<Maybe<StrapiAgeGroupFieldsEnum>>>;
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
  color?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiActivityGroupAge_GroupLinksFilterListInput>;
  upper_content_area?: Maybe<StrapiActivityGroupAge_GroupUpper_Content_AreaFilterListInput>;
  lower_content_area?: Maybe<StrapiActivityGroupAge_GroupLower_Content_AreaFilterListInput>;
  main_image?: Maybe<StrapiImageFilterInput>;
  logo?: Maybe<StrapiImageFilterInput>;
};

export type StrapiActivityGroupAge_GroupLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupAge_GroupLinksFilterInput>;
};

export type StrapiActivityGroupAge_GroupLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupUpper_Content_AreaFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupAge_GroupUpper_Content_AreaFilterInput>;
};

export type StrapiActivityGroupAge_GroupUpper_Content_AreaFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  block_width?: Maybe<StrapiActivityGroupAge_GroupUpper_Content_AreaBlock_WidthFilterInput>;
  number_of_columns?: Maybe<IntQueryOperatorInput>;
  strapi_component?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupUpper_Content_AreaBlock_WidthFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupLower_Content_AreaFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupAge_GroupLower_Content_AreaFilterInput>;
};

export type StrapiActivityGroupAge_GroupLower_Content_AreaFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  block_width?: Maybe<StrapiActivityGroupAge_GroupLower_Content_AreaBlock_WidthFilterInput>;
  number_of_columns?: Maybe<IntQueryOperatorInput>;
  strapi_component?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityGroupAge_GroupLower_Content_AreaBlock_WidthFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupActivity_Group_CategoryFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityGroupLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupLinksFilterInput>;
};

export type StrapiActivityGroupLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
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
  links?: Maybe<StrapiActivityGroupActivitiesLinksFilterListInput>;
  logo?: Maybe<StrapiImageFilterInput>;
  files?: Maybe<StrapiActivityGroupActivitiesFilesFilterListInput>;
  images?: Maybe<StrapiImageFilterListInput>;
};

export type StrapiActivityGroupActivitiesLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupActivitiesLinksFilterInput>;
};

export type StrapiActivityGroupActivitiesLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
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

export type StrapiImageFilterListInput = {
  elemMatch?: Maybe<StrapiImageFilterInput>;
};

export type StrapiActivityGroupLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiActivityGroupLocalizationsFilterInput>;
};

export type StrapiActivityGroupLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityGroupFieldsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
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
  | 'content_area'
  | 'main_image___id'
  | 'main_image___name'
  | 'main_image___alternativeText'
  | 'main_image___caption'
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
  | 'logo___alternativeText'
  | 'logo___caption'
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
  | 'age_group___color'
  | 'age_group___links'
  | 'age_group___links___id'
  | 'age_group___links___description'
  | 'age_group___links___url'
  | 'age_group___upper_content_area'
  | 'age_group___upper_content_area___id'
  | 'age_group___upper_content_area___title'
  | 'age_group___upper_content_area___text'
  | 'age_group___upper_content_area___block_width___id'
  | 'age_group___upper_content_area___block_width___name'
  | 'age_group___upper_content_area___block_width___created_at'
  | 'age_group___upper_content_area___block_width___updated_at'
  | 'age_group___upper_content_area___number_of_columns'
  | 'age_group___upper_content_area___strapi_component'
  | 'age_group___lower_content_area'
  | 'age_group___lower_content_area___id'
  | 'age_group___lower_content_area___title'
  | 'age_group___lower_content_area___text'
  | 'age_group___lower_content_area___block_width___id'
  | 'age_group___lower_content_area___block_width___name'
  | 'age_group___lower_content_area___block_width___created_at'
  | 'age_group___lower_content_area___block_width___updated_at'
  | 'age_group___lower_content_area___number_of_columns'
  | 'age_group___lower_content_area___strapi_component'
  | 'age_group___main_image___id'
  | 'age_group___main_image___name'
  | 'age_group___main_image___alternativeText'
  | 'age_group___main_image___caption'
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
  | 'age_group___main_image___localFile___id'
  | 'age_group___main_image___localFile___children'
  | 'age_group___logo___id'
  | 'age_group___logo___name'
  | 'age_group___logo___alternativeText'
  | 'age_group___logo___caption'
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
  | 'age_group___logo___localFile___id'
  | 'age_group___logo___localFile___children'
  | 'activity_group_category___id'
  | 'activity_group_category___name'
  | 'activity_group_category___locale'
  | 'activity_group_category___created_at'
  | 'activity_group_category___updated_at'
  | 'activity_group_category___wp_guid'
  | 'activity_group_category___sort_order'
  | 'sort_order'
  | 'mandatory_activities_title'
  | 'mandatory_activities_description'
  | 'optional_activities_title'
  | 'optional_activities_description'
  | 'links'
  | 'links___id'
  | 'links___description'
  | 'links___url'
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
  | 'activities___links'
  | 'activities___links___id'
  | 'activities___links___description'
  | 'activities___links___url'
  | 'activities___logo___id'
  | 'activities___logo___name'
  | 'activities___logo___alternativeText'
  | 'activities___logo___caption'
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
  | 'activities___files___localFile___id'
  | 'activities___files___localFile___children'
  | 'activities___images'
  | 'activities___images___id'
  | 'activities___images___name'
  | 'activities___images___alternativeText'
  | 'activities___images___caption'
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
  | 'activities___images___localFile___id'
  | 'activities___images___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
  | 'fields___path'
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiActivityGroupGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiActivityGroupGroupConnectionDistinctArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupGroupConnectionMaxArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupGroupConnectionMinArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupGroupConnectionSumArgs = {
  field: StrapiActivityGroupFieldsEnum;
};


export type StrapiActivityGroupGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiActivityGroupFieldsEnum;
};

export type StrapiActivityGroupFilterInput = {
  content_area?: Maybe<JsonQueryOperatorInput>;
  main_image?: Maybe<StrapiImageFilterInput>;
  logo?: Maybe<StrapiImageFilterInput>;
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
  activity_group_category?: Maybe<StrapiActivityGroupActivity_Group_CategoryFilterInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  mandatory_activities_title?: Maybe<StringQueryOperatorInput>;
  mandatory_activities_description?: Maybe<StringQueryOperatorInput>;
  optional_activities_title?: Maybe<StringQueryOperatorInput>;
  optional_activities_description?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiActivityGroupLinksFilterListInput>;
  files?: Maybe<StrapiActivityGroupFilesFilterListInput>;
  activities?: Maybe<StrapiActivityGroupActivitiesFilterListInput>;
  localizations?: Maybe<StrapiActivityGroupLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StrapiActivityGroupFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiActivityGroupSortInput = {
  fields?: Maybe<Array<Maybe<StrapiActivityGroupFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiContentPageLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiContentPageLocalizationsFilterInput>;
};

export type StrapiContentPageLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiContentPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiContentPageEdge>;
  nodes: Array<StrapiContentPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiContentPageGroupConnection>;
};


export type StrapiContentPageConnectionDistinctArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageConnectionMaxArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageConnectionMinArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageConnectionSumArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiContentPageFieldsEnum;
};

export type StrapiContentPageEdge = {
  next?: Maybe<StrapiContentPage>;
  node: StrapiContentPage;
  previous?: Maybe<StrapiContentPage>;
};

export type StrapiContentPageFieldsEnum =
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
  | 'main_image___id'
  | 'main_image___name'
  | 'main_image___alternativeText'
  | 'main_image___caption'
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

export type StrapiContentPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiContentPageEdge>;
  nodes: Array<StrapiContentPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiContentPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiContentPageGroupConnectionDistinctArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageGroupConnectionMaxArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageGroupConnectionMinArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageGroupConnectionSumArgs = {
  field: StrapiContentPageFieldsEnum;
};


export type StrapiContentPageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiContentPageFieldsEnum;
};

export type StrapiContentPageFilterInput = {
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
  main_image?: Maybe<StrapiImageFilterInput>;
  localizations?: Maybe<StrapiContentPageLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiContentPageSortInput = {
  fields?: Maybe<Array<Maybe<StrapiContentPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiFrontPageNavigationFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageNavigationFilterInput>;
};

export type StrapiFrontPageNavigationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<IntQueryOperatorInput>;
  subnavigation?: Maybe<StrapiFrontPageNavigationSubnavigationFilterListInput>;
};

export type StrapiFrontPageNavigationSubnavigationFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageNavigationSubnavigationFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<StrapiFrontPageNavigationSubnavigationPageFilterInput>;
  subnavigation?: Maybe<StrapiFrontPageNavigationSubnavigationSubnavigationFilterListInput>;
};

export type StrapiFrontPageNavigationSubnavigationPageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  main_image?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsFilterInput>;
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

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsFilterInput = {
  small?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsSmallFilterInput>;
  thumbnail?: Maybe<StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsThumbnailFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiFrontPageNavigationSubnavigationPageMain_ImageFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiFrontPageNavigationSubnavigationSubnavigationFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageNavigationSubnavigationSubnavigationFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationSubnavigationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<StrapiFrontPageNavigationSubnavigationSubnavigationPageFilterInput>;
};

export type StrapiFrontPageNavigationSubnavigationSubnavigationPageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  main_text?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiFrontPageFooter_SectionsFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageFooter_SectionsFilterInput>;
};

export type StrapiFrontPageFooter_SectionsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  link_groups?: Maybe<StrapiFrontPageFooter_SectionsLink_GroupsFilterListInput>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageFooter_SectionsLink_GroupsFilterInput>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  links?: Maybe<StrapiFrontPageFooter_SectionsLink_GroupsLinksFilterListInput>;
  some_links?: Maybe<StrapiFrontPageFooter_SectionsLink_GroupsSome_LinksFilterInput>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsLinksFilterListInput = {
  elemMatch?: Maybe<StrapiFrontPageFooter_SectionsLink_GroupsLinksFilterInput>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  phone_number?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type StrapiFrontPageFooter_SectionsLink_GroupsSome_LinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  facebook_url?: Maybe<StringQueryOperatorInput>;
  twitter_url?: Maybe<StringQueryOperatorInput>;
  instagram_url?: Maybe<StringQueryOperatorInput>;
  youtube_url?: Maybe<StringQueryOperatorInput>;
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
  | 'content'
  | 'title'
  | 'ingress'
  | 'meta_description'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
  | 'navigation'
  | 'navigation___id'
  | 'navigation___title'
  | 'navigation___page'
  | 'navigation___subnavigation'
  | 'navigation___subnavigation___id'
  | 'navigation___subnavigation___title'
  | 'navigation___subnavigation___page___id'
  | 'navigation___subnavigation___page___title'
  | 'navigation___subnavigation___page___ingress'
  | 'navigation___subnavigation___page___main_text'
  | 'navigation___subnavigation___page___locale'
  | 'navigation___subnavigation___page___published_at'
  | 'navigation___subnavigation___page___created_at'
  | 'navigation___subnavigation___page___updated_at'
  | 'navigation___subnavigation___subnavigation'
  | 'navigation___subnavigation___subnavigation___id'
  | 'navigation___subnavigation___subnavigation___title'
  | 'footer_sections'
  | 'footer_sections___id'
  | 'footer_sections___title'
  | 'footer_sections___link_groups'
  | 'footer_sections___link_groups___id'
  | 'footer_sections___link_groups___links'
  | 'footer_sections___link_groups___links___id'
  | 'footer_sections___link_groups___links___description'
  | 'footer_sections___link_groups___links___url'
  | 'footer_sections___link_groups___links___phone_number'
  | 'footer_sections___link_groups___links___email'
  | 'footer_sections___link_groups___links___title'
  | 'footer_sections___link_groups___some_links___id'
  | 'footer_sections___link_groups___some_links___facebook_url'
  | 'footer_sections___link_groups___some_links___twitter_url'
  | 'footer_sections___link_groups___some_links___instagram_url'
  | 'footer_sections___link_groups___some_links___youtube_url'
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
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiFrontPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiFrontPageGroupConnectionDistinctArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageGroupConnectionMaxArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageGroupConnectionMinArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageGroupConnectionSumArgs = {
  field: StrapiFrontPageFieldsEnum;
};


export type StrapiFrontPageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiFrontPageFieldsEnum;
};

export type StrapiFrontPageFilterInput = {
  content?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  ingress?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  navigation?: Maybe<StrapiFrontPageNavigationFilterListInput>;
  footer_sections?: Maybe<StrapiFrontPageFooter_SectionsFilterListInput>;
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
  activity_group_category?: Maybe<IntQueryOperatorInput>;
  sort_order?: Maybe<IntQueryOperatorInput>;
  mandatory_activities_title?: Maybe<StringQueryOperatorInput>;
  mandatory_activities_description?: Maybe<StringQueryOperatorInput>;
  optional_activities_title?: Maybe<StringQueryOperatorInput>;
  optional_activities_description?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiActivityActivity_GroupLinksFilterListInput>;
  content_area?: Maybe<StrapiActivityActivity_GroupContent_AreaFilterListInput>;
  main_image?: Maybe<StrapiActivityActivity_GroupMain_ImageFilterInput>;
  logo?: Maybe<StrapiActivityActivity_GroupLogoFilterInput>;
  files?: Maybe<StrapiActivityActivity_GroupFilesFilterListInput>;
};

export type StrapiActivityActivity_GroupLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityActivity_GroupLinksFilterInput>;
};

export type StrapiActivityActivity_GroupLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupContent_AreaFilterListInput = {
  elemMatch?: Maybe<StrapiActivityActivity_GroupContent_AreaFilterInput>;
};

export type StrapiActivityActivity_GroupContent_AreaFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  block_width?: Maybe<StrapiActivityActivity_GroupContent_AreaBlock_WidthFilterInput>;
  number_of_columns?: Maybe<IntQueryOperatorInput>;
  strapi_component?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupContent_AreaBlock_WidthFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
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
  large?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsLargeFilterInput>;
  small?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsSmallFilterInput>;
  medium?: Maybe<StrapiActivityActivity_GroupMain_ImageFormatsMediumFilterInput>;
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

export type StrapiActivityActivity_GroupMain_ImageFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiActivityActivity_GroupMain_ImageFormatsMediumFilterInput = {
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
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
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
  medium?: Maybe<StrapiActivityActivity_GroupLogoFormatsMediumFilterInput>;
  large?: Maybe<StrapiActivityActivity_GroupLogoFormatsLargeFilterInput>;
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
  color?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StrapiActivityAge_GroupLinksFilterListInput>;
  upper_content_area?: Maybe<StrapiActivityAge_GroupUpper_Content_AreaFilterListInput>;
  lower_content_area?: Maybe<StrapiActivityAge_GroupLower_Content_AreaFilterListInput>;
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

export type StrapiActivityAge_GroupUpper_Content_AreaFilterListInput = {
  elemMatch?: Maybe<StrapiActivityAge_GroupUpper_Content_AreaFilterInput>;
};

export type StrapiActivityAge_GroupUpper_Content_AreaFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  block_width?: Maybe<StrapiActivityAge_GroupUpper_Content_AreaBlock_WidthFilterInput>;
  number_of_columns?: Maybe<IntQueryOperatorInput>;
  strapi_component?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityAge_GroupUpper_Content_AreaBlock_WidthFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityAge_GroupLower_Content_AreaFilterListInput = {
  elemMatch?: Maybe<StrapiActivityAge_GroupLower_Content_AreaFilterInput>;
};

export type StrapiActivityAge_GroupLower_Content_AreaFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  block_width?: Maybe<StrapiActivityAge_GroupLower_Content_AreaBlock_WidthFilterInput>;
  number_of_columns?: Maybe<IntQueryOperatorInput>;
  strapi_component?: Maybe<StringQueryOperatorInput>;
};

export type StrapiActivityAge_GroupLower_Content_AreaBlock_WidthFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityAge_GroupMain_ImageFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
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

export type StrapiActivityLinksFilterListInput = {
  elemMatch?: Maybe<StrapiActivityLinksFilterInput>;
};

export type StrapiActivityLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
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
  pinned?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
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
  icon?: Maybe<StrapiActivityLocationsIconFilterInput>;
};

export type StrapiActivityLocationsIconFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
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

export type StrapiActivityLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiActivityLocalizationsFilterInput>;
};

export type StrapiActivityLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiActivityFieldsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
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
  | 'images'
  | 'images___id'
  | 'images___name'
  | 'images___alternativeText'
  | 'images___caption'
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
  | 'logo___id'
  | 'logo___name'
  | 'logo___alternativeText'
  | 'logo___caption'
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
  | 'activity_group___activity_group_category'
  | 'activity_group___sort_order'
  | 'activity_group___mandatory_activities_title'
  | 'activity_group___mandatory_activities_description'
  | 'activity_group___optional_activities_title'
  | 'activity_group___optional_activities_description'
  | 'activity_group___links'
  | 'activity_group___links___id'
  | 'activity_group___links___description'
  | 'activity_group___links___url'
  | 'activity_group___content_area'
  | 'activity_group___content_area___id'
  | 'activity_group___content_area___title'
  | 'activity_group___content_area___text'
  | 'activity_group___content_area___block_width___id'
  | 'activity_group___content_area___block_width___name'
  | 'activity_group___content_area___block_width___created_at'
  | 'activity_group___content_area___block_width___updated_at'
  | 'activity_group___content_area___number_of_columns'
  | 'activity_group___content_area___strapi_component'
  | 'activity_group___main_image___id'
  | 'activity_group___main_image___name'
  | 'activity_group___main_image___alternativeText'
  | 'activity_group___main_image___caption'
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
  | 'activity_group___main_image___localFile___id'
  | 'activity_group___main_image___localFile___children'
  | 'activity_group___logo___id'
  | 'activity_group___logo___name'
  | 'activity_group___logo___alternativeText'
  | 'activity_group___logo___caption'
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
  | 'age_group___color'
  | 'age_group___links'
  | 'age_group___links___id'
  | 'age_group___links___description'
  | 'age_group___links___url'
  | 'age_group___upper_content_area'
  | 'age_group___upper_content_area___id'
  | 'age_group___upper_content_area___title'
  | 'age_group___upper_content_area___text'
  | 'age_group___upper_content_area___block_width___id'
  | 'age_group___upper_content_area___block_width___name'
  | 'age_group___upper_content_area___block_width___created_at'
  | 'age_group___upper_content_area___block_width___updated_at'
  | 'age_group___upper_content_area___number_of_columns'
  | 'age_group___upper_content_area___strapi_component'
  | 'age_group___lower_content_area'
  | 'age_group___lower_content_area___id'
  | 'age_group___lower_content_area___title'
  | 'age_group___lower_content_area___text'
  | 'age_group___lower_content_area___block_width___id'
  | 'age_group___lower_content_area___block_width___name'
  | 'age_group___lower_content_area___block_width___created_at'
  | 'age_group___lower_content_area___block_width___updated_at'
  | 'age_group___lower_content_area___number_of_columns'
  | 'age_group___lower_content_area___strapi_component'
  | 'age_group___main_image___id'
  | 'age_group___main_image___name'
  | 'age_group___main_image___alternativeText'
  | 'age_group___main_image___caption'
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
  | 'age_group___logo___localFile___id'
  | 'age_group___logo___localFile___children'
  | 'preparation_duration___id'
  | 'preparation_duration___name'
  | 'preparation_duration___slug'
  | 'preparation_duration___locale'
  | 'preparation_duration___created_at'
  | 'preparation_duration___updated_at'
  | 'links'
  | 'links___id'
  | 'links___description'
  | 'links___url'
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
  | 'suggestions___pinned'
  | 'suggestions___duration'
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
  | 'suggestions___files___localFile___id'
  | 'suggestions___files___localFile___children'
  | 'locations'
  | 'locations___id'
  | 'locations___name'
  | 'locations___slug'
  | 'locations___locale'
  | 'locations___created_at'
  | 'locations___updated_at'
  | 'locations___icon___id'
  | 'locations___icon___name'
  | 'locations___icon___alternativeText'
  | 'locations___icon___caption'
  | 'locations___icon___width'
  | 'locations___icon___height'
  | 'locations___icon___hash'
  | 'locations___icon___ext'
  | 'locations___icon___mime'
  | 'locations___icon___size'
  | 'locations___icon___url'
  | 'locations___icon___provider'
  | 'locations___icon___created_at'
  | 'locations___icon___updated_at'
  | 'locations___icon___localFile___sourceInstanceName'
  | 'locations___icon___localFile___absolutePath'
  | 'locations___icon___localFile___relativePath'
  | 'locations___icon___localFile___extension'
  | 'locations___icon___localFile___size'
  | 'locations___icon___localFile___prettySize'
  | 'locations___icon___localFile___modifiedTime'
  | 'locations___icon___localFile___accessTime'
  | 'locations___icon___localFile___changeTime'
  | 'locations___icon___localFile___birthTime'
  | 'locations___icon___localFile___root'
  | 'locations___icon___localFile___dir'
  | 'locations___icon___localFile___base'
  | 'locations___icon___localFile___ext'
  | 'locations___icon___localFile___name'
  | 'locations___icon___localFile___relativeDirectory'
  | 'locations___icon___localFile___dev'
  | 'locations___icon___localFile___mode'
  | 'locations___icon___localFile___nlink'
  | 'locations___icon___localFile___uid'
  | 'locations___icon___localFile___gid'
  | 'locations___icon___localFile___rdev'
  | 'locations___icon___localFile___ino'
  | 'locations___icon___localFile___atimeMs'
  | 'locations___icon___localFile___mtimeMs'
  | 'locations___icon___localFile___ctimeMs'
  | 'locations___icon___localFile___atime'
  | 'locations___icon___localFile___mtime'
  | 'locations___icon___localFile___ctime'
  | 'locations___icon___localFile___birthtime'
  | 'locations___icon___localFile___birthtimeMs'
  | 'locations___icon___localFile___blksize'
  | 'locations___icon___localFile___blocks'
  | 'locations___icon___localFile___url'
  | 'locations___icon___localFile___id'
  | 'locations___icon___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'localizations___published_at'
  | 'strapiId'
  | 'fields___path'
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
  images?: Maybe<StrapiImageFilterListInput>;
  logo?: Maybe<StrapiImageFilterInput>;
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
  links?: Maybe<StrapiActivityLinksFilterListInput>;
  files?: Maybe<StrapiActivityFilesFilterListInput>;
  group_sizes?: Maybe<StrapiActivityGroup_SizesFilterListInput>;
  skill_areas?: Maybe<StrapiActivitySkill_AreasFilterListInput>;
  educational_objectives?: Maybe<StrapiActivityEducational_ObjectivesFilterListInput>;
  leader_skills?: Maybe<StrapiActivityLeader_SkillsFilterListInput>;
  suggestions?: Maybe<StrapiActivitySuggestionsFilterListInput>;
  locations?: Maybe<StrapiActivityLocationsFilterListInput>;
  localizations?: Maybe<StrapiActivityLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<StrapiActivityFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiActivitySortInput = {
  fields?: Maybe<Array<Maybe<StrapiActivityFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiSuggestionActivityFilterInput = {
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
  links?: Maybe<StrapiSuggestionActivityLinksFilterListInput>;
  logo?: Maybe<StrapiSuggestionActivityLogoFilterInput>;
  images?: Maybe<StrapiSuggestionActivityImagesFilterListInput>;
};

export type StrapiSuggestionActivityLinksFilterListInput = {
  elemMatch?: Maybe<StrapiSuggestionActivityLinksFilterInput>;
};

export type StrapiSuggestionActivityLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSuggestionActivityLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiSuggestionActivityLogoFormatsFilterInput>;
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

export type StrapiSuggestionActivityLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiSuggestionActivityLogoFormatsThumbnailFilterInput>;
};

export type StrapiSuggestionActivityLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionActivityImagesFilterListInput = {
  elemMatch?: Maybe<StrapiSuggestionActivityImagesFilterInput>;
};

export type StrapiSuggestionActivityImagesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiSuggestionActivityImagesFormatsFilterInput>;
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

export type StrapiSuggestionActivityImagesFormatsFilterInput = {
  large?: Maybe<StrapiSuggestionActivityImagesFormatsLargeFilterInput>;
  small?: Maybe<StrapiSuggestionActivityImagesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiSuggestionActivityImagesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiSuggestionActivityImagesFormatsThumbnailFilterInput>;
};

export type StrapiSuggestionActivityImagesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionActivityImagesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionActivityImagesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionActivityImagesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionDurationFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiSuggestionLinksFilterListInput = {
  elemMatch?: Maybe<StrapiSuggestionLinksFilterInput>;
};

export type StrapiSuggestionLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSuggestionFilesFilterListInput = {
  elemMatch?: Maybe<StrapiSuggestionFilesFilterInput>;
};

export type StrapiSuggestionFilesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiSuggestionFilesFormatsFilterInput>;
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

export type StrapiSuggestionFilesFormatsFilterInput = {
  large?: Maybe<StrapiSuggestionFilesFormatsLargeFilterInput>;
  small?: Maybe<StrapiSuggestionFilesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiSuggestionFilesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiSuggestionFilesFormatsThumbnailFilterInput>;
};

export type StrapiSuggestionFilesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionFilesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionFilesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionFilesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionCommentsFilterListInput = {
  elemMatch?: Maybe<StrapiSuggestionCommentsFilterInput>;
};

export type StrapiSuggestionCommentsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  suggestion?: Maybe<IntQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiSuggestionLocationsFilterListInput = {
  elemMatch?: Maybe<StrapiSuggestionLocationsFilterInput>;
};

export type StrapiSuggestionLocationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  icon?: Maybe<StrapiSuggestionLocationsIconFilterInput>;
};

export type StrapiSuggestionLocationsIconFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
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

export type StrapiSuggestionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSuggestionEdge>;
  nodes: Array<StrapiSuggestion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiSuggestionGroupConnection>;
};


export type StrapiSuggestionConnectionDistinctArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionConnectionMaxArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionConnectionMinArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionConnectionSumArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiSuggestionFieldsEnum;
};

export type StrapiSuggestionEdge = {
  next?: Maybe<StrapiSuggestion>;
  node: StrapiSuggestion;
  previous?: Maybe<StrapiSuggestion>;
};

export type StrapiSuggestionFieldsEnum =
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
  | 'activity___id'
  | 'activity___title'
  | 'activity___content'
  | 'activity___mandatory'
  | 'activity___ingress'
  | 'activity___wp_guid'
  | 'activity___leader_tasks'
  | 'activity___activity_term'
  | 'activity___duration'
  | 'activity___locale'
  | 'activity___published_at'
  | 'activity___created_at'
  | 'activity___updated_at'
  | 'activity___activity_group'
  | 'activity___age_group'
  | 'activity___preparation_duration'
  | 'activity___links'
  | 'activity___links___id'
  | 'activity___links___description'
  | 'activity___links___url'
  | 'activity___logo___id'
  | 'activity___logo___name'
  | 'activity___logo___width'
  | 'activity___logo___height'
  | 'activity___logo___hash'
  | 'activity___logo___ext'
  | 'activity___logo___mime'
  | 'activity___logo___size'
  | 'activity___logo___url'
  | 'activity___logo___provider'
  | 'activity___logo___created_at'
  | 'activity___logo___updated_at'
  | 'activity___logo___localFile___sourceInstanceName'
  | 'activity___logo___localFile___absolutePath'
  | 'activity___logo___localFile___relativePath'
  | 'activity___logo___localFile___extension'
  | 'activity___logo___localFile___size'
  | 'activity___logo___localFile___prettySize'
  | 'activity___logo___localFile___modifiedTime'
  | 'activity___logo___localFile___accessTime'
  | 'activity___logo___localFile___changeTime'
  | 'activity___logo___localFile___birthTime'
  | 'activity___logo___localFile___root'
  | 'activity___logo___localFile___dir'
  | 'activity___logo___localFile___base'
  | 'activity___logo___localFile___ext'
  | 'activity___logo___localFile___name'
  | 'activity___logo___localFile___relativeDirectory'
  | 'activity___logo___localFile___dev'
  | 'activity___logo___localFile___mode'
  | 'activity___logo___localFile___nlink'
  | 'activity___logo___localFile___uid'
  | 'activity___logo___localFile___gid'
  | 'activity___logo___localFile___rdev'
  | 'activity___logo___localFile___ino'
  | 'activity___logo___localFile___atimeMs'
  | 'activity___logo___localFile___mtimeMs'
  | 'activity___logo___localFile___ctimeMs'
  | 'activity___logo___localFile___atime'
  | 'activity___logo___localFile___mtime'
  | 'activity___logo___localFile___ctime'
  | 'activity___logo___localFile___birthtime'
  | 'activity___logo___localFile___birthtimeMs'
  | 'activity___logo___localFile___blksize'
  | 'activity___logo___localFile___blocks'
  | 'activity___logo___localFile___url'
  | 'activity___logo___localFile___id'
  | 'activity___logo___localFile___children'
  | 'activity___images'
  | 'activity___images___id'
  | 'activity___images___name'
  | 'activity___images___width'
  | 'activity___images___height'
  | 'activity___images___hash'
  | 'activity___images___ext'
  | 'activity___images___mime'
  | 'activity___images___size'
  | 'activity___images___url'
  | 'activity___images___provider'
  | 'activity___images___created_at'
  | 'activity___images___updated_at'
  | 'activity___images___localFile___sourceInstanceName'
  | 'activity___images___localFile___absolutePath'
  | 'activity___images___localFile___relativePath'
  | 'activity___images___localFile___extension'
  | 'activity___images___localFile___size'
  | 'activity___images___localFile___prettySize'
  | 'activity___images___localFile___modifiedTime'
  | 'activity___images___localFile___accessTime'
  | 'activity___images___localFile___changeTime'
  | 'activity___images___localFile___birthTime'
  | 'activity___images___localFile___root'
  | 'activity___images___localFile___dir'
  | 'activity___images___localFile___base'
  | 'activity___images___localFile___ext'
  | 'activity___images___localFile___name'
  | 'activity___images___localFile___relativeDirectory'
  | 'activity___images___localFile___dev'
  | 'activity___images___localFile___mode'
  | 'activity___images___localFile___nlink'
  | 'activity___images___localFile___uid'
  | 'activity___images___localFile___gid'
  | 'activity___images___localFile___rdev'
  | 'activity___images___localFile___ino'
  | 'activity___images___localFile___atimeMs'
  | 'activity___images___localFile___mtimeMs'
  | 'activity___images___localFile___ctimeMs'
  | 'activity___images___localFile___atime'
  | 'activity___images___localFile___mtime'
  | 'activity___images___localFile___ctime'
  | 'activity___images___localFile___birthtime'
  | 'activity___images___localFile___birthtimeMs'
  | 'activity___images___localFile___blksize'
  | 'activity___images___localFile___blocks'
  | 'activity___images___localFile___url'
  | 'activity___images___localFile___id'
  | 'activity___images___localFile___children'
  | 'wp_guid'
  | 'author'
  | 'locale'
  | 'published_at'
  | 'created_at'
  | 'updated_at'
  | 'from_web'
  | 'like_count'
  | 'pinned'
  | 'duration___id'
  | 'duration___name'
  | 'duration___slug'
  | 'duration___locale'
  | 'duration___created_at'
  | 'duration___updated_at'
  | 'links'
  | 'links___id'
  | 'links___description'
  | 'links___url'
  | 'files'
  | 'files___id'
  | 'files___name'
  | 'files___width'
  | 'files___height'
  | 'files___formats___large___ext'
  | 'files___formats___large___url'
  | 'files___formats___large___hash'
  | 'files___formats___large___mime'
  | 'files___formats___large___name'
  | 'files___formats___large___size'
  | 'files___formats___large___width'
  | 'files___formats___large___height'
  | 'files___formats___small___ext'
  | 'files___formats___small___url'
  | 'files___formats___small___hash'
  | 'files___formats___small___mime'
  | 'files___formats___small___name'
  | 'files___formats___small___size'
  | 'files___formats___small___width'
  | 'files___formats___small___height'
  | 'files___formats___medium___ext'
  | 'files___formats___medium___url'
  | 'files___formats___medium___hash'
  | 'files___formats___medium___mime'
  | 'files___formats___medium___name'
  | 'files___formats___medium___size'
  | 'files___formats___medium___width'
  | 'files___formats___medium___height'
  | 'files___formats___thumbnail___ext'
  | 'files___formats___thumbnail___url'
  | 'files___formats___thumbnail___hash'
  | 'files___formats___thumbnail___mime'
  | 'files___formats___thumbnail___name'
  | 'files___formats___thumbnail___size'
  | 'files___formats___thumbnail___width'
  | 'files___formats___thumbnail___height'
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
  | 'comments'
  | 'comments___id'
  | 'comments___text'
  | 'comments___author'
  | 'comments___suggestion'
  | 'comments___published_at'
  | 'comments___created_at'
  | 'comments___updated_at'
  | 'locations'
  | 'locations___id'
  | 'locations___name'
  | 'locations___slug'
  | 'locations___locale'
  | 'locations___created_at'
  | 'locations___updated_at'
  | 'locations___icon___id'
  | 'locations___icon___name'
  | 'locations___icon___alternativeText'
  | 'locations___icon___caption'
  | 'locations___icon___width'
  | 'locations___icon___height'
  | 'locations___icon___hash'
  | 'locations___icon___ext'
  | 'locations___icon___mime'
  | 'locations___icon___size'
  | 'locations___icon___url'
  | 'locations___icon___provider'
  | 'locations___icon___created_at'
  | 'locations___icon___updated_at'
  | 'locations___icon___localFile___sourceInstanceName'
  | 'locations___icon___localFile___absolutePath'
  | 'locations___icon___localFile___relativePath'
  | 'locations___icon___localFile___extension'
  | 'locations___icon___localFile___size'
  | 'locations___icon___localFile___prettySize'
  | 'locations___icon___localFile___modifiedTime'
  | 'locations___icon___localFile___accessTime'
  | 'locations___icon___localFile___changeTime'
  | 'locations___icon___localFile___birthTime'
  | 'locations___icon___localFile___root'
  | 'locations___icon___localFile___dir'
  | 'locations___icon___localFile___base'
  | 'locations___icon___localFile___ext'
  | 'locations___icon___localFile___name'
  | 'locations___icon___localFile___relativeDirectory'
  | 'locations___icon___localFile___dev'
  | 'locations___icon___localFile___mode'
  | 'locations___icon___localFile___nlink'
  | 'locations___icon___localFile___uid'
  | 'locations___icon___localFile___gid'
  | 'locations___icon___localFile___rdev'
  | 'locations___icon___localFile___ino'
  | 'locations___icon___localFile___atimeMs'
  | 'locations___icon___localFile___mtimeMs'
  | 'locations___icon___localFile___ctimeMs'
  | 'locations___icon___localFile___atime'
  | 'locations___icon___localFile___mtime'
  | 'locations___icon___localFile___ctime'
  | 'locations___icon___localFile___birthtime'
  | 'locations___icon___localFile___birthtimeMs'
  | 'locations___icon___localFile___blksize'
  | 'locations___icon___localFile___blocks'
  | 'locations___icon___localFile___url'
  | 'locations___icon___localFile___id'
  | 'locations___icon___localFile___children'
  | 'strapiId';

export type StrapiSuggestionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSuggestionEdge>;
  nodes: Array<StrapiSuggestion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiSuggestionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiSuggestionGroupConnectionDistinctArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionGroupConnectionMaxArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionGroupConnectionMinArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionGroupConnectionSumArgs = {
  field: StrapiSuggestionFieldsEnum;
};


export type StrapiSuggestionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiSuggestionFieldsEnum;
};

export type StrapiSuggestionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  activity?: Maybe<StrapiSuggestionActivityFilterInput>;
  wp_guid?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  from_web?: Maybe<BooleanQueryOperatorInput>;
  like_count?: Maybe<IntQueryOperatorInput>;
  pinned?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<StrapiSuggestionDurationFilterInput>;
  links?: Maybe<StrapiSuggestionLinksFilterListInput>;
  files?: Maybe<StrapiSuggestionFilesFilterListInput>;
  comments?: Maybe<StrapiSuggestionCommentsFilterListInput>;
  locations?: Maybe<StrapiSuggestionLocationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiSuggestionSortInput = {
  fields?: Maybe<Array<Maybe<StrapiSuggestionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiLocationIconFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  alternativeText?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
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

export type StrapiLocationActivitiesFilterListInput = {
  elemMatch?: Maybe<StrapiLocationActivitiesFilterInput>;
};

export type StrapiLocationActivitiesFilterInput = {
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
  links?: Maybe<StrapiLocationActivitiesLinksFilterListInput>;
  logo?: Maybe<StrapiLocationActivitiesLogoFilterInput>;
  files?: Maybe<StrapiLocationActivitiesFilesFilterListInput>;
  images?: Maybe<StrapiLocationActivitiesImagesFilterListInput>;
};

export type StrapiLocationActivitiesLinksFilterListInput = {
  elemMatch?: Maybe<StrapiLocationActivitiesLinksFilterInput>;
};

export type StrapiLocationActivitiesLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiLocationActivitiesLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiLocationActivitiesLogoFormatsFilterInput>;
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

export type StrapiLocationActivitiesLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiLocationActivitiesLogoFormatsThumbnailFilterInput>;
};

export type StrapiLocationActivitiesLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiLocationActivitiesFilesFilterListInput = {
  elemMatch?: Maybe<StrapiLocationActivitiesFilesFilterInput>;
};

export type StrapiLocationActivitiesFilesFilterInput = {
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

export type StrapiLocationActivitiesImagesFilterListInput = {
  elemMatch?: Maybe<StrapiLocationActivitiesImagesFilterInput>;
};

export type StrapiLocationActivitiesImagesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiLocationActivitiesImagesFormatsFilterInput>;
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

export type StrapiLocationActivitiesImagesFormatsFilterInput = {
  large?: Maybe<StrapiLocationActivitiesImagesFormatsLargeFilterInput>;
  small?: Maybe<StrapiLocationActivitiesImagesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiLocationActivitiesImagesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiLocationActivitiesImagesFormatsThumbnailFilterInput>;
};

export type StrapiLocationActivitiesImagesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiLocationActivitiesImagesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiLocationActivitiesImagesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiLocationActivitiesImagesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiLocationLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiLocationLocalizationsFilterInput>;
};

export type StrapiLocationLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
};

export type StrapiLocationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiLocationEdge>;
  nodes: Array<StrapiLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiLocationGroupConnection>;
};


export type StrapiLocationConnectionDistinctArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationConnectionMaxArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationConnectionMinArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationConnectionSumArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiLocationFieldsEnum;
};

export type StrapiLocationEdge = {
  next?: Maybe<StrapiLocation>;
  node: StrapiLocation;
  previous?: Maybe<StrapiLocation>;
};

export type StrapiLocationFieldsEnum =
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
  | 'name'
  | 'slug'
  | 'locale'
  | 'created_at'
  | 'updated_at'
  | 'icon___id'
  | 'icon___name'
  | 'icon___alternativeText'
  | 'icon___caption'
  | 'icon___width'
  | 'icon___height'
  | 'icon___hash'
  | 'icon___ext'
  | 'icon___mime'
  | 'icon___size'
  | 'icon___url'
  | 'icon___provider'
  | 'icon___created_at'
  | 'icon___updated_at'
  | 'icon___localFile___sourceInstanceName'
  | 'icon___localFile___absolutePath'
  | 'icon___localFile___relativePath'
  | 'icon___localFile___extension'
  | 'icon___localFile___size'
  | 'icon___localFile___prettySize'
  | 'icon___localFile___modifiedTime'
  | 'icon___localFile___accessTime'
  | 'icon___localFile___changeTime'
  | 'icon___localFile___birthTime'
  | 'icon___localFile___root'
  | 'icon___localFile___dir'
  | 'icon___localFile___base'
  | 'icon___localFile___ext'
  | 'icon___localFile___name'
  | 'icon___localFile___relativeDirectory'
  | 'icon___localFile___dev'
  | 'icon___localFile___mode'
  | 'icon___localFile___nlink'
  | 'icon___localFile___uid'
  | 'icon___localFile___gid'
  | 'icon___localFile___rdev'
  | 'icon___localFile___ino'
  | 'icon___localFile___atimeMs'
  | 'icon___localFile___mtimeMs'
  | 'icon___localFile___ctimeMs'
  | 'icon___localFile___atime'
  | 'icon___localFile___mtime'
  | 'icon___localFile___ctime'
  | 'icon___localFile___birthtime'
  | 'icon___localFile___birthtimeMs'
  | 'icon___localFile___blksize'
  | 'icon___localFile___blocks'
  | 'icon___localFile___url'
  | 'icon___localFile___id'
  | 'icon___localFile___parent___id'
  | 'icon___localFile___parent___children'
  | 'icon___localFile___children'
  | 'icon___localFile___children___id'
  | 'icon___localFile___children___children'
  | 'icon___localFile___internal___content'
  | 'icon___localFile___internal___contentDigest'
  | 'icon___localFile___internal___description'
  | 'icon___localFile___internal___fieldOwners'
  | 'icon___localFile___internal___ignoreType'
  | 'icon___localFile___internal___mediaType'
  | 'icon___localFile___internal___owner'
  | 'icon___localFile___internal___type'
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
  | 'activities___links'
  | 'activities___links___id'
  | 'activities___links___description'
  | 'activities___links___url'
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
  | 'activities___images___localFile___id'
  | 'activities___images___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'strapiId';

export type StrapiLocationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiLocationEdge>;
  nodes: Array<StrapiLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiLocationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiLocationGroupConnectionDistinctArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationGroupConnectionMaxArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationGroupConnectionMinArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationGroupConnectionSumArgs = {
  field: StrapiLocationFieldsEnum;
};


export type StrapiLocationGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiLocationFieldsEnum;
};

export type StrapiLocationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  icon?: Maybe<StrapiLocationIconFilterInput>;
  activities?: Maybe<StrapiLocationActivitiesFilterListInput>;
  localizations?: Maybe<StrapiLocationLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiLocationSortInput = {
  fields?: Maybe<Array<Maybe<StrapiLocationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiDurationActivitiesFilterListInput = {
  elemMatch?: Maybe<StrapiDurationActivitiesFilterInput>;
};

export type StrapiDurationActivitiesFilterInput = {
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
  links?: Maybe<StrapiDurationActivitiesLinksFilterListInput>;
  logo?: Maybe<StrapiDurationActivitiesLogoFilterInput>;
  files?: Maybe<StrapiDurationActivitiesFilesFilterListInput>;
  images?: Maybe<StrapiDurationActivitiesImagesFilterListInput>;
};

export type StrapiDurationActivitiesLinksFilterListInput = {
  elemMatch?: Maybe<StrapiDurationActivitiesLinksFilterInput>;
};

export type StrapiDurationActivitiesLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiDurationActivitiesLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiDurationActivitiesLogoFormatsFilterInput>;
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

export type StrapiDurationActivitiesLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiDurationActivitiesLogoFormatsThumbnailFilterInput>;
};

export type StrapiDurationActivitiesLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationActivitiesFilesFilterListInput = {
  elemMatch?: Maybe<StrapiDurationActivitiesFilesFilterInput>;
};

export type StrapiDurationActivitiesFilesFilterInput = {
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

export type StrapiDurationActivitiesImagesFilterListInput = {
  elemMatch?: Maybe<StrapiDurationActivitiesImagesFilterInput>;
};

export type StrapiDurationActivitiesImagesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiDurationActivitiesImagesFormatsFilterInput>;
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

export type StrapiDurationActivitiesImagesFormatsFilterInput = {
  large?: Maybe<StrapiDurationActivitiesImagesFormatsLargeFilterInput>;
  small?: Maybe<StrapiDurationActivitiesImagesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiDurationActivitiesImagesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiDurationActivitiesImagesFormatsThumbnailFilterInput>;
};

export type StrapiDurationActivitiesImagesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationActivitiesImagesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationActivitiesImagesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationActivitiesImagesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationPreparation_ActivitiesFilterListInput = {
  elemMatch?: Maybe<StrapiDurationPreparation_ActivitiesFilterInput>;
};

export type StrapiDurationPreparation_ActivitiesFilterInput = {
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
  links?: Maybe<StrapiDurationPreparation_ActivitiesLinksFilterListInput>;
  logo?: Maybe<StrapiDurationPreparation_ActivitiesLogoFilterInput>;
  files?: Maybe<StrapiDurationPreparation_ActivitiesFilesFilterListInput>;
  images?: Maybe<StrapiDurationPreparation_ActivitiesImagesFilterListInput>;
};

export type StrapiDurationPreparation_ActivitiesLinksFilterListInput = {
  elemMatch?: Maybe<StrapiDurationPreparation_ActivitiesLinksFilterInput>;
};

export type StrapiDurationPreparation_ActivitiesLinksFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type StrapiDurationPreparation_ActivitiesLogoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiDurationPreparation_ActivitiesLogoFormatsFilterInput>;
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

export type StrapiDurationPreparation_ActivitiesLogoFormatsFilterInput = {
  thumbnail?: Maybe<StrapiDurationPreparation_ActivitiesLogoFormatsThumbnailFilterInput>;
};

export type StrapiDurationPreparation_ActivitiesLogoFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationPreparation_ActivitiesFilesFilterListInput = {
  elemMatch?: Maybe<StrapiDurationPreparation_ActivitiesFilesFilterInput>;
};

export type StrapiDurationPreparation_ActivitiesFilesFilterInput = {
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

export type StrapiDurationPreparation_ActivitiesImagesFilterListInput = {
  elemMatch?: Maybe<StrapiDurationPreparation_ActivitiesImagesFilterInput>;
};

export type StrapiDurationPreparation_ActivitiesImagesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  formats?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsFilterInput>;
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

export type StrapiDurationPreparation_ActivitiesImagesFormatsFilterInput = {
  large?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsLargeFilterInput>;
  small?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsSmallFilterInput>;
  medium?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsMediumFilterInput>;
  thumbnail?: Maybe<StrapiDurationPreparation_ActivitiesImagesFormatsThumbnailFilterInput>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsLargeFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsSmallFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsMediumFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationPreparation_ActivitiesImagesFormatsThumbnailFilterInput = {
  ext?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  hash?: Maybe<StringQueryOperatorInput>;
  mime?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationLocalizationsFilterListInput = {
  elemMatch?: Maybe<StrapiDurationLocalizationsFilterInput>;
};

export type StrapiDurationLocalizationsFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
};

export type StrapiDurationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiDurationEdge>;
  nodes: Array<StrapiDuration>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiDurationGroupConnection>;
};


export type StrapiDurationConnectionDistinctArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationConnectionMaxArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationConnectionMinArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationConnectionSumArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiDurationFieldsEnum;
};

export type StrapiDurationEdge = {
  next?: Maybe<StrapiDuration>;
  node: StrapiDuration;
  previous?: Maybe<StrapiDuration>;
};

export type StrapiDurationFieldsEnum =
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
  | 'name'
  | 'slug'
  | 'locale'
  | 'created_at'
  | 'updated_at'
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
  | 'activities___links'
  | 'activities___links___id'
  | 'activities___links___description'
  | 'activities___links___url'
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
  | 'activities___images___localFile___id'
  | 'activities___images___localFile___children'
  | 'preparation_activities'
  | 'preparation_activities___id'
  | 'preparation_activities___title'
  | 'preparation_activities___content'
  | 'preparation_activities___mandatory'
  | 'preparation_activities___ingress'
  | 'preparation_activities___wp_guid'
  | 'preparation_activities___leader_tasks'
  | 'preparation_activities___activity_term'
  | 'preparation_activities___duration'
  | 'preparation_activities___locale'
  | 'preparation_activities___published_at'
  | 'preparation_activities___created_at'
  | 'preparation_activities___updated_at'
  | 'preparation_activities___activity_group'
  | 'preparation_activities___age_group'
  | 'preparation_activities___preparation_duration'
  | 'preparation_activities___links'
  | 'preparation_activities___links___id'
  | 'preparation_activities___links___description'
  | 'preparation_activities___links___url'
  | 'preparation_activities___logo___id'
  | 'preparation_activities___logo___name'
  | 'preparation_activities___logo___width'
  | 'preparation_activities___logo___height'
  | 'preparation_activities___logo___hash'
  | 'preparation_activities___logo___ext'
  | 'preparation_activities___logo___mime'
  | 'preparation_activities___logo___size'
  | 'preparation_activities___logo___url'
  | 'preparation_activities___logo___provider'
  | 'preparation_activities___logo___created_at'
  | 'preparation_activities___logo___updated_at'
  | 'preparation_activities___logo___localFile___sourceInstanceName'
  | 'preparation_activities___logo___localFile___absolutePath'
  | 'preparation_activities___logo___localFile___relativePath'
  | 'preparation_activities___logo___localFile___extension'
  | 'preparation_activities___logo___localFile___size'
  | 'preparation_activities___logo___localFile___prettySize'
  | 'preparation_activities___logo___localFile___modifiedTime'
  | 'preparation_activities___logo___localFile___accessTime'
  | 'preparation_activities___logo___localFile___changeTime'
  | 'preparation_activities___logo___localFile___birthTime'
  | 'preparation_activities___logo___localFile___root'
  | 'preparation_activities___logo___localFile___dir'
  | 'preparation_activities___logo___localFile___base'
  | 'preparation_activities___logo___localFile___ext'
  | 'preparation_activities___logo___localFile___name'
  | 'preparation_activities___logo___localFile___relativeDirectory'
  | 'preparation_activities___logo___localFile___dev'
  | 'preparation_activities___logo___localFile___mode'
  | 'preparation_activities___logo___localFile___nlink'
  | 'preparation_activities___logo___localFile___uid'
  | 'preparation_activities___logo___localFile___gid'
  | 'preparation_activities___logo___localFile___rdev'
  | 'preparation_activities___logo___localFile___ino'
  | 'preparation_activities___logo___localFile___atimeMs'
  | 'preparation_activities___logo___localFile___mtimeMs'
  | 'preparation_activities___logo___localFile___ctimeMs'
  | 'preparation_activities___logo___localFile___atime'
  | 'preparation_activities___logo___localFile___mtime'
  | 'preparation_activities___logo___localFile___ctime'
  | 'preparation_activities___logo___localFile___birthtime'
  | 'preparation_activities___logo___localFile___birthtimeMs'
  | 'preparation_activities___logo___localFile___blksize'
  | 'preparation_activities___logo___localFile___blocks'
  | 'preparation_activities___logo___localFile___url'
  | 'preparation_activities___logo___localFile___id'
  | 'preparation_activities___logo___localFile___children'
  | 'preparation_activities___files'
  | 'preparation_activities___files___id'
  | 'preparation_activities___files___name'
  | 'preparation_activities___files___hash'
  | 'preparation_activities___files___ext'
  | 'preparation_activities___files___mime'
  | 'preparation_activities___files___size'
  | 'preparation_activities___files___url'
  | 'preparation_activities___files___provider'
  | 'preparation_activities___files___created_at'
  | 'preparation_activities___files___updated_at'
  | 'preparation_activities___files___localFile___sourceInstanceName'
  | 'preparation_activities___files___localFile___absolutePath'
  | 'preparation_activities___files___localFile___relativePath'
  | 'preparation_activities___files___localFile___extension'
  | 'preparation_activities___files___localFile___size'
  | 'preparation_activities___files___localFile___prettySize'
  | 'preparation_activities___files___localFile___modifiedTime'
  | 'preparation_activities___files___localFile___accessTime'
  | 'preparation_activities___files___localFile___changeTime'
  | 'preparation_activities___files___localFile___birthTime'
  | 'preparation_activities___files___localFile___root'
  | 'preparation_activities___files___localFile___dir'
  | 'preparation_activities___files___localFile___base'
  | 'preparation_activities___files___localFile___ext'
  | 'preparation_activities___files___localFile___name'
  | 'preparation_activities___files___localFile___relativeDirectory'
  | 'preparation_activities___files___localFile___dev'
  | 'preparation_activities___files___localFile___mode'
  | 'preparation_activities___files___localFile___nlink'
  | 'preparation_activities___files___localFile___uid'
  | 'preparation_activities___files___localFile___gid'
  | 'preparation_activities___files___localFile___rdev'
  | 'preparation_activities___files___localFile___ino'
  | 'preparation_activities___files___localFile___atimeMs'
  | 'preparation_activities___files___localFile___mtimeMs'
  | 'preparation_activities___files___localFile___ctimeMs'
  | 'preparation_activities___files___localFile___atime'
  | 'preparation_activities___files___localFile___mtime'
  | 'preparation_activities___files___localFile___ctime'
  | 'preparation_activities___files___localFile___birthtime'
  | 'preparation_activities___files___localFile___birthtimeMs'
  | 'preparation_activities___files___localFile___blksize'
  | 'preparation_activities___files___localFile___blocks'
  | 'preparation_activities___files___localFile___url'
  | 'preparation_activities___files___localFile___id'
  | 'preparation_activities___files___localFile___children'
  | 'preparation_activities___images'
  | 'preparation_activities___images___id'
  | 'preparation_activities___images___name'
  | 'preparation_activities___images___width'
  | 'preparation_activities___images___height'
  | 'preparation_activities___images___hash'
  | 'preparation_activities___images___ext'
  | 'preparation_activities___images___mime'
  | 'preparation_activities___images___size'
  | 'preparation_activities___images___url'
  | 'preparation_activities___images___provider'
  | 'preparation_activities___images___created_at'
  | 'preparation_activities___images___updated_at'
  | 'preparation_activities___images___localFile___sourceInstanceName'
  | 'preparation_activities___images___localFile___absolutePath'
  | 'preparation_activities___images___localFile___relativePath'
  | 'preparation_activities___images___localFile___extension'
  | 'preparation_activities___images___localFile___size'
  | 'preparation_activities___images___localFile___prettySize'
  | 'preparation_activities___images___localFile___modifiedTime'
  | 'preparation_activities___images___localFile___accessTime'
  | 'preparation_activities___images___localFile___changeTime'
  | 'preparation_activities___images___localFile___birthTime'
  | 'preparation_activities___images___localFile___root'
  | 'preparation_activities___images___localFile___dir'
  | 'preparation_activities___images___localFile___base'
  | 'preparation_activities___images___localFile___ext'
  | 'preparation_activities___images___localFile___name'
  | 'preparation_activities___images___localFile___relativeDirectory'
  | 'preparation_activities___images___localFile___dev'
  | 'preparation_activities___images___localFile___mode'
  | 'preparation_activities___images___localFile___nlink'
  | 'preparation_activities___images___localFile___uid'
  | 'preparation_activities___images___localFile___gid'
  | 'preparation_activities___images___localFile___rdev'
  | 'preparation_activities___images___localFile___ino'
  | 'preparation_activities___images___localFile___atimeMs'
  | 'preparation_activities___images___localFile___mtimeMs'
  | 'preparation_activities___images___localFile___ctimeMs'
  | 'preparation_activities___images___localFile___atime'
  | 'preparation_activities___images___localFile___mtime'
  | 'preparation_activities___images___localFile___ctime'
  | 'preparation_activities___images___localFile___birthtime'
  | 'preparation_activities___images___localFile___birthtimeMs'
  | 'preparation_activities___images___localFile___blksize'
  | 'preparation_activities___images___localFile___blocks'
  | 'preparation_activities___images___localFile___url'
  | 'preparation_activities___images___localFile___id'
  | 'preparation_activities___images___localFile___children'
  | 'localizations'
  | 'localizations___id'
  | 'localizations___locale'
  | 'strapiId';

export type StrapiDurationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiDurationEdge>;
  nodes: Array<StrapiDuration>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiDurationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiDurationGroupConnectionDistinctArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationGroupConnectionMaxArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationGroupConnectionMinArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationGroupConnectionSumArgs = {
  field: StrapiDurationFieldsEnum;
};


export type StrapiDurationGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiDurationFieldsEnum;
};

export type StrapiDurationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  activities?: Maybe<StrapiDurationActivitiesFilterListInput>;
  preparation_activities?: Maybe<StrapiDurationPreparation_ActivitiesFilterListInput>;
  localizations?: Maybe<StrapiDurationLocalizationsFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiDurationSortInput = {
  fields?: Maybe<Array<Maybe<StrapiDurationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Program_NavigationItemsFilterListInput = {
  elemMatch?: Maybe<Program_NavigationItemsFilterInput>;
};

export type Program_NavigationItemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  subitems?: Maybe<Program_NavigationItemsSubitemsFilterListInput>;
  minimum_age?: Maybe<IntQueryOperatorInput>;
  maximum_age?: Maybe<IntQueryOperatorInput>;
};

export type Program_NavigationItemsSubitemsFilterListInput = {
  elemMatch?: Maybe<Program_NavigationItemsSubitemsFilterInput>;
};

export type Program_NavigationItemsSubitemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  subitems?: Maybe<Program_NavigationItemsSubitemsSubitemsFilterListInput>;
};

export type Program_NavigationItemsSubitemsSubitemsFilterListInput = {
  elemMatch?: Maybe<Program_NavigationItemsSubitemsSubitemsFilterInput>;
};

export type Program_NavigationItemsSubitemsSubitemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Program_NavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Program_NavigationEdge>;
  nodes: Array<Program_Navigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Program_NavigationGroupConnection>;
};


export type Program_NavigationConnectionDistinctArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationConnectionMaxArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationConnectionMinArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationConnectionSumArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Program_NavigationFieldsEnum;
};

export type Program_NavigationEdge = {
  next?: Maybe<Program_Navigation>;
  node: Program_Navigation;
  previous?: Maybe<Program_Navigation>;
};

export type Program_NavigationFieldsEnum =
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
  | 'items'
  | 'items___title'
  | 'items___type'
  | 'items___id'
  | 'items___path'
  | 'items___color'
  | 'items___subitems'
  | 'items___subitems___title'
  | 'items___subitems___type'
  | 'items___subitems___id'
  | 'items___subitems___path'
  | 'items___subitems___subitems'
  | 'items___subitems___subitems___title'
  | 'items___subitems___subitems___type'
  | 'items___subitems___subitems___id'
  | 'items___subitems___subitems___path'
  | 'items___minimum_age'
  | 'items___maximum_age';

export type Program_NavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Program_NavigationEdge>;
  nodes: Array<Program_Navigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Program_NavigationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Program_NavigationGroupConnectionDistinctArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationGroupConnectionMaxArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationGroupConnectionMinArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationGroupConnectionSumArgs = {
  field: Program_NavigationFieldsEnum;
};


export type Program_NavigationGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Program_NavigationFieldsEnum;
};

export type Program_NavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  items?: Maybe<Program_NavigationItemsFilterListInput>;
};

export type Program_NavigationSortInput = {
  fields?: Maybe<Array<Maybe<Program_NavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Content_NavigationItemsFilterListInput = {
  elemMatch?: Maybe<Content_NavigationItemsFilterInput>;
};

export type Content_NavigationItemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subitems?: Maybe<Content_NavigationItemsSubitemsFilterListInput>;
};

export type Content_NavigationItemsSubitemsFilterListInput = {
  elemMatch?: Maybe<Content_NavigationItemsSubitemsFilterInput>;
};

export type Content_NavigationItemsSubitemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  subitems?: Maybe<Content_NavigationItemsSubitemsSubitemsFilterListInput>;
};

export type Content_NavigationItemsSubitemsSubitemsFilterListInput = {
  elemMatch?: Maybe<Content_NavigationItemsSubitemsSubitemsFilterInput>;
};

export type Content_NavigationItemsSubitemsSubitemsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Content_NavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Content_NavigationEdge>;
  nodes: Array<Content_Navigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Content_NavigationGroupConnection>;
};


export type Content_NavigationConnectionDistinctArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationConnectionMaxArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationConnectionMinArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationConnectionSumArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Content_NavigationFieldsEnum;
};

export type Content_NavigationEdge = {
  next?: Maybe<Content_Navigation>;
  node: Content_Navigation;
  previous?: Maybe<Content_Navigation>;
};

export type Content_NavigationFieldsEnum =
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
  | 'items'
  | 'items___title'
  | 'items___subitems'
  | 'items___subitems___title'
  | 'items___subitems___type'
  | 'items___subitems___id'
  | 'items___subitems___path'
  | 'items___subitems___subitems'
  | 'items___subitems___subitems___title'
  | 'items___subitems___subitems___type'
  | 'items___subitems___subitems___id'
  | 'items___subitems___subitems___path';

export type Content_NavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Content_NavigationEdge>;
  nodes: Array<Content_Navigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Content_NavigationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Content_NavigationGroupConnectionDistinctArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationGroupConnectionMaxArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationGroupConnectionMinArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationGroupConnectionSumArgs = {
  field: Content_NavigationFieldsEnum;
};


export type Content_NavigationGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Content_NavigationFieldsEnum;
};

export type Content_NavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  items?: Maybe<Content_NavigationItemsFilterListInput>;
};

export type Content_NavigationSortInput = {
  fields?: Maybe<Array<Maybe<Content_NavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Activity_LogoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Activity_LogoEdge>;
  nodes: Array<Activity_Logo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Activity_LogoGroupConnection>;
};


export type Activity_LogoConnectionDistinctArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoConnectionMaxArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoConnectionMinArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoConnectionSumArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Activity_LogoFieldsEnum;
};

export type Activity_LogoEdge = {
  next?: Maybe<Activity_Logo>;
  node: Activity_Logo;
  previous?: Maybe<Activity_Logo>;
};

export type Activity_LogoFieldsEnum =
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
  | 'logo';

export type Activity_LogoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Activity_LogoEdge>;
  nodes: Array<Activity_Logo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Activity_LogoGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Activity_LogoGroupConnectionDistinctArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoGroupConnectionMaxArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoGroupConnectionMinArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoGroupConnectionSumArgs = {
  field: Activity_LogoFieldsEnum;
};


export type Activity_LogoGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Activity_LogoFieldsEnum;
};

export type Activity_LogoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  logo?: Maybe<StringQueryOperatorInput>;
};

export type Activity_LogoSortInput = {
  fields?: Maybe<Array<Maybe<Activity_LogoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allStrapiAgeGroup: { nodes: Array<(
      Pick<StrapiAgeGroup, 'strapiId' | 'color' | 'locale' | 'title'>
      & { logo?: Maybe<{ formats?: Maybe<{ thumbnail?: Maybe<Pick<StrapiImageFormat, 'url'>> }> }> }
    )> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { allStrapiFrontPage: { nodes: Array<(
      Pick<StrapiFrontPage, 'locale'>
      & { footer_sections?: Maybe<Array<Maybe<(
        Pick<StrapiFrontPageFooter_Sections, 'id' | 'title'>
        & { link_groups?: Maybe<Array<Maybe<(
          Pick<StrapiFrontPageFooter_SectionsLink_Groups, 'id'>
          & { links?: Maybe<Array<Maybe<Pick<StrapiFrontPageFooter_SectionsLink_GroupsLinks, 'id' | 'url' | 'phone_number' | 'email' | 'description' | 'title'>>>>, some_links?: Maybe<Pick<StrapiFrontPageFooter_SectionsLink_GroupsSome_Links, 'id' | 'facebook_url' | 'instagram_url' | 'twitter_url' | 'youtube_url'>> }
        )>>> }
      )>>> }
    )> } };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { allActivityLogo: { nodes: Array<Pick<Activity_Logo, 'logo' | 'id'>> } };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { allStrapiFrontPage: { nodes: Array<Pick<StrapiFrontPage, 'title' | 'meta_description' | 'ingress' | 'locale' | 'strapiId'>> } };

export type NavigationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationsQuery = { allContentNavigation: { nodes: Array<(
      Pick<Content_Navigation, 'id'>
      & { items?: Maybe<Array<Maybe<(
        Pick<Content_NavigationItems, 'title'>
        & { subitems?: Maybe<Array<Maybe<(
          Pick<Content_NavigationItemsSubitems, 'path' | 'title' | 'type' | 'id'>
          & { subitems?: Maybe<Array<Maybe<Pick<Content_NavigationItemsSubitemsSubitems, 'path' | 'title' | 'type' | 'id'>>>> }
        )>>> }
      )>>> }
    )> }, allProgramNavigation: { nodes: Array<(
      Pick<Program_Navigation, 'id'>
      & { items?: Maybe<Array<Maybe<(
        Pick<Program_NavigationItems, 'id' | 'maximum_age' | 'minimum_age' | 'path' | 'title' | 'type' | 'color'>
        & { subitems?: Maybe<Array<Maybe<(
          Pick<Program_NavigationItemsSubitems, 'id' | 'path' | 'title' | 'type'>
          & { subitems?: Maybe<Array<Maybe<Pick<Program_NavigationItemsSubitemsSubitems, 'id' | 'path' | 'title' | 'type'>>>> }
        )>>> }
      )>>> }
    )> } };

export type SitePageLocaleFragmentFragment = (
  Pick<SitePage, 'path'>
  & { context?: Maybe<Pick<SitePageContext, 'type' | 'locale' | 'localizations'>> }
);

export type ImageFragmentFragment = (
  Pick<StrapiImage, 'id' | 'name' | 'alternativeText' | 'caption' | 'width' | 'height' | 'hash' | 'ext' | 'mime' | 'size' | 'url' | 'provider' | 'created_at' | 'updated_at'>
  & { formats?: Maybe<ImageFormatsFragmentFragment> }
);

export type ImageFormatFragmentFragment = Pick<StrapiImageFormat, 'ext' | 'url' | 'hash' | 'mime' | 'name' | 'size' | 'width' | 'height'>;

export type ImageFormatsFragmentFragment = { large?: Maybe<ImageFormatFragmentFragment>, small?: Maybe<ImageFormatFragmentFragment>, medium?: Maybe<ImageFormatFragmentFragment>, thumbnail?: Maybe<ImageFormatFragmentFragment> };

export type QueryQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  ageGroupId?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>>;
  type?: Maybe<Scalars['String']>;
}>;


export type QueryQuery = { localeData: { nodes: Array<SitePageLocaleFragmentFragment> }, activityGroup?: Maybe<(
    Pick<StrapiActivityGroup, 'locale' | 'title' | 'updated_at' | 'created_at' | 'published_at' | 'id' | 'strapiId' | 'ingress' | 'content' | 'mandatory' | 'sort_order' | 'mandatory_activities_description' | 'optional_activities_description' | 'mandatory_activities_title' | 'optional_activities_title'>
    & { localizations?: Maybe<Array<Maybe<Pick<StrapiActivityGroupLocalizations, 'locale' | 'id'>>>>, logo?: Maybe<ImageFragmentFragment>, main_image?: Maybe<ImageFragmentFragment>, activities?: Maybe<Array<Maybe<Pick<StrapiActivityGroupActivities, 'id' | 'title'>>>>, activity_group_category?: Maybe<Pick<StrapiActivityGroupActivity_Group_Category, 'name' | 'sort_order'>>, activitygroup_term?: Maybe<Pick<StrapiActivityGroupActivitygroup_Term, 'name' | 'plural' | 'singular'>>, subactivity_term?: Maybe<Pick<StrapiActivityGroupSubactivity_Term, 'name' | 'plural' | 'singular'>>, subactivitygroup_term?: Maybe<Pick<StrapiActivityGroupSubactivitygroup_Term, 'name' | 'plural' | 'singular'>>, age_group?: Maybe<Pick<StrapiActivityGroupAge_Group, 'id' | 'title'>>, links?: Maybe<Array<Maybe<Pick<StrapiActivityGroupLinks, 'description' | 'url'>>>> }
  )>, ageGroup?: Maybe<(
    Pick<StrapiAgeGroup, 'strapiId' | 'title' | 'color'>
    & { main_image?: Maybe<Pick<StrapiImage, 'url'>> }
  )>, otherGroups: { nodes: Array<(
      Pick<StrapiActivityGroup, 'title' | 'strapiId'>
      & { fields?: Maybe<Pick<StrapiActivityGroupFields, 'path'>>, logo?: Maybe<(
        Pick<StrapiImage, 'url'>
        & { formats?: Maybe<{ thumbnail?: Maybe<Pick<StrapiImageFormat, 'width' | 'url' | 'size' | 'name' | 'mime' | 'height'>> }> }
      )>, activity_group_category?: Maybe<Pick<StrapiActivityGroupActivity_Group_Category, 'name' | 'id'>> }
    )> }, suggestions: { nodes: Array<(
      Pick<StrapiSuggestion, 'author' | 'content' | 'published_at' | 'title' | 'strapiId' | 'locale' | 'like_count' | 'id'>
      & { activity?: Maybe<Pick<StrapiSuggestionActivity, 'title' | 'id'>>, locations?: Maybe<Array<Maybe<Pick<StrapiSuggestionLocations, 'slug' | 'name'>>>>, duration?: Maybe<Pick<StrapiSuggestionDuration, 'name' | 'slug'>> }
    )> }, activities: { nodes: Array<(
      Pick<StrapiActivity, 'title' | 'mandatory'>
      & { fields?: Maybe<Pick<StrapiActivityFields, 'path'>>, activity_group?: Maybe<(
        Pick<StrapiActivityActivity_Group, 'title'>
        & { logo?: Maybe<{ formats?: Maybe<{ thumbnail?: Maybe<Pick<StrapiActivityActivity_GroupLogoFormatsThumbnail, 'url'>> }> }> }
      )>, age_group?: Maybe<Pick<StrapiActivityAge_Group, 'color' | 'title'>>, suggestions?: Maybe<Array<Maybe<Pick<StrapiActivitySuggestions, 'title'>>>>, duration?: Maybe<Pick<StrapiActivityDuration, 'name' | 'slug'>>, locations?: Maybe<Array<Maybe<(
        Pick<StrapiActivityLocations, 'slug' | 'name'>
        & { icon?: Maybe<Pick<StrapiActivityLocationsIcon, 'url'>> }
      )>>> }
    )> } };

export type GetActivityQueryVariables = Exact<{
  id: Scalars['Int'];
  localizations?: Maybe<Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>>;
  type?: Maybe<Scalars['String']>;
}>;


export type GetActivityQuery = { localeData: { nodes: Array<SitePageLocaleFragmentFragment> }, activity?: Maybe<(
    Pick<StrapiActivity, 'locale' | 'title' | 'updated_at' | 'created_at' | 'published_at' | 'id' | 'strapiId' | 'content' | 'ingress' | 'leader_tasks' | 'mandatory'>
    & { localizations?: Maybe<Array<Maybe<Pick<StrapiActivityLocalizations, 'locale' | 'id'>>>>, duration?: Maybe<Pick<StrapiActivityDuration, 'locale' | 'name' | 'slug' | 'id'>>, educational_objectives?: Maybe<Array<Maybe<Pick<StrapiActivityEducational_Objectives, 'id' | 'locale' | 'name' | 'slug'>>>>, files?: Maybe<Array<Maybe<Pick<StrapiActivityFiles, 'url' | 'size' | 'name' | 'mime' | 'id'>>>>, group_sizes?: Maybe<Array<Maybe<Pick<StrapiActivityGroup_Sizes, 'slug' | 'name' | 'locale' | 'id'>>>>, images?: Maybe<Array<Maybe<ImageFragmentFragment>>>, leader_skills?: Maybe<Array<Maybe<Pick<StrapiActivityLeader_Skills, 'id' | 'locale' | 'name' | 'slug'>>>>, locations?: Maybe<Array<Maybe<(
      Pick<StrapiActivityLocations, 'id' | 'locale' | 'name' | 'slug'>
      & { icon?: Maybe<Pick<StrapiActivityLocationsIcon, 'url'>> }
    )>>>, logo?: Maybe<Pick<StrapiImage, 'width' | 'url' | 'size' | 'name' | 'mime' | 'id' | 'height'>>, preparation_duration?: Maybe<Pick<StrapiActivityPreparation_Duration, 'slug' | 'name' | 'locale' | 'id'>>, skill_areas?: Maybe<Array<Maybe<Pick<StrapiActivitySkill_Areas, 'slug' | 'name' | 'locale' | 'id'>>>>, suggestions?: Maybe<Array<Maybe<(
      Pick<StrapiActivitySuggestions, 'author' | 'content' | 'from_web' | 'id' | 'like_count' | 'locale' | 'title' | 'published_at'>
      & { links?: Maybe<Array<Maybe<Pick<StrapiActivitySuggestionsLinks, 'url' | 'id' | 'description'>>>>, files?: Maybe<Array<Maybe<Pick<StrapiActivitySuggestionsFiles, 'url' | 'size' | 'name' | 'mime' | 'id'>>>> }
    )>>>, age_group?: Maybe<Pick<StrapiActivityAge_Group, 'color' | 'title'>> }
  )>, activityGroup?: Maybe<(
    Pick<StrapiActivityGroup, 'title'>
    & { logo?: Maybe<(
      Pick<StrapiImage, 'url'>
      & { formats?: Maybe<{ thumbnail?: Maybe<Pick<StrapiImageFormat, 'url'>> }> }
    )>, activity_group_category?: Maybe<Pick<StrapiActivityGroupActivity_Group_Category, 'name'>> }
  )> };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { allStrapiDuration: { nodes: Array<Pick<StrapiDuration, 'name' | 'id' | 'strapiId' | 'locale'>> }, allStrapiLocation: { nodes: Array<Pick<StrapiLocation, 'name' | 'id' | 'strapiId' | 'locale'>> } };

export type ActivityGroupQueryQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>>;
  type?: Maybe<Scalars['String']>;
}>;


export type ActivityGroupQueryQuery = { localeData: { nodes: Array<SitePageLocaleFragmentFragment> }, ageGroup?: Maybe<(
    Pick<StrapiAgeGroup, 'locale' | 'title' | 'updated_at' | 'created_at' | 'published_at' | 'id' | 'strapiId' | 'content' | 'ingress' | 'maximum_age' | 'minimum_age' | 'upper_content_area' | 'lower_content_area' | 'color'>
    & { localizations?: Maybe<Array<Maybe<Pick<StrapiAgeGroupLocalizations, 'locale' | 'id'>>>>, links?: Maybe<Array<Maybe<Pick<StrapiAgeGroupLinks, 'description' | 'id' | 'url'>>>>, logo?: Maybe<ImageFragmentFragment>, subactivitygroup_term?: Maybe<Pick<StrapiAgeGroupSubactivitygroup_Term, 'locale' | 'name' | 'plural' | 'singular'>>, main_image?: Maybe<ImageFragmentFragment> }
  )>, activityGroups: { nodes: Array<(
      Pick<StrapiActivityGroup, 'sort_order' | 'title' | 'strapiId'>
      & { fields?: Maybe<Pick<StrapiActivityGroupFields, 'path'>>, logo?: Maybe<(
        Pick<StrapiImage, 'url'>
        & { formats?: Maybe<{ thumbnail?: Maybe<Pick<StrapiImageFormat, 'width' | 'url' | 'size' | 'name' | 'mime' | 'height'>> }> }
      )>, activity_group_category?: Maybe<Pick<StrapiActivityGroupActivity_Group_Category, 'name' | 'id' | 'sort_order'>> }
    )> } };

export type GetContentPageQueryVariables = Exact<{
  id: Scalars['Int'];
  localizations?: Maybe<Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>>;
  type?: Maybe<Scalars['String']>;
}>;


export type GetContentPageQuery = { localeData: { nodes: Array<SitePageLocaleFragmentFragment> }, contentPage?: Maybe<(
    Pick<StrapiContentPage, 'locale' | 'title' | 'updated_at' | 'created_at' | 'published_at' | 'id' | 'strapiId' | 'content' | 'main_text' | 'ingress'>
    & { localizations?: Maybe<Array<Maybe<Pick<StrapiContentPageLocalizations, 'locale' | 'id'>>>>, main_image?: Maybe<Pick<StrapiImage, 'url'>> }
  )> };

export type FrontPageQueryQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type FrontPageQueryQuery = { frontPage?: Maybe<Pick<StrapiFrontPage, 'content' | 'locale' | 'title' | 'ingress'>> };
