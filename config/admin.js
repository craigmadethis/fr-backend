module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f5c6b7ab55df9eb43ad55ee8e531d4b0'),
  },
});
