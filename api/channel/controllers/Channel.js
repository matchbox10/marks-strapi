'use strict';

/**
 * Channel.js controller
 *
 * @description: A set of functions called "actions" for managing `Channel`.
 */

module.exports = {

  /**
   * Retrieve channel records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.channel.search(ctx.query);
    } else {
      return strapi.services.channel.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a channel record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.channel.fetch(ctx.params);
  },

  /**
   * Count channel records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.channel.count(ctx.query);
  },

  /**
   * Create a/an channel record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.channel.add(ctx.request.body);
  },

  /**
   * Update a/an channel record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.channel.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an channel record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.channel.remove(ctx.params);
  }
};
