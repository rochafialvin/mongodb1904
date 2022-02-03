// show dbs : menampilkan daftar database

// use mongodb1904 : memilih database tempat kita beroperasi

// db : untuk mengetahui lokasi database saat ini

// show collections : untuk melihat daftar collections (table)

// menghapus collection users
db.users.drop();

db.movies.insertOne({
  title: "The Favourite",
  genres: ["Drama", "History"],
  runtime: 121,
  runtimeDetail: { h: 2, m: 1 },
  rated: "R",
  year: 2018,
  directors: ["Yorgos Lanthimos"],
  cast: ["Olivia Colman", "Emma Stone", "Rachel Weisz"],
  type: "movie",
});

db.movies.insertMany([
  {
    title: "Jurassic World: Fallen Kingdom",
    genres: ["Action", "Sci-Fi"],
    runtime: 130,
    runtimeDetail: { h: 2, m: 10 },
    rated: "PG-13",
    year: 2018,
    directors: ["J. A. Bayona"],
    cast: ["Chris Pratt", "Bryce Dallas Howard", "Rafe Spall"],
    type: "movie",
  },
  {
    title: "Tag",
    genres: ["Comedy", "Action"],
    runtime: 105,
    runtimeDetail: { h: 1, m: 45 },
    rated: "R",
    year: 2018,
    directors: ["Jeff Tomsic"],
    cast: ["Annabelle Wallis", "Jeremy Renner", "Jon Hamm"],
    type: "movie",
  },
  {
    title: "Interstellar",
    genres: ["Drama", "Action", "Sci-Fi"],
    runtime: 169,
    runtimeDetail: { h: 2, m: 9 },
    rated: "PG-13",
    year: 2014,
    directors: ["Christopher Nolan"],
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jesicca Chastain"],
    type: "movie",
  },
  {
    title: "Bodyguard",
    genres: ["Drama", "Thriller", "Crime"],
    runtime: 60,
    runtimeDetail: { h: 1, m: 0 },
    rated: "TV-MA",
    year: 2018,
    directors: ["Jed Mercurio"],
    cast: ["Richard Madden", "Sophie Rundle", "Vincent Franklin"],
    type: "TV Series",
  },
]);

// READ
// SELECT * FROM movies;
db.movies.find();
// SELECT id, title, runtime, year FROM movies;
db.movies.find({}, { title: 1, runtime: 1, year: 1 });
// SELECT * FROM movies WHERE title = 'Interstellar';
db.movies.find({ title: "Interstellar" });

db.movies.find({ rated: "R", runtime: 105 });

db.movies.find({ $and: [{ rated: "R" }, { runtime: 105 }] });

db.movies.find({ $or: [{ rated: "R" }, { runtime: 105 }] });

db.movies.find({ runtimeDetail: { h: 2, m: 10 } });
// lebih besar
db.movies.find({ runtime: { $gt: 130 } });
// lebih besar sama dengan
db.movies.find({ runtime: { $gte: 130 } });
// lebih kecil
db.movies.find({ runtime: { $lt: 121 } });
// lebih kecil sama dengan
db.movies.find({ runtime: { $lte: 130 } });
// runtime range 105 - 121
db.movies.find({ runtime: { $gte: 105, $lte: 121 } });
// not equal
db.movies.find({ rated: { $ne: "R" } });
// in
db.movies.find({ rated: { $in: ["R", "TV-MA"] } });
// not in
db.movies.find({ rated: { $nin: ["R", "TV-MA"] } });
// memiliki genre action dan juga sci-fi, jika masih terdapat genre lain di dalamnya, tidak masalah
db.movies.find({ genres: { $all: ["Action", "Sci-Fi"] } });

db.movies.find().sort({ runtime: 1 });

db.movies.find().sort({ runtime: -1 });

db.movies
  .find({ rated: { $ne: "TV-MA" } })
  .sort({ runtime: 1 })
  .limit(3);
