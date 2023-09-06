export class QuickLinks {
  constructor(title, links) {
    this.title = title
    this.links = links
  }

  addLink(link) {
    this.links.push(link)
  }
}

export class QuickLink {
  constructor({ label, ref, classes }) {
    this.label = label
    this.ref = ref
    this.classes = classes
  }
}
