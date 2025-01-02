export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    behance?: string
    instagram?: string
    youtube?: string
  }
  author: Author
}

export type Author = {
  name: string
  href: string
  image: string
}

export type Sentence = {
  sentence: string
  english: string
  answer: string[]
  nouns: string[]
  explanation: string
}

export type Noun = {
  nominative: {
    singular: string
    plural: string
  }
  english: string
  root: string
  genitive: string
  partitive: {
    singular: string
    plural: string
  }
  inessive: {
    singular: string
    plural: string
  }
  elative: {
    singular: string
    plural: string
  }
  illative: {
    singular: string
    plural: string
  }
  adessive: {
    singular: string
    plural: string
  }
  ablative: {
    singular: string
    plural: string
  }
  allative: {
    singular: string
    plural: string
  }
  essive: {
    singular: string
    plural: string
  }
  translative: {
    singular: string
    plural: string
  }
}
