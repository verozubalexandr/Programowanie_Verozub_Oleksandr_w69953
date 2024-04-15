const book = {
    title: "Book",
    author: "Author",
    year: 2012
}

function showBookInfo(book) {
    console.log("Task 1")
    console.log(book.title + " - " + book.author + "(" + book.year + ")");
}

showBookInfo(book);
