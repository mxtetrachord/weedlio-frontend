const STORAGE_KEY = 'weedlio-storage-state'

export default class StorageWrapper {
  static persist(data: any) {
    return window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  static retrieve() {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  }

  static clearAll() {
    window.localStorage.removeItem(STORAGE_KEY)
  }
}
