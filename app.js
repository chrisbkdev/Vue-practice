const app = Vue.createApp({
 data() {
    return {
        url: 'https://chrisbk.dev',
        showBooks: true,
        books: [
            { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/dtr.webp', isFav: true },
            { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/d7.jfif', isFav: false },
            { title: 'the final empire', author: 'anthony horowitz', img: 'assets/dtiles.jpg', isFav: true },
        ]
    }
 },
 methods: {
toggleShowBooks() {
    this.showBooks = !this.showBooks
},
toggleFav(book) {
    book.isFav = !book.isFav
}
},

computed: {
    filteredBooks() {
        return this.books.filter((book) => book.isFav)
    }
}
})

app.mount('#app')