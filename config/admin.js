module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08cc29057274382c9cf2c8facca3469a'),
  },
});
