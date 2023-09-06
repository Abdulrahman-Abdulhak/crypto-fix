class Social {
  constructor(id, name, icon, link) {
    this.id = id
    this.name = name
    this.icon = icon
    this.link = link
  }
}

export const socials = [
  new Social(
    crypto.randomUUID(),
    'LinkedIn company',
    'linkedin.svg',
    'https://linkedin.com'
  ),
  new Social(
    crypto.randomUUID(),
    "Instagram's platform",
    'instagram.svg',
    'https://instagram.com'
  ),
  new Social(
    crypto.randomUUID(),
    "Quora's website",
    'quora.svg',
    'https://quora.com'
  ),
  new Social(
    crypto.randomUUID(),
    "Reddit's platform",
    'reddit.svg',
    'https://reddit.com'
  ),
  new Social(
    crypto.randomUUID(),
    "Tumbler's platform",
    'tumbler.svg',
    'https://tumbler.com'
  ),
]
