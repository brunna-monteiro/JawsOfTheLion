class Event {
    constructor(
      id,
      gameIds,
      choice,
      completed,
    ) {
      this.id = id
      this.gameIds = gameIds
      this.choice = choice
      this.completed = completed
    }
  }
  
  export default Event;