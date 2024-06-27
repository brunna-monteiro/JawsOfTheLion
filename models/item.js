class Item {
  constructor(
    id,
    gameIds,
    title,
    imageUrl,
    acquired,
    availability,
  ) {
    this.id = id
    this.gameIds = gameIds
    this.title = title
    this.imageUrl = imageUrl
    this.acquired = acquired
    this.availability = availability
  }
}

export default Item