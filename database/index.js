const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true },
  name: String,
  username: String,
  url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);



exports.save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  return Repo.create(repos)
  /*return Promise.all(repos.map(repo => {
    return new Repo(repo).save()
  }))//some promise */
}
exports.getAll = () => {
  return Repo.find({})
    .sort('-stars')
    .limit(25)
    .exec()
}

