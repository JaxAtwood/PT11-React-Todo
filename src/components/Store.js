const storage = window.localStorage

class Store {
  
  constructor(storeId) {
    this.storeId = storeId
    const initialState = this.get()
    if (!initialState) {
      this.set({
        lists: [
          {
            id: Date.now(),
            name: 'Default',
            todos: [],
          },
        ],
        // selectedListIndex: '0',
      })
    }
    // this.applyMigrations(migrations)
  }

  set(data) {
    data = {
      ...this.get(),
      ...data,
    }
    console.log('setting in store:', data)
    storage.setItem(this.storeId, JSON.stringify(data))
  }

  get() {
    const rawData = storage.getItem(this.storeId)
    const data = JSON.parse(rawData)
    console.log('getting from store:', data)
    return data
  }

//   applyMigrations(migrations) {
//     const migratedData = migrations.reduce((data, migration) => {
//       return migration.isApplicable(data) ? migration.apply(data) : data
//     }, this.get())

//     this.set(migratedData)
//   }
}

export default Store;