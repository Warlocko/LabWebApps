const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';

exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}

exports.find = (id) => {
  return knex
    .select('*')
    .from('tasks')
    .where('id', id)
    .first();
}

exports.finished = (task) => {
  return knex('tasks')
    .update({ status: this.DONE })
    .update('updated_at', knex.fn.now())
    .where('id', task.id);
}

exports.delete = (id) => {
  return knex('tasks')
  .delete()
  .where('id', id);
}
